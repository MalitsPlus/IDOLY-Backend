import json
import grpc
import jwt
import time
import requests
import upload
from pathlib import Path
from bs4 import BeautifulSoup
import master_manager as master
import octo_manager as octo
import ProtoEnum_pb2 as penum
import ProtoApi_pb2 as apip
import ProtoApi_grpc as apig
import ProtoTransaction_pb2 as transp
import google.protobuf.empty_pb2 as empty
import rich_console as console
from cache_manager import set_cache, get_cache
from google.protobuf.json_format import MessageToDict
from os import _exit as exit

class ClientBase:
    _channel: grpc.Channel
    _endpoint: str

    def __init__(self):
        """A client MUST initialize self._channel object in init method."""
        raise NotImplementedError()

    def run(self):
        raise NotImplementedError()

    def dispose(self):
        self._channel.close()

    def __enter__(self):
        return self

    def __exit__(self, exc_type, exc_value, exc_tb):
        self.dispose()

class SolisClient(ClientBase):
    _UNIX_1970 = 621355968000000000
    # _hostname = "localhost"
    # _endpoint = "localhost:8800"
    _endpoint = "api.game-idolypride.jp"
    _app_store_url = "https://apps.apple.com/jp/app/id1535925293"
    _qseed_endpoint = "https://id.qseed.jp/getId"
    _octo_endpoint = "https://api.octo-cloud.com/v2/pub/a/212/v/205001/list"
    _firebase_endpoint = "https://securetoken.googleapis.com/v1/token?key=AIzaSyCabjC7_mOU21qkcNobnhN1khTi1-1F-kA"
    _credentials: grpc.ChannelCredentials
    _channel_options = [
        # ("grpc.ssl_target_name_override", _hostname),
        ("grpc.primary_user_agent", "grpc-csharp/2.37.0-dev grpc-c/15.0.0 (android; chttp2)")
    ]
    _metadata_dict: dict[str, str]
    _config: dict
    _login_scenarios: list
    app_version: str
    master_tag: transp.MasterTag
    octo_cache: bytes
    octo_server_revision: str
    _notice_list: apip.NoticeListResponse

    def _get_metadata_pairs(self) -> list[tuple[str, str]]:
        return list(self._metadata_dict.items())

    def __init__(self):
        with (
            # open("rootCA.crt", "rb") as fcrt,
            open("iprroots.pem", "rb") as fcrt,
            open("client_config.json") as fconfig
        ):
            certificate_chain = fcrt.read()
            self._config = json.load(fconfig)
        # SSL credentials
        self._credentials = grpc.ssl_channel_credentials(
            root_certificates=certificate_chain)
        # Secured channel with credentials
        self._channel = grpc.secure_channel(
            self._endpoint, self._credentials, self._channel_options)

        # Insecure channel for testing
        # self._channel = grpc.insecure_channel(
        #     self._endpoint)

        # init metadata
        self._metadata_dict = self._config["grpc"]
        # self._metadata = list(self._config["grpc"].items())
        self._login_scenarios = [
            self.get_app_version,
            self.first_system_check,
            self.get_qseed,
            self.system_check,
            self.post_token,
            self.auth_login,
            self.master_get,
            self.user_get,
            self.get_octo,
            self.home_login,
            self.dokan_list,
            self.home_enter,
            self.notice_list
        ]

    def _get_ticks(self) -> int:
        ticks = int(time.time() * 10000000 + self._UNIX_1970)
        return ticks

    def generate_notice_json(self):
        notice_dict = MessageToDict(
            self._notice_list, use_integers_for_enums=True, including_default_value_fields=True)
        with open("cache/notice.json", "w", encoding="utf8") as fp:
            json.dump(notice_dict, fp, ensure_ascii=False, indent=2)

    def update_master(self, force: bool=False):
        if master.has_new(self.master_tag) or force:
            master.generate_data(self.master_tag)
            master.write_version(self.master_tag.version)
            set_cache("masterVersion", self.master_tag.version)

    def put_master(self):
        kv_master_version = get_cache("kvMasterVersion")
        console.info(f"KV master version: '{kv_master_version}'.")
        if kv_master_version == self.master_tag.version:
            console.info("Kv master version is already up-to-date, put operation will not be performed.")
            return
        upload.main()
        set_cache("kvMasterVersion", self.master_tag.version)
    
    def put_notice(self):
        notice_dict = MessageToDict(
            self._notice_list, use_integers_for_enums=True, including_default_value_fields=True)
        notice_json = json.dumps(notice_dict, ensure_ascii=False)
        upload.send_kv("Notice", notice_json)

    def put_octo(self):
        if not get_cache("octoManifestRevision") < self.octo_server_revision:
            console.info("OctoManifestRevision is already up-to-date, json string won't be put to KV.")
            return 
        octo_json = Path("cache/OctoManifest.json").read_text()
        upload.send_kv("Octo", octo_json)
        set_cache("octoManifestRevision", self.octo_server_revision)

    def update_octo_manifest(self):
        pre_revision = get_cache("octoManifestRevision")
        console.info(f"Previous octo manifest revision: {pre_revision}.")
        console.info(f"Current octo manifest revision:  {self.octo_server_revision}.")
        if pre_revision < self.octo_server_revision:
            console.info(f"Start downloading octo manifest...")
            octo.update_octo_manifest(self.octo_cache)
        else:
            console.info(f"Octo manifest is already up-to-date, thus won't be download this time.")
            

    def update_octo(self):
        if get_cache("octoCacheRevision") < self.octo_server_revision:
            octo.update_octo(self.octo_cache)
            set_cache("octoCacheRevision", self.octo_server_revision)

    def _call_rpc(self, func, req_msg, metadata=None):
        if metadata is None:
            metadata = self._get_metadata_pairs()
        response, context = func(req_msg, metadata=metadata)
        err = self._check_error(context)
        return response, context, err

    def _check_error(self, context: grpc.Call) -> int:
        metadata = dict(context.initial_metadata())
        if not metadata.__contains__("x-error-code"):
            return 0
        err_code = metadata["x-error-code"]
        if err_code == penum.ErrorCode.ErrorCode_OutdatedApp:
            console.warning("OutdatedApp error. ")
        elif err_code == penum.ErrorCode.ErrorCode_OutdatedMasterData:
            console.warning("OutdatedMasterData error.")
        elif err_code == penum.ErrorCode.ErrorCode_DateChanged:
            console.warning("DateChanged error.")
        elif err_code == penum.ErrorCode.ErrorCode_InMaintenance:
            console.warning("InMaintenance error.")
        elif err_code == penum.ErrorCode.ErrorCode_InFunctionMaintenance:
            console.warning("InFunctionMaintenance error.")
        else:
            console.error(f"Unexpected error {err_code}.")
            err_code = -1
        return err_code

    def _is_token_expired(self) -> bool:
        token = get_cache("idToken")
        if token != "":
            payload = jwt.decode(token, options={"verify_signature": False})
            exp = payload["exp"]
            if time.time() < exp:
                return False
        return True

    def run_login_scenarios(self, retries=0):
        if retries >= 3:
            console.error("Maximum retries limitation reached, stopping process.")
            exit(-1)

        for func in self._login_scenarios:
            console.info(f"Calling {func.__name__}.")
            err = func()
            if err != 0:
                break

        if err == 0:
            console.succeed("Login succeeded.")
        elif err in [penum.ErrorCode.ErrorCode_OutdatedMasterData,
                     penum.ErrorCode.ErrorCode_DateChanged,
                     penum.ErrorCode.ErrorCode_OutdatedApp]:
            # 重跑即可
            console.info(f"ErrCode: {err}. Re-running login scenarios.")
            self.run_login_scenarios(retries + 1)
            pass
        else:
            console.error(f"ErrCode: {err}.")
            console.error("Stopping process.")
            exit(-1)

    def get_app_version(self) -> int:
        try:
            r = requests.get(self._app_store_url, timeout=10)
        except:
            r = None
        if r is None or r.status_code != 200:
            if r is None:
                console.error("Cannot connect to app store or connecting timeout.")
            else:
                console.error(r.text)
                console.error(
                    f"Error while getting app version, status code: {r.status_code}.")
            version = get_cache("appVersion")
            if version != "":
                console.info("Use previous app version instead.")
            else:
                console.error("No previous app version cache found, stopping process.")
                return -1
        else:
            parsed = BeautifulSoup(r.text, features="lxml")
            outter_json = parsed.find(
                "script", {"id": "shoebox-media-api-cache-apps"}).text
            outter_dict = json.loads(outter_json)
            inner_json = list(outter_dict.items())[0][1]
            inner_dict = json.loads(inner_json)
            version = inner_dict["d"][0]["attributes"]["platformAttributes"]["ios"]["versionHistory"][0]["versionDisplay"]
        self.app_version = version
        self._metadata_dict["x-app-version"] = version
        self._config["qseed"]["X-AppVersion"] = version
        set_cache("appVersion", version)
        return 0

    def get_qseed(self) -> int:
        headers = self._config["qseed"]

        seed_id = requests.get(self._qseed_endpoint, headers=headers).text
        self._metadata_dict["x-seed-id"] = seed_id
        return 0

    def post_token(self) -> int:
        if not self._is_token_expired():
            return 0
        headers = self._config["firebase"]
        request = json.dumps({
            "grantType": "refresh_token",
            "refreshToken": get_cache("refreshToken")
        })
        response = requests.post(self._firebase_endpoint, request, headers=headers)
        if response.status_code != 200:
            console.error(f"Status code: {response.status_code}.")
            console.error(response.text)
            return -1
        r_dict = dict(json.loads(response.text))
        set_cache("idToken", r_dict["id_token"])
        set_cache("refreshToken", r_dict["refresh_token"])
        return 0

    def get_octo(self) -> int:
        headers = self._config["octo"]
        pre_revision = get_cache("octoCacheRevision")
        url = f"{self._octo_endpoint}/{pre_revision}"
        response = requests.get(url, headers=headers)
        if response.status_code != 200:
            return -1
        etag = response.headers["ETag"].strip("\"")
        self.octo_cache = response.content
        self.octo_server_revision = int(etag.split(".")[-1])
        return 0

    def first_system_check(self) -> int:
        stub = apig.SystemStub(self._channel)
        metadata = [
            ("x-app-version", self._config["grpc"]["x-app-version"]),
            ("content-type", self._config["grpc"]["content-type"])
        ]
        response, _, err = self._call_rpc(stub.Check.with_call, apip.SystemCheckRequest(), metadata)
        return err
    
    def system_check(self) -> int:
        stub = apig.SystemStub(self._channel)
        request = apip.SystemCheckRequest(
            firebaseIDToken=get_cache("idToken"))
        response, _, err = self._call_rpc(stub.Check.with_call, request)
        return err

    def auth_login(self) -> int:
        stub = apig.AuthStub(self._channel)
        request = apip.AuthLoginRequest(
            firebaseIDToken=get_cache("idToken"))
        response, _, err = self._call_rpc(stub.Login.with_call, request)
        self._metadata_dict["x-auth-token"] = response.gameAuthToken
        set_cache("firebaseAuthToken", response.gameAuthToken)
        return err

    def master_get(self) -> int:
        stub = apig.MasterStub(self._channel)
        request = empty.Empty()
        response, _, err = self._call_rpc(stub.Get.with_call, request)
        self.master_tag = response.masterTag
        self._metadata_dict["x-master-version"] = response.masterTag.version
        return err

    def user_get(self) -> int:
        stub = apig.UserStub(self._channel)
        request = empty.Empty()
        response, _, err = self._call_rpc(stub.Get.with_call, request)
        return err

    def home_login(self) -> int:
        stub = apig.HomeStub(self._channel)
        setting_info = apip.SettingInfo(
            soundBgm = 50,
            soundEffect = 50,
            soundVoice = 70,
            graphicType = 1,
            frameRate = 60,
            activityFinishNotification = False,
            messageNotification = False,
            nightMode = True,
            notLoginNotification = False
        )
        request = apip.HomeLoginRequest(settingInfo=setting_info)
        metadata = self._get_metadata_pairs()
        metadata.append(("x-app-request-id", str(self._get_ticks())))
        response, _, err = self._call_rpc(
            stub.Login.with_call, request, metadata)
        return err

    def dokan_list(self) -> int:
        stub = apig.DokanStub(self._channel)
        request = empty.Empty()
        response, _, err = self._call_rpc(stub.List.with_call, request)
        return err

    def home_enter(self) -> int:
        stub = apig.HomeStub(self._channel)
        request = empty.Empty()
        metadata = self._get_metadata_pairs()
        metadata.append(("x-app-request-id", str(self._get_ticks())))
        response, _, err = self._call_rpc(
            stub.Enter.with_call, request, metadata)
        return err

    def notice_list(self) -> int:
        stub = apig.NoticeStub(self._channel)
        request = empty.Empty()
        response, _, err = self._call_rpc(stub.List.with_call, request)
        self._notice_list = response
        self._notice_list.commonResponse.Clear()
        return err

if __name__ == '__main__':
    # logging.basicConfig()
    r = requests.get("https://google.co.jp")
    with SolisClient() as client:
        a = 1
