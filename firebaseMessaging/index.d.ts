export = FirebaseMessaging;

/**
 * Gets the messaging service.
 * @property {object}
 * @static
 * @readonly
 * @public
 */
declare class FirebaseMessaging {
    private constructor(); // To prevent creating instance
    static ios: {
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
        onTokenReflesh(fcmToken: string): void;
    }
    /**
     * iOS : Returns the FCM token.
     * Android : Returns the notification token.
     * 
     * @event getToken
     * @android
     * @ios
     * @since 0.1
     */
    static getToken(e: (token: string) => void): string;

    /**
     * Asynchronously subscribes to a topic.
     * 
     * @event subscribeToTopic
     * @param {String} topic
     * @android
     * @ios
     * @since 0.1
     */
    static subscribeToTopic(topic: string): void; 

    /**
     * Asynchronously unsubscribe from a topic.
     * 
     * @event unsubscribeFromTopic
     * @param {String} topic
     * @android
     * @ios
     * @since 0.1
     */
    static unsubscribeFromTopic(topic: string): void;
}