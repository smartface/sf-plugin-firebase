// @ts-ignore
import Invocation from '@smartface/native/util/iOS/invocation';
import File from '@smartface/native/io/file';
import FirebaseAnalytics from './Analytics';
import App from './App';
import Auth from './Auth';
import Messaging from './Messaging';

export default class Firebase {
    /**
     * Firebase Analytics service
     * @static
     * @public
     * @property {object}
     */
    static analytics = FirebaseAnalytics;
    /**
     * Gets the messaging service.
     * @property {object}
     * @static
     * @readonly
     * @public
     */
    static messaging = Messaging;

    /**
     * Initialize your SDK
     * @method initializeApp
     * @static
     * @public
     * @param {Object} config
     * @param {IO.File} config.iosFile - iOS plist file
     * @param {String} name(Optional)
     * @example
     * import Firebase from '@smartace/plugin-firebase';
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
        if (config?.iosFile?.exists) {
            // @ts-ignore
            const pathPlist = config.iosFile.nativeObject.getActualPath();

            const alloc = Invocation.invokeClassMethod('FIROptions', 'alloc', [], 'id');
            // @ts-ignore
            const argPathPlist = new Invocation.Argument({
                type: 'NSString',
                value: pathPlist
            });
            const firOptions = Invocation.invokeInstanceMethod(alloc, 'initWithContentsOfFile:', [argPathPlist], 'NSObject');

            let nativeFirebaseApp;
            if (name) {
                App.ios.native.configureWithNameOptions(name, firOptions);
                nativeFirebaseApp = App.ios.native.appNamed(name);
            } else {
                App.ios.native.configureWithOptions(firOptions);
                nativeFirebaseApp = App.ios.native.defaultApp();
            }
            return new App(nativeFirebaseApp);
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
        let nativeFirebaseApp;
        if (name) {
            nativeFirebaseApp = App.ios.native.appNamed(name);
        } else {
            nativeFirebaseApp = App.ios.native.defaultApp();
        }
        return new App(nativeFirebaseApp);
    }

    /**
     * Gets the FirebaseApp Array.
     * @method apps
     * @static
     * @public
     * @returns {FirebaseApp[]} apps
     */
    static apps() {
        const apps = App.ios.native.allApps();
        let appArray: any = [];
        if (!apps) {
            return appArray;
        }
        var keys = Object.keys(apps);
        for (var i in keys) {
            appArray.push(new App(apps[keys[i]]));
        }
        return appArray;
    }

    static auth(firebaseApp) {
        return new Auth(firebaseApp);
    }
}
