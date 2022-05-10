import Invocation from '@smartface/native/util/iOS/invocation';
import AnalyticsEvent from './events';
import AnalyticsParam from './params';

/**
 * Firebase Analytics service
 * @static
 * @public
 * @property {object}
 */
export default class Analytics {
    static Event = AnalyticsEvent;
    static Param = AnalyticsParam;
    /**
     * CustomAttribute for logCustom.
     *
     *     @example
     *      import Analytics from '@smartface/plugin-firebase';
     *		var attribute1 = new Analytics.CustomAttribute("key","value");
     *		var attribute2 = new Analytics.CustomAttribute("key",12);
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
                // @ts-ignore
                const argName = new Invocation.Argument({
                    type: 'NSString',
                    value: name
                });
                // @ts-ignore
                const argParameters = new Invocation.Argument({
                    type: 'id',
                    value: parameters
                });
                // @ts-ignore
                Invocation.invokeClassMethod('FIRAnalytics', 'logEventWithName:parameters:', [argName, argParameters]);
            },
            setUserPropertyStringForName: function (value, name) {
                // @ts-ignore
                const argName = new Invocation.Argument({
                    type: 'NSString',
                    value: name
                });
                // @ts-ignore
                const argValue = new Invocation.Argument({
                    type: 'NSString',
                    value: value
                });
                // @ts-ignore
                Invocation.invokeClassMethod('FIRAnalytics', 'setUserPropertyString:forName:', [argValue, argName]);
            },
            setUserID: function (userID) {
                // @ts-ignore
                const argUserID = new Invocation.Argument({
                    type: 'NSString',
                    value: userID
                });
                // @ts-ignore
                Invocation.invokeClassMethod('FIRAnalytics', 'setUserID:', [argUserID]);
            },
            setScreenNameScreenClass: function (screenName, screenClassOverride) {
                // @ts-ignore
                const argScreen = new Invocation.Argument({
                    type: 'NSString',
                    value: screenName
                });
                // @ts-ignore
                const argClassOverride = new Invocation.Argument({
                    type: 'NSString',
                    value: screenClassOverride
                });
                // @ts-ignore
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
    static logEvent(
        name: string,
        customAttributes: InstanceType<typeof Analytics.CustomAttribute> | InstanceType<typeof Analytics.CustomAttribute>[]
    ): void {
        const customDictionary = {};
        if (customAttributes instanceof Array) {
            for (var i = 0; i < customAttributes.length; i++) {
                customDictionary[customAttributes[i].key] = customAttributes[i].value;
            }
        }
        Analytics.ios.native.logEventWithNameParameters(name, customDictionary);
    }

    /**
     * Sets a user property to a given value. Up to 25 user property names are supported.
     * Once set, user property values persist throughout the app lifecycle and across sessions.
     *
     * @android
     * @ios
     * @since 0.1
     */
    static setUserProperty(name: string, value: string) {
        Analytics.ios.native.setUserPropertyStringForName(value, name);
    }

    /**
     * Sets the user ID property. This feature must be used in accordance with Google’s Privacy Policy.
     *
     * @android
     * @ios
     * @since 0.1
     */
    static setUserId(id: string) {
        Analytics.ios.native.setUserID(id);
    }

    /**
     * Sets the current screen name, which specifies the current visual context in your app.
     * This helps identify the areas in your app where users spend their time and how they interact with your app.
     * Must be called on the main thread.
     *
     * @android
     * @ios
     * @since 0.1
     */
    static setCurrentScreen(screenName: string, screenClassOverride: null) {
        Analytics.ios.native.setScreenNameScreenClass(screenName, screenClassOverride);
    }

    static getAppInstanceId(callback) {
        if (typeof callback === 'function') {
            callback(Analytics.ios.native.appInstanceID());
        }
    }
}
module.exports = Analytics;
