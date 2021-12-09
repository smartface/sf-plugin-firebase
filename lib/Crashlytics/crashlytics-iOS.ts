export default class Crashlytics {
    static ios = {
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
        setUserName: function (name: string) {
            try {
                // @ts-ignore
                __SF_Crashlytics.sharedInstance().setUserName(name);
            } catch (e) {}
        },
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
        setUserEmail: function (email: string) {
            try {
                // @ts-ignore
                __SF_Crashlytics.sharedInstance().setUserEmail(email);
            } catch (e) {}
        },
        crash: function () {
            try {
                // @ts-ignore
                __SF_Crashlytics.sharedInstance().crash();
            } catch (e) {}
        },
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
        getVersion: function () {
            try {
                // @ts-ignore
                return __SF_Crashlytics.sharedInstance().version;
            } catch (e) {
                return undefined;
            }
        },
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
        with: function (kits: Array<Crashlytics>) {
            try {
                let kitsStringArray: string[] = [];
                for (let kit in kits) {
                    kitsStringArray.push(kits[kit].constructor.name);
                }
                // @ts-ignore
                __SF_Fabric.withStringArray(kitsStringArray);
            } catch (e) {}
        }
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
        try {
            // @ts-ignore
            __SF_Crashlytics.sharedInstance().setUserIdentifier(identifier);
        } catch (e) {}
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
        try {
            // @ts-ignore
            __SF_Crashlytics.sharedInstance().setBoolValueForKey(value, key);
        } catch (e) {}
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
        try {
            // @ts-ignore
            __SF_Crashlytics.sharedInstance().setFloatValueForKey(value, key);
        } catch (e) {}
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
        try {
            // @ts-ignore
            __SF_Crashlytics.sharedInstance().setIntValueForKey(value, key);
        } catch (e) {}
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
        try {
            // @ts-ignore
            __SF_Crashlytics.sharedInstance().setObjectValueForKey(value, key);
        } catch (e) {}
    };
}
module.exports = Crashlytics;
