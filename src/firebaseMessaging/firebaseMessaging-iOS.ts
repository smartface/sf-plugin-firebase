// @ts-ignore
import { Invocation } from '@smartface/native/util';

export default class FirebaseMessaging {
    static ios: { native: any; onTokenReflesh: (token?: string) => void } = {
        native: {},
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
        onTokenReflesh: () => {}
    };
    constructor() {
        FirebaseMessaging.ios.native.messaging = () => Invocation.invokeClassMethod('FIRMessaging', 'messaging', [], 'NSObject');

        FirebaseMessaging.ios.native.FCMToken = () =>
            Invocation.invokeInstanceMethod(FirebaseMessaging.ios.native.messaging(), 'FCMToken', [], 'NSString');

        FirebaseMessaging.ios.native.subscribeToTopic = (topic) => {
            const argTopic = new Invocation.Argument({
                type: 'NSString',
                value: topic
            });
            Invocation.invokeInstanceMethod(FirebaseMessaging.ios.native.messaging(), 'subscribeToTopic:', [argTopic]);
        };

        FirebaseMessaging.ios.native.unsubscribeFromTopic = (topic) => {
            const argTopic = new Invocation.Argument({
                type: 'NSString',
                value: topic
            });
            Invocation.invokeInstanceMethod(FirebaseMessaging.ios.native.messaging(), 'unsubscribeFromTopic:', [argTopic]);
        };

        FirebaseMessaging.ios.native.messagingDidReceiveRegistrationToken = () => {
            if (!FirebaseMessaging.ios.native.messagingDelegate) {
                const messagingAlloc = Invocation.invokeClassMethod('MessagingDelegate', 'alloc', [], 'id');
                FirebaseMessaging.ios.native.messagingDelegate = Invocation.invokeInstanceMethod(messagingAlloc, 'init', [], 'NSObject');
                const argDelegate = new Invocation.Argument({
                    type: 'NSObject',
                    value: FirebaseMessaging.ios.native.messagingDelegate
                });
                Invocation.invokeInstanceMethod(FirebaseMessaging.ios.native.messaging(), 'setDelegate:', [argDelegate]);
            }
            const argMessaggingDidRecieve = new Invocation.Argument({
                type: 'JSValue',
                value: function (e) {
                    if (typeof FirebaseMessaging.ios.onTokenReflesh === 'function') {
                        FirebaseMessaging.ios.onTokenReflesh(e.fcmToken);
                    }
                }
            });
            Invocation.invokeInstanceMethod(FirebaseMessaging.ios.native.messagingDelegate, 'setMessagingDidReceiveRegistrationToken:', [
                argMessaggingDidRecieve
            ]);
        };

        FirebaseMessaging.ios.native.messagingDidReceiveRegistrationToken();
    }
    /**
     * Asynchronously subscribes to a topic.
     *
     * @event subscribeToTopic
     * @param {String} topic
     * @android
     * @ios
     * @since 0.1
     */
    static subscribeToTopic(topic: string) {
        FirebaseMessaging.ios.native.subscribeToTopic(topic);
    }
    /**
     * Asynchronously unsubscribe from a topic.
     *
     * @event unsubscribeFromTopic
     * @param {String} topic
     * @android
     * @ios
     * @since 0.1
     */
    static unsubscribeFromTopic(topic: string) {
        FirebaseMessaging.ios.native.unsubscribeFromTopic(topic);
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
    static getToken(callback: (token?: string) => void) {
        typeof callback === 'function' && callback(FirebaseMessaging.ios.native.FCMToken());
    }
}
