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
- Add firebase plugin to config/project.json.

```javascript
"firebaseandroid": {
  "path": "plugins/Android/firebaseandroid.zip",
  "active": true
}
```
Installation creates a file under `config/Android/strings.xml`. This file needs to be modified with Firebase settings.
There are several ways to do it.

**Step 1**

Download google-services.json from [Firebase console](https://console.firebase.google.com)

**Step 2 - Option 1**

You may manually fill strings.xml:

strings.xml file should be edited. (config/Android/strings.xml)

```xml
<resources>
    <string name="google_app_id" translatable="false">mobilesdk_app_id</string>
    <string name="gcm_defaultSenderId" translatable="false">project_number</string>
    <string name="default_web_client_id" translatable="false">client_id</string>
    <string name="firebase_database_url" translatable="false">firebase_url</string>
    <string name="google_api_key" translatable="false">current_key</string>
</resources>
```

**Step 2 - Option 2**

1. Place the google-services.json under assets
2. Run the following script on terminal
```shell
(cd ~/workspace/scripts/node_modules/sf-plugin-firebase && npm run androidConfig)
```

**Step 3**

senderID should be edited. `config/project.json` ⇒ (senderID = gcm_defaultSenderId ) 

```json
"googleCloudMessaging": {
	"senderID": "gcm_defaultSenderId"
}
```
**Step 4**

Open this lines in `config/Android/AndroidManifest.xml` file.
```xml
<uses-permission android:name="android.permission.INTERNET" />
<uses-permission android:name="android.permission.ACCESS_NETWORK_STATE" />
<uses-permission android:name="android.permission.WAKE_LOCK" />
```

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
