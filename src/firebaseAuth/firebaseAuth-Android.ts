import FirebaseUser from '../firebaseUser';
// @ts-ignore
const NativeFirebaseAuth = requireClass('com.google.firebase.auth.FirebaseAuth');
// @ts-ignore
const NativeOnSuccessListener = requireClass('com.google.android.gms.tasks.OnSuccessListener');
// @ts-ignore
const NativeOnFailureListener = requireClass('com.google.android.gms.tasks.OnFailureListener');

// @ts-ignore
import AndroidConfig from '@smartface/native/util/Android/androidconfig';
import FirebaseAuthErrors from './firebaseAuthErrors';
type FirebaseUserErrorBody = {
    code?: FirebaseAuthErrors;
    description: string;
};

type FirebaseUserCallback = (
    FirebaseUser?: FirebaseUser,
    options?: {
        error: FirebaseUserErrorBody;
        isSuccess?: boolean;
        email?: string;
        token?: string;
    }
) => void | ((arg: boolean) => void);
export default class FirebaseAuth {
    static ios = {};
    static Error = FirebaseAuthErrors;
    FirebaseApp?: any;
    ios = {
        /**
         * Sets `languageCode` to the app's current language.
         *
         * @event useAppLanguage
         * @ios
         * @since 0.1
         */
        useAppLanguage: function () {}
    };
    nativeObject;
    constructor(FirebaseApp?: any) {
        this.FirebaseApp = FirebaseApp;
        this.nativeObject = !AndroidConfig.isEmulator
            ? this.FirebaseApp
                ? NativeFirebaseAuth.getInstance(this.FirebaseApp.nativeObject)
                : NativeFirebaseAuth.getInstance()
            : undefined;
    }

    /**
     * Synchronously gets the cached current user, or undefined if there is none
     *
     * @event getCurrentUser
     * @return {FirebaseUser}
     * @android
     * @ios
     * @since 0.1
     */
    getCurrentUser = () => {
        if (!AndroidConfig.isEmulator) {
            return new FirebaseUser(this.nativeObject.getCurrentUser());
        } else {
            // @ts-ignore
            return new FirebaseUser();
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
     * @event sendPasswordResetEmail
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
    sendPasswordResetEmail = (email: string, callback: FirebaseUserCallback) => {
        if (!AndroidConfig.isEmulator) {
            const innerSuccessCallback = NativeOnSuccessListener.implement({
                onSuccess: function (result) {
                    // @ts-ignore
                    callback(true);
                }
            });

            const innerFailureCallback = NativeOnFailureListener.implement({
                onFailure: function (e) {
                    const errorCode = '' + e.getErrorCode();

                    if (errorCode.includes('ERROR_USER_NOT_FOUND')) {
                        // thrown if the password is not strong enough
                        callback(undefined, { error: { code: FirebaseAuth.Error.UserNotFound, description: e.getMessage() } });
                    } else if (errorCode.includes('ERROR_OPERATION_NOT_ALLOWED')) {
                        // thrown if the password is not strong enough
                        callback(undefined, { error: { code: FirebaseAuth.Error.OperationNotAllowed, description: e.getMessage() } });
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
     * @event verifyPasswordResetCode
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
    verifyPasswordResetCode = (code: string, callback: FirebaseUserCallback) => {
        if (!AndroidConfig.isEmulator) {
            const innerSuccessCallback = NativeOnSuccessListener.implement({
                onSuccess: function (result) {
                    // @ts-ignore
                    callback(true);
                }
            });

            const innerFailureCallback = NativeOnFailureListener.implement({
                onFailure: function (e) {
                    const errorCode = '' + e.getErrorCode();

                    if (errorCode.includes('ERROR_USER_NOT_FOUND')) {
                        callback(undefined, { error: { code: FirebaseAuth.Error.UserNotFound, description: e.getMessage() } });
                    } else if (errorCode.includes('ERROR_OPERATION_NOT_ALLOWED')) {
                        callback(undefined, { error: { code: FirebaseAuth.Error.OperationNotAllowed, description: e.getMessage() } });
                    } else if (errorCode.includes('expired')) {
                        callback(undefined, { error: { code: FirebaseAuth.Error.ExpiredActionCode, description: e.getMessage() } });
                    } else if (errorCode.includes('ERROR_INVALID_CUSTOM_TOKEN')) {
                        callback(undefined, { error: { code: FirebaseAuth.Error.InvalidActionCode, description: e.getMessage() } });
                    } else if (errorCode.includes('ERROR_WEAK_PASSWORD')) {
                        callback(undefined, { error: { code: FirebaseAuth.Error.WeakPassword, description: e.getMessage() } });
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
     * @event confirmPasswordReset
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
    confirmPasswordReset = (code: string, newPassword: string, callback: FirebaseUserCallback) => {
        if (!AndroidConfig.isEmulator) {
            const innerSuccessCallback = NativeOnSuccessListener.implement({
                onSuccess: function (result) {
                    // @ts-ignore
                    callback(true);
                }
            });

            const innerFailureCallback = NativeOnFailureListener.implement({
                onFailure: function (e) {
                    const errorCode = '' + e.getErrorCode();

                    if (errorCode.includes('ERROR_USER_NOT_FOUND')) {
                        callback(undefined, { error: { code: FirebaseAuth.Error.UserNotFound, description: e.getMessage() } });
                    } else if (errorCode.includes('ERROR_OPERATION_NOT_ALLOWED')) {
                        callback(undefined, { error: { code: FirebaseAuth.Error.OperationNotAllowed, description: e.getMessage() } });
                    } else if (errorCode.includes('expired')) {
                        callback(undefined, { error: { code: FirebaseAuth.Error.ExpiredActionCode, description: e.getMessage() } });
                    } else if (errorCode.includes('ERROR_INVALID_CUSTOM_TOKEN')) {
                        callback(undefined, { error: { code: FirebaseAuth.Error.InvalidActionCode, description: e.getMessage() } });
                    } else if (errorCode.includes('ERROR_WEAK_PASSWORD')) {
                        callback(undefined, { error: { code: FirebaseAuth.Error.WeakPassword, description: e.getMessage() } });
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
     * @event createUserWithEmailAndPassword
     * @param {String} email
     * @param {String} password
     * @param {Function} callback
     * @param {FirebaseUser} callback.FirebaseUser
     * @param {Object} callback.error
     * @param {String} callback.error.code
     * @param {String} callback.error.description
     * @android
     * @ios
     * @since 0.1
     */
    createUserWithEmailAndPassword = (email: string, password: string, callback: FirebaseUserCallback) => {
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
                        callback(undefined, { error: { code: FirebaseAuth.Error.OperationNotAllowed, description: e.getMessage() } });
                    } else if (errorCode.includes('ERROR_INVALID_EMAIL')) {
                        callback(undefined, { error: { code: FirebaseAuth.Error.InvalidEmail, description: e.getMessage() } });
                    } else if (errorCode.includes('ERROR_EMAIL_ALREADY_IN_USE')) {
                        callback(undefined, { error: { code: FirebaseAuth.Error.EmailAlreadyInUse, description: e.getMessage() } });
                    } else if (errorCode.includes('ERROR_WEAK_PASSWORD')) {
                        callback(undefined, { error: { code: FirebaseAuth.Error.WeakPassword, description: e.getMessage() } });
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
     * @event signInWithEmailAndPassword
     * @param {String} email
     * @param {String} password
     * @param {Function} callback
     * @param {FirebaseUser} callback.FirebaseUser
     * @param {Object} callback.error
     * @param {String} callback.error.code
     * @param {String} callback.error.description
     * @android
     * @ios
     * @since 0.1
     */
    signInWithEmailAndPassword = (email: string, password: string, callback: FirebaseUserCallback) => {
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
                        callback(undefined, { error: { code: FirebaseAuth.Error.UserDisabled, description: e.getMessage() } });
                    } else if (errorCode.includes('ERROR_INVALID_EMAIL')) {
                        callback(undefined, { error: { code: FirebaseAuth.Error.InvalidEmail, description: e.getMessage() } });
                    } else if (errorCode.includes('ERROR_WRONG_PASSWORD')) {
                        callback(undefined, { error: { code: FirebaseAuth.Error.WrongPassword, description: e.getMessage() } });
                    } else if (errorCode.includes('ERROR_OPERATION_NOT_ALLOWED')) {
                        callback(undefined, { error: { code: FirebaseAuth.Error.OperationNotAllowed, description: e.getMessage() } });
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
     * @event signInWithCustomToken
     * @param {String} token
     * @param {Function} callback
     * @param {FirebaseUser} callback.FirebaseUser
     * @param {Object} callback.error
     * @param {String} callback.error.code
     * @param {String} callback.error.description
     * @android
     * @ios
     * @since 0.1
     */
    signInWithCustomToken = (token: string, callback: FirebaseUserCallback) => {
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
                        callback(undefined, { error: { code: FirebaseAuth.Error.InvalidCustomToken, description: e.getMessage() } });
                    } else if (errorCode.includes('mismatch')) {
                        callback(undefined, { error: { code: FirebaseAuth.Error.CustomTokenMismatch, description: e.getMessage() } });
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
     * @event signInAnonymously
     * @param {Function} callback
     * @param {FirebaseUser} callback.FirebaseUser
     * @param {Object} callback.error
     * @param {String} callback.error.code
     * @param {String} callback.error.description
     * @android
     * @ios
     * @since 0.1
     */
    signInAnonymously = (callback: FirebaseUserCallback) => {
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
                        callback(undefined, { error: { code: FirebaseAuth.Error.OperationNotAllowed, description: e.getMessage() } });
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
     * @event signOut
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
