# Firebase plugin from Smartface
[![Twitter: @Smartface_io](https://img.shields.io/badge/contact-@Smartface_io-blue.svg?style=flat)](https://twitter.com/smartface_io)
[![License](https://img.shields.io/badge/license-MIT-green.svg?style=flat)](https://raw.githubusercontent.com/smartface/sf-extension-extendedlabel/master/LICENSE)

## Firebase plugin
As a plugin, this plugin only works when published. Will not perform any action with regular run-on-device scenarios.
Firebase gives you the tools to develop high-quality apps, grow your user base, and earn more money. We cover the essentials so you can monetize your business and focus on your users.

## Installation
Smartface Firebase plugin can be installed via npm easily from our public npm repository. The installation is pretty easy via Smartface Cloud IDE.

- Run command in terminal `(cd ~/workspace/scripts && npm i -S @smartface/firebase)`

## Configuration
Installation script automatically configures project.json. Please verify following records are in place.
Configuration is needed once only

### iOS

You can manually access the Firebaseios.zip file from the link below.
https://cd.smartface.io/repository/smartfacefirebase/ios/VERSION_NUMBER/firebaseios.zip
Sample : https://cd.smartface.io/repository/smartfacefirebase/ios/3.0.2/firebaseios.zip

**Step 1**

Download GoogleService-Info.plist from [Firebase console](https://console.firebase.google.com) and placed this file into workspace's /assets directory.

**Step 2**

Add firebase plugin to config/project.json.

```javascript
"firebaseios": {
  "path": "plugins/iOS/firebaseios.zip",
  "active": true,
  "crashlytics": true
}
```

### Android

***Building Android Plugin***
It is necessary to place a few files & modification in order to use firebase plugin. Follow the below steps;

**Step 1**

Download google-services.json from [Firebase console](https://console.firebase.google.com)

**Step 2**

- Place google-services.json  file  into `~/workspace/config/Android` 
- This repository contains prepared android library project under `~/Native/Android` directory. 
- Finally, specify firebase plugin library to config/project.json.

```javascript
"plugins": {
  "modules": {
    "firebaseplugin": {
      "path": "plugins/Android/firebaseplugin",
      "active": true
    }
  }
},
```

**Step 3**

- Get senderID from firebase and edit `config/project.json`'s senderID ⇒ (senderID = gcm_defaultSenderId ) 

```json
"googleCloudMessaging": {
  "senderID": "${senderID}"
}
```
**Step 4**

- Open this lines in `config/Android/AndroidManifest.xml` file.
```xml
<uses-permission android:name="android.permission.INTERNET" />
<uses-permission android:name="android.permission.ACCESS_NETWORK_STATE" />
<uses-permission android:name="android.permission.WAKE_LOCK" />
```

**Step 5**
- By default, crashlytic and its ndk is disabled so enable it, apply plugins & specify library project in dependencies.gradle which is located under `~/workspace/config/Android` folder. Such as;
```groovy
apply plugin:  'com.google.firebase.crashlytics'
apply plugin:  'com.google.gms.google-services'

dependencies {
    implementation project(":firebaseplugin")
}
googleServices.disableVersionCheck = true
```
- (Optional) Add [Firebase Performance Monitoring](https://firebase.google.com/docs/perf-mon) 
```groovy
apply plugin:  'com.google.firebase.firebase-perf' //(Optional)
```
- (Optional) Add `nativeSymbolUploadEnabled` after `apply plugin` statements. This allows your app to process and upload native symbols to Crashlytics so you can view properly-symbolicated stack traces. Smartface framework contains CPP libraries. To investigate the problems with Smartface professionals, it's recommend.
```groovy
android {
    buildTypes {
        release {
            firebaseCrashlytics {
                nativeSymbolUploadEnabled true
            }
        }
    }
}
```
If `nativeSymbolUploadEnabled` is true then add this below statement to your build process.
```bash/script
//call after assembling the project. eg ./gradlew app:assembleBUILT_TYPES
> ./gradlew app:uploadCrashlyticsSymbolFile$BUILT_TYPES
```

- Congrats you have just done Android configuration.

*Note:  By post-install scripts, Firebase's Android & iOS libraries/zip will be placed to appropriate paths and specify the its configuration to `config/project.json`*

## API docs (TypeScript)
After initializing the Firebase, Firebase APIs can be used.
- [Full API Docs](./doc/API.md) - You can use intelliSense on Smartface Cloud IDE for better & faster development.
- [Predefined Analitics Events](./doc/firebaseAnalyticsEvent.md) - You can access the values from code via intelliSense on `Firebase.analytics.Events`

## Crashlytics
- Initialize your SDK using the following code snippet: (You must write this code in app.ts)

Firebase has to be initialized before any use.

```typescript
import Firebase from '@smartface/firebase';
import File = require('@smartface/native/io/file');
var iOSPlistFile = new File({
    path: 'assets://GoogleService-Info.plist'
});
var firebaseConfig = {
    iosFile : iOSPlistFile
};

import FirebaseCrashlytics from 'sf-plugin-firebase/firebaseCrashlytics';

if (Firebase.apps().length === 0) {
  Firebase.initializeApp(firebaseConfig);
  FirebaseCrashlytics.ios.with([new FirebaseCrashlytics()]);
}
```
### Sample Page for Crashlytics
```typescript

import FirebaseAnalytics from '@smartface/firebase/firebaseAnalytics';

import Page1Design from 'generated/pages/page1'; // Generated default page on ts workspace

export default class Page1 extends Page1Design {
    constructor () {
    super();
    this.onShow = onShow.bind(this, this.onShow.bind(this));
    this.onLoad = onLoad.bind(this, this.onLoad.bind(this));
  }
}

function onShow(superOnShow) {
    superOnShow();

    this.statusBar.visible = true;
    this.headerBar.visible = true;

     /*
      You can use Crashlytics.setUserIdentifier to provide an ID number, token, or hashed value that uniquely     
      identifies the end-user of your application without disclosing or transmitting any of their personal 
      information. This value is displayed right in the FirebaseCrashlytics dashboard.
    */
    FirebaseCrashlytics.setUserIdentifier("UserIdentifier");
    
    // If you would like to take advantage of advanced user identifier features, you can additionally use both:
    FirebaseCrashlytics.ios.setUserName("UserName");
    FirebaseCrashlytics.ios.setUserEmail("UserEmail");
    
    /*
      Crashlytics allows you to associate arbitrary key/value pairs with your crash reports, which are viewable 
      right from the Crashlytics dashboard. Setting keys are as easy as calling: Crashlytics.setString(key, value) 
      or one of the related methods. Options are:
    */
    FirebaseCrashlytics.setString("keyString", "value");
    FirebaseCrashlytics.setBool("setBool", true);
    FirebaseCrashlytics.setFloat("setFloat", 15.5);
    FirebaseCrashlytics.setInt("setInt", 12);
}

function onLoad(superOnLoad) {
    superOnLoad();
}
```

## Samples
All of the samples assumes that initialization has been completed

### Push Notifications
```typescript
import * as Application from '@smartface/native/application';
import Firebase from '@smartface/firebase';
/*
 * Init code
 */
Application.onReceivedNotification = (e) => {
    alert("Notification: " + typeof e);
    alert("Notification: " + JSON.stringify(e.remote));
};

Firebase.messaging.subscribeToTopic("all"); //this triggers register for notifications
```

### Sample Analtics
```typescript
import Firebase from '@smartface/firebase';
/*
 * Init code
 */
Firebase.analytics.logEvent(Firebase.analytics.Event.APP_OPEN);
```

## API docs (JavaScript) - For older versions
If your project is not yet migrated to TypeScript, please refer to this usage.

After initializing the Firebase, Firebase APIs can be used.
- [Full API Docs](./doc/API.md)
- [Predefined Analitics Events](./doc/firebaseAnalyticsEvent.md)

## Crashlytics
- Initialize your SDK using the following code snippet: (You must write this code in app.js)

Firebase has to be initialized before any use
```javascript
const Firebase = require('@smartface/firebase');
const File = require('@smartface/native/io/file');
var iOSPlistFile = new File({
    path: 'assets://GoogleService-Info.plist'
});
var firebaseConfig = {
    iosFile : iOSPlistFile
};

if (Firebase.apps().length === 0) {
  Firebase.initializeApp(firebaseConfig);
}

```
### Sample Page for Crashlytics
```javascript

const Page = require("@smartface/native/ui/page");
const extend = require("js-base/core/extend");

const Fabric = require("@smartface/firebase/fabric");   
const Crashlytics = require("@smartface/firebase/fabric/crashlytics");
const Answers = require("@smartface/firebase/fabric/answers");
                
var Page1 = extend(Page)(
    function(_super) {
        _super(this, {
            onShow: function(params) {
                this.statusBar.visible = true;
                this.headerBar.visible = true;
       
                /*
                  You can use Crashlytics.setUserIdentifier to provide an ID number, token, or hashed value that uniquely     
                  identifies the end-user of your application without disclosing or transmitting any of their personal 
                  information. This value is displayed right in the Fabric dashboard.
                */
                Crashlytics.setUserIdentifier("UserIdentifier");
                
                // If you would like to take advantage of advanced user identifier features, you can additionally use both:
                Crashlytics.setUserName("UserName");
                Crashlytics.setUserEmail("UserEmail");
                
                /*
                  Crashlytics allows you to associate arbitrary key/value pairs with your crash reports, which are viewable 
                  right from the Crashlytics dashboard. Setting keys are as easy as calling: Crashlytics.setString(key, value) 
                  or one of the related methods. Options are:
                */
                Crashlytics.setString("key", "value");
                Crashlytics.setBool("key", true);
                Crashlytics.setFloat("key", 15.5);
                Crashlytics.setInt("key", 12);

                /*
                  To log a custom event to be sent to Answers, use the following.
                  You can also include a series of custom attributes to get even deeper insight into what’s happening in your 
                  app.
                  In addition to the recommended attributes for each event, you can also add custom attributes for any event. 
                  To log an event with a custom attribute, use the following.
                */
                Answers.logCustom('Log-Title', 
                  [
                    // Value must be only string or number
                    new Answers.CustomAttribute("key1","value1"), 
                    new Answers.CustomAttribute("key2",2)
                  ] 
                );
                
            }
        });

    }
);
module.exports = Page1;
```

## Samples
All of the samples assumes that initialization has been completed

### Push Notifications
```javascript
const Application = require("@smartface/native/application");
const Firebase = require('@smartface/firebase');
/*
 * Init code
 */
Application.onReceivedNotification = function(e){
    alert("Notification: " + typeof e);
    alert("Notification: " + JSON.stringify(e.remote));
};

Firebase.messaging.subscribeToTopic("all"); //this triggers register for notifications
```

### Sample Analtics
```javascript
const Firebase = require('@smartface/firebase');
/*
 * Init code
 */
Firebase.analytics.logEvent(Firebase.analytics.Event.APP_OPEN);

```

# License
This project is licensed under the terms of the MIT license. See the [LICENSE](https://raw.githubusercontent.com/smartface/sf-extension-extendedlabel/master/LICENSE) file. Within the scope of this license, all modifications to the source code, regardless of the fact that it is used commercially or not, shall be committed as a contribution back to this repository.
