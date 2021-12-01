import App from './App';
import FirebaseAuth from './Auth';
// @ts-ignore
import NativeFirebaseApp from 'com.google.firebase.FirebaseApp';
// @ts-ignore
import NativeFirebaseOptions from 'com.google.firebase.FirebaseOptions';
// @ts-ignore
import AndroidConfig from '@smartface/native/util/Android/androidconfig';

import Analytics from './Analytics';
import Messaging from './Messaging';

export default class Firebase {
    static analytics = Analytics;
    static messaging = Messaging;
    static iOS = {};

    static initializeApp(name: string, options?: { iosFile: any }) {
        if (!AndroidConfig.isEmulator) {
            const nativeFirebaseApp = name
                ? NativeFirebaseApp.initializeApp(AndroidConfig.activity, name)
                : NativeFirebaseApp.initializeApp(AndroidConfig.activity);
            return new App(nativeFirebaseApp);
        } else {
            // @ts-ignore
            return new App();
        }
    }

    static app(name: string) {
        if (!AndroidConfig.isEmulator) {
            const nativeFirebaseApp = name ? NativeFirebaseApp.getInstance(name) : NativeFirebaseApp.getInstance();
            return new App(nativeFirebaseApp);
        } else {
            // @ts-ignore
            return new App();
        }
    }

    static apps() {
        const result: InstanceType<typeof App>[] = [];
        if (!AndroidConfig.isEmulator) {
            var appList = NativeFirebaseApp.getApps(AndroidConfig.activity);
            for (var i = 0; i < appList.size(); i++) {
                result.push(new App(appList.get(i)));
            }
        }
        return result;
    }

    static auth(App) {
        if (!AndroidConfig.isEmulator) {
            return new FirebaseAuth(App);
        } else {
            return new FirebaseAuth();
        }
    }
}
