#!/usr/bin/env bash

mkdir -p dist/public &&
cd ../game-web &&
yarn run build &&
cd ../web-server &&
cp -r ../game-web/dist/* ./dist/public
