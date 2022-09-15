#!/bin/bash
apt-get update
apt-get -y install less vim curl jq

git config --global core.editor "vim"

npm install -g @nestjs/cli@8