import time
import hashlib
from pathlib import Path
from Crypto.Cipher import AES
from Crypto.Util.Padding import unpad, pad

_UNIX_1970 = 621355968000000000
_KEY = b"AJRnFaOnOj"

def _get_tick_bytes() -> bytes:
    ticks = int(time.time() * 10000000 + _UNIX_1970)
    result = ticks.to_bytes(8, byteorder="little", signed=False)
    return result

def _make_header(tick_bytes: bytes) -> bytes:
    len1_b = (len(tick_bytes) + 2).to_bytes(1, byteorder="little", signed=False)
    len2_b = len(tick_bytes).to_bytes(1, byteorder="little", signed=False)
    result = len1_b + b"\x00\x00" + len2_b + tick_bytes
    return result

def _strip_raw(raw: bytes) -> tuple[bytes, bytes]:
    header_len = raw[3]
    header = raw[4: 4 + header_len]
    body = raw[4 + header_len:]
    return header, body

def _encrypt(plain: bytes, iv: bytes) -> bytes:
    key = hashlib.md5(_KEY).digest()
    iv = hashlib.md5(iv).digest()
    cipher = AES.new(key, AES.MODE_CBC, iv)
    result = cipher.encrypt(pad(plain, block_size=16, style="pkcs7"))
    return result

def _decrypt(enc: bytes, iv: bytes) -> bytes:
    key = hashlib.md5(_KEY).digest()
    iv = hashlib.md5(iv).digest()
    cipher = AES.new(key, AES.MODE_CBC, iv)
    result = unpad(cipher.decrypt(enc), block_size=16, style="pkcs7")
    return result

def serialize(proto_bytes: bytes) -> bytes:
    if proto_bytes.__len__() == 0:
        return proto_bytes
    tick_bytes = _get_tick_bytes()
    header = _make_header(tick_bytes)
    body = _encrypt(proto_bytes, _KEY + tick_bytes)
    traffic = header + body
    return traffic

def deserialize(raw: bytes) -> bytes:
    if raw.__len__() == 0:
        return raw
    header, body = _strip_raw(raw)
    plain = _decrypt(body, _KEY + header)
    return plain

if __name__ == "__main__":
    raw = Path("cache/homeLogin220512153657890.bin").read_bytes()
    plain = deserialize(raw)
    import ProtoApi_pb2 as ProtoApi__pb2
    response = ProtoApi__pb2.HomeLoginResponse.FromString(plain)
    a = 1
