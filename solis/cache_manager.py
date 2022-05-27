import json
from pathlib import Path

_FILE_PATH = "cache/client_cache.json"
cache: dict = None

def init():
    global cache
    with open(_FILE_PATH, "r", encoding="utf8") as fp:
        cache = json.load(fp)

def get_cache(key: str):
    return cache[key]

def set_cache(key: str, value):
    cache[key] = value
    with open(_FILE_PATH, "w+", encoding="utf8") as fp:
        json.dump(cache, fp, indent=4)
