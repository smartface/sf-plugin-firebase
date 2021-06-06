const NativeOnSuccessListener = requireClass('com.google.android.gms.tasks.OnSuccessListener');
const NativeOnFailureListener = requireClass('com.google.android.gms.tasks.OnFailureListener');
const NativeUserProfileChangeRequest = requireClass('com.google.firebase.auth.UserProfileChangeRequest');
const NativeEmailAuthProvider = requireClass('com.google.firebase.auth.EmailAuthProvider');

const NativeUri = requireClass('android.net.Uri');
const FirebaseAuthError = require('../firebaseAuth/firebaseAuthErrors');


const AndroidConfig = require("@smartface/native/util/Android/androidconfig");

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
        'setDisplayName': {
            value: function(name, callback) {
                if (!AndroidConfig.isEmulator) {

                    var profileUpdates = new NativeUserProfileChangeRequest.Builder();
                    profileUpdates = profileUpdates.setDisplayName(name);
                    var request = profileUpdates.build();

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

                    var tokenTask = self.nativeObject.updateProfile(request);
                    tokenTask.addOnSuccessListener(innerSuccessCallback);
                    tokenTask.addOnFailureListener(innerFailureCallback);
                }
            },
            enumerable: true,
            configurable: true
        },
        'getPhotoURL': {
            value: function() {
                if (!AndroidConfig.isEmulator) {
                    return self.nativeObject.getPhotoUrl();
                }
            },
            enumerable: true,
            configurable: true
        },
        'setPhotoURL': {
            value: function(url, callback) {
                if (!AndroidConfig.isEmulator) {

                    var profileUpdates = new NativeUserProfileChangeRequest.Builder();
                    profileUpdates = profileUpdates.setPhotoUri(NativeUri.parse(url));
                    var request = profileUpdates.build();

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

                    var tokenTask = self.nativeObject.updateProfile(request);
                    tokenTask.addOnSuccessListener(innerSuccessCallback);
                    tokenTask.addOnFailureListener(innerFailureCallback);

                }
            },
            enumerable: true,
            configurable: true
        },
        'sendEmailVerification': {
            value: function(callback) {
                if (!AndroidConfig.isEmulator) {

                    var innerSuccessCallback = NativeOnSuccessListener.implement({
                        onSuccess: function(result) {
                            callback(true);
                        }
                    });

                    var innerFailureCallback = NativeOnFailureListener.implement({
                        onFailure: function(e) {

                            var errorCode = "" + e.getErrorCode();

                            if (errorCode.includes("ERROR_USER_DISABLED")) { // thrown if the password is not strong enough
                                callback(false, { code: FirebaseAuthError.UserDisabled, description: e.getMessage() });
                            }
                            else if (errorCode.includes("ERROR_USER_NOT_FOUND")) { // thrown if the password is not strong enough
                                callback(false, { code: FirebaseAuthError.UserNotFound, description: e.getMessage() });
                            }
                            else if (errorCode.includes("ERROR_USER_TOKEN_EXPIRED")) { // thrown if the password is not strong enough
                                callback(false, { code: FirebaseAuthError.UserTokenExpired, description: e.getMessage() });
                            }
                            else if (errorCode.includes("ERROR_INVALID_USER_TOKEN")) { // thrown if the password is not strong enough
                                callback(false, { code: FirebaseAuthError.InvalidUserToken, description: e.getMessage() });
                            }
                            else {
                                callback(false, { code: undefined, description: e.getMessage() });
                            }
                        }
                    });

                    var tokenTask = self.nativeObject.sendEmailVerification();
                    tokenTask.addOnSuccessListener(innerSuccessCallback);
                    tokenTask.addOnFailureListener(innerFailureCallback);
                }
            },
            enumerable: true,
            configurable: true
        },
        'isEmailVerified': {
            value: function() {
                if (!AndroidConfig.isEmulator) {
                    return self.nativeObject.isEmailVerified();
                }
            },
            enumerable: true,
            configurable: true
        },
        'updateEmail': {
            value: function(email, callback) {
                if (!AndroidConfig.isEmulator) {

                    var innerSuccessCallback = NativeOnSuccessListener.implement({
                        onSuccess: function(result) {
                            callback(true);
                        }
                    });

                    var innerFailureCallback = NativeOnFailureListener.implement({
                        onFailure: function(e) {

                            var errorCode = "" + e.getErrorCode();

                            if (errorCode.includes("ERROR_OPERATION_NOT_ALLOWED")) {
                                callback(false, { code: FirebaseAuthError.OperationNotAllowed, description: e.getMessage() });
                            }
                            else if (errorCode.includes('ERROR_INVALID_EMAIL')) {
                                callback(false, { code: FirebaseAuthError.InvalidEmail, description: e.getMessage() });
                            }
                            else if (errorCode.includes('ERROR_EMAIL_ALREADY_IN_USE')) {
                                callback(false, { code: FirebaseAuthError.EmailAlreadyInUse, description: e.getMessage() });
                            }
                            else if (errorCode.includes('ERROR_WEAK_PASSWORD')) {
                                callback(false, { code: FirebaseAuthError.WeakPassword, description: e.getMessage() });
                            }
                            else if (errorCode.includes('recent')) {
                                callback(false, { code: FirebaseAuthError.RequiresRecentLogin, description: e.getMessage() });
                            }
                            else {
                                callback(false, { code: undefined, description: e.getMessage() });
                            }

                        }
                    });

                    var tokenTask = self.nativeObject.updateEmail(email);
                    tokenTask.addOnSuccessListener(innerSuccessCallback);
                    tokenTask.addOnFailureListener(innerFailureCallback);

                }
            },
            enumerable: true,
            configurable: true
        },
        'updatePassword': {
            value: function(password, callback) {
                if (!AndroidConfig.isEmulator) {

                    var innerSuccessCallback = NativeOnSuccessListener.implement({
                        onSuccess: function(result) {
                            callback(true);
                        }
                    });

                    var innerFailureCallback = NativeOnFailureListener.implement({
                        onFailure: function(e) {

                            var errorCode = "" + e.getErrorCode();

                            if (errorCode.includes("ERROR_OPERATION_NOT_ALLOWED")) {
                                callback(false, { code: FirebaseAuthError.OperationNotAllowed, description: e.getMessage() });
                            }
                            else if (errorCode.includes('ERROR_INVALID_EMAIL')) {
                                callback(false, { code: FirebaseAuthError.InvalidEmail, description: e.getMessage() });
                            }
                            else if (errorCode.includes('ERROR_EMAIL_ALREADY_IN_USE')) {
                                callback(false, { code: FirebaseAuthError.EmailAlreadyInUse, description: e.getMessage() });
                            }
                            else if (errorCode.includes('ERROR_WEAK_PASSWORD')) {
                                callback(false, { code: FirebaseAuthError.WeakPassword, description: e.getMessage() });
                            }
                            else if (errorCode.includes('recent')) {
                                callback(false, { code: FirebaseAuthError.RequiresRecentLogin, description: e.getMessage() });
                            }
                            else {
                                callback(false, { code: undefined, description: e.getMessage() });
                            }

                        }
                    });

                    var tokenTask = self.nativeObject.updatePassword(password);
                    tokenTask.addOnSuccessListener(innerSuccessCallback);
                    tokenTask.addOnFailureListener(innerFailureCallback);

                }
            },
            enumerable: true,
            configurable: true
        },
        'reload': {
            value: function(callback) {
                if (!AndroidConfig.isEmulator) {

                    var innerSuccessCallback = NativeOnSuccessListener.implement({
                        onSuccess: function(result) {
                            callback(true);
                        }
                    });

                    var innerFailureCallback = NativeOnFailureListener.implement({
                        onFailure: function(e) {

                            var errorCode = "" + e.getErrorCode();

                            if (errorCode.includes('recent')) {
                                callback(false, { code: FirebaseAuthError.RequiresRecentLogin, description: e.getMessage() });
                            }
                            else {
                                callback(false, { code: undefined, description: e.getMessage() });
                            }

                        }
                    });

                    var tokenTask = self.nativeObject.reload();
                    tokenTask.addOnSuccessListener(innerSuccessCallback);
                    tokenTask.addOnFailureListener(innerFailureCallback);

                }
            },
            enumerable: true,
            configurable: true
        },
        'delete': {
            value: function(callback) {
                if (!AndroidConfig.isEmulator) {

                    var innerSuccessCallback = NativeOnSuccessListener.implement({
                        onSuccess: function(result) {
                            callback(true);
                        }
                    });

                    var innerFailureCallback = NativeOnFailureListener.implement({
                        onFailure: function(e) {

                            var errorCode = "" + e.getErrorCode();

                            if (errorCode.includes('recent')) {
                                callback(false, { code: FirebaseAuthError.RequiresRecentLogin, description: e.getMessage() });
                            }
                            else {
                                callback(false, { code: undefined, description: e.getMessage() });
                            }

                        }
                    });

                    var tokenTask = self.nativeObject.delete();
                    tokenTask.addOnSuccessListener(innerSuccessCallback);
                    tokenTask.addOnFailureListener(innerFailureCallback);

                }
            },
            enumerable: true,
            configurable: true
        },
        'reauthenticate': {
            value: function(email, password, callback) {
                if (!AndroidConfig.isEmulator) {

                    var credential = NativeEmailAuthProvider.getCredential(email, password);
                    var innerSuccessCallback = NativeOnSuccessListener.implement({
                        onSuccess: function(result) {
                            callback(true);
                        }
                    });

                    var innerFailureCallback = NativeOnFailureListener.implement({
                        onFailure: function(e) {

                            var errorCode = "" + e.getErrorCode();
                            
                            if (errorCode.includes("ERROR_USER_DISABLED")) { // thrown if the password is not strong enough
                                callback(false, { code: FirebaseAuthError.UserDisabled, description: e.getMessage() });
                            }
                            else if (errorCode.includes("ERROR_USER_NOT_FOUND")) { // thrown if the password is not strong enough
                                callback(false, { code: FirebaseAuthError.UserMismatch, description: e.getMessage() });
                            }
                            else if (errorCode.includes("ERROR_WRONG_PASSWORD")) { // thrown if the password is not strong enough
                                callback(false, { code: FirebaseAuthError.WrongPassword, description: e.getMessage() });
                            }
                            else if (errorCode.includes("ERROR_INVALID_EMAIL")) { // thrown if the password is not strong enough
                                callback(false, { code: FirebaseAuthError.InvalidEmail, description: e.getMessage() });
                            }
                            else if (errorCode.includes("ERROR_OPERATION_NOT_ALLOWED")) { // thrown if the password is not strong enough
                                callback(false, { code: FirebaseAuthError.OperationNotAllowed, description: e.getMessage() });
                            }
                            else {
                                callback(false, { code: undefined, description: e.getMessage() });
                            }

                        }
                    });

                    var tokenTask = self.nativeObject.reauthenticate(credential);
                    tokenTask.addOnSuccessListener(innerSuccessCallback);
                    tokenTask.addOnFailureListener(innerFailureCallback);

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
            value: function(forceRefresh, callback) {
                if (!AndroidConfig.isEmulator) {

                    var innerSuccessCallback = NativeOnSuccessListener.implement({
                        onSuccess: function(result) {
                            callback(result.getToken());
                        }
                    });

                    var innerFailureCallback = NativeOnFailureListener.implement({
                        onFailure: function(e) {
                            callback(undefined, e.getMessage());
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
