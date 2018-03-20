function Firebase() {}

/**
 * Initialize your SDK
 *
 * @event initializeApp
 * @param {Object} config
 * @param {IO.File} config.iosFile
 * @param {IO.File} config.androidFile
 * @param {String} name(Optional)
 * @android
 * @ios
 * @since 0.1
 */
Firebase.initializeApp = function(config,name) {};

/**
 * When called with no arguments, the default app is returned. 
 * When an app name is provided, the app corresponding to that name is returned.
 *
 * @event app
 * @param {String} name(Optional)
 * @return {FirebaseApp} app
 * @android
 * @ios
 * @since 0.1
 */
Firebase.app = function(name) {};

/**
 * Gets the FirebaseApp Array.
 * 
 * @event apps
 * @param {String} name(Optional)
 * @return {Array} apps
 * @android
 * @ios
 * @since 0.1
 */
Firebase.apps = function() {};

/**
 * Gets the Auth service for the default app or a given app.
 * 
 * @event auth
 * @param {FirebaseApp} FirebaseApp(Optional)
 * @return {FirebaseAuth}
 * @android
 * @ios
 * @since 0.1
 */
Firebase.auth = function(FirebaseApp) {};

/**
 * Gets the Analytics service.
 * 
 * @event analytics
 * @return {FirebaseAnalytics}
 * @android
 * @ios
 * @since 0.1
 */
Firebase.analytics = function() {};

/**
 * Gets the messaging service.
 * 
 * @event messaging
 * @return {FirebaseMessaging}
 * @android
 * @ios
 * @since 0.1
 */
Firebase.messaging = function() {};