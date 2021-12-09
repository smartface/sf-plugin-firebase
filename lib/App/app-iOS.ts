// @ts-ignore
import { Invocation } from '@smartface/native/util';
import Auth from '../Auth';

/**
 * @classdesc App
 * @class
 */
export default class App {
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
        native: {
            configureWithOptions : function (firOptions) {
                // @ts-ignore
                const argOptions = new Invocation.Argument({
                    type: 'NSObject',
                    value: firOptions
                });
                // @ts-ignore
                Invocation.invokeClassMethod('FIRApp', 'configureWithOptions:', [argOptions]);
            },
    
            configureWithNameOptions : function (name, firOptions) {
                // @ts-ignore
                const argName = new Invocation.Argument({
                    type: 'NSString',
                    value: name
                });
                // @ts-ignore
                const argOptions = new Invocation.Argument({
                    type: 'NSObject',
                    value: firOptions
                });
                // @ts-ignore
                Invocation.invokeClassMethod('FIRApp', 'configureWithName:options:', [argName, argOptions]);
            },
    
            defaultApp : function () {
                return Invocation.invokeClassMethod('FIRApp', 'defaultApp', [], 'NSObject');
            },
    
            appNamed : function (name) {
                // @ts-ignore
                const argName = new Invocation.Argument({
                    type: 'NSString',
                    value: name
                });
                return Invocation.invokeClassMethod('FIRApp', 'appNamed:', [argName], 'NSObject');
            },
    
            allApps : function () {
                return Invocation.invokeClassMethod('FIRApp', 'allApps', [], 'id');
            },
    
            name : function (firApp) {
                return Invocation.invokeInstanceMethod(firApp, 'name', [], 'NSString');
            },
    
            options : function (firApp) {
                return Invocation.invokeInstanceMethod(firApp, 'options', [], 'NSObject');
            },
    
            deleteApp : function (firApp, callback) {
                // @ts-ignore
                const argCallback = new Invocation.Argument({
                    type: 'JSValue',
                    value: function (e) {
                        callback(e);
                    }
                });
                // @ts-ignore
                Invocation.invokeInstanceMethod(firApp, 'deleteAppBridge:', [argCallback]);
            }
        }
    };
    constructor(nativeObject: any) {
        this.nativeObject = nativeObject;
        this.android = {};
        this.ios = {};
        this.ios.native = {};
        this.ios.native.firOptions = App.ios.native.options(this.nativeObject);
        /**-
         * Delete current app,
         *
         * @method delete
         * @ios
         * @since 0.1
         */
        this.ios.delete = (callback) => {
            function callbackHandler(e) {
                if (typeof callback === 'function') {
                    callback(e.success);
                }
            }
            App.ios.native.deleteApp(this.nativeObject, callbackHandler);
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

        App.ios = {};
        App.ios.native = {};
        
    }

    /**
     * Gets the Auth service for the current app.
     *
     * @method
     * @android
     * @ios
     * @since 0.1
     */
    auth: () => InstanceType<typeof Auth> | undefined = () => {
        return new Auth(this);
    };

    /**
     * Gets the Name for the current app.
     *
     * @method
     * @android
     * @ios
     * @since 0.1
     */
    getName: () => string = () => App.ios.native.name(this.nativeObject);

    /**
     * Gets the getApiKey for the current app.
     *
     * @method
     * @android
     * @ios
     * @since 0.1
     */
    getApiKey: () => string = () => Invocation.invokeInstanceMethod(this.ios.native.firOptions, 'APIKey', [], 'NSString');

    /**
     * Gets the getApplicationId for the current app.
     *
     * @method
     * @android
     * @ios
     * @since 0.1
     */
    getApplicationId: () => string = () => Invocation.invokeInstanceMethod(this.ios.native.firOptions, 'googleAppID', [], 'NSString');

    /**
     * Gets the getDatabaseUrl for the current app.
     *
     * @method
     * @android
     * @ios
     * @since 0.1
     */
    getDatabaseUrl: () => string = () => Invocation.invokeInstanceMethod(this.ios.native.firOptions, 'databaseURL', [], 'NSString');

    /**
     * Gets the getGcmSenderId for the current app.
     *
     * @method
     * @android
     * @ios
     * @since 0.1
     */
    getGcmSenderId: () => string = () => Invocation.invokeInstanceMethod(this.ios.native.firOptions, 'GCMSenderID', [], 'NSString');

    /**
     * Gets the getStorageBucket for the current app.
     *
     * @method
     * @android
     * @ios
     * @since 0.1
     */
    getStorageBucket: () => string = () => Invocation.invokeInstanceMethod(this.ios.native.firOptions, 'storageBucket', [], 'NSString');
}
module.exports = App;
