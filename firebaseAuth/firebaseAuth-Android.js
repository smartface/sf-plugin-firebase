const FirebaseUser = require("../firebaseUser");

const NativeFirebaseAuth = requireClass('com.google.firebase.auth.FirebaseAuth');
const NativeOnCompleteListener = requireClass('com.google.android.gms.tasks.OnCompleteListener');

function FirebaseAuth(FirebaseApp) {
    var self = this;

    if (FirebaseApp) {
        this.nativeObject = NativeFirebaseAuth.getInstance(FirebaseApp.nativeObject);
    }
    else {
        this.nativeObject = NativeFirebaseAuth.getInstance();
    }

    Object.defineProperties(self, {
        'languageCode': {
            get: function() {
                self.nativeObject.getLanguageCode();
            },
            set: function(value) {
                self.nativeObject.setLanguageCode(value);
            },
            enumerable: true,
            configurable: true
        },
        'getCurrentUser': {
            value: function() {
                return new FirebaseUser(self.nativeObject.getCurrentUser());
            },
            enumerable: true,
            configurable: true
        },
        'createUserWithEmailAndPassword': {
            value: function(email, password, callback) {
                var innerCallback = NativeOnCompleteListener.implement({
                    onComplete: function(task) {
                        if (task.isSuccessful()) {
                            callback(true, "");
                        }
                        else {
                            callback(false, task.getException().getMessage());
                        }
                    }
                });

                self.nativeObject.createUserWithEmailAndPassword(email, password).addOnCompleteListener(innerCallback);
            },
            enumerable: true,
            configurable: true
        },
        'signInWithEmailAndPassword': {
            value: function(email, password, callback) {
                var innerCallback = NativeOnCompleteListener.implement({
                    onComplete: function(task) {
                        if (task.isSuccessful()) {
                            callback(self.getCurrentUser(), "");
                        }
                        else {
                            callback(null, task.getException().getMessage());
                        }
                    }
                });

                self.nativeObject.signInWithEmailAndPassword(email, password).addOnCompleteListener(innerCallback);
            },
            enumerable: true,
            configurable: true
        },
        'signInWithCustomToken': {
            value: function(token, callback) {
                var innerCallback = NativeOnCompleteListener.implement({
                    onComplete: function(task) {
                        if (task.isSuccessful()) {
                            callback(self.getCurrentUser(), "");
                        }
                        else {
                            callback(null, task.getException().getMessage());
                        }
                    }
                });

                self.nativeObject.signInWithCustomToken(token).addOnCompleteListener(innerCallback);
            },
            enumerable: true,
            configurable: true
        },
        'signInAnonymously': {
            value: function(callback) {
                var innerCallback = NativeOnCompleteListener.implement({
                    onComplete: function(task) {
                        if (task.isSuccessful()) {
                            callback(self.getCurrentUser(), "");
                        }
                        else {
                            callback(null, task.getException().getMessage());
                        }
                    }
                });

                self.nativeObject.signInAnonymously().addOnCompleteListener(innerCallback);
            },
            enumerable: true,
            configurable: true
        },
        'signOut': {
            value: function() {
                self.nativeObject.signOut();
            },
            enumerable: true,
            configurable: true
        },
    });

    self.ios = {};
}

FirebaseAuth.ios = {};

module.exports = FirebaseAuth;
