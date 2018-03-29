# Firebase plugin from Smartface
[![Twitter: @Smartface_io](https://img.shields.io/badge/contact-@Smartface_io-blue.svg?style=flat)](https://twitter.com/smartface_io)
[![License](https://img.shields.io/badge/license-MIT-green.svg?style=flat)](https://raw.githubusercontent.com/smartface/sf-extension-extendedlabel/master/LICENSE)

## Firebase plugin
Firebase gives you the tools to develop high-quality apps, grow your user base, and earn more money. We cover the essentials so you can monetize your business and focus on your users.

## Installation
Smartface Firebase plugin can be installed via npm easily from our public npm repository. The installation is pretty easy via Smartface Cloud IDE.

- Run command `(cd ~/workspace/scripts && npm i -S sf-plugin-firebase)`

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

Open this lines in config/Android/AndroidManifest.xml file.
```xml
<uses-permission android:name="android.permission.INTERNET" />
<uses-permission android:name="android.permission.ACCESS_NETWORK_STATE" />
<uses-permission android:name="android.permission.WAKE_LOCK" />
```

# How to use
- Initialize your SDK using the following code snippet: (You must write this code in app.js)

```javascript
const Firebase = require('sf-plugin-firebase');
const File = require('sf-core/io/file');
var iOSPlistFile = new File({
    path: 'assets://GoogleService-Info.plist'
});
var androidJsonFile = new File({
    path: 'assets://google-services.json'
});
var firebaseConfig = {
    iosFile : iOSPlistFile,
    androidFile : androidJsonFile
}
Firebase.initializeApp(firebaseConfig);
```

[FirebaseApp](#firebaseapp)<br />
[FirebaseAuth](#firebaseauth)<br />
[FirebaseUser](#firebaseuser)<br />
[FirebaseAnalytics](#firebaseanalytics)<br />
[FirebaseMessaging](#firebasemessaging)

## FirebaseApp

When called with no arguments, the default app is returned. When an app name is provided, the app corresponding to that name is returned.

```javascript
var app = Firebase.app();
```

### FirebaseApp methods

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

## FirebaseAuth

Do not call this constructor directly. Instead, use Firebase.auth().

```javascript
var auth = Firebase.auth();
```
### FirebaseAuth properities

##### ios.languageCode

The current user language code. This property can be set to the app's current language by calling "useAppLanguage".
The string used to set this property must be a language code that follows BCP 47.

```javascript
auth.ios.languageCode = "en";
```

### FirebaseAuth methods

##### getCurrentUser

Synchronously gets the cached current user, or undefined if there is none

```javascript
var user = auth.getCurrentUser();
```

##### ios.useAppLanguage

Sets `languageCode` to the app's current language.

```javascript
auth.ios.useAppLanguage();
```

##### createUserWithEmailAndPassword

Creates and, on success, signs in a user with the given email address and password.

  Possible error codes:
  
  + `FirebaseAuth.Error.InvalidEmail` - Indicates the email address is malformed.
  + `FirebaseAuth.Error.EmailAlreadyInUse` - Indicates the email used to attempt sign up
      already exists. Call fetchProvidersForEmail to check which sign-in mechanisms the user
      used, and prompt the user to sign in with one of those.
  + `FirebaseAuth.Error.OperationNotAllowed` - Indicates that email and password accounts
      are not enabled. Enable them in the Auth section of the Firebase console.
  + `FirebaseAuth.Error.WeakPassword` - Indicates an attempt to set a password that is
      considered too weak. The NSLocalizedFailureReasonErrorKey field in the NSError.userInfo
      dictionary object will contain more detailed explanation that can be shown to the user.
    

```javascript
auth.createUserWithEmailAndPassword("email", "password", function(user, error) {
    if (error) {
        console.log("Code: " + error.code + " Description: " + error.description);
        return;
    }
    console.log("Email: " + user.getEmail());
});
```

##### signInWithEmailAndPassword

 Signs in using an email address and password.

  Possible error codes:

   + `FirebaseAuth.Error.OperationNotAllowed` - Indicates that email and password
       accounts are not enabled. Enable them in the Auth section of the
       Firebase console.
   + `FirebaseAuth.Error.UserDisabled` - Indicates the user's account is disabled.
   + `FirebaseAuth.Error.WrongPassword` - Indicates the user attempted
       sign in with an incorrect password.
   + `FirebaseAuth.Error.InvalidEmail` - Indicates the email address is malformed.

```javascript
auth.signInWithEmailAndPassword("email", "password", function(user, error) {
    if (error) {
        console.log("Code: " + error.code + " Description: " + error.description);
        return;
    }
    console.log("Email: " + user.getEmail());
});
```

##### signInWithCustomToken

 Asynchronously signs in to Firebase with the given Auth token.
 
   Possible error codes:

   + `FirebaseAuth.Error.InvalidCustomToken` - Indicates a validation error with
       the custom token.
   + `FirebaseAuth.Error.CustomTokenMismatch` - Indicates the service account and the API key
       beNumber to different projects.

```javascript
auth.signInWithCustomToken("token", function(user, error) {
    if (error) {
        console.log("Code: " + error.code + " Description: " + error.description);
        return;
    }
    console.log("Email: " + user.getEmail());
});
```

##### signInAnonymously

 Asynchronously creates and becomes an anonymous user.

   Possible error codes:

   + `FirebaseAuth.Error.OperationNotAllowed` - Indicates that anonymous accounts are
       not enabled. Enable them in the Auth section of the Firebase console.
       
```javascript
auth.signInAnonymously(function(user, error) {
    if (error) {
        console.log("Code: " + error.code + " Description: " + error.description);
        return;
    }
    console.log("Email: " + user.getEmail());
});
```

##### sendPasswordResetEmail

Initiates a password reset for the given email address.

     Possible error codes:
     
      + `OperationNotAllowed` - Indicates the administrator disabled sign
          in with the specified identity provider.
      + `UserNotFound` - Indicates the OOB code is expired.
       
```javascript
auth.sendPasswordResetEmail('email', function(isSended, error) {
	console.log("isSended: " + isSended + " Description: " + error);
});
```

##### verifyPasswordResetCode

Checks the validity of a verify password reset code.

      Possible error codes:
     
      + `OperationNotAllowed` - Indicates the administrator disabled sign
          in with the specified identity provider.
      + `ExpiredActionCode` - Indicates the OOB code is expired.
      + `InvalidActionCode` - Indicates the OOB code is invalid. 
    
```javascript
auth.verifyPasswordResetCode('code', function(isSuccess, error) {
	console.log("isSuccess: " + isSuccess + " Description: " + error);
});
```

##### confirmPasswordReset

Changes the user's password to newPassword for the account for which the code is valid. Code validity can be checked with verifyPasswordResetCode(String). This use case is only valid for signed-out users, and behavior is undefined for signed-in users. Password changes for signed-in users should be made using updatePassword(String).

    Possible error codes:
   
    + `WeakPassword` - Indicates an attempt to set a password that is
         considered too weak.
    + `OperationNotAllowed` - Indicates the administrator disabled sign
        in with the specified identity provider.
    + `ExpiredActionCode` - Indicates the OOB code is expired.
    + `InvalidActionCode` - Indicates the OOB code is invalid.    
 
       
```javascript
auth.confirmPasswordReset('code', 'newPassword', function(isSuccess, error) {
	console.log("isSuccess: " + isSuccess + " Description: " + error);
});
```

##### signOut

Signs out the current user.

```javascript
auth.signOut();
```

## FirebaseUser

Synchronously gets the cached current user, or undefined if there is none

```javascript
var user = auth.getCurrentUser();
```

##### getEmail

Returns the main email address of the user, as stored in the Firebase project's user database.

```javascript
var email = user.getEmail();
```

##### getDisplayName

Returns the main display name of this user from the Firebase project's user database.

```javascript
var displayName = user.getDisplayName();
```

##### getPhoneNumber

Returns the phone number of the user, as stored in the Firebase project's user database, or null if none exists.

```javascript
var phoneNumber = user.getPhoneNumber();
```

##### getUID

Returns a string used to uniquely identify your user in your Firebase project's user database.

```javascript
var UID = user.getUID();
```

##### isAnonymous

Returns true if the user is anonymous; that is, the user account was created with signInAnonymously().

```javascript
var isAnonymous = user.isAnonymous();
```

##### getIdToken

Fetches a Firebase Auth ID Token for the user; useful when authenticating against your own backend. Use our server SDKs or follow the official documentation to securely verify the integrity and validity of this token.

```javascript
user.getIdToken(false, function(token, error) {
  console.log("User getIdToken " + token + " Error : " + error);
});
```

##### setDisplayName

Updates the user display name.

```javascript
user.setDisplayName('name', function(isSuccess, error) {
  console.log("isSuccess " + isSuccess + " Error : " + error);
});
```

##### getPhotoURL

Returns the URL of this user's main profile picture.

```javascript
var photoUrl = user.getPhotoURL();
```

##### setPhotoURL

Updates the user photo url.

```javascript
user.setPhotoURL('photoUrl', function(isSuccess, error) {
  console.log("isSuccess " + isSuccess + " Error : " + error);
});
```
 
##### sendEmailVerification

Initiates email verification for the user.

 Possible error code;
  + `UserNotFound` - Indicates the user account was not found.
  + `UserDisabled`
  + `InvalidUserToken`
  + `UserTokenExpired`

```javascript
user.sendEmailVerification(function(isSuccess, error) {
  console.log("isSuccess " + isSuccess + " Error : " + error);
});
```

##### isEmailVerified

Check if user's email is verified.

```javascript
user.isEmailVerified();
```

##### updateEmail

Update email.

 Possible error code;
  + `EmailAlreadyInUse`
  + `InvalidEmail`
  + `RequiresRecentLogin` - Updating a user’s email is a security sensitive operation that requires a recent login from the user. This error indicates the user has not signed in recently enough. To resolve, reauthenticate the user by invoking user.reauthenticate('email','password',callback)

```javascript
user.updateEmail('emailAdress',function(isSuccess, error) {
  console.log("isSuccess " + isSuccess + " Error : " + error);
});
```

##### updatePassword

Update password.

 Possible error code;
  + `OperationNotAllowed`
  + `WeakPassword`
  + `RequiresRecentLogin` - Updating a user’s email is a security sensitive operation that requires a recent login from the user. This error indicates the user has not signed in recently enough. To resolve, reauthenticate the user by invoking user.reauthenticate('email','password',callback)

```javascript
user.updatePassword('password',function(isSuccess, error) {
  console.log("isSuccess " + isSuccess + " Error : " + error);
});
```

##### reload

Reloads the user’s profile data from the server.

Possible error code;

+ `RequiresRecentLogin` - Updating a user’s email is a security sensitive operation that requires a recent login from the user. This error indicates the user has not signed in recently enough. To resolve, reauthenticate the user by invoking user.reauthenticate('email','password',callback)

```javascript
user.reload(function(isSuccess, error) {
  console.log("isSuccess " + isSuccess + " Error : " + error);
});
```

##### delete

Deletes the user record from your Firebase project's database. 
If the operation is successful, the user will be signed out.

Possible error code;

+ `RequiresRecentLogin` - Updating a user’s email is a security sensitive operation that requires a recent login from the user. This error indicates the user has not signed in recently enough. To resolve, reauthenticate the user by invoking user.reauthenticate('email','password',callback)

```javascript
user.delete(function(isSuccess, error) {
  console.log("isSuccess " + isSuccess + " Error : " + error);
});
```

##### reauthenticate

Reauthenticate.

 Possible error code;
  + `OperationNotAllowed`
  + `UserDisabled`
  + `WrongPassword`
  + `UserMismatch`
  + `InvalidEmail`

```javascript
user.reauthenticate('email','password',function(isSuccess, error) {
  console.log("isSuccess " + isSuccess + " Error : " + error);
});
```

## FirebaseAnalytics

Do not call this constructor directly. Instead, use Firebase.analytics().

```javascript
var analytics = Firebase.analytics();
```

### FirebaseAnalytics methods

##### logEvent

Logs an app event. The event can have up to 25 parameters. Events with the same name must have the same parameters. Up to 500 event names are supported. Using predefined events and/or parameters is recommended for optimal reporting.

The following event names are reserved and cannot be used:

  +  ad_activeview
  +  ad_click
  +  ad_exposure
  +  ad_impression
  +  ad_query
  +  adunit_exposure
  +  app_clear_data
  +  app_uninstall
  +  app_update
  +  error
  +  first_open
  +  first_visit
  +  in_app_purchase
  +  notification_dismiss
  +  notification_foreground
  +  notification_open
  +  notification_receive
  +  os_update
  +  screen_view
  +  session_start
  +  user_engagement

**name**  <br />
The name of the event. Should contain 1 to 40 alphanumeric characters or underscores. The name must start with an alphabetic character. Some event names are reserved. <br />
**parameters**  <br />
Parameter names can be up to 40 characters Number and must start with an alphabetic character and contain only alphanumeric characters and underscores.
 
```javascript
analytics.logEvent(FirebaseAnalytics.Event.ADD_TO_CART, 
  [
    new FirebaseAnalytics.CustomAttribute(FirebaseAnalytics.Param.ITEM_ID, "item_id"), 
    new FirebaseAnalytics.CustomAttribute(FirebaseAnalytics.Param.ITEM_NAME, 'item_name') 
  ]
);
``` 
   
Constant Event List:

```FirebaseAnalytics.Event.ADD_PAYMENT_INFO = "add_payment_info";``` <br />
Add Payment Info event. This event signifies that a user has submitted their payment information to your app.

```FirebaseAnalytics.Event.ADD_TO_CART = "add_to_cart";``` <br />
E-Commerce Add To Cart event. This event signifies that an item was added to a cart for purchase.

```
Params : 
+ FirebaseAnalytics.Param.ITEM_ID (String)
+ FirebaseAnalytics.Param.ITEM_NAME (String)
+ FirebaseAnalytics.Param.ITEM_CATEGORY (String)
+ FirebaseAnalytics.Param.QUANTITY (Number)
+ FirebaseAnalytics.Param.PRICE (Number) 
+ FirebaseAnalytics.Param.VALUE (Number) 
+ FirebaseAnalytics.Param.CURRENCY (String) 
+ FirebaseAnalytics.Param.ORIGIN (String) 
+ FirebaseAnalytics.Param.ITEM_LOCATION_ID (String) 
+ FirebaseAnalytics.Param.DESTINATION (String) 
+ FirebaseAnalytics.Param.START_DATE (String) 
+ FirebaseAnalytics.Param.END_DATE (String) 
```

```FirebaseAnalytics.Event.ADD_TO_WISHLIST = "add_to_wishlist";``` <br />
E-Commerce Add To Wishlist event. This event signifies that an item was added to a wishlist. Use this event to identify popular gift items in your app.

```
Params : 
+ FirebaseAnalytics.Param.ITEM_ID (String)
+ FirebaseAnalytics.Param.ITEM_NAME (String)
+ FirebaseAnalytics.Param.ITEM_CATEGORY (String)
+ FirebaseAnalytics.Param.QUANTITY (Number)
+ FirebaseAnalytics.Param.PRICE (Number) 
+ FirebaseAnalytics.Param.VALUE (Number) 
+ FirebaseAnalytics.Param.CURRENCY (String) 
+ FirebaseAnalytics.Param.ITEM_LOCATION_ID (String) 
```

```FirebaseAnalytics.Event.APP_OPEN = "app_open";``` <br />
App Open event. By logging this event when an App becomes active, developers can understand how often users leave and return during the course of a Session. <br />
Although Sessions are automatically reported, this event can provide further clarification around the continuous engagement of app-users

```FirebaseAnalytics.Event.BEGIN_CHECKOUT = "begin_checkout";``` <br />
E-Commerce Begin Checkout event. This event signifies that a user has begun the process of checking out.

```
Params : 
+ FirebaseAnalytics.Param.VALUE (Number) 
+ FirebaseAnalytics.Param.CURRENCY (String) 
+ FirebaseAnalytics.Param.TRANSACTION_ID (String) 
+ FirebaseAnalytics.Param.NUMBER_OF_NIGHTS (Number)  for hotel bookings
+ FirebaseAnalytics.Param.NUMBER_OF_ROOMS (Number)  for hotel bookings
+ FirebaseAnalytics.Param.NUMBER_OF_PASSENGERS (Number)  for travel bookings
+ FirebaseAnalytics.Param.ORIGIN (String)  for travel bookings
+ FirebaseAnalytics.Param.DESTINATION (String)  for travel bookings
+ FirebaseAnalytics.Param.START_DATE (String)  for travel bookings
+ FirebaseAnalytics.Param.END_DATE (String)  for travel bookings
+ FirebaseAnalytics.Param.TRAVEL_CLASS (String)  for travel bookings
```

```FirebaseAnalytics.Event.CAMPAIGN_DETAILS = "campaign_details";``` <br />
Campaign Detail event. Log this event to supply the referral details of a re-engagement campaign.

```
Params : 
+ FirebaseAnalytics.Param.SOURCE
+ FirebaseAnalytics.Param.MEDIUM
+ FirebaseAnalytics.Param.CAMPAIGN
+ FirebaseAnalytics.Param.TERM 
+ FirebaseAnalytics.Param.CONTENT 
+ FirebaseAnalytics.Param.ACLID 
+ FirebaseAnalytics.Param.CP1 
```

```FirebaseAnalytics.Event.ECOMMERCE_PURCHASE = "ecommerce_purchase";``` <br />
E-Commerce Purchase event. This event signifies that an item was purchased by a user.

```
Params : 
+ FirebaseAnalytics.Param.CURRENCY (String) 
+ FirebaseAnalytics.Param.VALUE (Number) 
+ FirebaseAnalytics.Param.TRANSACTION_ID (String) 
+ FirebaseAnalytics.Param.TAX (Number) 
+ FirebaseAnalytics.Param.SHIPPING (Number) 
+ FirebaseAnalytics.Param.COUPON (String) 
+ FirebaseAnalytics.Param.LOCATION (String) 
+ FirebaseAnalytics.Param.NUMBER_OF_NIGHTS (Number)  for hotel bookings
+ FirebaseAnalytics.Param.NUMBER_OF_ROOMS (Number)  for hotel bookings
+ FirebaseAnalytics.Param.NUMBER_OF_PASSENGERS (Number)  for travel bookings
+ FirebaseAnalytics.Param.ORIGIN (String)  for travel bookings
+ FirebaseAnalytics.Param.DESTINATION (String)  for travel bookings
+ FirebaseAnalytics.Param.START_DATE (String)  for travel bookings
+ FirebaseAnalytics.Param.END_DATE (String)  for travel bookings
+ FirebaseAnalytics.Param.TRAVEL_CLASS (String)  for travel bookings
```

```FirebaseAnalytics.Event.GENERATE_LEAD = "generate_lead";``` <br />
Generate Lead event. Log this event when a lead has been generated in the app to understand the efficacy of your install and re-engagement campaigns.

```
Params : 
+ FirebaseAnalytics.Param.CURRENCY (String) 
+ FirebaseAnalytics.Param.VALUE (Number) 
```

```FirebaseAnalytics.Event.JOIN_GROUP = "join_group";``` <br />
Join Group event. Log this event when a user joins a group such as a guild, team or family. Use this event to analyze how popular certain groups or social features are in your app.

```
Params : 
+ FirebaseAnalytics.Param.GROUP_ID (String)
```

```FirebaseAnalytics.Event.LEVEL_UP = "level_up";``` <br />
Level Up event. This event signifies that a player has leveled up in your gaming app.  
It can help you gauge the level distribution of your userbase and help you identify certain levels that are difficult to pass.

```
Params : 
+ FirebaseAnalytics.Param.LEVEL (Number)
+ FirebaseAnalytics.Param.CHARACTER (String) 
```

```FirebaseAnalytics.Event.LOGIN = "login";``` <br />
Login event. Apps with a login feature can report this event to signify that a user has logged in.

```
Params : 
+ FirebaseAnalytics.Param.METHOD (String)
```

```FirebaseAnalytics.Event.POST_SCORE = "post_score";``` <br />
Post Score event. Log this event when the user posts a score in your gaming app. This event can help you understand how users are actually performing in your game and it can help you correlate high scores with certain audiences or behaviors.

```
Params : 
+ FirebaseAnalytics.Param.SCORE (Number)
+ FirebaseAnalytics.Param.LEVEL (Number) 
+ FirebaseAnalytics.Param.CHARACTER (String) 
```

```FirebaseAnalytics.Event.PRESENT_OFFER = "present_offer";``` <br />
Present Offer event. This event signifies that the app has presented a purchase offer to a user.

```
Params : 
+ FirebaseAnalytics.Param.ITEM_ID (String)
+ FirebaseAnalytics.Param.ITEM_NAME (String)
+ FirebaseAnalytics.Param.ITEM_CATEGORY (String)
+ FirebaseAnalytics.Param.QUANTITY (Number)
+ FirebaseAnalytics.Param.PRICE (Number) 
+ FirebaseAnalytics.Param.VALUE (Number) 
+ FirebaseAnalytics.Param.CURRENCY (String) 
+ FirebaseAnalytics.Param.ITEM_LOCATION_ID (String) 
```

```FirebaseAnalytics.Event.PURCHASE_REFUND = "purchase_refund";``` <br />
E-Commerce Purchase Refund event. This event signifies that an item purchase was refunded.

```
Params : 
+ FirebaseAnalytics.Param.CURRENCY (String) 
+ FirebaseAnalytics.Param.VALUE (Number) 
+ FirebaseAnalytics.Param.TRANSACTION_ID (String) 
```

```FirebaseAnalytics.Event.SEARCH = "search";``` <br />
Search event. Apps that support search features can use this event to contextualize search operations by supplying the appropriate, corresponding parameters.  <br />
This event can help you identify the most popular content in your app.

```
Params : 
+ FirebaseAnalytics.Param.SEARCH_TERM (String)
+ FirebaseAnalytics.Param.NUMBER_OF_NIGHTS (Number)  for hotel bookings
+ FirebaseAnalytics.Param.NUMBER_OF_ROOMS (Number)  for hotel bookings
+ FirebaseAnalytics.Param.NUMBER_OF_PASSENGERS (Number)  for travel bookings
+ FirebaseAnalytics.Param.ORIGIN (String)  for travel bookings
+ FirebaseAnalytics.Param.DESTINATION (String)  for travel bookings
+ FirebaseAnalytics.Param.START_DATE (String)  for travel bookings
+ FirebaseAnalytics.Param.END_DATE (String)  for travel bookings
+ FirebaseAnalytics.Param.TRAVEL_CLASS (String)  for travel bookings
```
 
```FirebaseAnalytics.Event.SELECT_CONTENT = "select_content";``` <br />
Select Content event. This general purpose event signifies that a user has selected some content of a certain type in an app. The content can be any object in your app. <br />
This event can help you identify popular content and categories of content in your app.
 
```
Params : 
+ FirebaseAnalytics.Param.CONTENT_TYPE (String)
+ FirebaseAnalytics.Param.ITEM_ID (String)
```

```FirebaseAnalytics.Event.SHARE = "share";``` <br />
Share event. Apps with social features can log the Share event to identify the most viral content.

```
Params :
+ FirebaseAnalytics.Param.CONTENT_TYPE (String)
+ FirebaseAnalytics.Param.ITEM_ID (String)
+ FirebaseAnalytics.Param.METHOD (String)
```

```FirebaseAnalytics.Event.SIGN_UP = "sign_up";``` <br />
Sign Up event. This event indicates that a user has signed up for an account in your app. The parameter signifies the method by which the user signed up.  <br />
Use this event to understand the different behaviors between logged in and logged out users.
 
```
Params :
+ FirebaseAnalytics.Param.METHOD (String)
```

```FirebaseAnalytics.Event.SPEND_VIRTUAL_CURRENCY = "spend_virtual_currency";``` <br />
Spend Virtual Currency event. This event tracks the sale of virtual goods in your app and can help you identify which virtual goods are the most popular objects of purchase.

```
Params :
+ FirebaseAnalytics.Param.ITEM_NAME (String)
+ FirebaseAnalytics.Param.VIRTUAL_CURRENCY_NAME (String)
+ FirebaseAnalytics.Param.VALUE (Number or Number)
```

```FirebaseAnalytics.Event.TUTORIAL_BEGIN = "tutorial_begin";``` <br />
Tutorial Begin event. This event signifies the start of the on-boarding process in your app.

```FirebaseAnalytics.Event.TUTORIAL_COMPLETE = "tutorial_complete";``` <br />
Tutorial End event. Use this event to signify the user’s completion of your app’s on-boarding process.

```FirebaseAnalytics.Event.UNLOCK_ACHIEVEMENT = "unlock_achievement";``` <br />
Unlock Achievement event. Log this event when the user has unlocked an achievement in your game. <br /> 
Since achievements generally represent the breadth of a gaming experience, this event can help you understand how many users are experiencing all that your game has to offer.
 
```FirebaseAnalytics.Event.VIEW_ITEM = "view_item";``` <br />
View Item event. This event signifies that some content was shown to the user. This content may be a product, a webpage or just a simple image or text. Use the appropriate parameters to contextualize the event.  <br /> 
Use this event to discover the most popular items viewed in your app.

```
Params :
+ FirebaseAnalytics.Param.ITEM_ID (String)
+ FirebaseAnalytics.Param.ITEM_NAME (String)
+ FirebaseAnalytics.Param.ITEM_CATEGORY (String)
+ FirebaseAnalytics.Param.ITEM_LOCATION_ID (String) 
+ FirebaseAnalytics.Param.PRICE (Number) 
+ FirebaseAnalytics.Param.QUANTITY (Number) 
+ FirebaseAnalytics.Param.CURRENCY (String) 
+ FirebaseAnalytics.Param.+ FirebaseAnalytics.Param.VALUE (Number) 
+ FirebaseAnalytics.Param.FLIGHT_NUMBER (String)  for travel bookings
+ FirebaseAnalytics.Param.NUMBER_OF_PASSENGERS (Number)  for travel bookings
+ FirebaseAnalytics.Param.NUMBER_OF_NIGHTS (Number)  for travel bookings
+ FirebaseAnalytics.Param.NUMBER_OF_ROOMS (Number)  for travel bookings
+ FirebaseAnalytics.Param.ORIGIN (String)  for travel bookings
+ FirebaseAnalytics.Param.DESTINATION (String)  for travel bookings
+ FirebaseAnalytics.Param.START_DATE (String)  for travel bookings
+ FirebaseAnalytics.Param.END_DATE (String)  for travel bookings
+ FirebaseAnalytics.Param.SEARCH_TERM (String)  for travel bookings
+ FirebaseAnalytics.Param.TRAVEL_CLASS (String)  for travel bookings
```

```FirebaseAnalytics.Event.VIEW_ITEM_LIST = "view_item_list";``` <br />
View Item List event. Log this event when the user has been presented with a list of items of a certain category.

```
Params :
+ FirebaseAnalytics.Param.ITEM_CATEGORY (String)
```

```FirebaseAnalytics.Event.VIEW_SEARCH_RESULTS = "view_search_results";``` <br />
View Search Results event. Log this event when the user has been presented with the results of a search.

```
Params :
+ FirebaseAnalytics.Param.SEARCH_TERM (String)
```

```FirebaseAnalytics.Event.EARN_VIRTUAL_CURRENCY = "earn_virtual_currency";``` <br />
Earn Virtual Currency event. This event tracks the awarding of virtual currency in your app.

```
Params :
+ FirebaseAnalytics.Param.VIRTUAL_CURRENCY_NAME (String)
+ FirebaseAnalytics.Param.VALUE (Number or Number)
```

##### setUserProperty

The following user property names are reserved and cannot be used:

  +  first_open_time
  +  first_visit_time
  +  last_deep_link_referrer
  +  user_id
  +  first_open_after_install

```javascript
analytics.setUserProperty('key', 'value');
```

##### setUserId

Sets the user ID property.

```javascript
analytics.setUserId('ID');
```

##### setCurrentScreen

Sets the current screen name, which specifies the current visual context in your app. This helps identify the areas in your app where users spend their time and how they interact with your app.

screenName            : The name of the current screen. Set to null to clear the current screen name.  <br />
screenClassOverride	  :  The name of the screen class. By default this is the class name of the current Activity. Set to null to revert to the default class name.

```javascript
analytics.setCurrentScreen('screenName','screenClassOverride');
```

## FirebaseMessaging

Do not call this constructor directly. Instead, use Firebase.messaging().

```javascript
var messaging = Firebase.messaging();
```

##### getToken

iOS : The FCM token is used to identify this device so that FCM can send notifications to it.
It is associated with your APNS token when the APNS token is supplied, so that sending
messages to the FCM token will be delivered over APNS. <br />

The FCM token is sometimes refreshed automatically. `onTokenReflesh` method will be called once a token is
available, or has been refreshed. Typically it should be called once per app start, but
may be called more often, if token is invalidated or updated. <br />

Once you have an FCM token, you should send it to your application server, so it can use
the FCM token to send notifications to your device. <br />
Android : Returns the notification token.

```javascript
var token = messaging.getToken();
```

##### subscribeToTopic

Subscribes to topic in the background.

```javascript
messaging.subscribeToTopic('topic');
```

##### unsubscribeFromTopic

Unsubscribes from topic in the background.

```javascript
messaging.unsubscribeFromTopic('topic');
```

##### ios.onTokenReflesh

The FCM token is used to identify this device so that FCM can send notifications to it.
It is associated with your APNS token when the APNS token is supplied, so that sending
messages to the FCM token will be delivered over APNS. <br />

The FCM token is sometimes refreshed automatically. `onTokenReflesh` method will be called once a token is
available, or has been refreshed. Typically it should be called once per app start, but
may be called more often, if token is invalidated or updated. <br />

Once you have an FCM token, you should send it to your application server, so it can use
the FCM token to send notifications to your device. <br />

```javascript
messaging.ios.onTokenReflesh = function(fcmToken){ 
  console.log('Token :' + fcmToken)
};
```

## License
This project is licensed under the terms of the MIT license. See the [LICENSE](https://raw.githubusercontent.com/smartface/sf-extension-extendedlabel/master/LICENSE) file. Within the scope of this license, all modifications to the source code, regardless of the fact that it is used commercially or not, shall be committed as a contribution back to this repository.
