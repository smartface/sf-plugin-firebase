export = Crashlytics;

/**
 * @class Crashlytics
 * @since 1.0
 * @see https://fabric.io/home
 *
 * Spend less time finding and more time fixing crashes. 
 * Named the #1 performance SDK on both iOS and Android, Crashlytics provides deep and actionable insights, even the exact line of code your app crashed on.
 *
 */
declare class Crashlytics {
    /**
     * You can use Crashlytics.setUserIdentifier to provide an ID number, token, or hashed value that uniquely identifies the end-user of your application without disclosing or transmitting any of their personal information. 
     * This value is displayed right in the Fabric dashboard.
     *
     *     @example
     *      const Crashlytics = require('sf-plugin-fabric/crashlytics');
     *      Crashlytics.setUserIdentifier("UserIdentifier");
     * 
     * @android
     * @ios
     * @since 1.0
     */
    static setUserIdentifier(identifier: string): void;
    /**
     * If you would like to take advantage of advanced user identifier features, you can setUserName function.
     *
     *     @example
     *      const Crashlytics = require('sf-plugin-fabric/crashlytics');
     *      Crashlytics.setUserName("UserName");
     * 
     * @android
     * @ios
     * @since 1.0
     */
    static setUserName(name: string): void;
    /**
     * If you would like to take advantage of advanced user identifier features, you can setUserEmail function.
     *
     *     @example
     *      const Crashlytics = require('sf-plugin-fabric/crashlytics');
     *      Crashlytics.setUserEmail("UserEmail");
     * 
     * @android
     * @ios
     * @since 1.0
     */
    static setUserEmail(email: string): void;
    /**
     * Crashlytics allows you to associate arbitrary key/value pairs with your crash reports, which are viewable right from the Crashlytics dashboard. 
     * Setting keys are as easy as calling: Crashlytics.setString(key, value).
     *
     *     @example
     *      const Crashlytics = require('sf-plugin-fabric/crashlytics');
     *      Crashlytics.setString("key","value");
     * 
     * @android
     * @ios
     * @since 1.0
     */
    static setString(key: string, value: string): void;

    /**
     * Crashlytics allows you to associate arbitrary key/value pairs with your crash reports, which are viewable right from the Crashlytics dashboard. 
     * Setting keys are as easy as calling: Crashlytics.setBool(key, value).
     *
     *     @example
     *      const Crashlytics = require('sf-plugin-fabric/crashlytics');
     *      Crashlytics.setBool("key",true);
     *
     * @android
     * @ios
     * @since 1.0
     */
    static setBool(key: string, value: boolean): void;

    /**
     * Crashlytics allows you to associate arbitrary key/value pairs with your crash reports, which are viewable right from the Crashlytics dashboard. 
     * Setting keys are as easy as calling: Crashlytics.setFloat(key, value).
     *
     *     @example
     *      const Crashlytics = require('sf-plugin-fabric/crashlytics');
     *      Crashlytics.setFloat("key",true);
     *
     * @android
     * @ios
     * @since 1.0
     */
    static setFloat(key: string, value: Number): void;

    /**
     * Crashlytics allows you to associate arbitrary key/value pairs with your crash reports, which are viewable right from the Crashlytics dashboard. 
     * Setting keys are as easy as calling: Crashlytics.setInt(key, value).
     *
     *     @example
     *      const Crashlytics = require('sf-plugin-fabric/crashlytics');
     *      Crashlytics.setInt("key",true);
     *
     * @android
     * @ios
     * @since 1.0
     */
    static setInt(key: string, value: Number): void;

    /**
     * Crashlytics version
     *
     *     @example
     *      const Crashlytics = require('sf-plugin-fabric/crashlytics');
     *      Crashlytics.getVersion();
     *
     * @method getVersion
     * @android
     * @ios
     * @static
     * @since 1.0
     */
    static getVersion(): string;


    /**
     * Initialize Fabric and all provided kits.Only the first call to this method is honored. Subsequent calls are no-ops.
     * Call this method within your `app.ts` and provide the kits you wish to use.
     *
     *     @example
     *      import Fabric from 'sf-plugin-firebase/fabric';
     *      import Crashlytics from 'sf-plugin-firebase/fabric/crashlytics';
     *      Fabric.with([new Crashlytics()]);
     * @android
     * @ios
     * @since 1.0
     */
    static with(kits: Array<(Crashlytics)>): void;
}