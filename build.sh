#!/bin/bash
set -ev
dotnet restore
npm install
gulp
dotnet build -c Release