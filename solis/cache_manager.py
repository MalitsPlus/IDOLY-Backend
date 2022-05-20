import json
from pathlib import Path

_FILE_NAME = "client_cache.json"
_cache: dict = None

def __init__():
    global _cache
    if _cache is None:
        with open(_FILE_NAME, "r", encoding="utf8") as fp:
            _cache = json.load(fp)

def get_cache(key: str):
    return _cache[key]

def set_cache(key: str, value):
    _cache[key] = value
    with open(_FILE_NAME, "w+", encoding="utf8") as fp:
        json.dump(_cache, fp, indent=4)

__init__()
