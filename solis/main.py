import requests
import upload
from solis_client import SolisClient
import master_manager as master

def main():
    # For network testing
    r = requests.get("https://google.co.jp")
    if r.status_code != 200:
        raise "Failed to pass network testing."

    with SolisClient() as client:
        # Run login scenarios to emulate login
        client.run_login_scenarios()
        if master.has_new(client.master_tag):
            # Decrypt database to json
            master.generate_data(client.master_tag)
            # Upload jsons to KV
            upload.main()
        # TODO: octocache

if __name__ == "__main__":
    main()
