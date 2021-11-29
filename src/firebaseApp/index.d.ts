export = FirebaseApp;
import FirebaseAuth = require("../firebaseAuth");

/**
 * @classdesc Firebase App
 * @class
 */
declare class FirebaseApp {
    constructor(nativeFirebaseApp: any);
    /**
     * Gets the Auth service for the current app.
     * 
     * @android
     * @ios
     * @since 0.1
     */
    auth(): string;
    /**
     * Gets the Name for the current app.
     * 
     * @android
     * @ios
     * @since 0.1
     */
    getName(): string;
    /**
     * Gets the getApiKey for the current app.
     * 
     * @android
     * @ios
     * @since 0.1
     */
    getApiKey(): string;
    
    /**
     * Gets the getApplicationId for the current app.
     * 
     * @android
     * @ios
     * @since 0.1
     */
    getApplicationId(): string;

    /**
     * Gets the getDatabaseUrl for the current app.
     * 
     * @android
     * @ios
     * @since 0.1
     */
    getDatabaseUrl(): string;
    /**
     * Gets the getGcmSenderId for the current app.
     * 
     * @android
     * @ios
     * @since 0.1
     */
    getGcmSenderId(): string;

    /**
     * Gets the getStorageBucket for the current app.
     * 
     * @android
     * @ios
     * @since 0.1
     */
    getStorageBucket(): string;
    ios: {
        /**-
         * Delete current app,
         * 
         * @event delete
         * @ios
         * @since 0.1
         */
        delete();

        /**
         * Gets the getBundleId for the current app.
         * 
         * @event getBundleId
         * @return {String}
         * @ios
         * @since 0.1
         */
        getBundeId(): string;

        /**
         * Gets the getClientId for the current app.
         * 
         * @event getClientId
         * @return {String}
         * @ios
         * @since 0.1
         */
        getClientId(): string;

        
        /**
         * Gets the getTrackingId for the current app.
         * 
         * @event getTrackingId
         * @return {String}
         * @ios
         * @since 0.1
         */
        getTrackingId(): string;
    }
}