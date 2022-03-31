// @ts-ignore
const NativeFirebaseMessaging = requireClass('com.google.firebase.messaging.FirebaseMessaging');
// @ts-ignore
import AndroidConfig from '@smartface/native/util/Android/androidconfig';
// @ts-ignore
import Notifications from '@smartface/native/global/notifications';

export default class Messaging {
    static nativeObject = !AndroidConfig.isEmulator ? () => NativeFirebaseMessaging.getInstance() : undefined;
    static ios: { native: any; onTokenReflesh: (token?: string) => void } = {
        native: undefined,
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
    // Required push permission for get token.
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
        if (!AndroidConfig.isEmulator) {
            Notifications.registerForPushNotifications(
                (e) => callback(e.token),
                () => callback(undefined)
            );
        }
    }
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
        if (Messaging.nativeObject) {
            Messaging.nativeObject().subscribeToTopic(topic);
        }
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
        if (Messaging.nativeObject) {
            Messaging.nativeObject().unsubscribeFromTopic(topic);
        }
    }
}
module.exports = Messaging;
