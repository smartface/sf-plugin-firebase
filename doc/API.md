## Constants

<dl>
<dt><a href="#Firebase">Firebase</a> : <code>object</code></dt>
<dd></dd>
<dt><a href="#FirebaseApp">FirebaseApp</a> : <code>object</code></dt>
<dd><p>Firebase App</p>
</dd>
</dl>

## Functions

<dl>
<dt><a href="#FirebaseUser">FirebaseUser()</a></dt>
<dd></dd>
<dt><a href="#getEmail">getEmail()</a> ⇒ <code>string</code></dt>
<dd><p>Returns the main email address of the user, as stored in the Firebase project&#39;s user database</p>
</dd>
<dt><a href="#getDisplayName">getDisplayName()</a> ⇒ <code>string</code></dt>
<dd><p>Returns the main display name of this user from the Firebase project&#39;s user database</p>
</dd>
<dt><a href="#getPhoneNumber">getPhoneNumber()</a> ⇒ <code>string</code></dt>
<dd><p>Returns the phone number of the user, as stored in the Firebase project&#39;s user database, or null if none exists</p>
</dd>
<dt><a href="#getUID">getUID()</a> ⇒ <code>string</code></dt>
<dd><p>Returns a string used to uniquely identify your user in your Firebase project&#39;s user database</p>
</dd>
<dt><a href="#isAnonymous">isAnonymous()</a> ⇒ <code>boolean</code></dt>
<dd><p>Returns true if the user is anonymous; that is, the user account was created with signInAnonymously()</p>
</dd>
<dt><a href="#getIdToken">getIdToken([forceRefresh], callback)</a></dt>
<dd><p>Fetches a Firebase Auth ID Token for the user; useful when authenticating against your own backend. Use our server SDKs or follow the official documentation to securely verify the integrity and validity of this token</p>
</dd>
<dt><a href="#setDisplayName">setDisplayName(name, callback)</a></dt>
<dd><p>Updates the user display name</p>
</dd>
<dt><a href="#getPhotoURL">getPhotoURL()</a> ⇒ <code>string</code></dt>
<dd><p>Returns the URL of this user&#39;s main profile picture</p>
</dd>
<dt><a href="#setPhotoURL">setPhotoURL(photoUrl, callback)</a></dt>
<dd><p>Updates the user photo url</p>
</dd>
<dt><a href="#FirebaseAuth">FirebaseAuth()</a></dt>
<dd><p>classdesc Firebase Auth</p>
</dd>
<dt><a href="#getCurrentUser">getCurrentUser()</a> ⇒ <code><a href="#FirebaseUser">FirebaseUser</a></code></dt>
<dd><p>Synchronously gets the cached current user, or undefined if there is none</p>
</dd>
</dl>

<a name="Firebase"></a>

## Firebase : <code>object</code>
**Kind**: global constant  
**Access**: public  

* [Firebase](#Firebase) : <code>object</code>
    * _static_
        * [.analytics](#Firebase.analytics)
            * [.CustomAttribute](#Firebase.analytics.CustomAttribute)
                * [new CustomAttribute()](#new_Firebase.analytics.CustomAttribute_new)
            * [.Event](#Firebase.analytics.Event)
            * [.logEvent()](#Firebase.analytics.logEvent)
            * [.setUserProperty()](#Firebase.analytics.setUserProperty)
            * [.setUserId()](#Firebase.analytics.setUserId)
            * [.setCurrentScreen()](#Firebase.analytics.setCurrentScreen)
        * [.messaging](#Firebase.messaging)
            * [.ios](#Firebase.messaging.ios)
                * ["onTokenReflesh"](#Firebase.messaging.ios.event_onTokenReflesh)
            * [.getToken()](#Firebase.messaging.getToken)
            * [.subscribeToTopic()](#Firebase.messaging.subscribeToTopic)
            * [.unsubscribeFromTopic()](#Firebase.messaging.unsubscribeFromTopic)
        * [.messaging](#Firebase.messaging)
            * [.ios](#Firebase.messaging.ios)
                * ["onTokenReflesh"](#Firebase.messaging.ios.event_onTokenReflesh)
            * [.getToken()](#Firebase.messaging.getToken)
            * [.subscribeToTopic()](#Firebase.messaging.subscribeToTopic)
            * [.unsubscribeFromTopic()](#Firebase.messaging.unsubscribeFromTopic)
    * _inner_
        * [~getTokenCallback](#Firebase..getTokenCallback) : <code>function</code>
        * [~getIdTokenCallback](#Firebase..getIdTokenCallback) : <code>function</code>
        * [~setDisplayNameCallback](#Firebase..setDisplayNameCallback) : <code>function</code>

<a name="Firebase.analytics"></a>

### Firebase.analytics
Firebase Analytics service

**Kind**: static property of [<code>Firebase</code>](#Firebase)  
**Access**: public  
**Properties**

| Type |
| --- |
| <code>object</code> | 


* [.analytics](#Firebase.analytics)
    * [.CustomAttribute](#Firebase.analytics.CustomAttribute)
        * [new CustomAttribute()](#new_Firebase.analytics.CustomAttribute_new)
    * [.Event](#Firebase.analytics.Event)
    * [.logEvent()](#Firebase.analytics.logEvent)
    * [.setUserProperty()](#Firebase.analytics.setUserProperty)
    * [.setUserId()](#Firebase.analytics.setUserId)
    * [.setCurrentScreen()](#Firebase.analytics.setCurrentScreen)

<a name="Firebase.analytics.CustomAttribute"></a>

#### analytics.CustomAttribute
**Kind**: static class of [<code>analytics</code>](#Firebase.analytics)  
**Access**: public  
**Params**: <code>string</code> name - Name of the attribute  
**Params**: <code>string\|number\|boolean</code> value - Value of the attribute  
<a name="new_Firebase.analytics.CustomAttribute_new"></a>

##### new CustomAttribute()
Creates a new CustomAttribute

<a name="Firebase.analytics.Event"></a>

#### analytics.Event
Enumeration for predefined Firebase events

**Kind**: static enum of [<code>analytics</code>](#Firebase.analytics)  
**See**: [firebaseAnalyticsEvent](./firebaseAnalyticsEvent.md)  
<a name="Firebase.analytics.logEvent"></a>

#### analytics.logEvent()
Logs an app event. The event can have up to 25 parameters. Events with the same name must have the same parameters. Up to 500 event names are supported. Using predefined events and/or parameters is recommended for optimal reporting<br />
The following event names are reserved and cannot be used: <br />
<span style="color:orange;">ad_activeview, ad_click, ad_exposure, ad_impression, ad_query, adunit_exposure, app_clear_data, app_uninstall, app_update, error, first_open, first_visit, in_app_purchase, notification_dismiss, notification_foreground, notification_open, notification_receive, os_update, screen_view, session_start, user_engagement</span><br />
For predefined event list please see [firebaseAnalyticsEvent](./firebaseAnalyticsEvent.md)

**Kind**: static method of [<code>analytics</code>](#Firebase.analytics)  
**Access**: public  
**Params**: <code>string</code> eventName - The name of the event. Should contain 1 to 40 alphanumeric characters or underscores. The name must start with an alphabetic character. Some event names are reserved  
**Params**: <code>Firebase.analytics.CustomAttribute[]</code> attributes - Parameter names can be up to 40 characters Number and must start with an alphabetic character and contain only alphanumeric characters and underscores  
**Example**  
```js
analytics.logEvent(FirebaseAnalytics.Event.ADD_TO_CART, 
  [
    new FirebaseAnalytics.CustomAttribute(FirebaseAnalytics.Param.ITEM_ID, "item_id"), 
    new FirebaseAnalytics.CustomAttribute(FirebaseAnalytics.Param.ITEM_NAME, 'item_name') 
  ]
);
```
<a name="Firebase.analytics.setUserProperty"></a>

#### analytics.setUserProperty()
Sets a user property<br />
The following event names are reserved and cannot be used: <br />
<span style="color:orange;">first_open_time, first_visit_time, last_deep_link_referrer, user_id, first_open_after_install</span>

**Kind**: static method of [<code>analytics</code>](#Firebase.analytics)  
**Access**: public  
**Params**: <code>string</code> key - user property name  
**Params**: <code>string</code> value - user property value  
<a name="Firebase.analytics.setUserId"></a>

#### analytics.setUserId()
Sets the user ID property

**Kind**: static method of [<code>analytics</code>](#Firebase.analytics)  
**Params**: <code>string</code> id  
<a name="Firebase.analytics.setCurrentScreen"></a>

#### analytics.setCurrentScreen()
Sets the current screen name, which specifies the current visual context in your app. This helps identify the areas in your app where users spend their time and how they interact with your app

**Kind**: static method of [<code>analytics</code>](#Firebase.analytics)  
**Params**: <code>string</code> screenName - The name of the current screen. Set to null to clear the current screen name  
**Params**: <code>string</code> - screenClassOverride - The name of the screen class. By default this is the class name of the current Activity. Set to null to revert to the default class name  
<a name="Firebase.messaging"></a>

### Firebase.messaging
Firebase Messaging service

**Kind**: static property of [<code>Firebase</code>](#Firebase)  
**Access**: public  
**Properties**

| Type |
| --- |
| <code>object</code> | 


* [.messaging](#Firebase.messaging)
    * [.ios](#Firebase.messaging.ios)
        * ["onTokenReflesh"](#Firebase.messaging.ios.event_onTokenReflesh)
    * [.getToken()](#Firebase.messaging.getToken)
    * [.subscribeToTopic()](#Firebase.messaging.subscribeToTopic)
    * [.unsubscribeFromTopic()](#Firebase.messaging.unsubscribeFromTopic)

<a name="Firebase.messaging.ios"></a>

#### messaging.ios
iOS specific members

**Kind**: static property of [<code>messaging</code>](#Firebase.messaging)  
**Access**: public  
<a name="Firebase.messaging.ios.event_onTokenReflesh"></a>

##### "onTokenReflesh"
The FCM token is used to identify this device so that FCM can send notifications to it. It is associated with your APNS token when the APNS token is supplied, so that sending messages to the FCM token will be delivered over APNS. 

The FCM token is sometimes refreshed automatically. onTokenReflesh method will be called once a token is available, or has been refreshed. Typically it should be called once per app start, but may be called more often, if token is invalidated or updated. 

Once you have an FCM token, you should send it to your application server, so it can use the FCM token to send notifications to your device.

**Kind**: event emitted by [<code>ios</code>](#Firebase.messaging.ios)  
**Access**: public  
**Params**: <code>string</code> fcmToken  
**Example**  
```js
messaging.ios.onTokenReflesh = function(fcmToken) {
    alert(fcmToken, "onTokenReflesh");
};
```
<a name="Firebase.messaging.getToken"></a>

#### messaging.getToken()
This function is used to keep track of notification tokens of devices. Calling this, automatically registers for push notifcations.

**iOS** : The FCM token is used to identify this device so that FCM can send notifications to it. It is associated with your APNS token when the APNS token is supplied, so that sending messages to the FCM token will be delivered over APNS. 

The FCM token is sometimes refreshed automatically. onTokenReflesh method will be called once a token is available, or has been refreshed. Typically it should be called once per app start, but may be called more often, if token is invalidated or updated. 

Once you have an FCM token, you should send it to your application server, so it can use the FCM token to send notifications to your device. 
**Android** : Returns the notification token.

**Kind**: static method of [<code>messaging</code>](#Firebase.messaging)  
**Access**: public  

| Type |
| --- |
| [<code>getTokenCallback</code>](#Firebase..getTokenCallback) | 

**Example**  
```js
messaging.getToken(function(token) {
    alert(token, "FCM Token");
});
```
<a name="Firebase.messaging.subscribeToTopic"></a>

#### messaging.subscribeToTopic()
Subscribes to topic in the background. Calling this, automatically registers for push notifcations.

**Kind**: static method of [<code>messaging</code>](#Firebase.messaging)  
**Access**: public  
**Params**: <code>string</code> topicName - name of the messaging topic  
<a name="Firebase.messaging.unsubscribeFromTopic"></a>

#### messaging.unsubscribeFromTopic()
Unsubscribes from topic in the background.

**Kind**: static method of [<code>messaging</code>](#Firebase.messaging)  
**Access**: public  
**Params**: <code>string</code> topicName - name of the messaging topic  
<a name="Firebase.messaging"></a>

### Firebase.messaging
Gets the messaging service.

**Kind**: static property of [<code>Firebase</code>](#Firebase)  
**Access**: public  
**Read only**: true  
**Properties**

| Type |
| --- |
| <code>object</code> | 


* [.messaging](#Firebase.messaging)
    * [.ios](#Firebase.messaging.ios)
        * ["onTokenReflesh"](#Firebase.messaging.ios.event_onTokenReflesh)
    * [.getToken()](#Firebase.messaging.getToken)
    * [.subscribeToTopic()](#Firebase.messaging.subscribeToTopic)
    * [.unsubscribeFromTopic()](#Firebase.messaging.unsubscribeFromTopic)

<a name="Firebase.messaging.ios"></a>

#### messaging.ios
iOS specific members

**Kind**: static property of [<code>messaging</code>](#Firebase.messaging)  
**Access**: public  
<a name="Firebase.messaging.ios.event_onTokenReflesh"></a>

##### "onTokenReflesh"
The FCM token is used to identify this device so that FCM can send notifications to it. It is associated with your APNS token when the APNS token is supplied, so that sending messages to the FCM token will be delivered over APNS. 

The FCM token is sometimes refreshed automatically. onTokenReflesh method will be called once a token is available, or has been refreshed. Typically it should be called once per app start, but may be called more often, if token is invalidated or updated. 

Once you have an FCM token, you should send it to your application server, so it can use the FCM token to send notifications to your device.

**Kind**: event emitted by [<code>ios</code>](#Firebase.messaging.ios)  
**Access**: public  
**Params**: <code>string</code> fcmToken  
**Example**  
```js
messaging.ios.onTokenReflesh = function(fcmToken) {
    alert(fcmToken, "onTokenReflesh");
};
```
<a name="Firebase.messaging.getToken"></a>

#### messaging.getToken()
This function is used to keep track of notification tokens of devices. Calling this, automatically registers for push notifcations.

**iOS** : The FCM token is used to identify this device so that FCM can send notifications to it. It is associated with your APNS token when the APNS token is supplied, so that sending messages to the FCM token will be delivered over APNS. 

The FCM token is sometimes refreshed automatically. onTokenReflesh method will be called once a token is available, or has been refreshed. Typically it should be called once per app start, but may be called more often, if token is invalidated or updated. 

Once you have an FCM token, you should send it to your application server, so it can use the FCM token to send notifications to your device. 
**Android** : Returns the notification token.

**Kind**: static method of [<code>messaging</code>](#Firebase.messaging)  
**Access**: public  

| Type |
| --- |
| [<code>getTokenCallback</code>](#Firebase..getTokenCallback) | 

**Example**  
```js
messaging.getToken(function(token) {
    alert(token, "FCM Token");
});
```
<a name="Firebase.messaging.subscribeToTopic"></a>

#### messaging.subscribeToTopic()
Subscribes to topic in the background. Calling this, automatically registers for push notifcations.

**Kind**: static method of [<code>messaging</code>](#Firebase.messaging)  
**Access**: public  
**Params**: <code>string</code> topicName - name of the messaging topic  
<a name="Firebase.messaging.unsubscribeFromTopic"></a>

#### messaging.unsubscribeFromTopic()
Unsubscribes from topic in the background.

**Kind**: static method of [<code>messaging</code>](#Firebase.messaging)  
**Access**: public  
**Params**: <code>string</code> topicName - name of the messaging topic  
<a name="Firebase..getTokenCallback"></a>

### Firebase~getTokenCallback : <code>function</code>
This callback is used to get device notification FCM token

**Kind**: inner typedef of [<code>Firebase</code>](#Firebase)  

| Param | Type |
| --- | --- |
| token | <code>string</code> | 

<a name="Firebase..getIdTokenCallback"></a>

### Firebase~getIdTokenCallback : <code>function</code>
This callback is used to get user id token.

**Kind**: inner typedef of [<code>Firebase</code>](#Firebase)  

| Param | Type |
| --- | --- |
| token | <code>string</code> | 
| error | <code>string</code> | 

<a name="Firebase..setDisplayNameCallback"></a>

### Firebase~setDisplayNameCallback : <code>function</code>
This callback is used to get result for setting display name

**Kind**: inner typedef of [<code>Firebase</code>](#Firebase)  

| Param | Type |
| --- | --- |
| isSuccess | <code>boolean</code> | 
| error | <code>string</code> | 

<a name="FirebaseApp"></a>

## FirebaseApp : <code>object</code>
Firebase App

**Kind**: global constant  

* [FirebaseApp](#FirebaseApp) : <code>object</code>
    * [.ios](#FirebaseApp.ios)
        * [.delete()](#FirebaseApp.ios.delete)
        * [.getBundleId()](#FirebaseApp.ios.getBundleId) ⇒ <code>string</code>
        * [.getClientId()](#FirebaseApp.ios.getClientId) ⇒ <code>string</code>
        * [.getTrackingId()](#FirebaseApp.ios.getTrackingId) ⇒ <code>string</code>
    * [.auth()](#FirebaseApp.auth) ⇒ [<code>FirebaseAuth</code>](#FirebaseAuth)
    * [.getName()](#FirebaseApp.getName) ⇒ <code>string</code>
    * [.getApiKey()](#FirebaseApp.getApiKey) ⇒ <code>string</code>
    * [.getApplicationId()](#FirebaseApp.getApplicationId) ⇒ <code>string</code>
    * [.getDatabaseUrl()](#FirebaseApp.getDatabaseUrl) ⇒ <code>string</code>
    * [.getGcmSenderId()](#FirebaseApp.getGcmSenderId) ⇒ <code>string</code>
    * [.getStorageBucket()](#FirebaseApp.getStorageBucket) ⇒ <code>string</code>

<a name="FirebaseApp.ios"></a>

### FirebaseApp.ios
iOS specific members

**Kind**: static property of [<code>FirebaseApp</code>](#FirebaseApp)  

* [.ios](#FirebaseApp.ios)
    * [.delete()](#FirebaseApp.ios.delete)
    * [.getBundleId()](#FirebaseApp.ios.getBundleId) ⇒ <code>string</code>
    * [.getClientId()](#FirebaseApp.ios.getClientId) ⇒ <code>string</code>
    * [.getTrackingId()](#FirebaseApp.ios.getTrackingId) ⇒ <code>string</code>

<a name="FirebaseApp.ios.delete"></a>

#### ios.delete()
Cleans up the current FIRApp, freeing associated data and returning its name to the pool for future use. This method is thread safe

**Kind**: static method of [<code>ios</code>](#FirebaseApp.ios)  
<a name="FirebaseApp.ios.getBundleId"></a>

#### ios.getBundleId() ⇒ <code>string</code>
The bundle ID for the application

**Kind**: static method of [<code>ios</code>](#FirebaseApp.ios)  
<a name="FirebaseApp.ios.getClientId"></a>

#### ios.getClientId() ⇒ <code>string</code>
The OAuth2 client ID for iOS application used to authenticate Google users

**Kind**: static method of [<code>ios</code>](#FirebaseApp.ios)  
<a name="FirebaseApp.ios.getTrackingId"></a>

#### ios.getTrackingId() ⇒ <code>string</code>
The tracking ID for Google Analytics

**Kind**: static method of [<code>ios</code>](#FirebaseApp.ios)  
<a name="FirebaseApp.auth"></a>

### FirebaseApp.auth() ⇒ [<code>FirebaseAuth</code>](#FirebaseAuth)
Gets the Auth service for the current app

**Kind**: static method of [<code>FirebaseApp</code>](#FirebaseApp)  
<a name="FirebaseApp.getName"></a>

### FirebaseApp.getName() ⇒ <code>string</code>
The name for this app

**Kind**: static method of [<code>FirebaseApp</code>](#FirebaseApp)  
<a name="FirebaseApp.getApiKey"></a>

### FirebaseApp.getApiKey() ⇒ <code>string</code>
API key used for authenticating requests from your app

**Kind**: static method of [<code>FirebaseApp</code>](#FirebaseApp)  
<a name="FirebaseApp.getApplicationId"></a>

### FirebaseApp.getApplicationId() ⇒ <code>string</code>
The Google App ID that is used to uniquely identify an instance of an app

**Kind**: static method of [<code>FirebaseApp</code>](#FirebaseApp)  
<a name="FirebaseApp.getDatabaseUrl"></a>

### FirebaseApp.getDatabaseUrl() ⇒ <code>string</code>
The database root URL

**Kind**: static method of [<code>FirebaseApp</code>](#FirebaseApp)  
<a name="FirebaseApp.getGcmSenderId"></a>

### FirebaseApp.getGcmSenderId() ⇒ <code>string</code>
The Project Number from the Google Developer's console, for example 012345678901, used to configure Google Cloud Messaging

**Kind**: static method of [<code>FirebaseApp</code>](#FirebaseApp)  
<a name="FirebaseApp.getStorageBucket"></a>

### FirebaseApp.getStorageBucket() ⇒ <code>string</code>
The Google Cloud Storage bucket name

**Kind**: static method of [<code>FirebaseApp</code>](#FirebaseApp)  
<a name="FirebaseUser"></a>

## FirebaseUser()
**Kind**: global function  
**See**: [firebase.User](https://firebase.google.com/docs/reference/js/firebase.User)  
<a name="getEmail"></a>

## getEmail() ⇒ <code>string</code>
Returns the main email address of the user, as stored in the Firebase project's user database

**Kind**: global function  
<a name="getDisplayName"></a>

## getDisplayName() ⇒ <code>string</code>
Returns the main display name of this user from the Firebase project's user database

**Kind**: global function  
<a name="getPhoneNumber"></a>

## getPhoneNumber() ⇒ <code>string</code>
Returns the phone number of the user, as stored in the Firebase project's user database, or null if none exists

**Kind**: global function  
<a name="getUID"></a>

## getUID() ⇒ <code>string</code>
Returns a string used to uniquely identify your user in your Firebase project's user database

**Kind**: global function  
<a name="isAnonymous"></a>

## isAnonymous() ⇒ <code>boolean</code>
Returns true if the user is anonymous; that is, the user account was created with signInAnonymously()

**Kind**: global function  
<a name="getIdToken"></a>

## getIdToken([forceRefresh], callback)
Fetches a Firebase Auth ID Token for the user; useful when authenticating against your own backend. Use our server SDKs or follow the official documentation to securely verify the integrity and validity of this token

**Kind**: global function  

| Param | Type | Default | Description |
| --- | --- | --- | --- |
| [forceRefresh] | <code>boolean</code> | <code>false</code> | Force refresh regardless of token expiration |
| callback | [<code>getIdTokenCallback</code>](#Firebase..getIdTokenCallback) |  | Callback for getting the response |

**Example**  
```js
user.getIdToken(false, function(token, error) {
  console.log("User getIdToken " + token + " Error : " + error);
});
```
<a name="setDisplayName"></a>

## setDisplayName(name, callback)
Updates the user display name

**Kind**: global function  

| Param | Type | Description |
| --- | --- | --- |
| name | <code>string</code> | new display name |
| callback | [<code>setDisplayNameCallback</code>](#Firebase..setDisplayNameCallback) | Callback to get the result of setting display name |

**Example**  
```js
user.setDisplayName('name', function(isSuccess, error) {
  console.log("isSuccess " + isSuccess + " Error : " + error);
});
```
<a name="getPhotoURL"></a>

## getPhotoURL() ⇒ <code>string</code>
Returns the URL of this user's main profile picture

**Kind**: global function  
<a name="setPhotoURL"></a>

## setPhotoURL(photoUrl, callback)
Updates the user photo url

**Kind**: global function  

| Param | Type | Description |
| --- | --- | --- |
| photoUrl | <code>string</code> | new url for user photo |
| callback | <code>Firebase~setPhotoURLCallback</code> | Callback to get the result of setting user photo |

**Example**  
```js
user.setPhotoURL('photoUrl', function(isSuccess, error) {
  console.log("isSuccess " + isSuccess + " Error : " + error);
});
```
<a name="FirebaseAuth"></a>

## FirebaseAuth()
classdesc Firebase Auth

**Kind**: global function  
<a name="getCurrentUser"></a>

## getCurrentUser() ⇒ [<code>FirebaseUser</code>](#FirebaseUser)
Synchronously gets the cached current user, or undefined if there is none

**Kind**: global function  
<a name="initializeApp"></a>

## .initializeApp(config, name(Optional))
Initialize your SDK

**Kind**: static function  
**Access**: public  

| Param | Type | Description |
| --- | --- | --- |
| config | <code>Object</code> |  |
| config.iosFile | <code>IO.File</code> | iOS plist file |
| name(Optional) | <code>String</code> |  |

**Example**  
```js
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
<a name="app"></a>

## .app([name]) ⇒ [<code>FirebaseApp</code>](#FirebaseApp)
When called with no arguments, the default app is returned

**Kind**: static function  
**Access**: public  

| Param | Type | Description |
| --- | --- | --- |
| [name] | <code>string</code> | When an app name is provided, the app corresponding to that name is returned. |

<a name="apps"></a>

## .apps([name]) ⇒ [<code>Array.&lt;FirebaseApp&gt;</code>](#FirebaseApp)
Gets the FirebaseApp Array.

**Kind**: static function  
**Returns**: [<code>Array.&lt;FirebaseApp&gt;</code>](#FirebaseApp) - apps  
**Access**: public  

| Param | Type |
| --- | --- |
| [name] | <code>string</code> | 

