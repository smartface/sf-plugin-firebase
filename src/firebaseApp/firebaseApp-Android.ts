const FirebaseAuth = require('../firebaseAuth');
// @ts-ignore
import AndroidConfig from '@smartface/native/util/Android/androidconfig';

export default class FirebaseApp {
    nativeObject: any;
    static ios = {};
    ios: {};
    constructor(nativeFirebaseApp: any) {
        this.nativeObject = nativeFirebaseApp;
        this.ios = {
            delete: function () {},
            getBundleId: function () {},
            getClientId: function () {},
            getTrackingId: function () {}
        };
    }
    auth = () => {
        if (!AndroidConfig.isEmulator) {
            return new FirebaseAuth(this);
        }
    };
    getName: () => string = () => {
        if (!AndroidConfig.isEmulator) {
            return this.nativeObject.getName();
        }
    };

    getApiKey: () => string = () => {
        if (!AndroidConfig.isEmulator) {
            return this.nativeObject.getOptions().getApiKey();
        }
    };

    getApplicationId: () => string = () => {
        if (!AndroidConfig.isEmulator) {
            return this.nativeObject.getOptions().getApplicationId();
        }
    };

    getDatabaseUrl: () => string = () => {
        if (!AndroidConfig.isEmulator) {
            return this.nativeObject.getOptions().getDatabaseUrl();
        }
    };

    getGcmSenderId: () => string = () => {
        if (!AndroidConfig.isEmulator) {
            return this.nativeObject.getOptions().getGcmSenderId();
        }
    };

    getStorageBucket: () => string = () => {
        if (!AndroidConfig.isEmulator) {
            return this.nativeObject.getOptions().getStorageBucket();
        }
    };
}
