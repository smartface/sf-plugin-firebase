// @ts-ignore
const NativeClass = requireClass('com.google.firebase.crashlytics.FirebaseCrashlytics');
// @ts-ignore
const NativeException = global.requireClass('java.lang.Exception');
// @ts-ignore
import AndroidConfig from '@smartface/native/util/Android/androidconfig';

type LogErrorParams = {
    error: string;
    identifier?: string;
};

/**
 * @class Crashlytics
 * @since 1.0
 *
 * Spend less time finding and more time fixing crashes.
 * Named the #1 performance SDK on both iOS and Android, Crashlytics provides deep and actionable insights, even the exact line of code your app crashed on.
 *
 */
export default class Crashlytics {
    static NativeClass = NativeClass;
    static ios = {
        setUserName: function (name: string) {},
        setUserEmail: function (email: string) {},
        getVersion: function () {},
        crash: function () {},
        with: function (kits: Array<Crashlytics>) {}
    };
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
    static setUserIdentifier = function (identifier: string) {
        if (!AndroidConfig.isEmulator) Crashlytics.NativeClass.getInstance().setUserId(identifier);
    };

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
    static setString = function (key: string, value: string) {
        if (!AndroidConfig.isEmulator) Crashlytics.NativeClass.getInstance().setCustomKey(key, value);
    };

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
    static setBool = function (key: string, value: boolean) {
        if (!AndroidConfig.isEmulator) Crashlytics.NativeClass.getInstance().setCustomKey(key, value);
    };

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
    static setFloat = function (key: string, value: number) {
        if (!AndroidConfig.isEmulator) Crashlytics.NativeClass.getInstance().setCustomKey(key, value);
    };

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
    static setInt = function (key: string, value: number) {
        if (!AndroidConfig.isEmulator) Crashlytics.NativeClass.getInstance().setCustomKey(key, value);
    };

    /**
     * logError method helps you report the error with an optional identifier.
     *
     *     @example
     *      import { Crashlytics } from '@smartface/plugin-firebase';
     *      const err = new Error('Unexpected error');
     *      const stringError = JSON.stringify(err, null, '\t');
     *      Crashlytics.logError({error: stringError, identifier: 'UnhandledException' });
     *
     * @method logError
     * @param {LogErrorParams} params
     * @android
     * @ios
     * @static
     * @since 7.0
     */
    static logError = function (params: LogErrorParams) {
        const { error, identifier = 'Exception' } = params;
        Crashlytics.NativeClass.log(identifier);
        Crashlytics.NativeClass.recordException(new NativeException(error));
    };
}
module.exports = Crashlytics;
