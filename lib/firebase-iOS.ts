// @ts-ignore
import { Invocation } from '@smartface/native/util';
import FirebaseAnalytics from './Analytics';
import App from './App';
import Auth from './Auth';
import Messaging from './Messaging';

export default class Firebase {
    static analytics = FirebaseAnalytics;
    static messaging = Messaging;

    static initializeApp(options?: { iosFile: any }, name?: string) {
        if (options?.iosFile?.exists) {
            const pathPlist = options.iosFile.nativeObject.getActualPath();

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

    static app(name: string) {
        let nativeFirebaseApp;
        if (name) {
            nativeFirebaseApp = App.ios.native.appNamed(name);
        } else {
            nativeFirebaseApp = App.ios.native.defaultApp();
        }
        return new App(nativeFirebaseApp);
    }

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
