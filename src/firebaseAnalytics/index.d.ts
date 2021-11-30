export = FirebaseAnalytics;

import CustomAttribute from './customAttribute';
import PredefinedEvent from './firebaseAnalyticsEvent';

/**
 * Firebase Analytics service
 * @static
 * @public
 * @property {object}
 */
declare class FirebaseAnalytics {
    private constructor(); // To prevent creating instance
    /**
     * Logs an app event. The event can have up to 25 parameters. Events with the same name must have the same parameters. Up to 500 event names are supported.
     * Using predefined events and/or parameters is recommended for optimal reporting.
     *
     * @android
     * @ios
     * @since 0.1
     */
    static logEvent(name: string, params: FirebaseAnalytics.CustomAttribute | FirebaseAnalytics.CustomAttribute[]): void;
    /**
     * Sets a user property to a given value. Up to 25 user property names are supported.
     * Once set, user property values persist throughout the app lifecycle and across sessions.
     *
     * @android
     * @ios
     * @since 0.1
     */
    static setUserProperty(name: string, value: string): void;

    /**
     * Sets the user ID property. This feature must be used in accordance with Google’s Privacy Policy.
     *
     * @android
     * @ios
     * @since 0.1
     */
    static setUserId(id: string);

    /**
     * Sets the current screen name, which specifies the current visual context in your app.
     * This helps identify the areas in your app where users spend their time and how they interact with your app.
     * Must be called on the main thread.
     *
     * @android
     * @ios
     * @since 0.1
     */
    static setCurrentScreen(screenName: string, screenClassOverride: null);
}

declare namespace FirebaseAnalytics {
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
    class CustomAttribute {
        constructor(key: String, value: string | number);
        key: string;
        value: string | number;
    }
    export import Event = PredefinedEvent;
}
