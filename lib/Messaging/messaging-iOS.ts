// @ts-ignore
import Invocation from '@smartface/native/util/iOS/invocation';

class Messaging {
    static ios: { native: any; onTokenReflesh: (token?: string) => void } = {
        native: {
            messaging: () => Invocation.invokeClassMethod('FIRMessaging', 'messaging', [], 'NSObject'),

            FCMToken: () => Invocation.invokeInstanceMethod(Messaging.ios.native.messaging(), 'FCMToken', [], 'NSString'),

            subscribeToTopic: (topic) => {
                // @ts-ignore
                const argTopic = new Invocation.Argument({
                    type: 'NSString',
                    value: topic
                });
                // @ts-ignore
                Invocation.invokeInstanceMethod(Messaging.ios.native.messaging(), 'subscribeToTopic:', [argTopic]);
            },

            unsubscribeFromTopic: (topic) => {
                // @ts-ignore
                const argTopic = new Invocation.Argument({
                    type: 'NSString',
                    value: topic
                });
                // @ts-ignore
                Invocation.invokeInstanceMethod(Messaging.ios.native.messaging(), 'unsubscribeFromTopic:', [argTopic]);
            },

            messagingDidReceiveRegistrationToken: () => {
                if (!Messaging.ios.native.messagingDelegate) {
                    const messagingAlloc = Invocation.invokeClassMethod('MessagingDelegate', 'alloc', [], 'id');
                    Messaging.ios.native.messagingDelegate = Invocation.invokeInstanceMethod(messagingAlloc, 'init', [], 'NSObject');
                    // @ts-ignore
                    const argDelegate = new Invocation.Argument({
                        type: 'NSObject',
                        value: Messaging.ios.native.messagingDelegate
                    });
                    // @ts-ignore
                    Invocation.invokeInstanceMethod(Messaging.ios.native.messaging(), 'setDelegate:', [argDelegate]);
                }
                // @ts-ignore
                const argMessaggingDidRecieve = new Invocation.Argument({
                    type: 'JSValue',
                    value: function (e) {
                        if (typeof Messaging.ios.onTokenReflesh === 'function') {
                            Messaging.ios.onTokenReflesh(e.fcmToken);
                        }
                    }
                });
                // @ts-ignore
                Invocation.invokeInstanceMethod(Messaging.ios.native.messagingDelegate, 'setMessagingDidReceiveRegistrationToken:', [
                    argMessaggingDidRecieve
                ]);
            }
        },
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
         * @method onTokenReflesh
         * @ios
         * @since 0.1
         */
        onTokenReflesh: () => {}
    };
    /**
     * Asynchronously subscribes to a topic.
     *
     * @method subscribeToTopic
     * @param {String} topic
     * @android
     * @ios
     * @since 0.1
     */
    static subscribeToTopic(topic: string) {
        Messaging.ios.native.subscribeToTopic(topic);
    }
    /**
     * Asynchronously unsubscribe from a topic.
     *
     * @method unsubscribeFromTopic
     * @param {String} topic
     * @android
     * @ios
     * @since 0.1
     */
    static unsubscribeFromTopic(topic: string) {
        Messaging.ios.native.unsubscribeFromTopic(topic);
    }
    /**
     * iOS : Returns the FCM token.
     * Android : Returns the notification token.
     *
     * @method getToken
     * @android
     * @ios
     * @since 0.1
     */
    static getToken(callback: (token?: string) => void) {
        typeof callback === 'function' && callback(Messaging.ios.native.FCMToken());
    }
}
Messaging.ios.native.messagingDidReceiveRegistrationToken();

export default Messaging;
module.exports = Messaging;
