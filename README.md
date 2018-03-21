# Firebase plugin from Smartface
[![Twitter: @Smartface_io](https://img.shields.io/badge/contact-@Smartface_io-blue.svg?style=flat)](https://twitter.com/smartface_io)
[![License](https://img.shields.io/badge/license-MIT-green.svg?style=flat)](https://raw.githubusercontent.com/smartface/sf-extension-extendedlabel/master/LICENSE)

## Firebase plugin
Firebase gives you the tools to develop high-quality apps, grow your user base, and earn more money. We cover the essentials so you can monetize your business and focus on your users.

## Installation
Smartface Firebase plugin can be installed via npm easily from our public npm repository. The installation is pretty easy via Smartface Cloud IDE.

- Run command `(cd ~/workspace/scripts && npm i -S sf-plugin-firebase)`

### iOS
- Add instabug plugin to config/project.json.

```javascript
"firebaseios": {
  "url": "",
  "path": "plugins/iOS/firebaseios.zip",
  "active": true
}
```
### Android
- Add instabug plugin to config/project.json.

```javascript
"firebaseandroid": {
  "url": "",
  "path": "plugins/iOS/firebaseandroid.zip",
  "active": true
}
```

## How to use
- Initialize your SDK using the following code snippet: (You must write this code in app.js)

```javascript
const Firebase = require('sf-plugin-firebase');
var iOSPlistFile = new File({
    path: 'assets://GoogleService-Info.plist'
});
var androidJsonFile = new File({
    path: 'assets://google-services.json'
});
var config = {
    iosFile : iOSPlistFile,
    androidFile : androidJsonFile
}
Firebase.initializeApp(config);
```

### FirebaseApp

When called with no arguments, the default app is returned. When an app name is provided, the app corresponding to that name is returned.

```javascript
var app = Firebase.app();
```

#### FirebaseApp methods

##### auth

Gets the Auth service for the current app.

```javascript
var auth = app.auth();
```

##### getName

The name for this app.

```javascript
var name = app.getName();
```

##### getApiKey

API key used for authenticating requests from your app.

```javascript
var apiKey = app.getApiKey();
```

##### getApplicationId

The Google App ID that is used to uniquely identify an instance of an app.

```javascript
var applicationId = app.getApplicationId();
```

##### getDatabaseUrl

The database root URL.

```javascript
var databaseUrl = app.getDatabaseUrl();
```


##### getGcmSenderId

The Project Number from the Google Developer's console, for example 012345678901, used to configure Google Cloud Messaging.

```javascript
var gcmSenderId = app.getGcmSenderId();
```

##### getStorageBucket

The Google Cloud Storage bucket name.

```javascript
var storageBucket = app.getStorageBucket();
```

##### ios.delete

Cleans up the current FIRApp, freeing associated data and returning its name to the pool for future use. This method is thread safe.

```javascript
app.ios.delete();
```

##### ios.getBundleId

The bundle ID for the application.

```javascript
var bundleId = app.ios.getBundleId();
```

##### ios.getClientId

The OAuth2 client ID for iOS application used to authenticate Google users.

```javascript
var clientId = app.ios.getClientId();
```

##### ios.getTrackingId

The tracking ID for Google Analytics.

```javascript
var trackingId = app.ios.getTrackingId();
```

### FirebaseAuth

Do not call this constructor directly. Instead, use Firebase.auth().

```javascript
var auth = Firebase.auth();
```

#### FirebaseAuth methods


### FirebaseAnalytics

Do not call this constructor directly. Instead, use Firebase.analytics().

```javascript
var analytics = Firebase.analytics();
```
### FirebaseMessaging

Do not call this constructor directly. Instead, use Firebase.messaging().

```javascript
var messaging = Firebase.messaging();
```








## License
This project is licensed under the terms of the MIT license. See the [LICENSE](https://raw.githubusercontent.com/smartface/sf-extension-extendedlabel/master/LICENSE) file. Within the scope of this license, all modifications to the source code, regardless of the fact that it is used commercially or not, shall be committed as a contribution back to this repository.
