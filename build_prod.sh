#!/bin/sh

yarn build && \
rm -rf ./deployment/artifact/ && \
mkdir -p ./deployment/artifact/ && \
cp -R ./dist/* ./deployment/artifact && \
cp ./package.json ./deployment/artifact && \
cd ./deployment/artifact && \
yarn install --production && \
zip -r lambda.zip ./* && \
rm -rf node_modules && \
find . ! -name 'lambda.zip' -type f -exec rm -f {} +
