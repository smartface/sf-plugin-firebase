function FirebaseApp(nativeFirebaseApp) {}

/**
 * Gets the Auth service for the current app.
 * 
 * @event auth
 * @return {FirebaseAuth}
 * @android
 * @ios
 * @since 0.1
 */
FirebaseApp.prototype.auth = function() {};

/**
 * Gets the Name for the current app.
 * 
 * @event getName
 * @return {String}
 * @android
 * @ios
 * @since 0.1
 */
FirebaseApp.prototype.getName = function() {};

/**
 * Gets the getApiKey for the current app.
 * 
 * @event getApiKey
 * @return {String}
 * @android
 * @ios
 * @since 0.1
 */
FirebaseApp.prototype.getApiKey = function() {};

/**
 * Gets the getApplicationId for the current app.
 * 
 * @event getApplicationId
 * @return {String}
 * @android
 * @ios
 * @since 0.1
 */
FirebaseApp.prototype.getApplicationId = function() {};

/**
 * Gets the getDatabaseUrl for the current app.
 * 
 * @event getDatabaseUrl
 * @return {String}
 * @android
 * @ios
 * @since 0.1
 */
FirebaseApp.prototype.getDatabaseUrl = function() {};

/**
 * Gets the getGcmSenderId for the current app.
 * 
 * @event getGcmSenderId
 * @return {String}
 * @android
 * @ios
 * @since 0.1
 */
FirebaseApp.prototype.getGcmSenderId = function() {};

/**
 * Gets the getStorageBucket for the current app.
 * 
 * @event getStorageBucket
 * @return {String}
 * @android
 * @ios
 * @since 0.1
 */
FirebaseApp.prototype.getStorageBucket = function() {};

/**
 * Delete current app,
 * 
 * @event delete
 * @ios
 * @since 0.1
 */
FirebaseApp.prototype.ios.delete = function() {};

/**
 * Gets the getBundleId for the current app.
 * 
 * @event getBundleId
 * @return {String}
 * @ios
 * @since 0.1
 */
FirebaseApp.prototype.ios.getBundleId = function() {};

/**
 * Gets the getClientId for the current app.
 * 
 * @event getClientId
 * @return {String}
 * @ios
 * @since 0.1
 */
FirebaseApp.prototype.ios.getClientId = function() {};

/**
 * Gets the getTrackingId for the current app.
 * 
 * @event getTrackingId
 * @return {String}
 * @ios
 * @since 0.1
 */
FirebaseApp.prototype.ios.getTrackingId = function() {};

