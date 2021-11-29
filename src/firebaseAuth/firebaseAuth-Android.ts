const FirebaseUser = require('../firebaseUser');
// @ts-ignore
const NativeFirebaseAuth = requireClass('com.google.firebase.auth.FirebaseAuth');
// @ts-ignore
const NativeOnSuccessListener = requireClass('com.google.android.gms.tasks.OnSuccessListener');
// @ts-ignore
const NativeOnFailureListener = requireClass('com.google.android.gms.tasks.OnFailureListener');

import AndroidConfig from '@smartface/native/util/Android/androidconfig';

function FirebaseAuth(FirebaseApp) {
    var self = this;

    if (!AndroidConfig.isEmulator) {
        if (FirebaseApp) {
            this.nativeObject = NativeFirebaseAuth.getInstance(FirebaseApp.nativeObject);
        } else {
            this.nativeObject = NativeFirebaseAuth.getInstance();
        }
    }

    Object.defineProperties(self, {
        getCurrentUser: {
            value: function () {
                if (!AndroidConfig.isEmulator) {
                    return new FirebaseUser(self.nativeObject.getCurrentUser());
                } else {
                    return new FirebaseUser();
                }
            },
            enumerable: true,
            configurable: true
        },
        sendPasswordResetEmail: {
            value: function (email, callback) {
                if (!AndroidConfig.isEmulator) {
                    var innerSuccessCallback = NativeOnSuccessListener.implement({
                        onSuccess: function (result) {
                            callback(true);
                        }
                    });

                    var innerFailureCallback = NativeOnFailureListener.implement({
                        onFailure: function (e) {
                            var errorCode = '' + e.getErrorCode();

                            if (errorCode.includes('ERROR_USER_NOT_FOUND')) {
                                // thrown if the password is not strong enough
                                callback(undefined, { code: FirebaseAuth.Error.UserNotFound, description: e.getMessage() });
                            } else if (errorCode.includes('ERROR_OPERATION_NOT_ALLOWED')) {
                                // thrown if the password is not strong enough
                                callback(undefined, { code: FirebaseAuth.Error.OperationNotAllowed, description: e.getMessage() });
                            } else {
                                callback(undefined, { code: undefined, description: e.getMessage() });
                            }
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
        verifyPasswordResetCode: {
            value: function (code, callback) {
                if (!AndroidConfig.isEmulator) {
                    var innerSuccessCallback = NativeOnSuccessListener.implement({
                        onSuccess: function (result) {
                            callback(true);
                        }
                    });

                    var innerFailureCallback = NativeOnFailureListener.implement({
                        onFailure: function (e) {
                            var errorCode = '' + e.getErrorCode();

                            if (errorCode.includes('ERROR_USER_NOT_FOUND')) {
                                callback(undefined, { code: FirebaseAuth.Error.UserNotFound, description: e.getMessage() });
                            } else if (errorCode.includes('ERROR_OPERATION_NOT_ALLOWED')) {
                                callback(undefined, { code: FirebaseAuth.Error.OperationNotAllowed, description: e.getMessage() });
                            } else if (errorCode.includes('expired')) {
                                callback(undefined, { code: FirebaseAuth.Error.ExpiredActionCode, description: e.getMessage() });
                            } else if (errorCode.includes('ERROR_INVALID_CUSTOM_TOKEN')) {
                                callback(undefined, { code: FirebaseAuth.Error.InvalidActionCode, description: e.getMessage() });
                            } else if (errorCode.includes('ERROR_WEAK_PASSWORD')) {
                                callback(undefined, { code: FirebaseAuth.Error.WeakPassword, description: e.getMessage() });
                            } else {
                                callback(undefined, { code: undefined, description: e.getMessage() });
                            }
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
        confirmPasswordReset: {
            value: function (code, newPassword, callback) {
                if (!AndroidConfig.isEmulator) {
                    var innerSuccessCallback = NativeOnSuccessListener.implement({
                        onSuccess: function (result) {
                            callback(true);
                        }
                    });

                    var innerFailureCallback = NativeOnFailureListener.implement({
                        onFailure: function (e) {
                            var errorCode = '' + e.getErrorCode();

                            if (errorCode.includes('ERROR_USER_NOT_FOUND')) {
                                callback(undefined, { code: FirebaseAuth.Error.UserNotFound, description: e.getMessage() });
                            } else if (errorCode.includes('ERROR_OPERATION_NOT_ALLOWED')) {
                                callback(undefined, { code: FirebaseAuth.Error.OperationNotAllowed, description: e.getMessage() });
                            } else if (errorCode.includes('expired')) {
                                callback(undefined, { code: FirebaseAuth.Error.ExpiredActionCode, description: e.getMessage() });
                            } else if (errorCode.includes('ERROR_INVALID_CUSTOM_TOKEN')) {
                                callback(undefined, { code: FirebaseAuth.Error.InvalidActionCode, description: e.getMessage() });
                            } else if (errorCode.includes('ERROR_WEAK_PASSWORD')) {
                                callback(undefined, { code: FirebaseAuth.Error.WeakPassword, description: e.getMessage() });
                            } else {
                                callback(undefined, { code: undefined, description: e.getMessage() });
                            }
                        }
                    });

                    var task = self.nativeObject.confirmPasswordReset(code, newPassword);
                    task.addOnSuccessListener(innerSuccessCallback);
                    task.addOnFailureListener(innerFailureCallback);
                }
            },
            enumerable: true,
            configurable: true
        },
        createUserWithEmailAndPassword: {
            value: function (email, password, callback) {
                if (!AndroidConfig.isEmulator) {
                    var innerSuccessCallback = NativeOnSuccessListener.implement({
                        onSuccess: function (result) {
                            callback(self.getCurrentUser());
                        }
                    });

                    var innerFailureCallback = NativeOnFailureListener.implement({
                        onFailure: function (e) {
                            var errorCode = '' + e.getErrorCode();

                            if (errorCode.includes('ERROR_OPERATION_NOT_ALLOWED')) {
                                callback(undefined, { code: FirebaseAuth.Error.OperationNotAllowed, description: e.getMessage() });
                            } else if (errorCode.includes('ERROR_INVALID_EMAIL')) {
                                callback(undefined, { code: FirebaseAuth.Error.InvalidEmail, description: e.getMessage() });
                            } else if (errorCode.includes('ERROR_EMAIL_ALREADY_IN_USE')) {
                                callback(undefined, { code: FirebaseAuth.Error.EmailAlreadyInUse, description: e.getMessage() });
                            } else if (errorCode.includes('ERROR_WEAK_PASSWORD')) {
                                callback(undefined, { code: FirebaseAuth.Error.WeakPassword, description: e.getMessage() });
                            } else {
                                callback(undefined, { code: undefined, description: e.getMessage() });
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
        signInWithEmailAndPassword: {
            value: function (email, password, callback) {
                if (!AndroidConfig.isEmulator) {
                    var innerSuccessCallback = NativeOnSuccessListener.implement({
                        onSuccess: function (result) {
                            callback(self.getCurrentUser());
                        }
                    });

                    var innerFailureCallback = NativeOnFailureListener.implement({
                        onFailure: function (e) {
                            var errorCode = '' + e.getErrorCode();

                            if (errorCode.includes('ERROR_USER_DISABLED')) {
                                // thrown if the password is not strong enough
                                callback(undefined, { code: FirebaseAuth.Error.UserDisabled, description: e.getMessage() });
                            } else if (errorCode.includes('ERROR_INVALID_EMAIL')) {
                                callback(undefined, { code: FirebaseAuth.Error.InvalidEmail, description: e.getMessage() });
                            } else if (errorCode.includes('ERROR_WRONG_PASSWORD')) {
                                callback(undefined, { code: FirebaseAuth.Error.WrongPassword, description: e.getMessage() });
                            } else if (errorCode.includes('ERROR_OPERATION_NOT_ALLOWED')) {
                                callback(undefined, { code: FirebaseAuth.Error.OperationNotAllowed, description: e.getMessage() });
                            } else {
                                callback(undefined, { code: undefined, description: e.getMessage() });
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
        signInWithCustomToken: {
            value: function (token, callback) {
                if (!AndroidConfig.isEmulator) {
                    var innerSuccessCallback = NativeOnSuccessListener.implement({
                        onSuccess: function (result) {
                            callback(self.getCurrentUser());
                        }
                    });

                    var innerFailureCallback = NativeOnFailureListener.implement({
                        onFailure: function (e) {
                            var errorCode = '' + e.getErrorCode();

                            if (errorCode.includes('ERROR_INVALID_CUSTOM_TOKEN')) {
                                // thrown if the password is not strong enough
                                callback(undefined, { code: FirebaseAuth.Error.InvalidCustomToken, description: e.getMessage() });
                            } else if (errorCode.includes('mismatch')) {
                                callback(undefined, { code: FirebaseAuth.Error.CustomTokenMismatch, description: e.getMessage() });
                            } else {
                                callback(undefined, { code: undefined, description: e.getMessage() });
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
        signInAnonymously: {
            value: function (callback) {
                if (!AndroidConfig.isEmulator) {
                    var innerSuccessCallback = NativeOnSuccessListener.implement({
                        onSuccess: function (result) {
                            callback(self.getCurrentUser());
                        }
                    });

                    var innerFailureCallback = NativeOnFailureListener.implement({
                        onFailure: function (e) {
                            var errorCode = '' + e.getErrorCode();

                            if (errorCode.includes('ERROR_OPERATION_NOT_ALLOWED')) {
                                // thrown if the token format is incorrect or if it corresponds to a different Firebase App
                                callback(undefined, { code: FirebaseAuth.Error.OperationNotAllowed, description: e.getMessage() });
                            } else {
                                callback(undefined, { code: undefined, description: e.getMessage() });
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
        signOut: {
            value: function () {
                if (!AndroidConfig.isEmulator) {
                    self.nativeObject.signOut();
                }
            },
            enumerable: true,
            configurable: true
        }
    });

    self.ios = { useAppLanguage: function () {} };
}

FirebaseAuth.ios = {};

FirebaseAuth.Error = require('./firebaseAuthErrors');

module.exports = FirebaseAuth;
