#!/bin/bash
set -eu

# MIT License
#
# Copyright (c) 2022 Outvi V
#
# Permission is hereby granted, free of charge, to any person obtaining a copy
# of this software and associated documentation files (the "Software"), to deal
# in the Software without restriction, including without limitation the rights
# to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
# copies of the Software, and to permit persons to whom the Software is
# furnished to do so, subject to the following conditions:
#
# The above copyright notice and this permission notice shall be included in all
# copies or substantial portions of the Software.
#
# THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
# IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
# FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
# AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
# LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
# OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
# SOFTWARE.

# This file should be run when workdir contains whatever JSON files that need to be uploaded.

API_ENDPOINT=${API_ENDPOINT:-"https://idoly-backend.ipri.workers.dev/manage/write"}
ADMIN_TOKEN=${ADMIN_TOKEN:-"ADMIN_TOKEN"}
DATA_PREFIX=${DATA_PREFIX:-"Hoshimi_220418_"}

for i in *.json; do
    TEMPFILE=$(mktemp)
    NAME=$(echo "$i" | sed "s/\.json$//")
    KEY_NAME="${DATA_PREFIX}${NAME}"
    jq -c . "$i" >"$TEMPFILE"
    SUBMIT_JSON=$(jq --null-input --arg key "$KEY_NAME" --rawfile value "$TEMPFILE" '{"key":$key,"value":$value}' <<<"$TEMPFILE")
    echo "Submitting $KEY_NAME to $API_ENDPOINT..."
    echo $SUBMIT_JSON | curl -X PUT -H "Authorization: Bearer $ADMIN_TOKEN" --data @- "$API_ENDPOINT"
    rm "$TEMPFILE"
done

curl -X POST -H "Authorization: Bearer $ADMIN_TOKEN" "$API_ENDPOINT/done"
