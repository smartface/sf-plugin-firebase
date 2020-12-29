#!/usr/bin/env bash
parent_path=$( cd "$(dirname "${BASH_SOURCE[0]}")" ; pwd -P )
curl -o $parent_path/../../../../plugins/iOS/firebaseios.zip https://cd.smartface.io/repository/smartfacefirebase/ios/3.0.3/firebaseios.zip

rm -rf ./config

mv $parent_path/../Native/Android/firebaseplugin $parent_path/../../../../plugins/Android/firebaseplugin
(
    cd "$parent_path"
    node ./project.js
)
rm -rvf $parent_path/../Native

