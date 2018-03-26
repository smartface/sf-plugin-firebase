function FirebaseAnalytics() {}

/**
 * Logs an app event. The event can have up to 25 parameters. Events with the same name must have the same parameters. Up to 500 event names are supported. 
 * Using predefined events and/or parameters is recommended for optimal reporting.
 *
 * @event logEvent
 * @param {String} name
 * @param {FirebaseAnalytics.CustomAttribute} params
 * @android
 * @ios
 * @since 0.1
 */
FirebaseAnalytics.logEvent = function(name, params) {};

/**
 * Sets a user property to a given value. Up to 25 user property names are supported. 
 * Once set, user property values persist throughout the app lifecycle and across sessions.
 *
 * @event setUserProperty
 * @param {String} name
 * @param {String,Number} value
 * @android
 * @ios
 * @since 0.1
 */
FirebaseAnalytics.setUserProperty = function(name, value) {};

/**
 * Sets the user ID property. This feature must be used in accordance with Google’s Privacy Policy.
 *
 * @event setUserId
 * @param {String} id
 * @android
 * @ios
 * @since 0.1
 */
FirebaseAnalytics.setUserId = function(id) {};

/**
 * Sets the current screen name, which specifies the current visual context in your app. 
 * This helps identify the areas in your app where users spend their time and how they interact with your app. 
 * Must be called on the main thread.
 *
 * @event setCurrentScreen
 * @param {String} id
 * @android
 * @ios
 * @since 0.1
 */
FirebaseAnalytics.setCurrentScreen = function(screenName, screenClassOverride) {};

