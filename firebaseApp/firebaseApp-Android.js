const FirebaseAuth = require("../firebaseAuth");
const AndroidConfig = require("sf-core/util/Android/androidconfig");

function FirebaseApp(nativeFirebaseApp) {
    var self = this;
    
    this.nativeObject = nativeFirebaseApp;

    Object.defineProperties(self, {
        'auth': {
            value: function() {
                if (!AndroidConfig.isEmulator) {
                    return new FirebaseAuth(self);
                }
            },
            enumerable: true,
            configurable: true
        },
        'getName': {
            value: function() {
                if (!AndroidConfig.isEmulator) {
                    return self.nativeObject.getName();
                }
            },
            enumerable: true,
            configurable: true
        },
        'getApiKey': {
            value: function() {
                if (!AndroidConfig.isEmulator) {
                    return self.nativeObject.getOptions().getApiKey();
                }
            },
            enumerable: true,
            configurable: true
        },
        'getApplicationId': {
            value: function() {
                if (!AndroidConfig.isEmulator) {
                    return self.nativeObject.getOptions().getApplicationId();
                }
            },
            enumerable: true,
            configurable: true
        },
        'getDatabaseUrl': {
            value: function() {
                if (!AndroidConfig.isEmulator) {
                    return self.nativeObject.getOptions().getDatabaseUrl();
                }
            },
            enumerable: true,
            configurable: true
        },
        'getGcmSenderId': {
            value: function() {
                if (!AndroidConfig.isEmulator) {
                    return self.nativeObject.getOptions().getGcmSenderId();
                }
            },
            enumerable: true,
            configurable: true
        },
        'getStorageBucket': {
            value: function() {
                if (!AndroidConfig.isEmulator) {
                    return self.nativeObject.getOptions().getStorageBucket();
                }
            },
            enumerable: true,
            configurable: true
        }
    });

    self.ios = {};
}

FirebaseApp.ios = {};

module.exports = FirebaseApp;
