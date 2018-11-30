# Firebase plugin from Smartface
[![Twitter: @Smartface_io](https://img.shields.io/badge/contact-@Smartface_io-blue.svg?style=flat)](https://twitter.com/smartface_io)
[![License](https://img.shields.io/badge/license-MIT-green.svg?style=flat)](https://raw.githubusercontent.com/smartface/sf-extension-extendedlabel/master/LICENSE)

## Firebase plugin
As a plugin, this plugin only works when published. Will not perform any action with regular run-on-device scenarios.
Firebase gives you the tools to develop high-quality apps, grow your user base, and earn more money. We cover the essentials so you can monetize your business and focus on your users.

## Installation
Smartface Firebase plugin can be installed via npm easily from our public npm repository. The installation is pretty easy via Smartface Cloud IDE.

- Run command in terminal `(cd ~/workspace/scripts && npm i -S sf-plugin-firebase)`

## Configuration
Installation script automatically configures project.json. Please verify following records are in place.
Configuration is needed once only

### iOS
- Add firebase plugin to config/project.json.

```javascript
"firebaseios": {
  "path": "plugins/iOS/firebaseios.zip",
  "active": true
}
```

### Android

***Building Android Plugin***
It is necessary to build your own plugin in order to use firebase plugin. Follow the below steps;

**Step 1**

Download google-services.json from [Firebase console](https://console.firebase.google.com)

**Step 2**

- This repository already contains ready plugin project. Just left to you open in Android Studio (preferred version 3.2 ) and placed  google-services.json  file  into plugin project's app folder. 
- Generate Singed Bundle/APK
- Then follow up from [Running Smartface CLI Tool](https://developer.smartface.io/docs/android-plugins)
- Place builded output plugin zip to  your workspace's /plugins/Android  directory. 

- Finally add firebase plugin to config/project.json.

```javascript
"firebaseandroid": {
"path": "plugins/Android/YOURSPECIFIEDNAME.zip",
"active": true
}
```

**Step 3**

- senderID should be edited. `config/project.json` ⇒ (senderID = gcm_defaultSenderId ) 

```json
"googleCloudMessaging": {
	"senderID": "gcm_defaultSenderId"
}
```
**Step 4**

- Open this lines in `config/Android/AndroidManifest.xml` file.
```xml
<uses-permission android:name="android.permission.INTERNET" />
<uses-permission android:name="android.permission.ACCESS_NETWORK_STATE" />
<uses-permission android:name="android.permission.WAKE_LOCK" />
```
- Congrats you just done Android configuration.

# How to use
- Initialize your SDK using the following code snippet: (You must write this code in app.js)

Firebase has to be initialized before any use
```javascript
const Firebase = require('sf-plugin-firebase');
const File = require('sf-core/io/file');
var iOSPlistFile = new File({
    path: 'assets://GoogleService-Info.plist'
});
var firebaseConfig = {
    iosFile : iOSPlistFile
};
Firebase.initializeApp(firebaseConfig);

// To initialize Fabric

const Fabric = require("sf-plugin-firebase/fabric");
const Crashlytics = require("sf-plugin-firebase/fabric/crashlytics");
const Answers = require("sf-plugin-firebase/fabric/answers");

Fabric.with([new Crashlytics(), new Answers()]);
```

## API docs
After initializing the Firebase, Firebase APIs can be used.
- [Full API Docs](./doc/API.md)
- [Predefined Analitics Events](./doc/firebaseAnalyticsEvent.md)


## Samples
All of the samples assumes that initialization has been completed

### Push Notifications
```javascript
const Application = require("sf-core/application");
const Firebase = require('sf-plugin-firebase');
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
const Firebase = require('sf-plugin-firebase');
/*
 * Init code
 */
Firebase.analytics.logEvent(Firebase.analytics.Event.APP_OPEN);

```

# License
This project is licensed under the terms of the MIT license. See the [LICENSE](https://raw.githubusercontent.com/smartface/sf-extension-extendedlabel/master/LICENSE) file. Within the scope of this license, all modifications to the source code, regardless of the fact that it is used commercially or not, shall be committed as a contribution back to this repository.
