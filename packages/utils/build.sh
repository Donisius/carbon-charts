#!/usr/bin/env bash

rm -rf dist;
mkdir dist;
tsc ./src/index.ts --outDir dist;
rollup -c;
cp package.json dist;
