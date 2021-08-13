#!/usr/bin/env bash

parent_path=$( cd "$(dirname "${BASH_SOURCE[0]}")" ; pwd -P )
(
    folders=( firebaseAnalytics firebaseApp firebaseAuth firebaseCrashlytics firebaseMessaging firebaseUser )
    for folder in "${folders[@]}"; do
    
    cd $parent_path/$folder
    for filename in *.js; do
        if [[ "$filename" == "analysis.js" ]]; then
    
        echo "generating ./doc/${folder%%.*}.md"
        npx jsdoc2md -f "./$filename" > "../doc/${folder%%.*}.md"

        fi
    done

    done
)