export = FirebaseCrashlytics;

/**
 * @class FirebaseCrashlytics
 * @since 1.0
 *
 * Spend less time finding and more time fixing crashes. 
 * Named the #1 performance SDK on both iOS and Android, FirebaseCrashlytics provides deep and actionable insights, even the exact line of code your app crashed on.
 *
 */
declare class FirebaseCrashlytics {
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
    static setUserIdentifier(identifier: string): void;
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
    static setString(key: string, value: string): void;

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
    static setBool(key: string, value: boolean): void;

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
    static setFloat(key: string, value: Number): void;

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
    static setInt(key: string, value: Number): void;

    static ios: {

    /**
     * If you would like to take advantage of advanced user identifier features, you can setUserName function.
     *
     *     @example
     *      import FirebaseCrashlytics from 'sf-plugin-firebase/firebaseCrashlytics';
     *      FirebaseCrashlytics.ios.setUserName("UserName");
     *
     * @method setUserName
     * @param {String} UserName
     * @ios
     * @static
     * @since 1.0
     */
    setUserName(name: string): void;
    /**
     * If you would like to take advantage of advanced user identifier features, you can setUserEmail function.
     *
     *     @example
     *      import FirebaseCrashlytics from 'sf-plugin-firebase/firebaseCrashlytics';
     *      FirebaseCrashlytics.ios.setUserEmail("UserEmail");
     *
     * @method setUserEmail
     * @param {String} UserEmail
     * @ios
     * @static
     * @since 1.0
     */
    setUserEmail(email: string): void;
    /**
     * FirebaseCrashlytics version. In Android, always returns 0.
     *
     *     @example
     *      import FirebaseCrashlytics from 'sf-plugin-firebase/firebaseCrashlytics';
     *      FirebaseCrashlytics.ios.getVersion();
     *
     * @method getVersion
     * @ios
     * @static
     * @since 1.0
     */
    getVersion(): string;
     /**
      * Initialize FirebaseCrashlytics and all provided kits.Only the first call to this method is honored. Subsequent calls are no-ops.
      * Call this method within your `app.js` and provide the kits you wish to use.
      *
      *     @example
      *      import FirebaseCrashlytics from 'sf-plugin-firebase/firebaseCrashlytics';
      *      FirebaseCrashlytics.ios.with([new FirebaseCrashlytics()]);
      *
      * @method with
      * @param {Array} kits
      * @ios
      * @static
      * @since 1.0
      */
    with(kits: Array<(Crashlytics)>): void;
    }
}