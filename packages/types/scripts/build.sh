#!/usr/bin/env bash
set -eu

rm -r dist/
npm run build
cp package.json dist
cp README.md dist
echo "Done! Please publish the dist/ directory."
