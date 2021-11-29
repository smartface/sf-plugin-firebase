import { Invocation } from '@smartface/native/util';
import FirebaseAnalytics from './firebaseAnalytics';
import FirebaseApp from './firebaseApp';
import FirebaseAuth from './firebaseAuth';
import FirebaseMessaging from './firebaseMessaging';

export class Firebase {
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
                FirebaseApp.ios.native.configureWithNameOptions(name, firOptions);
                nativeFirebaseApp = FirebaseApp.ios.native.appNamed(name);
            } else {
                FirebaseApp.ios.native.configureWithOptions(firOptions);
                nativeFirebaseApp = FirebaseApp.ios.native.defaultApp();
            }
            return new FirebaseApp(nativeFirebaseApp);
        }
    }

    static app(name) {
        var nativeFirebaseApp;
        if (name) {
            nativeFirebaseApp = FirebaseApp.ios.native.appNamed(name);
        } else {
            nativeFirebaseApp = FirebaseApp.ios.native.defaultApp();
        }
        return new FirebaseApp(nativeFirebaseApp);
    }

    static apps() {
        var apps = FirebaseApp.ios.native.allApps();
        var appArray = [];
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
        return new FirebaseAuth(firebaseApp);
    }
}
