import json
import argparse
import requests
import cache_manager
from pathlib import Path
import rich_console as console
import upload
from solis_client import SolisClient
import octo_manager as octo

_CACHE_DIR = "cache"
_ARTIFACT_DIR = "masterdata"

def restore_cache(refresh_token: str, overwrite: bool):
    cache_dir = Path(_CACHE_DIR)
    artifact_dir = Path(_ARTIFACT_DIR)
    # mk cache dir
    cache_dir.mkdir(exist_ok=True)
    artifact_dir.mkdir(exist_ok=True)
    # check client_cache.json
    cache_file = cache_dir.joinpath("client_cache.json")
    if not cache_file.exists():
        cache_json = json.dumps({
            "appVersion": "",
            "masterVersion": "",
            "kvMasterVersion": "",
            "octoCacheRevision": 0,
            "octoManifestRevision": 0,
            "refreshToken": refresh_token,
            "idToken": "",
            "firebaseAuthToken": ""
        }, indent=2)
        cache_file.write_text(cache_json)
    with cache_file.open("r") as fp:
        client_cache = json.load(fp)
    # refreshToken MUST NOT be empty 
    assert client_cache["refreshToken"] != ""
    cache_manager.init()
    if overwrite:
        cache_manager.set_cache("refreshToken", refresh_token)
        cache_manager.set_cache("idToken", "")

def main():
    # Parse args
    parser = argparse.ArgumentParser()
    parser.add_argument("-t", "--token", type=str, default="", help="Your firebase refreshToken.")
    parser.add_argument("-f", "--force", action="store_true", help="Update databases without checking version.")
    parser.add_argument("-k", "--kv", action="store_true", help="Notify KV server.")
    parser.add_argument("-a", "--asset-mode", type=str, default="", help="Enable asset decryption mode. Can be either (all | diff).")
    parser.add_argument("-o", "--overwrite", action="store_true", help="Overwrite cached token. If '--token' does not exist, this argument takes no effect.")
    parser.add_argument("--kvauth", type=str, default="", help="KV server auth token.")
    parser.add_argument("--kvurl", type=str, default="", help="KV server endpoint.")
    args = parser.parse_args()

    # Restore caches 
    restore_cache(args.token, args.overwrite)

    # For network testing
    r = requests.get("https://google.co.jp")
    if r.status_code != 200:
        raise "Failed to pass network testing."

    with SolisClient() as client:
        # Run login scenarios to emulate login
        console.info("Running login scenarios...")
        client.run_login_scenarios()
        # Generate notice list json
        console.info("Generating notice json...")
        client.generate_notice_json()
        # Update masterdata if new version is found
        console.info("Updating master data...")
        client.update_master(force=args.force)
        # If kv, kvauth and kvurl are given, notify the server to update data
        if args.kv and args.kvauth != "" and args.kvurl != "":
            console.info("Notifing KV server...")
            # Set secret args
            upload.set_config(kvtoken=args.kvauth, kvurl=args.kvurl)
            # Update notices 
            client.put_master()
            client.put_notice()
            # Update octo
            client.update_octo_manifest()
            client.put_octo()
        # Update octo if new revision is found
        if args.asset_mode:
            if client.update_octo(args.asset_mode == "all"):
                octo.scale_with_esrgan()
    console.info("Tasks all done.")

if __name__ == "__main__":
    main()
