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
const FirebaseAuthErrors = require("./firebaseAuthErrors");


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
        'createUserWithEmailAndPassword': {
            value: function(email, password, callback) {
                if (!AndroidConfig.isEmulator) {

                    var innerSuccessCallback = NativeOnSuccessListener.implement({
                        onSuccess: function(result) {
                            callback(true);
                        }
                    });

                    var innerFailureCallback = NativeOnFailureListener.implement({
                        onFailure: function(e) {

                            if (e.getClass() == NativeFirebaseAuthInvalidCredentialsException.class) { // thrown if the email address is malformed
                                callback(undefined, {code: FirebaseAuthErrors.InvalidEmail, description: e.getMessage()} );
                            }
                            else if (e.getClass() == NativeFirebaseAuthUserCollisionException.class) { // thrown if there already exists an account with the given email address
                                callback(undefined, {code: FirebaseAuthErrors.EmailAlreadyInUse, description: e.getMessage()} );
                            }
                            else if (e.getClass() == NativeFirebaseAuthWeakPasswordException.class) { // thrown if the password is not strong enough
                                callback(undefined, {code: FirebaseAuthErrors.WeakPassword, description: e.getMessage()} );
                            }
                            else if (e.getClass() == NativeFirebaseAuthException.class){
                                callback(undefined, {code: FirebaseAuthErrors.OperationNotAllowed, description: e.getMessage()} );
                            }
                            else {
                                callback(undefined, e.getMessage());
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
                                if(e.getMessage().includes("account has been disabled")){
                                    callback(undefined, {code: FirebaseAuthErrors.UserDisabled, description: e.getMessage()} );
                                } else {
                                    callback(undefined, {code: FirebaseAuthErrors.InvalidEmail, description: e.getMessage()} );
                                }
                            }
                            else if (e.getClass() == NativeFirebaseAuthInvalidCredentialsException.class) { // password wrong
                                callback(undefined, {code: FirebaseAuthErrors.WrongPassword, description: e.getMessage()} );
                            }
                            else if (e.getClass() == NativeFirebaseAuthException.class){
                                callback(undefined, {code: FirebaseAuthErrors.OperationNotAllowed, description: e.getMessage()} );
                            }
                            else {
                                callback(undefined, e.getMessage());
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
                                if(e.getMessage().includes("format is incorrect")){
                                    callback(undefined, {code: FirebaseAuthErrors.InvalidCustomToken, description: e.getMessage()} );
                                } else {
                                    callback(undefined, {code: FirebaseAuthErrors.CustomTokenMismatch, description: e.getMessage()} );
                                }
                            }
                            else {
                                callback(undefined, e.getMessage());
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
                                callback(undefined, {code: FirebaseAuthErrors.OperationNotAllowed, description: e.getMessage()} );
                            }
                            else {
                                callback(undefined, e.getMessage());
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

module.exports = FirebaseAuth;
