const FirebaseUser = require("../firebaseUser");

const NativeFirebaseAuth = requireClass('com.google.firebase.auth.FirebaseAuth');
const NativeOnSuccessListener = requireClass('com.google.android.gms.tasks.OnSuccessListener');
const NativeOnFailureListener = requireClass('com.google.android.gms.tasks.OnFailureListener');
const NativeOnCompleteListener = requireClass('com.google.android.gms.tasks.OnCompleteListener');

const NativeFirebaseAuthInvalidCredentialsException = requireClass('com.google.firebase.auth.FirebaseAuthInvalidCredentialsException');
const NativeFirebaseAuthUserCollisionException = requireClass('com.google.firebase.auth.FirebaseAuthUserCollisionException');
const NativeFirebaseAuthWeakPasswordException = requireClass('com.google.firebase.auth.FirebaseAuthWeakPasswordException');

const NativeFirebaseAuthInvalidUserException = requireClass('com.google.firebase.auth.FirebaseAuthInvalidUserException');

const NativeFirebaseAuthException = requireClass('com.google.firebase.auth.FirebaseAuthException');

const AndroidConfig = require("sf-core/util/Android/androidconfig");


function FirebaseAuth(FirebaseApp) {
    var self = this;

    if (!AndroidConfig.isEmulator) {
        if (FirebaseApp) {
            this.nativeObject = NativeFirebaseAuth.getInstance(FirebaseApp.nativeObject);
        }
        else {
            this.nativeObject = NativeFirebaseAuth.getInstance();
        }
    }

    Object.defineProperties(self, {
        'languageCode': {
            get: function() {
                if (!AndroidConfig.isEmulator) {
                    self.nativeObject.getLanguageCode();
                }
            },
            set: function(value) {
                if (!AndroidConfig.isEmulator) {
                    self.nativeObject.setLanguageCode(value);
                }
            },
            enumerable: true,
            configurable: true
        },
        'useAppLanguage': {
            value: function() {
                if (!AndroidConfig.isEmulator) {
                    self.nativeObject.useAppLanguage();
                }
            },
            enumerable: true,
            configurable: true
        },
        'getCurrentUser': {
            value: function() {
                if (!AndroidConfig.isEmulator) {
                    return new FirebaseUser(self.nativeObject.getCurrentUser());
                }
            },
            enumerable: true,
            configurable: true
        },
        'sendPasswordResetEmail': {
            value: function(email, callback) {
                if (!AndroidConfig.isEmulator) {
                    
                    var innerSuccessCallback = NativeOnSuccessListener.implement({
                        onSuccess: function(result) {
                            callback(true);
                        }
                    });

                    var innerFailureCallback = NativeOnFailureListener.implement({
                        onFailure: function(e) {
                            callback(false, e.getMessage());
                        }
                    });

                    var task = self.nativeObject.sendPasswordResetEmail(email);
                    task.addOnSuccessListener(innerSuccessCallback);
                    task.addOnFailureListener(innerFailureCallback);
                    
                }
            },
            enumerable: true,
            configurable: true
        },
        'verifyPasswordResetCode': {
            value: function(code, callback) {
                if (!AndroidConfig.isEmulator) {
                    
                    var innerSuccessCallback = NativeOnSuccessListener.implement({
                        onSuccess: function(result) {
                            callback(true);
                        }
                    });

                    var innerFailureCallback = NativeOnFailureListener.implement({
                        onFailure: function(e) {
                            callback(false, e.getMessage());
                        }
                    });

                    var task = self.nativeObject.verifyPasswordResetCode(code);
                    task.addOnSuccessListener(innerSuccessCallback);
                    task.addOnFailureListener(innerFailureCallback);
                    
                }
            },
            enumerable: true,
            configurable: true
        },
        'createUserWithEmailAndPassword': {
            value: function(email, password, callback) {
                if (!AndroidConfig.isEmulator) {

                    var innerSuccessCallback = NativeOnSuccessListener.implement({
                        onSuccess: function(result) {
                            callback(self.getCurrentUser());
                        }
                    });

                    var innerFailureCallback = NativeOnFailureListener.implement({
                        onFailure: function(e) {

                            if (e.getClass() == NativeFirebaseAuthInvalidCredentialsException.class) { // thrown if the email address is malformed
                                callback(undefined, {code: FirebaseAuth.Error.InvalidEmail, description: e.getMessage()} );
                            }
                            else if (e.getClass() == NativeFirebaseAuthUserCollisionException.class) { // thrown if there already exists an account with the given email address
                                callback(undefined, {code: FirebaseAuth.Error.EmailAlreadyInUse, description: e.getMessage()} );
                            }
                            else if (e.getClass() == NativeFirebaseAuthWeakPasswordException.class) { // thrown if the password is not strong enough
                                callback(undefined, {code: FirebaseAuth.Error.WeakPassword, description: e.getMessage()} );
                            }
                            else if (e.getClass() == NativeFirebaseAuthException.class){
                                callback(undefined, {code: FirebaseAuth.Error.OperationNotAllowed, description: e.getMessage()} );
                            }
                            else {
                                callback(undefined, {code: undefined, description: e.getMessage()});
                            }
 
                        }
                    });

                    var task = self.nativeObject.createUserWithEmailAndPassword(email, password);
                    task.addOnSuccessListener(innerSuccessCallback);
                    task.addOnFailureListener(innerFailureCallback);

                }
            },
            enumerable: true,
            configurable: true
        },
        'signInWithEmailAndPassword': {
            value: function(email, password, callback) {
                if (!AndroidConfig.isEmulator) {

                    var innerSuccessCallback = NativeOnSuccessListener.implement({
                        onSuccess: function(result) {
                            callback(self.getCurrentUser());
                        }
                    });

                    var innerFailureCallback = NativeOnFailureListener.implement({
                        onFailure: function(e) {

                            if (e.getClass() == NativeFirebaseAuthInvalidUserException.class) { // emaıl not found or passive
                                if (e.getErrorCode() == "ERROR_USER_DISABLED") { // thrown if the password is not strong enough
                                    callback(undefined, {code: FirebaseAuth.Error.UserDisabled, description: e.getMessage()} );
                                }
                                else {
                                    callback(undefined, {code: FirebaseAuth.Error.InvalidEmail, description: e.getMessage()} );
                                }
                            }
                            else if (e.getClass() == NativeFirebaseAuthInvalidCredentialsException.class) { // password wrong
                                callback(undefined, {code: FirebaseAuth.Error.WrongPassword, description: e.getMessage()} );
                            }
                            else if (e.getClass() == NativeFirebaseAuthException.class){
                                callback(undefined, {code: FirebaseAuth.Error.OperationNotAllowed, description: e.getMessage()} );
                            }
                            else {
                                callback(undefined, {code: undefined, description: e.getMessage()});
                            }

                        }
                    });

                    var task = self.nativeObject.signInWithEmailAndPassword(email, password);
                    task.addOnSuccessListener(innerSuccessCallback);
                    task.addOnFailureListener(innerFailureCallback);

                }
            },
            enumerable: true,
            configurable: true
        },
        'signInWithCustomToken': {
            value: function(token, callback) {
                if (!AndroidConfig.isEmulator) {
                    
                    var innerSuccessCallback = NativeOnSuccessListener.implement({
                        onSuccess: function(result) {
                            callback(self.getCurrentUser());
                        }
                    });

                    var innerFailureCallback = NativeOnFailureListener.implement({
                        onFailure: function(e) {

                            if (e.getClass() == NativeFirebaseAuthInvalidCredentialsException.class) { // thrown if the token format is incorrect or if it corresponds to a different Firebase App
                                if (e.getErrorCode() == "ERROR_INVALID_CUSTOM_TOKEN") { // thrown if the password is not strong enough
                                    callback(undefined, {code: FirebaseAuth.Error.InvalidCustomToken, description: e.getMessage()} );
                                }
                                else {
                                    callback(undefined, {code: FirebaseAuth.Error.CustomTokenMismatch, description: e.getMessage()} );
                                }
                            }
                            else {
                                callback(undefined, {code: undefined, description: e.getMessage()});
                            }

                        }
                    });

                    var task = self.nativeObject.signInWithCustomToken(token);
                    task.addOnSuccessListener(innerSuccessCallback);
                    task.addOnFailureListener(innerFailureCallback);
                    
                }
            },
            enumerable: true,
            configurable: true
        },
        'signInAnonymously': {
            value: function(callback) {
                if (!AndroidConfig.isEmulator) {
                    
                    var innerSuccessCallback = NativeOnSuccessListener.implement({
                        onSuccess: function(result) {
                            callback(self.getCurrentUser());
                        }
                    });

                    var innerFailureCallback = NativeOnFailureListener.implement({
                        onFailure: function(e) {

                            if (e.getClass() == NativeFirebaseAuthException.class) { // thrown if the token format is incorrect or if it corresponds to a different Firebase App
                                callback(undefined, {code: FirebaseAuth.Error.OperationNotAllowed, description: e.getMessage()} );
                            }
                            else {
                                callback(undefined, {code: undefined, description: e.getMessage()});
                            }

                        }
                    });

                    var task = self.nativeObject.signInAnonymously();
                    task.addOnSuccessListener(innerSuccessCallback);
                    task.addOnFailureListener(innerFailureCallback);

                }
            },
            enumerable: true,
            configurable: true
        },
        'signOut': {
            value: function() {
                if (!AndroidConfig.isEmulator) {
                    self.nativeObject.signOut();
                }
            },
            enumerable: true,
            configurable: true
        },
    });

    self.ios = {};
}

FirebaseAuth.ios = {};

FirebaseAuth.Error = require("./FirebaseAuth.Error");

module.exports = FirebaseAuth;
