export = Firebase;

import FirebaseAnalytics from "./firebaseAnalytics";
import FirebaseMessaging from "./firebaseMessaging";
import FirebaseApp from "./firebaseApp";

declare class Firebase {
    /**
     * Firebase Analytics service
     * @static
     * @public
     * @property {object}
     */
    static analytics: typeof FirebaseAnalytics;
    
    /**
     * Gets the messaging service.
     * @property {object}
     * @static
     * @readonly
     * @public
     */
    static messaging: typeof FirebaseMessaging;

    /**
     * Initialize your SDK
     * @method initializeApp
     * @static
     * @public
     * @param {Object} config
     * @param {IO.File} config.iosFile - iOS plist file
     * @param {String} name(Optional)
     * @example
     * const Firebase = require('sf-plugin-firebase');
     * const File = require('@smartface/native/io/file');
     * 
     * var iOSPlistFile = new File({
     *     path: 'assets://GoogleService-Info.plist'
     * });
     * var firebaseConfig = {
     *     iosFile : iOSPlistFile
     * };
     * Firebase.initializeApp(firebaseConfig);
     */
    static initializeApp({ iosFile: any }, name?: string);

    /**
     * When called with no arguments, the default app is returned
     * @method app
     * @static
     * @param {string} [name] - When an app name is provided, the app corresponding to that name is returned.
     * @public
     * @returns {FirebaseApp}
     */
    static app(name?: string): FirebaseApp;

    /**
     * Gets the FirebaseApp Array.
     * @method apps
     * @static
     * @param {string=} name
     * @public
     * @returns {FirebaseApp[]} apps
     */
    static apps(name?: string): FirebaseApp[];
}





