#!/bin/bash
set -ue

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

API_ENDPOINT_PREFIX=$1
SKILL_DB_NAME=$2
READONLY_KEY=$3

WRITE_API_ENDPOINT=$API_ENDPOINT_PREFIX/manage/write
ADMIN_TOKEN=${4:-""}
DATA_PREFIX=${5:-""}

HERE=$(dirname $(realpath $0))
WORKDIR=$HERE/../packages/parser/src

pushd $WORKDIR
echo "Generating Skillx.json"
node ./skillParser.js ${API_ENDPOINT_PREFIX} ${SKILL_DB_NAME} ${READONLY_KEY}
echo "Validating Skillx.json"
npm run ajv -- validate -s $WORKDIR/Skillx.schema.yml -d $WORKDIR/Skillx.json
echo "Schema validated. It is ready to be uploaded."
echo "Uploading Skillx.json"
TEMPDIR=$(mktemp -d)
cp $WORKDIR/Skillx.json $TEMPDIR
pushd $TEMPDIR
env API_ENDPOINT=$WRITE_API_ENDPOINT ADMIN_TOKEN=$ADMIN_TOKEN DATA_PREFIX=$DATA_PREFIX bash $HERE/upload.sh
echo "Finished uploading Skillx.json"
