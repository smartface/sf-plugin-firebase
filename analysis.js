/**
 * @type {object}
 * @public
 */
const Firebase = {

    /**
     * Firebase Analytics service
     * @static
     * @public
     * @property {object}
     */
    analytics: {
        /**
         * Logs an app event. The event can have up to 25 parameters. Events with the same name must have the same parameters. Up to 500 event names are supported. Using predefined events and/or parameters is recommended for optimal reporting<br />
         * The following event names are reserved and cannot be used: <br />
         * <span style="color:orange;">ad_activeview, ad_click, ad_exposure, ad_impression, ad_query, adunit_exposure, app_clear_data, app_uninstall, app_update, error, first_open, first_visit, in_app_purchase, notification_dismiss, notification_foreground, notification_open, notification_receive, os_update, screen_view, session_start, user_engagement</span><br />
         * For predefined event list please see {@link ./firebaseAnalyticsEvent.md|firebaseAnalyticsEvent}
         * @method
         * @params {string} eventName - The name of the event. Should contain 1 to 40 alphanumeric characters or underscores. The name must start with an alphabetic character. Some event names are reserved
         * @params {Firebase.analytics.CustomAttribute[]} attributes - Parameter names can be up to 40 characters Number and must start with an alphabetic character and contain only alphanumeric characters and underscores. String, long and double value types are supported. String  values can be up to 100 characters long. The "firebase_", "google_" and "ga_" prefixes are reserved and should not be used for parameter names.
         * @public
         * @static
         * @example
         * analytics.logEvent(FirebaseAnalytics.Event.ADD_TO_CART, 
         *   [
         *     new FirebaseAnalytics.CustomAttribute(FirebaseAnalytics.Param.ITEM_ID, "item_id"), 
         *     new FirebaseAnalytics.CustomAttribute(FirebaseAnalytics.Param.ITEM_NAME, 'item_name') 
         *   ]
         * );
         */
        logEvent: function(eventName, attributes) {},

        /**
         * Creates a new CustomAttribute
         * @class
         * @public
         * @static
         * @params {string} name - Name of the attribute. Parameter names can be up to 40 characters Number and must start with an alphabetic character and contain only alphanumeric characters and underscores. String, long and double value types are supported. String  values can be up to 100 characters long. The "firebase_", "google_" and "ga_" prefixes are reserved and should not be used for parameter names.
         * @params {string|number} value - Value of the attribute. String, long and double value types are supported. String  values can be up to 100 characters long. The "firebase_", "google_" and "ga_" prefixes are reserved and should not be used for parameter names.
         */
        CustomAttribute: function(name, value) {},

        /**
         * Sets a user property<br />
         * The following event names are reserved and cannot be used: <br />
         * <span style="color:orange;">first_open_time, first_visit_time, last_deep_link_referrer, user_id, first_open_after_install</span>
         * @method
         * @public
         * @static
         * @params {string} key - user property name
         * @params {string} value - user property value
         */
        setUserProperty: function(key, value) {},

        /**
         * Sets the user ID property
         * @params {string} id
         */
        setUserId: function(id) {},

        /**
         * Sets the current screen name, which specifies the current visual context in your app. This helps identify the areas in your app where users spend their time and how they interact with your app
         * @params {string} screenName - The name of the current screen. Set to null to clear the current screen name
         * @params {string} - screenClassOverride - The name of the screen class. By default this is the class name of the current Activity. Set to null to revert to the default class name
         */
        setCurrentScreen: function(screenName, screenClassOverride) {},
        
        /**
         * Enumeration for predefined Firebase events
         * @enum
         * @see {@link ./firebaseAnalyticsEvent.md|firebaseAnalyticsEvent}
         */
        Event: {}
    },

    /**
     * Firebase Messaging service
     * @static
     * @public
     * @property {object}
     */
    messaging: {
        /**
         * This function is used to keep track of notification tokens of devices. Calling this, automatically registers for push notifcations.
         * 
         * **iOS** : The FCM token is used to identify this device so that FCM can send notifications to it. It is associated with your APNS token when the APNS token is supplied, so that sending messages to the FCM token will be delivered over APNS. 
         * 
         * The FCM token is sometimes refreshed automatically. onTokenReflesh method will be called once a token is available, or has been refreshed. Typically it should be called once per app start, but may be called more often, if token is invalidated or updated. 
         * 
         * Once you have an FCM token, you should send it to your application server, so it can use the FCM token to send notifications to your device. 
         * **Android** : Returns the notification token.
         * @method
         * @public
         * @static
         * @param {Firebase~getTokenCallback}
         * @example
         * messaging.getToken(function(token) {
         *     alert(token, "FCM Token");
         * });
         */
        getToken: function(callback) {},
        /**
         * This callback is used to get device notification FCM token
         * @callback Firebase~getTokenCallback
         * @param {string} token
         */

        /**
         * Subscribes to topic in the background. Calling this, automatically registers for push notifcations.
         * @method
         * @public
         * @static
         * @params {string} topicName - name of the messaging topic
         */
        subscribeToTopic: function(topicName) {},


        /**
         * Unsubscribes from topic in the background.
         * @method
         * @public
         * @static
         * @params {string} topicName - name of the messaging topic
         */
        unsubscribeFromTopic: function(topicName) {},

        /**
         * iOS specific members
         * @public
         * @static
         */
        ios: {

            /**
             * The FCM token is used to identify this device so that FCM can send notifications to it. It is associated with your APNS token when the APNS token is supplied, so that sending messages to the FCM token will be delivered over APNS. 
             * 
             * The FCM token is sometimes refreshed automatically. onTokenReflesh method will be called once a token is available, or has been refreshed. Typically it should be called once per app start, but may be called more often, if token is invalidated or updated. 
             * 
             * Once you have an FCM token, you should send it to your application server, so it can use the FCM token to send notifications to your device. 
             * @event
             * @public
             * @static
             * @params {string} fcmToken 
             * @example
             * messaging.ios.onTokenReflesh = function(fcmToken) {
             *     alert(fcmToken, "onTokenReflesh");
             * };
             */
            onTokenReflesh: function(fcmToken) {}
        }

    }

};



/**
 * Initialize your SDK
 * @method initializeApp
 * @static
 * @public
 * @param {Object} config
 * @param {IO.File} config.iosFile - iOS plist file
 * @param {String} name(Optional)
 * @example
 * const Firebase = require('sf-plugin-firebase');
 * const File = require('@smartface/native/io/file');
 * 
 * var iOSPlistFile = new File({
 *     path: 'assets://GoogleService-Info.plist'
 * });
 * var firebaseConfig = {
 *     iosFile : iOSPlistFile
 * };
 * Firebase.initializeApp(firebaseConfig);
 */
Firebase.initializeApp = function(config, name) {};

/**
 * @classdesc Firebase User
 * @see {@link https://firebase.google.com/docs/reference/js/firebase.User|firebase.User}
 * @constructor
 */
function FirebaseUser() {
    /**
     * Returns the main email address of the user, as stored in the Firebase project's user database
     * @method
     * @returns {string}
     */
    this.getEmail = function() {};


    /**
     * Returns the main display name of this user from the Firebase project's user database
     * @method
     * @returns {string}
     */
    this.getDisplayName = function() {};

    /**
     * Returns the phone number of the user, as stored in the Firebase project's user database, or null if none exists
     * @method
     * @returns {string}
     */
    this.getPhoneNumber = function() {};

    /**
     * Returns a string used to uniquely identify your user in your Firebase project's user database
     * @method
     * @returns {string}
     */
    this.getUID = function() {};

    /**
     * Returns true if the user is anonymous; that is, the user account was created with signInAnonymously()
     * @method
     * @returns {boolean}
     */
    this.isAnonymous = function() {};

    /**
     * Fetches a Firebase Auth ID Token for the user; useful when authenticating against your own backend. Use our server SDKs or follow the official documentation to securely verify the integrity and validity of this token
     * @method
     * @param {boolean} [forceRefresh = false] - Force refresh regardless of token expiration
     * @param {Firebase~getIdTokenCallback} callback - Callback for getting the response
     * @example
     * user.getIdToken(false, function(token, error) {
     *   console.log("User getIdToken " + token + " Error : " + error);
     * });
     */
    this.getIdToken = function(forceRefresh, callback) {};

    /**
     * This callback is used to get user id token.
     * @callback Firebase~getIdTokenCallback
     * @param {string} token
     * @param {string} error
     */

    /**
     * Updates the user display name
     * @method
     * @param {string} name - new display name
     * @param {Firebase~setDisplayNameCallback} callback - Callback to get the result of setting display name
     * @example
     * user.setDisplayName('name', function(isSuccess, error) {
     *   console.log("isSuccess " + isSuccess + " Error : " + error);
     * });
     */
    this.setDisplayName = function(name, callback) {};

    /**
     * This callback is used to get result for setting display name
     * @callback Firebase~setDisplayNameCallback
     * @param {boolean} isSuccess
     * @param {string} error
     */

    /**
     * Returns the URL of this user's main profile picture
     * @method
     * @returns {string}
     */
    this.getPhotoURL = function() {};

    /**
     * Updates the user photo url
     * @method
     * @param {string} photoUrl - new url for user photo
     * @param {Firebase~setPhotoURLCallback} callback - Callback to get the result of setting user photo
     * @example
     * user.setPhotoURL('photoUrl', function(isSuccess, error) {
     *   console.log("isSuccess " + isSuccess + " Error : " + error);
     * });
     */
    this.setPhotoURL = function(photoUrl, callback) {};

    /**
     * This callback is used to get result of setting user photo.
     * @callback Firebase~setDisplayNameCallback
     * @param {boolean} isSuccess
     * @param {string} error
     */
}

/**
 * @classdesc Firebase Auth
 * @class
 */
function FirebaseAuth() {

    this.ios = {
        /**
         * @property {string} - languageCode - The current user language code. This property can be set to the app's current language by calling "useAppLanguage". The string used to set this property must be a language code that follows BCP 47
         */
        languageCode: "en"
    };

    /**
     * Synchronously gets the cached current user, or undefined if there is none
     * @returns {FirebaseUser} 
     */
    this.getCurrentUser = function() {};


}

/**
 * Firebase App
 * @type {object} FirebaseApp
 */
const FirebaseApp = {
    /**
     * Gets the Auth service for the current app
     * @method
     * @returns {FirebaseAuth}
     */
    auth: function() {},

    /**
     * The name for this app
     * @method
     * @returns {string}
     */
    getName: function() {},

    /**
     * API key used for authenticating requests from your app
     * @method
     * @returns {string}
     */
    getApiKey: function() {},

    /**
     * The Google App ID that is used to uniquely identify an instance of an app
     * @method
     * @returns {string}
     */
    getApplicationId: function() {},

    /**
     * The database root URL
     * @method
     * @returns {string}
     */
    getDatabaseUrl: function() {},

    /**
     * The Project Number from the Google Developer's console, for example 012345678901, used to configure Google Cloud Messaging
     * @method
     * @returns {string}
     */
    getGcmSenderId: function() {},

    /**
     * The Google Cloud Storage bucket name
     * @method
     * @returns {string}
     */
    getStorageBucket: function() {},

    /**
     * iOS specific members
     */
    ios: {
        /**
         * Cleans up the current FIRApp, freeing associated data and returning its name to the pool for future use. This method is thread safe
         * @method
         */
        delete: function() {},

        /**
         * The bundle ID for the application
         * @method
         * @returns {string}
         */
        getBundleId: function() {},

        /**
         * The OAuth2 client ID for iOS application used to authenticate Google users
         * @method
         * @returns {string}
         */
        getClientId: function() {},

        /**
         * The tracking ID for Google Analytics
         * @method
         * @returns {string}
         */
        getTrackingId: function() {}
    }
};



/**
 * When called with no arguments, the default app is returned
 * @method app
 * @static
 * @param {string} [name] - When an app name is provided, the app corresponding to that name is returned.
 * @public
 * @returns {FirebaseApp}
 */
Firebase.app = function(name) {};

/**
 * Gets the FirebaseApp Array.
 * @method apps
 * @static
 * @param {string=} name
 * @public
 * @returns {FirebaseApp[]} apps
 */
Firebase.apps = function() {};


/**
 * Gets the messaging service.
 * @property {object}
 * @static
 * @readonly
 * @public
 */
Firebase.messaging = {


};


module.exports = Firebase;
