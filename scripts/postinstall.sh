#!/usr/bin/env bash
parent_path=$( cd "$(dirname "${BASH_SOURCE[0]}")" ; pwd -P )
mv ./plugins/firebaseios.zip ~/workspace/plugins/iOS/firebaseios.zip
mv ./plugins/firebaseandroid.zip ~/workspace/plugins/Android/firebaseandroid.zip
rm -rf ./plugins

mv -u ./config/Android/strings.xml ~/workspace/config/Android/strings.xml
rm -rf ./config

(
    cd "$parent_path"
    node ./project.js
)
