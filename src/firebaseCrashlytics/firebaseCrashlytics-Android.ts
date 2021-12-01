// @ts-ignore
const NativeClass = requireClass('com.google.firebase.crashlytics.FirebaseCrashlytics');
// @ts-ignore
import AndroidConfig from '@smartface/native/util/Android/androidconfig';

/**
 * @class FirebaseCrashlytics
 * @since 1.0
 *
 * Spend less time finding and more time fixing crashes.
 * Named the #1 performance SDK on both iOS and Android, FirebaseCrashlytics provides deep and actionable insights, even the exact line of code your app crashed on.
 *
 */
export default class FirebaseCrashlytics {
    static NativeClass = NativeClass;
    static ios = {
        setUserName: function (name: string) {},
        setUserEmail: function (email: string) {},
        getVersion: function () {},
        crash: function () {},
        with: function (kits: Array<FirebaseCrashlytics>) {}
    };
    /**
     * You can use FirebaseCrashlytics.setUserIdentifier to provide an ID number, token, or hashed value that uniquely identifies the end-user of your application without disclosing or transmitting any of their personal information.
     *
     *     @example
     *      import FirebaseCrashlytics from 'sf-plugin-firebase/firebaseCrashlytics';
     *      FirebaseCrashlytics.setUserIdentifier("UserIdentifier");
     *
     * @method setUserIdentifier
     * @param {String} UserIdentifier
     * @android
     * @ios
     * @static
     * @since 1.0
     */
    static setUserIdentifier = function (identifier: string) {
        if (!AndroidConfig.isEmulator) FirebaseCrashlytics.NativeClass.getInstance().setUserId(identifier);
    };

    /**
     * Custom keys help you get the specific state of your app leading up to a crash. You can associate arbitrary key/value pairs with your crash reports, then use the custom keys to search and filter crash reports in the Firebase console.
     * Setting keys are as easy as calling: FirebaseCrashlytics.setString(key, value).
     *
     *     @example
     *      import FirebaseCrashlytics from 'sf-plugin-firebase/firebaseCrashlytics';
     *      FirebaseCrashlytics.setString("key","value");
     *
     * @method setString
     * @param {String} key
     * @param {String} value
     * @android
     * @ios
     * @static
     * @since 1.0
     */
    static setString = function (key: string, value: string) {
        if (!AndroidConfig.isEmulator) FirebaseCrashlytics.NativeClass.getInstance().setCustomKey(key, value);
    };

    /**
     * Custom keys help you get the specific state of your app leading up to a crash. You can associate arbitrary key/value pairs with your crash reports, then use the custom keys to search and filter crash reports in the Firebase console.
     * Setting keys are as easy as calling: FirebaseCrashlytics.setBool(key, value).
     *
     *     @example
     *      import FirebaseCrashlytics from 'sf-plugin-firebase/firebaseCrashlytics';
     *      FirebaseCrashlytics.setBool("key",true);
     *
     * @method setBool
     * @param {String} key
     * @param {boolean} value
     * @android
     * @ios
     * @static
     * @since 1.0
     */
    static setBool = function (key: string, value: boolean) {
        if (!AndroidConfig.isEmulator) FirebaseCrashlytics.NativeClass.getInstance().setCustomKey(key, value);
    };

    /**
     * Custom keys help you get the specific state of your app leading up to a crash. You can associate arbitrary key/value pairs with your crash reports, then use the custom keys to search and filter crash reports in the Firebase console.
     * Setting keys are as easy as calling: FirebaseCrashlytics.setFloat(key, value).
     *
     *     @example
     *      import FirebaseCrashlytics from 'sf-plugin-firebase/firebaseCrashlytics';
     *      FirebaseCrashlytics.setFloat("key",true);
     *
     * @method setFloat
     * @param {String} key
     * @param {number} value
     * @android
     * @ios
     * @static
     * @since 1.0
     */
    static setFloat = function (key: string, value: number) {
        if (!AndroidConfig.isEmulator) FirebaseCrashlytics.NativeClass.getInstance().setCustomKey(key, value);
    };

    /**
     * Custom keys help you get the specific state of your app leading up to a crash. You can associate arbitrary key/value pairs with your crash reports, then use the custom keys to search and filter crash reports in the Firebase console.
     * Setting keys are as easy as calling: FirebaseCrashlytics.setInt(key, value).
     *
     *     @example
     *      import FirebaseCrashlytics from 'sf-plugin-firebase/firebaseCrashlytics';
     *      FirebaseCrashlytics.setInt("key",true);
     *
     * @method setInt
     * @param {String} key
     * @param {number} value
     * @android
     * @ios
     * @static
     * @since 1.0
     */
    static setInt = function (key: string, value: number) {
        if (!AndroidConfig.isEmulator) FirebaseCrashlytics.NativeClass.getInstance().setCustomKey(key, value);
    };
}
