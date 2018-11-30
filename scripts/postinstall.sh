#!/usr/bin/env bash
parent_path=$( cd "$(dirname "${BASH_SOURCE[0]}")" ; pwd -P )
wget https://github.com/smartface/sf-plugin-firebase/raw/master/plugins/firebaseandroid.zip -O ~/workspace/plugins/Android/firebaseandroid.zip
wget https://github.com/smartface/sf-plugin-firebase/raw/master/plugins/firebaseios.zip -O ~/workspace/plugins/iOS/firebaseios.zip

mv -u ./config/Android/strings.xml ~/workspace/config/Android/strings.xml
rm -rf ./config

(
    cd "$parent_path"
    node ./project.js
)
