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
#### FirebaseAuth properities

##### languageCode

The current user language code. This property can be set to the app's current language by calling "useAppLanguage".
The string used to set this property must be a language code that follows BCP 47.

```javascript
auth.languageCode = "en";
```

#### FirebaseAuth methods

##### getCurrentUser

Synchronously gets the cached current user, or undefined if there is none

```javascript
var user = auth.getCurrentUser();
```

##### useAppLanguage

Sets `languageCode` to the app's current language.

```javascript
auth.useAppLanguage();
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
       belong to different projects.

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

##### signOut

Signs out the current user.

```javascript
auth.signOut();
```

### FirebaseAnalytics

Do not call this constructor directly. Instead, use Firebase.analytics().

```javascript
var analytics = Firebase.analytics();
```

#### FirebaseAnalytics methods

##### logEvent

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
  
```javascript
analytics.logEvent('eventName', 
  [
    new FirebaseAnalytics.CustomAttribute("key1", "value1"), 
    new FirebaseAnalytics.CustomAttribute("key2", 2) 
  ]
);
``` 
   
Constant Event List:

```FirebaseAnalyticsEvent.ADD_PAYMENT_INFO = "add_payment_info";``` <br />
Add Payment Info event. This event signifies that a user has submitted their payment information to your app.

```FirebaseAnalyticsEvent.ADD_TO_CART = "add_to_cart";``` <br />
E-Commerce Add To Cart event. This event signifies that an item was added to a cart for purchase.

```FirebaseAnalyticsEvent.ADD_TO_WISHLIST = "add_to_wishlist";``` <br />
E-Commerce Add To Wishlist event. This event signifies that an item was added to a wishlist. Use this event to identify popular gift items in your app.

```FirebaseAnalyticsEvent.APP_OPEN = "app_open";``` <br />
App Open event. By logging this event when an App becomes active, developers can understand how often users leave and return during the course of a Session. <br />
Although Sessions are automatically reported, this event can provide further clarification around the continuous engagement of app-users

```FirebaseAnalyticsEvent.BEGIN_CHECKOUT = "begin_checkout";``` <br />
E-Commerce Begin Checkout event. This event signifies that a user has begun the process of checking out.

```FirebaseAnalyticsEvent.CAMPAIGN_DETAILS = "campaign_details";``` <br />
Campaign Detail event. Log this event to supply the referral details of a re-engagement campaign.

```FirebaseAnalyticsEvent.ECOMMERCE_PURCHASE = "ecommerce_purchase";``` <br />
E-Commerce Purchase event. This event signifies that an item was purchased by a user.

```FirebaseAnalyticsEvent.GENERATE_LEAD = "generate_lead";``` <br />
Generate Lead event. Log this event when a lead has been generated in the app to understand the efficacy of your install and re-engagement campaigns.

```FirebaseAnalyticsEvent.JOIN_GROUP = "join_group";``` <br />
Join Group event. Log this event when a user joins a group such as a guild, team or family. Use this event to analyze how popular certain groups or social features are in your app.

```FirebaseAnalyticsEvent.LEVEL_UP = "level_up";``` <br />
Level Up event. This event signifies that a player has leveled up in your gaming app.  
It can help you gauge the level distribution of your userbase and help you identify certain levels that are difficult to pass.
 
```FirebaseAnalyticsEvent.LOGIN = "login";``` <br />
Login event. Apps with a login feature can report this event to signify that a user has logged in.

```FirebaseAnalyticsEvent.POST_SCORE = "post_score";``` <br />
Post Score event. Log this event when the user posts a score in your gaming app. This event can help you understand how users are actually performing in your game and it can help you correlate high scores with certain audiences or behaviors.

```FirebaseAnalyticsEvent.PRESENT_OFFER = "present_offer";``` <br />
Present Offer event. This event signifies that the app has presented a purchase offer to a user.

```FirebaseAnalyticsEvent.PURCHASE_REFUND = "purchase_refund";``` <br />
E-Commerce Purchase Refund event. This event signifies that an item purchase was refunded.

```FirebaseAnalyticsEvent.SEARCH = "search";``` <br />
Search event. Apps that support search features can use this event to contextualize search operations by supplying the appropriate, corresponding parameters.  <br />
This event can help you identify the most popular content in your app.
 
```FirebaseAnalyticsEvent.SELECT_CONTENT = "select_content";``` <br />
Select Content event. This general purpose event signifies that a user has selected some content of a certain type in an app. The content can be any object in your app. <br />
This event can help you identify popular content and categories of content in your app.
 
```FirebaseAnalyticsEvent.SHARE = "share";``` <br />
Share event. Apps with social features can log the Share event to identify the most viral content.

```FirebaseAnalyticsEvent.SIGN_UP = "sign_up";``` <br />
Sign Up event. This event indicates that a user has signed up for an account in your app. The parameter signifies the method by which the user signed up.  <br />
Use this event to understand the different behaviors between logged in and logged out users.
 
```FirebaseAnalyticsEvent.SPEND_VIRTUAL_CURRENCY = "spend_virtual_currency";``` <br />
Spend Virtual Currency event. This event tracks the sale of virtual goods in your app and can help you identify which virtual goods are the most popular objects of purchase.

```FirebaseAnalyticsEvent.TUTORIAL_BEGIN = "tutorial_begin";``` <br />
Tutorial Begin event. This event signifies the start of the on-boarding process in your app.

```FirebaseAnalyticsEvent.TUTORIAL_COMPLETE = "tutorial_complete";``` <br />
Tutorial End event. Use this event to signify the user’s completion of your app’s on-boarding process.

```FirebaseAnalyticsEvent.UNLOCK_ACHIEVEMENT = "unlock_achievement";``` <br />
Unlock Achievement event. Log this event when the user has unlocked an achievement in your game. <br /> 
Since achievements generally represent the breadth of a gaming experience, this event can help you understand how many users are experiencing all that your game has to offer.
 
```FirebaseAnalyticsEvent.VIEW_ITEM = "view_item";``` <br />
View Item event. This event signifies that some content was shown to the user. This content may be a product, a webpage or just a simple image or text. Use the appropriate parameters to contextualize the event.  <br /> 
Use this event to discover the most popular items viewed in your app.
 
```FirebaseAnalyticsEvent.VIEW_ITEM_LIST = "view_item_list";``` <br />
View Item List event. Log this event when the user has been presented with a list of items of a certain category.

```FirebaseAnalyticsEvent.VIEW_SEARCH_RESULTS = "view_search_results";``` <br />
View Search Results event. Log this event when the user has been presented with the results of a search.

```FirebaseAnalyticsEvent.EARN_VIRTUAL_CURRENCY = "earn_virtual_currency";``` <br />
Earn Virtual Currency event. This event tracks the awarding of virtual currency in your app.

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



### FirebaseMessaging

Do not call this constructor directly. Instead, use Firebase.messaging().

```javascript
var messaging = Firebase.messaging();
```





## License
This project is licensed under the terms of the MIT license. See the [LICENSE](https://raw.githubusercontent.com/smartface/sf-extension-extendedlabel/master/LICENSE) file. Within the scope of this license, all modifications to the source code, regardless of the fact that it is used commercially or not, shall be committed as a contribution back to this repository.
