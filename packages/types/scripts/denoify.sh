#!/usr/bin/env bash
set -eu

shopt -s globstar
rm -rf dist/
rm -rf denodist/
mkdir -p denodist/
cp **/*.ts denodist
sed -i -E "s/from '\.\/(.+)'/from '.\/\\1.ts'/g" denodist/**/*.ts
echo "Done! Please point Deno to denodist/"
