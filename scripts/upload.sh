#!/bin/bash
set -eu

# This file should be run when workdir contains whatever JSON files that need to be uploaded.

API_ENDPOINT="https://idoly-backend.ipri.workers.dev/manage/write"
ADMIN_TOKEN="ADMIN_TOKEN"
DATA_PREFIX="Hoshimi_220418_"

for i in *.json; do
    TEMPFILE=$(mktemp)
    NAME=$(echo "$i" | sed "s/\.json$//")
    KEY_NAME="${DATA_PREFIX}${NAME}"
    jq -c . "$i" >"$TEMPFILE"
    SUBMIT_JSON=$(jq --null-input --arg key "$KEY_NAME" --rawfile value "$TEMPFILE" '{"key":$key,"value":$value}' <<<"$COMPACT_JSON")
    echo "Submitting $KEY_NAME to $API_ENDPOINT..."
    echo $SUBMIT_JSON | curl -X PUT -H "Authorization: Bearer $ADMIN_TOKEN" --data @- "$API_ENDPOINT"
    rm "$TEMPFILE"
done
