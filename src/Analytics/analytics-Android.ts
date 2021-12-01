// @ts-ignore
const NativeFirebaseAnalytics = requireClass('com.google.firebase.analytics.FirebaseAnalytics');
// @ts-ignore
const NativeBundle = requireClass('android.os.Bundle');
// @ts-ignore
import AndroidConfig from '@smartface/native/util/Android/androidconfig';
import AnalyticsEvent from './analyticsEvent';
import AnalyticsParam from './analyticsParam';

export default class Analytics {
    static ios = {};
    static nativeObject = !AndroidConfig.isEmulator ? () => NativeFirebaseAnalytics.getInstance(AndroidConfig.activity) : undefined;
    static Event = AnalyticsEvent;
    static Param = AnalyticsParam;
    /**
     * CustomAttribute for logCustom.
     *
     *     @example
     *      const Answers = require('sf-plugin-fabric/answers');
     *		var attribute1 = new Answers.CustomAttribute("key","value");
     *		var attribute2 = new Answers.CustomAttribute("key",12);
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
        customAttributes: InstanceType<typeof Analytics.CustomAttribute> | InstanceType<typeof Analytics.CustomAttribute>[]
    ): void => {
        if (!AndroidConfig.isEmulator) {
            const bundle = new NativeBundle();

            if (customAttributes instanceof Array) {
                for (let i = 0; i < customAttributes.length; i++) {
                    let value = customAttributes[i].value;
                    if (typeof value === 'string') {
                        bundle.putString(customAttributes[i].key, value);
                    } else if (typeof value === 'number') {
                        if (Number.isInteger(value)) bundle.putInt(customAttributes[i].key, value);
                        else bundle.putDouble(customAttributes[i].key, value);
                    }
                }
            }
            // @ts-ignore
            Analytics.nativeObject().logEvent(name, bundle);
        }
    };

    /**
     * Sets a user property to a given value. Up to 25 user property names are supported.
     * Once set, user property values persist throughout the app lifecycle and across sessions.
     *
     * @android
     * @ios
     * @since 0.1
     */
    static setUserProperty = (name: string, value: string) => {
        if (!AndroidConfig.isEmulator) {
            // @ts-ignore
            Analytics.nativeObject().setUserProperty(name, value);
        }
    };

    /**
     * Sets the user ID property. This feature must be used in accordance with Google’s Privacy Policy.
     *
     * @android
     * @ios
     * @since 0.1
     */
    static setUserId = (id: string) => {
        if (!AndroidConfig.isEmulator) {
            // @ts-ignore
            Analytics.nativeObject().setUserId(id);
        }
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
    static setCurrentScreen = (screenName: string, screenClassOverride: null) => {
        if (!AndroidConfig.isEmulator) {
            // @ts-ignore
            Analytics.nativeObject().setCurrentScreen(AndroidConfig.activity, screenName, screenClassOverride);
        }
    };
}
