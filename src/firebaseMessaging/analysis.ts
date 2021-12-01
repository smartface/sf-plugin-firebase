export class FirebaseMessaging {
    static ios: { native: any; onTokenReflesh: (token?: string) => void } = {
        native: {},
        onTokenReflesh: () => {}
    };
    /**
     * iOS : Returns the FCM token.
     * Android : Returns the notification token.
     *
     * @param {Firebase~getTokenCallback}
     * @example
     * messaging.getToken(token => {
     *     alert(token, "FCM Token");
     * });
     */
    static getToken(token?: string) {}

    /**
     * Asynchronously subscribes to a topic.
     *
     * @event subscribeToTopic
     * @param {String} topic
     * @android
     * @ios
     * @since 0.1
     */
    static subscribeToTopic(topic: string) {}

    /**
     * Asynchronously unsubscribe from a topic.
     *
     * @event unsubscribeFromTopic
     * @param {String} topic
     * @android
     * @ios
     * @since 0.1
     */
    static unsubscribeFromTopic(topic: string) {}
}
