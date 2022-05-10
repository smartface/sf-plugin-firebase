import User from '../User';
// @ts-ignore
const NativeFirebaseAuth = requireClass('com.google.firebase.auth.FirebaseAuth');
// @ts-ignore
const NativeOnSuccessListener = requireClass('com.google.android.gms.tasks.OnSuccessListener');
// @ts-ignore
const NativeOnFailureListener = requireClass('com.google.android.gms.tasks.OnFailureListener');

import AndroidConfig from '@smartface/native/util/Android/androidconfig';
import AuthErrors from './authErrors';
type UserErrorBody = {
    code?: AuthErrors;
    description: string;
};

type UserCallback = (
    User?: any,
    options?: {
        error: UserErrorBody;
        isSuccess?: boolean;
        email?: string;
        token?: string;
    }
) => void | ((arg: boolean) => void);
export default class Auth {
    static ios = {};
    static Error = AuthErrors;
    App?: any;
    ios = {
        /**
         * Sets `languageCode` to the app's current language.
         *
         * @method useAppLanguage
         * @ios
         * @since 0.1
         */
        useAppLanguage: function () {}
    };
    nativeObject;
    nativeAuth = {};
    constructor(App?: any) {
        this.App = App;
        this.nativeObject = !AndroidConfig.isEmulator
            ? this.App
                ? NativeFirebaseAuth.getInstance(this.App.nativeObject)
                : NativeFirebaseAuth.getInstance()
            : undefined;
    }

    /**
     * Synchronously gets the cached current user, or undefined if there is none
     *
     * @method getCurrentUser
     * @return {User}
     * @android
     * @ios
     * @since 0.1
     */
    getCurrentUser = () => {
        if (!AndroidConfig.isEmulator) {
            return new User(this.nativeObject.getCurrentUser());
        } else {
            return new User();
        }
    };
    /**
     * Initiates a password reset for the given email address.
     *
     *      Possible error codes:
     *
     *       + `OperationNotAllowed` - Indicates the administrator disabled sign
     *           in with the specified identity provider.
     *       + `UserNotFound` - Indicates the OOB code is expired.
     *
     * @method sendPasswordResetEmail
     * @param {String} email
     * @param {Function} callback
     * @param {Boolean} callback.isSuccess
     * @param {Object} callback.error
     * @param {String} callback.error.code
     * @param {String} callback.error.description
     * @android
     * @ios
     * @since 0.1
     */
    sendPasswordResetEmail = (email: string, callback: UserCallback) => {
        if (!AndroidConfig.isEmulator) {
            const innerSuccessCallback = NativeOnSuccessListener.implement({
                onSuccess: function (result) {
                    callback(true);
                }
            });

            const innerFailureCallback = NativeOnFailureListener.implement({
                onFailure: function (e) {
                    const errorCode = '' + e.getErrorCode();

                    if (errorCode.includes('ERROR_USER_NOT_FOUND')) {
                        // thrown if the password is not strong enough
                        callback(undefined, { error: { code: Auth.Error.UserNotFound, description: e.getMessage() } });
                    } else if (errorCode.includes('ERROR_OPERATION_NOT_ALLOWED')) {
                        // thrown if the password is not strong enough
                        callback(undefined, { error: { code: Auth.Error.OperationNotAllowed, description: e.getMessage() } });
                    } else {
                        callback(undefined, { error: { code: undefined, description: e.getMessage() } });
                    }
                }
            });

            const task = this.nativeObject.sendPasswordResetEmail(email);
            task.addOnSuccessListener(innerSuccessCallback);
            task.addOnFailureListener(innerFailureCallback);
        }
    };

    /**
     * Checks the validity of a verify password reset code.
     *
     *       Possible error codes:
     *
     *       + `OperationNotAllowed` - Indicates the administrator disabled sign
     *           in with the specified identity provider.
     *       + `ExpiredActionCode` - Indicates the OOB code is expired.
     *       + `InvalidActionCode` - Indicates the OOB code is invalid.
     *
     * @method verifyPasswordResetCode
     * @param {String} code
     * @param {Function} callback
     * @param {Boolean} callback.email
     * @param {Object} callback.error
     * @param {String} callback.error.code
     * @param {String} callback.error.description
     * @android
     * @ios
     * @since 0.1
     */
    verifyPasswordResetCode = (code: string, callback: UserCallback) => {
        if (!AndroidConfig.isEmulator) {
            const innerSuccessCallback = NativeOnSuccessListener.implement({
                onSuccess: function (result) {
                    callback(true);
                }
            });

            const innerFailureCallback = NativeOnFailureListener.implement({
                onFailure: function (e) {
                    const errorCode = '' + e.getErrorCode();

                    if (errorCode.includes('ERROR_USER_NOT_FOUND')) {
                        callback(undefined, { error: { code: Auth.Error.UserNotFound, description: e.getMessage() } });
                    } else if (errorCode.includes('ERROR_OPERATION_NOT_ALLOWED')) {
                        callback(undefined, { error: { code: Auth.Error.OperationNotAllowed, description: e.getMessage() } });
                    } else if (errorCode.includes('expired')) {
                        callback(undefined, { error: { code: Auth.Error.ExpiredActionCode, description: e.getMessage() } });
                    } else if (errorCode.includes('ERROR_INVALID_CUSTOM_TOKEN')) {
                        callback(undefined, { error: { code: Auth.Error.InvalidActionCode, description: e.getMessage() } });
                    } else if (errorCode.includes('ERROR_WEAK_PASSWORD')) {
                        callback(undefined, { error: { code: Auth.Error.WeakPassword, description: e.getMessage() } });
                    } else {
                        callback(undefined, { error: { code: undefined, description: e.getMessage() } });
                    }
                }
            });

            const task = this.nativeObject.verifyPasswordResetCode(code);
            task.addOnSuccessListener(innerSuccessCallback);
            task.addOnFailureListener(innerFailureCallback);
        }
    };

    /**
     * Resets the password given a code sent to the user outside of the app and a new password for the user.
     *
     *       Possible error codes:
     *
     *       + `WeakPassword` - Indicates an attempt to set a password that is
     *            considered too weak.
     *       + `OperationNotAllowed` - Indicates the administrator disabled sign
     *           in with the specified identity provider.
     *       + `ExpiredActionCode` - Indicates the OOB code is expired.
     *       + `InvalidActionCode` - Indicates the OOB code is invalid.
     *
     *
     * @method confirmPasswordReset
     * @param {String} code
     * @param {String} newPassword
     * @param {Function} callback
     * @param {Boolean} callback.email
     * @param {Object} callback.error
     * @param {String} callback.error.code
     * @param {String} callback.error.description
     * @android
     * @ios
     * @since 0.1
     */
    confirmPasswordReset = (code: string, newPassword: string, callback: UserCallback) => {
        if (!AndroidConfig.isEmulator) {
            const innerSuccessCallback = NativeOnSuccessListener.implement({
                onSuccess: function (result) {
                    callback(true);
                }
            });

            const innerFailureCallback = NativeOnFailureListener.implement({
                onFailure: function (e) {
                    const errorCode = '' + e.getErrorCode();

                    if (errorCode.includes('ERROR_USER_NOT_FOUND')) {
                        callback(undefined, { error: { code: Auth.Error.UserNotFound, description: e.getMessage() } });
                    } else if (errorCode.includes('ERROR_OPERATION_NOT_ALLOWED')) {
                        callback(undefined, { error: { code: Auth.Error.OperationNotAllowed, description: e.getMessage() } });
                    } else if (errorCode.includes('expired')) {
                        callback(undefined, { error: { code: Auth.Error.ExpiredActionCode, description: e.getMessage() } });
                    } else if (errorCode.includes('ERROR_INVALID_CUSTOM_TOKEN')) {
                        callback(undefined, { error: { code: Auth.Error.InvalidActionCode, description: e.getMessage() } });
                    } else if (errorCode.includes('ERROR_WEAK_PASSWORD')) {
                        callback(undefined, { error: { code: Auth.Error.WeakPassword, description: e.getMessage() } });
                    } else {
                        callback(undefined, { error: { code: undefined, description: e.getMessage() } });
                    }
                }
            });

            const task = this.nativeObject.confirmPasswordReset(code, newPassword);
            task.addOnSuccessListener(innerSuccessCallback);
            task.addOnFailureListener(innerFailureCallback);
        }
    };

    /**
     * Creates and, on success, signs in a user with the given email address and password.
     *
     *   Possible error codes:
     *
     *   + `InvalidEmail` - Indicates the email address is malformed.
     *   + `EmailAlreadyInUse` - Indicates the email used to attempt sign up
     *       already exists. Call fetchProvidersForEmail to check which sign-in mechanisms the user
     *       used, and prompt the user to sign in with one of those.
     *   + `OperationNotAllowed` - Indicates that email and password accounts
     *       are not enabled. Enable them in the Auth section of the Firebase console.
     *   + `WeakPassword` - Indicates an attempt to set a password that is
     *       considered too weak. The NSLocalizedFailureReasonErrorKey field in the NSError.userInfo
     *       dictionary object will contain more detailed explanation that can be shown to the user.
     *
     *
     * @method createUserWithEmailAndPassword
     * @param {String} email
     * @param {String} password
     * @param {Function} callback
     * @param {User} callback.User
     * @param {Object} callback.error
     * @param {String} callback.error.code
     * @param {String} callback.error.description
     * @android
     * @ios
     * @since 0.1
     */
    createUserWithEmailAndPassword = (email: string, password: string, callback: UserCallback) => {
        if (!AndroidConfig.isEmulator) {
            const innerSuccessCallback = NativeOnSuccessListener.implement({
                onSuccess: function (result) {
                    callback(this.getCurrentUser());
                }
            });

            const innerFailureCallback = NativeOnFailureListener.implement({
                onFailure: function (e) {
                    const errorCode = '' + e.getErrorCode();

                    if (errorCode.includes('ERROR_OPERATION_NOT_ALLOWED')) {
                        callback(undefined, { error: { code: Auth.Error.OperationNotAllowed, description: e.getMessage() } });
                    } else if (errorCode.includes('ERROR_INVALID_EMAIL')) {
                        callback(undefined, { error: { code: Auth.Error.InvalidEmail, description: e.getMessage() } });
                    } else if (errorCode.includes('ERROR_EMAIL_ALREADY_IN_USE')) {
                        callback(undefined, { error: { code: Auth.Error.EmailAlreadyInUse, description: e.getMessage() } });
                    } else if (errorCode.includes('ERROR_WEAK_PASSWORD')) {
                        callback(undefined, { error: { code: Auth.Error.WeakPassword, description: e.getMessage() } });
                    } else {
                        callback(undefined, { error: { code: undefined, description: e.getMessage() } });
                    }
                }
            });

            const task = this.nativeObject.createUserWithEmailAndPassword(email, password);
            task.addOnSuccessListener(innerSuccessCallback);
            task.addOnFailureListener(innerFailureCallback);
        }
    };

    /**
     * Signs in using an email address and password.
     *
     *  Possible error codes:
     *
     *   + `OperationNotAllowed` - Indicates that email and password
     *       accounts are not enabled. Enable them in the Auth section of the
     *       Firebase console.
     *   + `UserDisabled` - Indicates the user's account is disabled.
     *   + `WrongPassword` - Indicates the user attempted
     *       sign in with an incorrect password.
     *   + `InvalidEmail` - Indicates the email address is malformed.
     *
     *
     * @method signInWithEmailAndPassword
     * @param {String} email
     * @param {String} password
     * @param {Function} callback
     * @param {User} callback.User
     * @param {Object} callback.error
     * @param {String} callback.error.code
     * @param {String} callback.error.description
     * @android
     * @ios
     * @since 0.1
     */
    signInWithEmailAndPassword = (email: string, password: string, callback: UserCallback) => {
        if (!AndroidConfig.isEmulator) {
            const innerSuccessCallback = NativeOnSuccessListener.implement({
                onSuccess: function (result) {
                    callback(this.getCurrentUser());
                }
            });

            const innerFailureCallback = NativeOnFailureListener.implement({
                onFailure: function (e) {
                    const errorCode = '' + e.getErrorCode();

                    if (errorCode.includes('ERROR_USER_DISABLED')) {
                        // thrown if the password is not strong enough
                        callback(undefined, { error: { code: Auth.Error.UserDisabled, description: e.getMessage() } });
                    } else if (errorCode.includes('ERROR_INVALID_EMAIL')) {
                        callback(undefined, { error: { code: Auth.Error.InvalidEmail, description: e.getMessage() } });
                    } else if (errorCode.includes('ERROR_WRONG_PASSWORD')) {
                        callback(undefined, { error: { code: Auth.Error.WrongPassword, description: e.getMessage() } });
                    } else if (errorCode.includes('ERROR_OPERATION_NOT_ALLOWED')) {
                        callback(undefined, { error: { code: Auth.Error.OperationNotAllowed, description: e.getMessage() } });
                    } else {
                        callback(undefined, { error: { code: undefined, description: e.getMessage() } });
                    }
                }
            });

            const task = this.nativeObject.signInWithEmailAndPassword(email, password);
            task.addOnSuccessListener(innerSuccessCallback);
            task.addOnFailureListener(innerFailureCallback);
        }
    };

    /**
     * Asynchronously signs in to Firebase with the given Auth token.
     *
     *   Possible error codes:
     *
     *   + `InvalidCustomToken` - Indicates a validation error with
     *       the custom token.
     *   + `CustomTokenMismatch` - Indicates the service account and the API key
     *       belong to different projects.
     *
     *
     * @method signInWithCustomToken
     * @param {String} token
     * @param {Function} callback
     * @param {User} callback.User
     * @param {Object} callback.error
     * @param {String} callback.error.code
     * @param {String} callback.error.description
     * @android
     * @ios
     * @since 0.1
     */
    signInWithCustomToken = (token: string, callback: UserCallback) => {
        if (!AndroidConfig.isEmulator) {
            const innerSuccessCallback = NativeOnSuccessListener.implement({
                onSuccess: function (result) {
                    callback(this.getCurrentUser());
                }
            });

            const innerFailureCallback = NativeOnFailureListener.implement({
                onFailure: function (e) {
                    const errorCode = '' + e.getErrorCode();

                    if (errorCode.includes('ERROR_INVALID_CUSTOM_TOKEN')) {
                        // thrown if the password is not strong enough
                        callback(undefined, { error: { code: Auth.Error.InvalidCustomToken, description: e.getMessage() } });
                    } else if (errorCode.includes('mismatch')) {
                        callback(undefined, { error: { code: Auth.Error.CustomTokenMismatch, description: e.getMessage() } });
                    } else {
                        callback(undefined, { error: { code: undefined, description: e.getMessage() } });
                    }
                }
            });

            const task = this.nativeObject.signInWithCustomToken(token);
            task.addOnSuccessListener(innerSuccessCallback);
            task.addOnFailureListener(innerFailureCallback);
        }
    };

    /**
     * Asynchronously creates and becomes an anonymous user.
     *
     *   Possible error codes:
     *
     *   + `OperationNotAllowed` - Indicates that anonymous accounts are
     *       not enabled. Enable them in the Auth section of the Firebase console.
     *
     * @method signInAnonymously
     * @param {Function} callback
     * @param {User} callback.User
     * @param {Object} callback.error
     * @param {String} callback.error.code
     * @param {String} callback.error.description
     * @android
     * @ios
     * @since 0.1
     */
    signInAnonymously = (callback: UserCallback) => {
        if (!AndroidConfig.isEmulator) {
            const innerSuccessCallback = NativeOnSuccessListener.implement({
                onSuccess: function (result) {
                    callback(this.getCurrentUser());
                }
            });

            const innerFailureCallback = NativeOnFailureListener.implement({
                onFailure: function (e) {
                    const errorCode = '' + e.getErrorCode();

                    if (errorCode.includes('ERROR_OPERATION_NOT_ALLOWED')) {
                        // thrown if the token format is incorrect or if it corresponds to a different Firebase App
                        callback(undefined, { error: { code: Auth.Error.OperationNotAllowed, description: e.getMessage() } });
                    } else {
                        callback(undefined, { error: { code: undefined, description: e.getMessage() } });
                    }
                }
            });

            const task = this.nativeObject.signInAnonymously();
            task.addOnSuccessListener(innerSuccessCallback);
            task.addOnFailureListener(innerFailureCallback);
        }
    };

    /**
     * Signs out the current user.
     *
     * @method signOut
     * @android
     * @ios
     * @since 0.1
     */
    signOut = () => {
        if (!AndroidConfig.isEmulator) {
            this.nativeObject.signOut();
        }
    };
}
module.exports = Auth;
