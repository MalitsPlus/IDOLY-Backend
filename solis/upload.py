# Another script to upload Json files. 

import sys
import os
import json
import requests
from time import sleep
from pathlib import Path
from rich.console import Console
from requests.exceptions import SSLError
from concurrent.futures import ThreadPoolExecutor, wait, ALL_COMPLETED

DATA_PREFIX = "HSM_"
MAX_RETRY_TIMES = 5
MAX_WORK_THREAD = 20

api_endpoint = ""
admin_token = ""

# Initializations
console = Console()
separators = (',', ':')
headers = {
    "Authorization": f"Bearer {admin_token}"
}

def send_request(name: str, data: str, err_count: int = 0):
    if err_count >= MAX_RETRY_TIMES:
        console.print(
            f"[bold red]>>> [Error][/bold red] Maximum retries exceeded, stopping process.")
        os._exit(-1)
    try:
        r = requests.put(api_endpoint, headers=headers, data=data.encode("utf8"))
        if r.status_code == 200:
            console.print(f"[bold green]>>> [Succeed][/bold green] Put '{name}' completed.")
        else:
            err_count += 1
            console.print(f"[bold yellow]>>> [Warning][/bold yellow] {r.text}")
            console.print(
                f"[bold yellow]>>> [Warning][/bold yellow] Put '{name}' failed, status code: {r.status_code}. Retrying({err_count}/{MAX_RETRY_TIMES})...")
            sleep(1)
            send_request(name, data, err_count)
    # except SSLError:
    #     console.print(
    #         f"[bold red]>>> [Error][/bold red] An SSLError has occured, please check your net work settings.")
    #     os._exit(-1)
    except:
        err_count += 1
        console.print(
            f"[bold red]>>> [Error][/bold red] Unexpected error while sending {name}: ", sys.exc_info()[0])
        sleep(5)
        send_request(name, data, err_count)

def send_kv(name: str, data: str):
    body = {
        "key": DATA_PREFIX + name,
        # KV server side only accepts string values.
        "value": data
    }
    compacted = json.dumps(
        body, ensure_ascii=False, separators=separators)
    send_request(name, compacted)

def async_task(file: Path):
    # 220711: ignoring 'Reward.json' due to exceeding of max length
    if file.name == "Reward.json":
        return
    with file.open(mode="r", encoding="utf8") as fp:
        name = file.name.removesuffix(".json")
        origin = json.load(fp)
    origin = json.dumps(
        origin, ensure_ascii=False, separators=separators)
    send_kv(name, origin)

def set_config(kvtoken: str = admin_token, kvurl: str = api_endpoint):
    global admin_token
    global api_endpoint
    if kvtoken == "" or kvurl == "":
        console.print(
            f"[bold red]>>> [Error][/bold red] KV-token and KV-url must not be empty.")
        os._exit(-1)
    else:
        admin_token = kvtoken
        api_endpoint = kvurl
    headers["Authorization"] = f"Bearer {admin_token}"

def main():
    dir = Path("masterdata")
    console.print(
        f">>> [Info] Start putting data.")
    # Single thread test codes
    # for file in dir.glob("*.json"):
    #     with file.open(mode="r", encoding="utf8") as fp:
    #         name = file.name.removesuffix(".json")
    #         origin = json.load(fp)
    #         body = {
    #             "key": DATA_PREFIX + name,
    #             # KV server side only accepts string values.
    #             "value": str(origin)
    #         }
    #         compacted = json.dumps(
    #             body, ensure_ascii=False, separators=separators)
    #         send_request(name, compacted)

    executor = ThreadPoolExecutor(max_workers=MAX_WORK_THREAD)
    all_tasks = [executor.submit(async_task, file) for file in dir.glob("*.json")]
    wait(all_tasks, return_when=ALL_COMPLETED)
    requests.post(api_endpoint + "/done", headers=headers)
    console.print(
        f"[bold green]>>> [Succeed][/bold green] Uploading completed.")

if __name__ == "__main__":
    main()
