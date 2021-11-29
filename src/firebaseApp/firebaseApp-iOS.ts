import { Invocation } from '@smartface/native/util';
const FirebaseAuth = require('../firebaseAuth');

export default class FirebaseApp {
    nativeObject: any;
    android: any;
    ios: {
        native?: any;
        delete?: (callback: (e) => {}) => void;
        getBundleId?: () => any;
        getClientId?: () => any;
        getTrackingId?: () => any;
    };
    static ios: FirebaseAppIOS = {
        native: {}
    };
    constructor(nativeObject: any) {
        this.nativeObject = nativeObject;
        this.android = {};
        this.ios = {};
        this.ios.native = {};
        this.ios.native.firOptions = FirebaseApp.ios.native.options(this.nativeObject);
        this.ios.delete = (callback) => {
            function callbackHandler(e) {
                if (typeof callback === 'function') {
                    callback(e.success);
                }
            }
            FirebaseApp.ios.native.deleteApp(this.nativeObject, callbackHandler);
        };

        Object.defineProperties(this.ios, {
            getBundleId: {
                value: function () {
                    return Invocation.invokeInstanceMethod(this.ios.native.firOptions, 'bundleID', [], 'NSString');
                },
                enumerable: true,
                configurable: true
            },
            getClientId: {
                value: function () {
                    return Invocation.invokeInstanceMethod(this.ios.native.firOptions, 'clientID', [], 'NSString');
                },
                enumerable: true,
                configurable: true
            },
            getTrackingId: {
                value: function () {
                    return Invocation.invokeInstanceMethod(this.ios.native.firOptions, 'trackingID', [], 'NSString');
                },
                enumerable: true,
                configurable: true
            }
        });

        FirebaseApp.ios = {};
        FirebaseApp.ios.native = {};
        FirebaseApp.ios.native.configureWithOptions = function (firOptions) {
            const argOptions = new Invocation.Argument({
                type: 'NSObject',
                value: firOptions
            });
            Invocation.invokeClassMethod('FIRApp', 'configureWithOptions:', [argOptions]);
        };

        FirebaseApp.ios.native.configureWithNameOptions = function (name, firOptions) {
            const argName = new Invocation.Argument({
                type: 'NSString',
                value: name
            });
            const argOptions = new Invocation.Argument({
                type: 'NSObject',
                value: firOptions
            });
            Invocation.invokeClassMethod('FIRApp', 'configureWithName:options:', [argName, argOptions]);
        };

        FirebaseApp.ios.native.defaultApp = function () {
            return Invocation.invokeClassMethod('FIRApp', 'defaultApp', [], 'NSObject');
        };

        FirebaseApp.ios.native.appNamed = function (name) {
            const argName = new Invocation.Argument({
                type: 'NSString',
                value: name
            });
            return Invocation.invokeClassMethod('FIRApp', 'appNamed:', [argName], 'NSObject');
        };

        FirebaseApp.ios.native.allApps = function () {
            return Invocation.invokeClassMethod('FIRApp', 'allApps', [], 'id');
        };

        FirebaseApp.ios.native.name = function (firApp) {
            return Invocation.invokeInstanceMethod(firApp, 'name', [], 'NSString');
        };

        FirebaseApp.ios.native.options = function (firApp) {
            return Invocation.invokeInstanceMethod(firApp, 'options', [], 'NSObject');
        };

        FirebaseApp.ios.native.deleteApp = function (firApp, callback) {
            const argCallback = new Invocation.Argument({
                type: 'JSValue',
                value: function (e) {
                    callback(e);
                }
            });
            Invocation.invokeInstanceMethod(firApp, 'deleteAppBridge:', [argCallback]);
        };
    }

    auth = () => {
        return new FirebaseAuth(this);
    };

    getName: () => string = () => FirebaseApp.ios.native.name(this.nativeObject);

    getApiKey: () => string = () => Invocation.invokeInstanceMethod(this.ios.native.firOptions, 'APIKey', [], 'NSString');

    getApplicationId: () => string = () => Invocation.invokeInstanceMethod(this.ios.native.firOptions, 'googleAppID', [], 'NSString');

    getDatabaseUrl: () => string = () => Invocation.invokeInstanceMethod(this.ios.native.firOptions, 'databaseURL', [], 'NSString');

    getGcmSenderId: () => string = () => Invocation.invokeInstanceMethod(this.ios.native.firOptions, 'GCMSenderID', [], 'NSString');

    getStorageBucket: () => string = () => Invocation.invokeInstanceMethod(this.ios.native.firOptions, 'storageBucket', [], 'NSString');
}
