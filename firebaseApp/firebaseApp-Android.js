const FirebaseAuth = require("../firebaseAuth");

function FirebaseApp(nativeFirebaseApp) {
    var self = this;

    this.nativeObject = nativeFirebaseApp;

    Object.defineProperties(self, {
        'auth': {
            value: function() {
                return new FirebaseAuth(self);
            },
            enumerable: true,
            configurable: true
        },
        'getName': {
            value: function() {
                return self.nativeObject.getName();
            },
            enumerable: true,
            configurable: true
        },
        'getApiKey': {
            value: function() {
                return self.nativeObject.getOptions().getApiKey();
            },
            enumerable: true,
            configurable: true
        },
        'getApplicationId': {
            value: function() {
                return self.nativeObject.getOptions().getApplicationId();
            },
            enumerable: true,
            configurable: true
        },
        'getDatabaseUrl': {
            value: function() {
                return self.nativeObject.getOptions().getDatabaseUrl();
            },
            enumerable: true,
            configurable: true
        },
        'getGcmSenderId': {
            value: function() {
                return self.nativeObject.getOptions().getGcmSenderId();
            },
            enumerable: true,
            configurable: true
        },
        'getStorageBucket': {
            value: function() {
                return self.nativeObject.getOptions().getStorageBucket();
            },
            enumerable: true,
            configurable: true
        }
    });

    self.ios = {};
}

FirebaseApp.ios = {};

module.exports = FirebaseApp;
