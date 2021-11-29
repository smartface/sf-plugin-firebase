// @ts-ignore
const NativeFirebaseMessaging = requireClass('com.google.firebase.messaging.FirebaseMessaging');
// @ts-ignore
import AndroidConfig from '@smartface/native/util/Android/androidconfig';
// @ts-ignore
import Notifications from '@smartface/native/notifications';

export default class FirebaseMessaging {
    static nativeObject = !AndroidConfig.isEmulator ? () => NativeFirebaseMessaging.getInstance() : undefined;
    static ios = { onTokenReflesh: () => {} };
    // Required push permission for get token.
    getToken = (callback: (token?: string) => void) => {
        if (!AndroidConfig.isEmulator) {
            Notifications.registerForPushNotifications(
                (e) => callback(e.token),
                () => callback(undefined)
            );
        }
    };
    subscribeToTopic = (topic) => {
        if (FirebaseMessaging.nativeObject) {
            FirebaseMessaging.nativeObject().subscribeToTopic(topic);
        }
    };
    unsubscribeFromTopic = (topic) => {
        if (FirebaseMessaging.nativeObject) {
            FirebaseMessaging.nativeObject().unsubscribeFromTopic(topic);
        }
    };
}
