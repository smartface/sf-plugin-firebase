// @ts-ignore
import { Invocation } from '@smartface/native/util';
import FirebaseAuth from '../firebaseAuth';

/**
 * @classdesc Firebase App
 * @class
 */
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
    static ios: {
        native?: any;
    } = {
        native: {}
    };
    constructor(nativeObject: any) {
        this.nativeObject = nativeObject;
        this.android = {};
        this.ios = {};
        this.ios.native = {};
        this.ios.native.firOptions = FirebaseApp.ios.native.options(this.nativeObject);
        /**-
         * Delete current app,
         *
         * @event delete
         * @ios
         * @since 0.1
         */
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

    /**
     * Gets the Auth service for the current app.
     *
     * @android
     * @ios
     * @since 0.1
     */
    auth: () => InstanceType<typeof FirebaseAuth> | undefined = () => {
        return new FirebaseAuth(this);
    };

    /**
     * Gets the Name for the current app.
     *
     * @android
     * @ios
     * @since 0.1
     */
    getName: () => string = () => FirebaseApp.ios.native.name(this.nativeObject);

    /**
     * Gets the getApiKey for the current app.
     *
     * @android
     * @ios
     * @since 0.1
     */
    getApiKey: () => string = () => Invocation.invokeInstanceMethod(this.ios.native.firOptions, 'APIKey', [], 'NSString');

    /**
     * Gets the getApplicationId for the current app.
     *
     * @android
     * @ios
     * @since 0.1
     */
    getApplicationId: () => string = () => Invocation.invokeInstanceMethod(this.ios.native.firOptions, 'googleAppID', [], 'NSString');

    /**
     * Gets the getDatabaseUrl for the current app.
     *
     * @android
     * @ios
     * @since 0.1
     */
    getDatabaseUrl: () => string = () => Invocation.invokeInstanceMethod(this.ios.native.firOptions, 'databaseURL', [], 'NSString');

    /**
     * Gets the getGcmSenderId for the current app.
     *
     * @android
     * @ios
     * @since 0.1
     */
    getGcmSenderId: () => string = () => Invocation.invokeInstanceMethod(this.ios.native.firOptions, 'GCMSenderID', [], 'NSString');

    /**
     * Gets the getStorageBucket for the current app.
     *
     * @android
     * @ios
     * @since 0.1
     */
    getStorageBucket: () => string = () => Invocation.invokeInstanceMethod(this.ios.native.firOptions, 'storageBucket', [], 'NSString');
}
