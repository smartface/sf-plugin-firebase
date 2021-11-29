import { Invocation } from '@smartface/native/util';

type FirebaseMessagingIOS = {
    native: any;
    onTokenReflesh: (token?: string) => void;
};

export class FirebaseMessaging {
    static ios: FirebaseMessagingIOS = {
        native: {},
        onTokenReflesh: () => {}
    };
    constructor() {
        FirebaseMessaging.ios.native.FirebaseMessaging.ios.native.messaging = () =>
            Invocation.invokeClassMethod('FIRMessaging', 'messaging', [], 'NSObject');

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
    static subscribeToTopic(topic) {
        FirebaseMessaging.ios.native.subscribeToTopic(topic);
    }
    static unsubscribeFromTopic(topic) {
        FirebaseMessaging.ios.native.unsubscribeFromTopic(topic);
    }
    static getToken(callback: (token?: string) => void) {
        typeof callback === 'function' && callback(FirebaseMessaging.ios.native.FCMToken());
    }
}
