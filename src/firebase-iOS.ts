// @ts-ignore
import { Invocation } from '@smartface/native/util';
import FirebaseAnalytics from './firebaseAnalytics';
import FirebaseApp from './firebaseApp';
import FirebaseAuth from './firebaseAuth';
import FirebaseMessaging from './firebaseMessaging';

export default class Firebase {
    static analytics = FirebaseAnalytics;
    static messaging = FirebaseMessaging;

    static initializeApp(options, name) {
        if (options && options.iosFile.exists) {
            const pathPlist = options.iosFile.nativeObject.getActualPath();

            const alloc = Invocation.invokeClassMethod('FIROptions', 'alloc', [], 'id');
            const argPathPlist = new Invocation.Argument({
                type: 'NSString',
                value: pathPlist
            });
            const firOptions = Invocation.invokeInstanceMethod(alloc, 'initWithContentsOfFile:', [argPathPlist], 'NSObject');

            let nativeFirebaseApp;
            if (name) {
                // @ts-ignore
                FirebaseApp.ios.native.configureWithNameOptions(name, firOptions);
                // @ts-ignore
                nativeFirebaseApp = FirebaseApp.ios.native.appNamed(name);
            } else {
                // @ts-ignore
                FirebaseApp.ios.native.configureWithOptions(firOptions);
                // @ts-ignore
                nativeFirebaseApp = FirebaseApp.ios.native.defaultApp();
            }
            return new FirebaseApp(nativeFirebaseApp);
        }
    }

    static app(name) {
        let nativeFirebaseApp;
        if (name) {
            // @ts-ignore
            nativeFirebaseApp = FirebaseApp.ios.native.appNamed(name);
        } else {
            // @ts-ignore
            nativeFirebaseApp = FirebaseApp.ios.native.defaultApp();
        }
        return new FirebaseApp(nativeFirebaseApp);
    }

    static apps() {
        // @ts-ignore
        const apps = FirebaseApp.ios.native.allApps();
        let appArray: any = [];
        if (!apps) {
            return appArray;
        }
        var keys = Object.keys(apps);
        for (var i in keys) {
            appArray.push(new FirebaseApp(apps[keys[i]]));
        }
        return appArray;
    }

    static auth(firebaseApp) {
        // @ts-ignore
        return new FirebaseAuth(firebaseApp);
    }
}
