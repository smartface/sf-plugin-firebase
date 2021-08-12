/**
 * @class FirebaseCrashlytics
 * @since 1.0
 *
 * Spend less time finding and more time fixing crashes. 
 * Named the #1 performance SDK on both iOS and Android, Crashlytics provides deep and actionable insights, even the exact line of code your app crashed on.
 *
 */
function FirebaseCrashlytics(params){}

/**
 * You can use Crashlytics.setUserIdentifier to provide an ID number, token, or hashed value that uniquely identifies the end-user of your application without disclosing or transmitting any of their personal information. 
 * This value is displayed right in the Fabric dashboard.
 *
 *     @example
 *      const Crashlytics = require('sf-plugin-fabric/crashlytics');
 *      Crashlytics.setUserIdentifier("UserIdentifier");
 *
 * @method setUserIdentifier
 * @param {String} UserIdentifier
 * @android
 * @ios
 * @static
 * @since 1.0
 */
FirebaseCrashlytics.setUserIdentifier = function(identifier){};

/**
 * If you would like to take advantage of advanced user identifier features, you can setUserName function.
 *
 *     @example
 *      const Crashlytics = require('sf-plugin-fabric/crashlytics');
 *      Crashlytics.setUserName("UserName");
 *
 * @method setUserName
 * @param {String} UserName
 * @android
 * @ios
 * @static
 * @since 1.0
 */
FirebaseCrashlytics.setUserName = function(name){};

/**
 * If you would like to take advantage of advanced user identifier features, you can setUserEmail function.
 *
 *     @example
 *      const Crashlytics = require('sf-plugin-fabric/crashlytics');
 *      Crashlytics.setUserEmail("UserEmail");
 *
 * @method setUserEmail
 * @param {String} UserEmail
 * @android
 * @ios
 * @static
 * @since 1.0
 */
FirebaseCrashlytics.setUserEmail = function(email){};

/**
 * Crashlytics allows you to associate arbitrary key/value pairs with your crash reports, which are viewable right from the Crashlytics dashboard. 
 * Setting keys are as easy as calling: Crashlytics.setString(key, value).
 *
 *     @example
 *      const Crashlytics = require('sf-plugin-fabric/crashlytics');
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
FirebaseCrashlytics.setString = function(key, value){};

/**
 * Crashlytics allows you to associate arbitrary key/value pairs with your crash reports, which are viewable right from the Crashlytics dashboard. 
 * Setting keys are as easy as calling: Crashlytics.setBool(key, value).
 *
 *     @example
 *      const Crashlytics = require('sf-plugin-fabric/crashlytics');
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
FirebaseCrashlytics.setBool = function(key, value){};

/**
 * Crashlytics allows you to associate arbitrary key/value pairs with your crash reports, which are viewable right from the Crashlytics dashboard. 
 * Setting keys are as easy as calling: Crashlytics.setFloat(key, value).
 *
 *     @example
 *      const Crashlytics = require('sf-plugin-fabric/crashlytics');
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
FirebaseCrashlytics.setFloat = function(key, value){};

/**
 * Crashlytics allows you to associate arbitrary key/value pairs with your crash reports, which are viewable right from the Crashlytics dashboard. 
 * Setting keys are as easy as calling: Crashlytics.setInt(key, value).
 *
 *     @example
 *      const Crashlytics = require('sf-plugin-fabric/crashlytics');
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
FirebaseCrashlytics.setInt = function(key, value){};

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
FirebaseCrashlytics.getVersion = function(){};


/**
 * Initialize Fabric and all provided kits.Only the first call to this method is honored. Subsequent calls are no-ops.
 * Call this method within your `app.js` and provide the kits you wish to use.
 *
 *     @example
 *      import Fabric from 'sf-plugin-firebase/fabric';
 *      import Crashlytics from 'sf-plugin-firebase/fabric/crashlytics';
 *      Fabric.with([new Crashlytics()]);
 *
 * @method with
 * @param {Array} kits
 * @android
 * @ios
 * @static
 * @since 1.0
 */
FirebaseCrashlytics.with = function(kits){};

module.exports = FirebaseCrashlytics;
