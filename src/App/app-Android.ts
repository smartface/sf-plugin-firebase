import Auth from '../Auth';
// @ts-ignore
import AndroidConfig from '@smartface/native/util/Android/androidconfig';

/**
 * @classdesc App
 * @class
 */
export default class App {
    nativeObject: any;
    static ios = {};
    ios: {};
    android = {};
    constructor(nativeFirebaseApp: any) {
        this.nativeObject = nativeFirebaseApp;
        this.ios = {
            /**-
             * Delete current app,
             *
             * @event delete
             * @ios
             * @since 0.1
             */
            delete: function () {},
            /**
             * Gets the getBundleId for the current app.
             *
             * @event getBundleId
             * @return {String}
             * @ios
             * @since 0.1
             */
            getBundleId: function () {},
            /**
             * Gets the getClientId for the current app.
             *
             * @event getClientId
             * @return {String}
             * @ios
             * @since 0.1
             */
            getClientId: function () {},
            /**
             * Gets the getTrackingId for the current app.
             *
             * @event getTrackingId
             * @return {String}
             * @ios
             * @since 0.1
             */
            getTrackingId: function () {}
        };
    }

    /**
     * Gets the Auth service for the current app.
     *
     * @android
     * @ios
     * @since 0.1
     */
    auth = () => {
        if (!AndroidConfig.isEmulator) {
            return new Auth(this);
        }
    };

    /**
     * Gets the Name for the current app.
     *
     * @android
     * @ios
     * @since 0.1
     */
    getName: () => string = () => {
        if (!AndroidConfig.isEmulator) {
            return this.nativeObject.getName();
        }
    };

    /**
     * Gets the getApiKey for the current app.
     *
     * @android
     * @ios
     * @since 0.1
     */
    getApiKey: () => string = () => {
        if (!AndroidConfig.isEmulator) {
            return this.nativeObject.getOptions().getApiKey();
        }
    };

    /**
     * Gets the getApplicationId for the current app.
     *
     * @android
     * @ios
     * @since 0.1
     */
    getApplicationId: () => string = () => {
        if (!AndroidConfig.isEmulator) {
            return this.nativeObject.getOptions().getApplicationId();
        }
    };

    /**
     * Gets the getDatabaseUrl for the current app.
     *
     * @android
     * @ios
     * @since 0.1
     */
    getDatabaseUrl: () => string = () => {
        if (!AndroidConfig.isEmulator) {
            return this.nativeObject.getOptions().getDatabaseUrl();
        }
    };

    /**
     * Gets the getGcmSenderId for the current app.
     *
     * @android
     * @ios
     * @since 0.1
     */
    getGcmSenderId: () => string = () => {
        if (!AndroidConfig.isEmulator) {
            return this.nativeObject.getOptions().getGcmSenderId();
        }
    };

    /**
     * Gets the getStorageBucket for the current app.
     *
     * @android
     * @ios
     * @since 0.1
     */
    getStorageBucket: () => string = () => {
        if (!AndroidConfig.isEmulator) {
            return this.nativeObject.getOptions().getStorageBucket();
        }
    };
}
module.exports = App;
