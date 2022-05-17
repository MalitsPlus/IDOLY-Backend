#!/bin/bash
set -ue

# This fill is used to prepare

API_ENDPOINT_PREFIX=$1
SKILL_DB_NAME=$2
READONLY_KEY=$3

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
bash $HERE/upload.sh
echo "Finished uploading Skillx.json"
