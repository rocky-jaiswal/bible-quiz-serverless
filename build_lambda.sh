#!/bin/sh

yarn build && \
rm -rf ./deployment/artifact/ && \
mkdir -p ./deployment/artifact/ && \
cp -R ./dist/* ./deployment/artifact && \
cp ./package.json ./deployment/artifact && \
cp ./yarn.lock ./deployment/artifact && \
cd ./deployment/artifact && \
yarn install --production && \
zip -r lambda.zip ./* && \
find . ! -name 'lambda.zip' -type f -exec rm -f {} + && \
find . ! -name '.' -type d -exec rm -rf {} +
