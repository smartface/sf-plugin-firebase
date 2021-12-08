import App from './App';
import FirebaseAuth from './Auth';
import File from '@smartface/native/io/file';
// @ts-ignore
const NativeFirebaseApp = requireClass('com.google.firebase.FirebaseApp');
// @ts-ignore
const NativeFirebaseOptions = requireClass('com.google.firebase.FirebaseOptions');
// @ts-ignore
import AndroidConfig from '@smartface/native/util/Android/androidconfig';
import Analytics from './Analytics';
import Messaging from './Messaging';

export default class Firebase {
    /**
     * Firebase Analytics service
     * @static
     * @public
     * @property {object}
     */
    static analytics = Analytics;
    /**
     * Gets the messaging service.
     * @property {object}
     * @static
     * @readonly
     * @public
     */
    static messaging = Messaging;
    static iOS = {};

    /**
     * Initialize your SDK
     * @method initializeApp
     * @static
     * @public
     * @param {Object} config
     * @param {IO.File} config.iosFile - iOS plist file
     * @param {String} name(Optional)
     * @example
     * const Firebase = require('@smartace/plugin-firebase');
     * const File = require('@smartface/native/io/file');
     * 
     * var iOSPlistFile = new File({
     *     path: 'assets://GoogleService-Info.plist'
     * });
     * var firebaseConfig = {
     *     iosFile : iOSPlistFile
     * };
     * Firebase.initializeApp(firebaseConfig);
     */
    static initializeApp(config?: { iosFile: File }, name?: string) {
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

    /**
     * When called with no arguments, the default app is returned
     * @method app
     * @static
     * @param {string} [name] - When an app name is provided, the app corresponding to that name is returned.
     * @public
     * @returns {FirebaseApp}
     */
    static app(name?: string) {
        if (!AndroidConfig.isEmulator) {
            const nativeFirebaseApp = name ? NativeFirebaseApp.getInstance(name) : NativeFirebaseApp.getInstance();
            return new App(nativeFirebaseApp);
        } else {
            // @ts-ignore
            return new App();
        }
    }

    /**
     * Gets the FirebaseApp Array.
     * @method apps
     * @static
     * @public
     * @returns {FirebaseApp[]} apps
     */
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
