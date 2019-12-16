#!/usr/bin/env bash
parent_path=$( cd "$(dirname "${BASH_SOURCE[0]}")" ; pwd -P )
wget https://github.com/smartface/sf-plugin-firebase/raw/master/plugins/firebaseios.zip -O ~/workspace/plugins/iOS/firebaseios.zip

rm -rf ./config

mv $parent_path/../Native/Android/firebaseplugin ~/workspace/plugins/Android/firebaseplugin
(
    cd "$parent_path"
    node ./project.js
)
rm -rvf $parent_path/../Native
