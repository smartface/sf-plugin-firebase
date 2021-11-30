// @ts-ignore
import { Invocation } from '@smartface/native/util';
import FirebaseAnalyticsEvent from './firebaseAnalyticsEvent';
import FirebaseAnalyticsParam from './firebaseAnalyticsParam';

/**
 * Firebase Analytics service
 * @static
 * @public
 * @property {object}
 */
export default class FirebaseAnalytics {
    static Event = FirebaseAnalyticsEvent;
    static Param = FirebaseAnalyticsParam;
    /**
     * CustomAttribute for logCustom.
     *
     *     @example
     *      import FirebaseAnalytics from '@smartface/plugin-firebase';
     *		var attribute1 = new FirebaseAnalytics.CustomAttribute("key","value");
     *		var attribute2 = new FirebaseAnalytics.CustomAttribute("key",12);
     *
     * @android
     * @ios
     * @static
     * @since 1.0
     */
    static CustomAttribute = class {
        key: string;
        value: string | number;
        constructor(key: string, value: string | number) {
            this.key = key;
            this.value = value;
        }
    };
    static ios: {
        native?: any;
    } = {
        native: {
            logEventWithNameParameters: function (name, parameters) {
                const argName = new Invocation.Argument({
                    type: 'NSString',
                    value: name
                });
                const argParameters = new Invocation.Argument({
                    type: 'id',
                    value: parameters
                });
                Invocation.invokeClassMethod('FIRAnalytics', 'logEventWithName:parameters:', [argName, argParameters]);
            },
            setUserPropertyStringForName: function (value, name) {
                const argName = new Invocation.Argument({
                    type: 'NSString',
                    value: name
                });
                const argValue = new Invocation.Argument({
                    type: 'NSString',
                    value: value
                });
                Invocation.invokeClassMethod('FIRAnalytics', 'setUserPropertyString:forName:', [argValue, argName]);
            },
            setUserID: function (userID) {
                const argUserID = new Invocation.Argument({
                    type: 'NSString',
                    value: userID
                });
                Invocation.invokeClassMethod('FIRAnalytics', 'setUserID:', [argUserID]);
            },
            setScreenNameScreenClass: function (screenName, screenClassOverride) {
                const argScreen = new Invocation.Argument({
                    type: 'NSString',
                    value: screenName
                });
                const argClassOverride = new Invocation.Argument({
                    type: 'NSString',
                    value: screenClassOverride
                });
                Invocation.invokeClassMethod('FIRAnalytics', 'setScreenName:screenClass:', [argScreen, argClassOverride]);
            },
            appInstanceID: function () {
                return Invocation.invokeClassMethod('FIRAnalytics', 'appInstanceID', [], 'NSString');
            }
        }
    };
    /**
     * Logs an app event. The event can have up to 25 parameters. Events with the same name must have the same parameters. Up to 500 event names are supported.
     * Using predefined events and/or parameters is recommended for optimal reporting.
     *
     * @android
     * @ios
     * @since 0.1
     */
    static logEvent = (
        name: string,
        customAttributes: InstanceType<typeof FirebaseAnalytics.CustomAttribute> | InstanceType<typeof FirebaseAnalytics.CustomAttribute>[]
    ): void => {
        const customDictionary = {};
        if (customAttributes instanceof Array) {
            for (var i = 0; i < customAttributes.length; i++) {
                customDictionary[customAttributes[i].key] = customAttributes[i].value;
            }
        }
        FirebaseAnalytics.ios.native.logEventWithNameParameters(name, customDictionary);
    };

    /**
     * Sets a user property to a given value. Up to 25 user property names are supported.
     * Once set, user property values persist throughout the app lifecycle and across sessions.
     *
     * @android
     * @ios
     * @since 0.1
     */
    static setUserProperty = function (name: string, value: string) {
        FirebaseAnalytics.ios.native.setUserPropertyStringForName(value, name);
    };

    /**
     * Sets the user ID property. This feature must be used in accordance with Google’s Privacy Policy.
     *
     * @android
     * @ios
     * @since 0.1
     */
    static setUserId = function (id: string) {
        FirebaseAnalytics.ios.native.setUserID(id);
    };

    /**
     * Sets the current screen name, which specifies the current visual context in your app.
     * This helps identify the areas in your app where users spend their time and how they interact with your app.
     * Must be called on the main thread.
     *
     * @android
     * @ios
     * @since 0.1
     */
    static setCurrentScreen = function (screenName: string, screenClassOverride: null) {
        FirebaseAnalytics.ios.native.setScreenNameScreenClass(screenName, screenClassOverride);
    };

    static getAppInstanceId = function (callback) {
        if (typeof callback === 'function') {
            callback(FirebaseAnalytics.ios.native.appInstanceID());
        }
    };
}
