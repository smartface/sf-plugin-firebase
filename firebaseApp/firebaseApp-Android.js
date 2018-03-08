const NativeFirebaseAuth = requireClass('com.google.firebase.auth.FirebaseAuth');

function FirebaseApp(nativeFirebaseApp) {
    var self = this;
    
    this.nativeObject = nativeFirebaseApp;

    Object.defineProperties(self, {
        'auth': {
            value: function() {
                    NativeFirebaseAuth.getInstance(self.nativeObject);
            },
            enumerable: true,
            configurable: true
        }
    });

}




// Return firebaseApp Auth
FirebaseApp.prototype.auth = function() {};

// Return firebaseApp Analytic
FirebaseApp.prototype.analytic = function() {};

// Return firebaseApp messaging
FirebaseApp.prototype.messaging = function() {};

FirebaseApp.prototype.delete = function() {};

FirebaseApp.prototype.getName = function() {};
FirebaseApp.prototype.getApiKey = function() {};
FirebaseApp.prototype.getApplicationId = function() {};
FirebaseApp.prototype.getDatabaseUrl = function() {};
FirebaseApp.prototype.getGcmSenderId = function() {};
FirebaseApp.prototype.getProjectId = function() {};
FirebaseApp.prototype.getStorageBucket = function() {};
