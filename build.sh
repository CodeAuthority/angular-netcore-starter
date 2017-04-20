#!/bin/bash
set -ev
dotnet restore
yarn install
gulp
dotnet build -c Release