import FirebaseApp from './firebaseApp';
import FirebaseAuth from './firebaseAuth';
// @ts-ignore
import NativeFirebaseApp from 'com.google.firebase.FirebaseApp';
// @ts-ignore
import NativeFirebaseOptions from 'com.google.firebase.FirebaseOptions';
// @ts-ignore
import AndroidConfig from '@smartface/native/util/Android/androidconfig';

import FirebaseAnalytics from './firebaseAnalytics';
import FirebaseMessaging from './firebaseMessaging';

export default class Firebase {
    static analytics = FirebaseAnalytics;
    static messaging = FirebaseMessaging;
    static iOS = {};

    static initializeApp(name: string, options?: { iosFile: any }) {
        if (!AndroidConfig.isEmulator) {
            const nativeFirebaseApp = name
                ? NativeFirebaseApp.initializeApp(AndroidConfig.activity, name)
                : NativeFirebaseApp.initializeApp(AndroidConfig.activity);
            return new FirebaseApp(nativeFirebaseApp);
        } else {
            // @ts-ignore
            return new FirebaseApp();
        }
    }

    static app(name: string) {
        if (!AndroidConfig.isEmulator) {
            const nativeFirebaseApp = name ? NativeFirebaseApp.getInstance(name) : NativeFirebaseApp.getInstance();
            return new FirebaseApp(nativeFirebaseApp);
        } else {
            // @ts-ignore
            return new FirebaseApp();
        }
    }

    static apps() {
        const result: FirebaseApp[] = [];
        if (!AndroidConfig.isEmulator) {
            var appList = NativeFirebaseApp.getApps(AndroidConfig.activity);
            for (var i = 0; i < appList.size(); i++) {
                result.push(new FirebaseApp(appList.get(i)));
            }
        }
        return result;
    }

    static auth(firebaseApp) {
        if (!AndroidConfig.isEmulator) {
            return new FirebaseAuth(firebaseApp);
        } else {
            return new FirebaseAuth();
        }
    }
}
