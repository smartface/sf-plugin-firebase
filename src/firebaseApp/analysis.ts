export default class FirebaseApp {
    static ios: FirebaseAppIOS = {
        native: {}
    };
    /**
     * Gets the Auth service for the current app.
     *
     * @event auth
     * @return {FirebaseAuth}
     * @android
     * @ios
     * @since 0.1
     */
    auth() {}

    /**
     * Gets the Name for the current app.
     *
     * @event getName
     * @return {String}
     * @android
     * @ios
     * @since 0.1
     */
    getName() {}

    /**
     * Gets the getApiKey for the current app.
     *
     * @event getApiKey
     * @return {String}
     * @android
     * @ios
     * @since 0.1
     */
    getApiKey() {}

    /**
     * Gets the getApplicationId for the current app.
     *
     * @event getApplicationId
     * @return {String}
     * @android
     * @ios
     * @since 0.1
     */
    getApplicationId() {}

    /**
     * Gets the getDatabaseUrl for the current app.
     *
     * @event getDatabaseUrl
     * @return {String}
     * @android
     * @ios
     * @since 0.1
     */
    getDatabaseUrl() {}

    /**
     * Gets the getGcmSenderId for the current app.
     *
     * @event getGcmSenderId
     * @return {String}
     * @android
     * @ios
     * @since 0.1
     */
    getGcmSenderId() {}

    /**
     * Gets the getStorageBucket for the current app.
     *
     * @event getStorageBucket
     * @return {String}
     * @android
     * @ios
     * @since 0.1
     */
    getStorageBucket() {}

    ios: {
        native?: any;
        delete?: (callback: (e) => {}) => void;
        getBundleId?: () => any;
        getClientId?: () => any;
        getTrackingId?: () => any;
    };
    constructor(nativeObject: any) {
        this.ios = {};
        /**
         * Delete current app,
         *
         * @event delete
         * @ios
         * @since 0.1
         */
        this.ios.delete = function (callback: (e) => {}) {};
        /**
         * Gets the getBundleId for the current app.
         *
         * @event getBundleId
         * @return {String}
         * @ios
         * @since 0.1
         */
        this.ios.getBundleId = function () {};
        /**
         * Gets the getClientId for the current app.
         *
         * @event getClientId
         * @return {String}
         * @ios
         * @since 0.1
         */
        this.ios.getClientId = function () {};
        /**
         * Gets the getTrackingId for the current app.
         *
         * @event getTrackingId
         * @return {String}
         * @ios
         * @since 0.1
         */
        this.ios.getTrackingId = function () {};
        this.ios.native = {};
    }
}
