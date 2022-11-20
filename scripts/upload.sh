#!/bin/bash
set -eu

# This file should be run when workdir contains whatever JSON files that need to be uploaded.

API_ENDPOINT=${API_ENDPOINT:-"https://idoly-backend.ipri.workers.dev/manage/write"}
ADMIN_TOKEN=${ADMIN_TOKEN:-"ADMIN_TOKEN"}

for i in *.json; do
    TEMPFILE=$(mktemp)
    NAME=$(echo "$i" | sed "s/\.json$//")
    jq -c . "$i" >"$TEMPFILE"
    SUBMIT_JSON=$(jq --null-input --arg key "$NAME" --rawfile value "$TEMPFILE" '{"key":$key,"value":$value}' <<<"$TEMPFILE")
    echo "Submitting $NAME to $API_ENDPOINT..."
    echo $SUBMIT_JSON | curl -X PUT -H "Authorization: Bearer $ADMIN_TOKEN" --data @- "$API_ENDPOINT"
    rm "$TEMPFILE"
done

curl -X POST -H "Authorization: Bearer $ADMIN_TOKEN" "$API_ENDPOINT/done"
