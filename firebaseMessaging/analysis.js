function FirebaseMessaging() {}

/**
 *  The FCM token is used to identify this device so that FCM can send notifications to it.
 *  It is associated with your APNS token when the APNS token is supplied, so that sending
 *  messages to the FCM token will be delivered over APNS.
 *
 *  The FCM token is sometimes refreshed automatically. `onTokenReflesh` method will be called once a token is
 *  available, or has been refreshed. Typically it should be called once per app start, but
 *  may be called more often, if token is invalidated or updated.
 *
 *  Once you have an FCM token, you should send it to your application server, so it can use
 *  the FCM token to send notifications to your device.
 *
 * @event onTokenReflesh
 * @ios
 * @since 0.1
 */
FirebaseMessaging.ios.onTokenReflesh = function(fcmToken) {};

/**
 * iOS : Returns the FCM token.
 * Android : Returns the notification token.
 * 
 * @event getToken
 * @android
 * @ios
 * @since 0.1
 */
FirebaseMessaging.getToken = function() {}; // Return string

/**
 * Asynchronously subscribes to a topic.
 * 
 * @event subscribeToTopic
 * @param {String} topic
 * @android
 * @ios
 * @since 0.1
 */
FirebaseMessaging.subscribeToTopic = function(topic) {};

/**
 * Asynchronously unsubscribe from a topic.
 * 
 * @event unsubscribeFromTopic
 * @param {String} topic
 * @android
 * @ios
 * @since 0.1
 */
FirebaseMessaging.unsubscribeFromTopic = function(topic) {};

