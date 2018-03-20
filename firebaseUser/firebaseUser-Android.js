const NativeOnSuccessListener = requireClass('com.google.android.gms.tasks.OnSuccessListener');
const NativeOnFailureListener = requireClass('com.google.android.gms.tasks.OnFailureListener');

const AndroidConfig = require("sf-core/util/Android/androidconfig");

function FirebaseUser(nativeUser) {
    var self = this;

    if (!AndroidConfig.isEmulator) {
        this.nativeObject = nativeUser;
    }

    Object.defineProperties(self, {
        'getEmail': {
            value: function() {
                if (!AndroidConfig.isEmulator) {
                   return self.nativeObject.getEmail();
                }
            },
            enumerable: true,
            configurable: true
        },
        'getDisplayName': {
            value: function() {
                if (!AndroidConfig.isEmulator) {
                   return self.nativeObject.getDisplayName();
                }
            },
            enumerable: true,
            configurable: true
        },
        'getPhoneNumber': {
            value: function() {
                if (!AndroidConfig.isEmulator) {
                   return self.nativeObject.getPhoneNumber();
                }
            },
            enumerable: true,
            configurable: true
        },
        'getUID': {
            value: function() {
                if (!AndroidConfig.isEmulator) {
                   return self.nativeObject.getUid();
                }
            },
            enumerable: true,
            configurable: true
        },
        'isAnonymous': {
            value: function() {
                if (!AndroidConfig.isEmulator) {
                   return self.nativeObject.isAnonymous();
                }
            },
            enumerable: true,
            configurable: true
        },
        'getIdToken': {
            value: function(forceRefresh , callback) {
                if (!AndroidConfig.isEmulator) {
                    
                    var innerSuccessCallback = NativeOnSuccessListener.implement({
                        onSuccess: function(result) {
                            callback(result.getToken());
                        }
                    });
                    
                    var innerFailureCallback = NativeOnFailureListener.implement({
                        onFailure: function(e) {
                            callback("", e.getMessage());
                        }
                    });
                
                    var tokenTask = self.nativeObject.getToken(forceRefresh);
                    tokenTask.addOnSuccessListener(innerSuccessCallback);
                    tokenTask.addOnFailureListener(innerFailureCallback);
                }
            },
            enumerable: true,
            configurable: true
        },
    });

    self.ios = {};
}

FirebaseUser.ios = {};

module.exports = FirebaseUser;

