#!/bin/bash
set -ev
dotnet restore
cd NgApp
npm install
ng build
cd ..
dotnet build -c Release