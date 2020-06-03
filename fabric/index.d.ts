export = Fabric;
import Crashlytics = require("./crashlytics");
import Answers = require("./answers");

/**
 * @since 1.0
 * @see https://fabric.io/home
 *
 * Fabric Base. Coordinates configuration and starts all provided kits.
 *
 */
declare class Fabric {
    /**
     * Initialize Fabric and all provided kits.Only the first call to this method is honored. Subsequent calls are no-ops.
     * Call this method within your `app.ts` and provide the kits you wish to use.
     *
     *     @example
     *      const Fabric = require('sf-plugin-fabric');
     *      const Crashlytics = require('sf-plugin-fabric/crashlytics');
     *      const Answers = require('sf-plugin-fabric/answers');
     *      Fabric.with([new Crashlytics(),new Answers()]);
     * @android
     * @ios
     * @since 1.0
     */
    static with(kits: Array<(Crashlytics | Answers)>): void;
}