/**
 * @class Crashlytics
 * @since 1.0
 *
 * Spend less time finding and more time fixing crashes.
 * Named the #1 performance SDK on both iOS and Android, Crashlytics provides deep and actionable insights, even the exact line of code your app crashed on.
 *
 */
export default class Crashlytics {
    /**
     * You can use Crashlytics.setUserIdentifier to provide an ID number, token, or hashed value that uniquely identifies the end-user of your application without disclosing or transmitting any of their personal information.
     *
     *     @example
     *      import { Crashlytics } from '@smartface/plugin-firebase';
     *      Crashlytics.setUserIdentifier("UserIdentifier");
     *
     * @method setUserIdentifier
     * @param {String} UserIdentifier
     * @android
     * @ios
     * @static
     * @since 1.0
     */
    setUserIdentifier = function (identifier) {};

    /**
     * If you would like to take advantage of advanced user identifier features, you can setUserName function.
     *
     *     @example
     *      import { Crashlytics } from '@smartface/plugin-firebase';
     *      Crashlytics.ios.setUserName("UserName");
     *
     * @method setUserName
     * @param {String} UserName
     * @ios
     * @static
     * @since 1.0
     */
    setUserName = function (name) {};

    /**
     * If you would like to take advantage of advanced user identifier features, you can setUserEmail function.
     *
     *     @example
     *      import { Crashlytics } from '@smartface/plugin-firebase';
     *      Crashlytics.ios.setUserEmail("UserEmail");
     *
     * @method setUserEmail
     * @param {String} UserEmail
     * @ios
     * @static
     * @since 1.0
     */
    setUserEmail = function (email) {};

    /**
     * Custom keys help you get the specific state of your app leading up to a crash. You can associate arbitrary key/value pairs with your crash reports, then use the custom keys to search and filter crash reports in the Firebase console.
     * Setting keys are as easy as calling: Crashlytics.setString(key, value).
     *
     *     @example
     *      import { Crashlytics } from '@smartface/plugin-firebase';
     *      Crashlytics.setString("key","value");
     *
     * @method setString
     * @param {String} key
     * @param {String} value
     * @android
     * @ios
     * @static
     * @since 1.0
     */
    setString = function (key, value) {};

    /**
     * Custom keys help you get the specific state of your app leading up to a crash. You can associate arbitrary key/value pairs with your crash reports, then use the custom keys to search and filter crash reports in the Firebase console.
     * Setting keys are as easy as calling: Crashlytics.setBool(key, value).
     *
     *     @example
     *      import { Crashlytics } from '@smartface/plugin-firebase';
     *      Crashlytics.setBool("key",true);
     *
     * @method setBool
     * @param {String} key
     * @param {boolean} value
     * @android
     * @ios
     * @static
     * @since 1.0
     */
    setBool = function (key, value) {};

    /**
     * Custom keys help you get the specific state of your app leading up to a crash. You can associate arbitrary key/value pairs with your crash reports, then use the custom keys to search and filter crash reports in the Firebase console.
     * Setting keys are as easy as calling: Crashlytics.setFloat(key, value).
     *
     *     @example
     *      import { Crashlytics } from '@smartface/plugin-firebase';
     *      Crashlytics.setFloat("key",true);
     *
     * @method setFloat
     * @param {String} key
     * @param {number} value
     * @android
     * @ios
     * @static
     * @since 1.0
     */
    setFloat = function (key, value) {};

    /**
     * Custom keys help you get the specific state of your app leading up to a crash. You can associate arbitrary key/value pairs with your crash reports, then use the custom keys to search and filter crash reports in the Firebase console.
     * Setting keys are as easy as calling: Crashlytics.setInt(key, value).
     *
     *     @example
     *      import { Crashlytics } from '@smartface/plugin-firebase';
     *      Crashlytics.setInt("key",true);
     *
     * @method setInt
     * @param {String} key
     * @param {number} value
     * @android
     * @ios
     * @static
     * @since 1.0
     */
    setInt = function (key, value) {};

    /**
     * Crashlytics version. In Android, always returns 0.
     *
     *     @example
     *      import { Crashlytics } from '@smartface/plugin-firebase';
     *      Crashlytics.ios.getVersion();
     *
     * @method getVersion
     * @ios
     * @static
     * @since 1.0
     */
    getVersion = function () {};

    /**
     * Initialize Crashlytics and all provided kits.Only the first call to this method is honored. Subsequent calls are no-ops.
     * Call this method within your `app.js` and provide the kits you wish to use.
     *
     *     @example
     *      import { Crashlytics } from '@smartface/plugin-firebase';
     *      Crashlytics.ios.with([new Crashlytics()]);
     *
     * @method with
     * @param {Array} kits
     * @ios
     * @static
     * @since 1.0
     */
    with = function (kits) {};
}
