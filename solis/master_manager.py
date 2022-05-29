import json
import requests
from pathlib import Path
import rich_console as console
import ProtoTransaction_pb2 as transp
import ProtoMaster_pb2 as masp
from cache_manager import set_cache, get_cache
from request_base import send_request
from sqlcipher3 import dbapi2 as sqlcipher
from google.protobuf.json_format import MessageToDict, ParseDict, Parse

from concurrent.futures import ThreadPoolExecutor, wait, ALL_COMPLETED

_SEPARATORS = (',', ':')


def has_new(master_tag: transp.MasterTag, pre_version: str = None) -> bool:
    if pre_version is None:
        pre_version = get_cache("masterVersion")
    console.info(
        f"Previous master version: '{pre_version}'.")
    if master_tag.version != pre_version:
        console.info(f"New masterdata version '{master_tag.version}' detected.")
        return True
    console.info(f"Server masterdata version '{master_tag.version}'.")
    return False

def one_task(name: str, key: str, url: str):
    # Download encrypted database
    enc_data = send_request(requests.get, url, verify=True).content
    temp_db_file = Path(f"cache/{name}.db")
    temp_db_file.write_bytes(enc_data)

    # Decrypt database
    try:
        conn = sqlcipher.connect(f"cache/{name}.db")
        conn.execute(f"pragma key=\"x'{key}'\"")
        all_data = conn.execute(f"select data from {name};").fetchall()
        # Get specified class using reflection with class name
        cls = getattr(masp, name)
        msg_list = list[dict]()
        for it in all_data:
            # one_data is a single element tuple 
            one_data = it[0]
            msg = cls.FromString(one_data)
            jdict = MessageToDict(msg, use_integers_for_enums=True, including_default_value_fields=True)
            msg_list.append(jdict)
        # Convert data to json
        with open(f"masterdata/{name}.json", "w", encoding="utf8", errors="ignore") as fp:
            json.dump(msg_list, fp, ensure_ascii=False, indent=2)
        # Clean temp file
    except:
        console.error(f"Failed to decipher database '{name}'.")
    finally:
        conn.close()
        temp_db_file.unlink(missing_ok=True)

def generate_data(master_tag: transp.MasterTag):
    tag_dict = MessageToDict(
        master_tag, use_integers_for_enums=True, including_default_value_fields=True)
    with open("cache/mastertag.json", "w", encoding="utf8") as fp:
        json.dump(tag_dict, fp, indent=4)

    console.info(f"Start downloading master databases.")
    executor = ThreadPoolExecutor(max_workers=20)
    all_tasks = [executor.submit(one_task, pack.type, pack.cryptoKey, pack.downloadUrl)
                 for pack in master_tag.masterTagPacks]
    wait(all_tasks, return_when=ALL_COMPLETED)
    console.succeed(f"Master databases have been successfully decrypted.")

def write_version(version: str):
    Path("masterdata/!version.txt").write_text(version)

if __name__ == "__main__":
    for file in Path("cache").glob("master_*.json"):
        tag_json = file.read_text(encoding="utf8", errors="ignore")
        msg = Parse(tag_json, transp.MasterTag())
        generate_data(msg, "")
