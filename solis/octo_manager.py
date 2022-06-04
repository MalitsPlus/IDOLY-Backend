import json
import UnityPy
import requests
import threading
from pathlib import Path
import octodb_pb2 as octop
from Crypto.Cipher import AES
from Crypto.Util.Padding import unpad
from request_base import send_request
import rich_console as console
from google.protobuf.json_format import MessageToDict
from concurrent.futures import ThreadPoolExecutor, wait, ALL_COMPLETED

_API_KEY = bytes.fromhex("aa8a30926db9d49410360d0a99aa735d035638dfc09ef99fb575d9c91a8f6cdc")
_API_IV = bytes.fromhex("9ce1286f5481bb3d92eb8529bc35962c")
_FILE_KEY = bytes.fromhex("db3cf044ca27e0fbe672bc4c507bda5b")
_FILE_IV = bytes.fromhex("1c6e6f9255c0e5412712f4010225e378")
_SIGNATURE = b"\x55\x6e\x69\x74\x79"

_asset_path = "cache/asset"
_image_path = "cache/image"
_asset_count = 0
_resouce_count = 0
_current_count = 0
lock = threading.Lock()

def decrypt(enc_data: bytes, key: bytes, iv: bytes, offset: int) -> bytes:
    cipher = AES.new(key, AES.MODE_CBC, iv)
    dec_data = unpad(cipher.decrypt(enc_data[offset:]), block_size=16, style="pkcs7")
    return dec_data

def decrypt_api_database(cache: bytes, key: bytes=_API_KEY, iv: bytes=_API_IV, offset: int=0) -> octop.Database:
    dec_data = decrypt(cache, key, iv, offset)
    database = octop.Database.FromString(dec_data[16:])
    # database = octop.Database()
    # database.FromString(dec_data)
    return database

def string_to_mask_bytes(mask_string: str, mask_string_length: int, bytes_length: int) -> bytes:
    mask_bytes = bytearray(bytes_length)
    if mask_string != 0:
        if mask_string_length >= 1:
            i = 0
            j = 0
            k = bytes_length - 1
            while mask_string_length != j:
                char_j = mask_string[j]
                # Must be casted as Int in python
                char_j = int.from_bytes(char_j.encode(
                    "ascii"), byteorder='little', signed=False)
                j += 1
                mask_bytes[i] = char_j
                i += 2
                # You must add &0xFF to get a unsigned integer in python or it will return the signed one
                char_j = ~char_j & 0xFF
                # .to_bytes(length=1, byteorder="little", signed=True)
                mask_bytes[k] = char_j
                k -= 2
        if bytes_length >= 1:
            l = bytes_length
            v13 = 0x9B
            m = bytes_length
            pointer = 0
            while m:
                v16 = mask_bytes[pointer]
                pointer += 1
                m -= 1
                v13 = (((v13 & 1) << 7) | (v13 >> 1)) ^ v16
            b = 0
            while l:
                l -= 1
                mask_bytes[b] ^= v13
                b += 1
    return bytes(mask_bytes)

def crypt_by_string(input: bytes, mask_string: str, offset: int, stream_pos: int, header_length: int) -> bytes:
    input_length = input.__len__()
    mask_string_length = mask_string.__len__()
    bytes_length = mask_string_length << 1
    buffer = bytearray(input)
    mask_bytes = string_to_mask_bytes(mask_string, mask_string_length, bytes_length)
    i = 0
    while stream_pos + i < header_length:
        buffer[offset + i] ^= mask_bytes[stream_pos + i - int((stream_pos + i) / bytes_length) * bytes_length]
        i += 1
    return bytes(buffer)

def unpack_to_image(asset_bytes: bytes, dest: str):
    env = UnityPy.load(asset_bytes)
    for obj in env.objects:
        if obj.type.name == "Texture2D":
            try:
                data = obj.read()
                dest_path = Path(dest, data.name).with_suffix(".png")
                dest_path.parent.mkdir(exist_ok=True)
                img = data.image
                img.save(dest_path)
            except:
                console.error(f"Failed to convert '{data.name}' to image.")
        
def one_task(data: octop.Data, _type: str, revision: int, url_format: str):
    global _current_count
    url = url_format.replace("{v}", str(data.uploadVersionId))\
                    .replace("{type}", _type)\
                    .replace("{o}", data.objectName)\
                    .replace("{g}", str(data.generation))
    obj = send_request(requests.get, url, verify=True).content
    if obj.__len__() == 0:
        console.info(f"Empty object '{data.name}', skipping.")
        return
    if _type == "assetbundle":
        try:
            if obj[0: 5] != _SIGNATURE:
                asset_bytes = crypt_by_string(obj, data.name, 0, 0, 256)
            else:
                asset_bytes = obj
            with open(f"{_asset_path}/{data.name}.unity3d", "wb") as fp:
                fp.write(asset_bytes)
            if asset_bytes[0: 5] != _SIGNATURE:
                console.error(f"'{data.name}' '{data.md5}' is not a unity asset.")
                raise
            unpack_to_image(asset_bytes, f"{_image_path}/{revision}")
            lock.acquire()
            _current_count += 1
            console.succeed(
                f"({_current_count}/{_asset_count}) Assetbundle '{data.name}' has been successfully unobfuscated.")
            lock.release()
        except:
            lock.acquire()
            _current_count += 1
            console.error(
                f"{_current_count}/{_asset_count}) Failed to unobfuscate '{data.name}'.")
            lock.release()
    elif _type == "resources":
        with open(f"{_asset_path}/{data.name}", "wb") as fp:
            fp.write(obj)
        lock.acquire()
        _current_count += 1
        console.succeed(
            f"{_current_count}/{_resouce_count}) Resouce '{data.name}' has been successfully renamed.")
        lock.release()

def update_octo_manifest(raw_cache: bytes):
    database = decrypt_api_database(raw_cache)
    octo_dict = MessageToDict(
        database, use_integers_for_enums=True, including_default_value_fields=True)
    with open("cache/OctoManifest.json", "w", encoding="utf8") as fp:
        json.dump(octo_dict, fp, ensure_ascii=False, indent=2)

def update_octo(raw_cache: bytes):
    global _asset_count
    global _resouce_count
    global _current_count
    database = decrypt_api_database(raw_cache)
    revision = database.revision

    _asset_count = len(database.assetBundleList)
    _resouce_count = len(database.resourceList)

    executor = ThreadPoolExecutor(max_workers=20)
    _current_count = 0
    asset_tasks = [executor.submit(one_task, it, "assetbundle", revision, database.urlFormat)
                   for it in database.assetBundleList]
    wait(asset_tasks, return_when=ALL_COMPLETED)
    console.succeed("All assetbundles has been successfully processed.")

    _current_count = 0
    resouce_tasks = [executor.submit(one_task, it, "resources", revision, database.urlFormat)
                     for it in database.resourceList]
    wait(resouce_tasks, return_when=ALL_COMPLETED)
    console.succeed("All resources has been successfully processed.")

if __name__ == "__main__":
    data = Path("cache/octo.bin").read_bytes()
    database = octop.Database.FromString(data)
