// @ts-ignore
const NativeOnSuccessListener = requireClass('com.google.android.gms.tasks.OnSuccessListener');
// @ts-ignore
const NativeOnFailureListener = requireClass('com.google.android.gms.tasks.OnFailureListener');
// @ts-ignore
const NativeUserProfileChangeRequest = requireClass('com.google.firebase.auth.UserProfileChangeRequest');
// @ts-ignore
const NativeEmailAuthProvider = requireClass('com.google.firebase.auth.EmailAuthProvider');
// @ts-ignore
const NativeUri = requireClass('android.net.Uri');
import AuthError from '../Auth/authErrors';

// @ts-ignore
import AndroidConfig from '@smartface/native/util/Android/androidconfig';

type UserErrorBody = {
    code?: AuthError;
    description: string;
};

type UserCallback = (
    User: any,
    options?: {
        error: UserErrorBody;
        isSuccess?: boolean;
        email?: string;
        token?: string;
    }
) => void | ((arg: boolean) => void);

export default class User {
    nativeObject: any;
    ios = {};
    static ios = {};
    constructor(nativeUser) {
        if (!AndroidConfig.isEmulator) {
            this.nativeObject = nativeUser;
        }
    }

    /**
     * Returns the main email address of the user, as stored in the Firebase project's user database.
     *
     * @event getEmail
     * @android
     * @ios
     * @since 0.1
     */
    getEmail: () => string = () => {
        if (!AndroidConfig.isEmulator) {
            return this.nativeObject.getEmail();
        }
    };

    /**
     * Returns the main display name of this user from the Firebase project's user database.
     *
     * @event getDisplayName
     * @android
     * @ios
     * @since 0.1
     */
    getDisplayName: () => string = () => {
        if (!AndroidConfig.isEmulator) {
            return this.nativeObject.getDisplayName();
        }
    };

    /**
     * Set displayName.
     *
     * @event setDisplayName
     * @param {String} displayName
     * @param {Function} callback
     * @param {String} callback.token
     * @param {String} callback.error
     * @android
     * @ios
     * @since 0.1
     */
    setDisplayName = (name: string, callback: UserCallback) => {
        if (!AndroidConfig.isEmulator) {
            let profileUpdates = new NativeUserProfileChangeRequest.Builder();
            profileUpdates = profileUpdates.setDisplayName(name);
            const request = profileUpdates.build();

            const innerSuccessCallback = NativeOnSuccessListener.implement({
                onSuccess: function (result) {
                    callback(true);
                }
            });

            const innerFailureCallback = NativeOnFailureListener.implement({
                onFailure: function (e) {
                    callback(false, e.getMessage());
                }
            });

            const tokenTask = this.nativeObject.updateProfile(request);
            tokenTask.addOnSuccessListener(innerSuccessCallback);
            tokenTask.addOnFailureListener(innerFailureCallback);
        }
    };

    /**
     * Returns the URL of this user's main profile picture, as stored in the Firebase project's user database.
     *
     * @event getPhotoURL
     * @android
     * @ios
     * @since 0.1
     */
    getPhotoURL: () => string = () => {
        if (!AndroidConfig.isEmulator) {
            return this.nativeObject.getPhotoUrl();
        }
    };

    /**
     * Set photoURL.
     *
     * @event setPhotoURL
     * @param {String} photoURL
     * @param {Function} callback
     * @param {String} callback.token
     * @param {String} callback.error
     * @android
     * @ios
     * @since 0.1
     */
    setPhotoURL = (url: string, callback: UserCallback) => {
        if (!AndroidConfig.isEmulator) {
            let profileUpdates = new NativeUserProfileChangeRequest.Builder();
            profileUpdates = profileUpdates.setPhotoUri(NativeUri.parse(url));
            const request = profileUpdates.build();

            const innerSuccessCallback = NativeOnSuccessListener.implement({
                onSuccess: function (result) {
                    callback(true);
                }
            });

            const innerFailureCallback = NativeOnFailureListener.implement({
                onFailure: function (e) {
                    callback(false, e.getMessage());
                }
            });

            const tokenTask = this.nativeObject.updateProfile(request);
            tokenTask.addOnSuccessListener(innerSuccessCallback);
            tokenTask.addOnFailureListener(innerFailureCallback);
        }
    };

    /**
     * Initiates email verification for the user.
     *
     *  Possible error code;
     *   + `UserNotFound` - Indicates the user account was not found.
     *   + `UserDisabled`
     *   + `InvalidUserToken`
     *   + `UserTokenExpired`
     *
     * @event sendEmailVerification
     * @param {Function} callback
     * @param {Boolean} callback.isSuccess
     * @param {Object} callback.error
     * @param {String} callback.error.code
     * @param {String} callback.error.description
     * @android
     * @ios
     * @since 0.1
     */
    sendEmailVerification = (callback: UserCallback) => {
        if (!AndroidConfig.isEmulator) {
            const innerSuccessCallback = NativeOnSuccessListener.implement({
                onSuccess: function (result) {
                    callback(true);
                }
            });

            const innerFailureCallback = NativeOnFailureListener.implement({
                onFailure: function (e) {
                    const errorCode = '' + e.getErrorCode();

                    if (errorCode.includes('ERROR_USER_DISABLED')) {
                        // thrown if the password is not strong enough
                        callback(false, { error: { code: AuthError.UserDisabled, description: e.getMessage() } });
                    } else if (errorCode.includes('ERROR_USER_NOT_FOUND')) {
                        // thrown if the password is not strong enough
                        callback(false, { error: { code: AuthError.UserNotFound, description: e.getMessage() } });
                    } else if (errorCode.includes('ERROR_USER_TOKEN_EXPIRED')) {
                        // thrown if the password is not strong enough
                        callback(false, { error: { code: AuthError.UserTokenExpired, description: e.getMessage() } });
                    } else if (errorCode.includes('ERROR_INVALID_USER_TOKEN')) {
                        // thrown if the password is not strong enough
                        callback(false, { error: { code: AuthError.InvalidUserToken, description: e.getMessage() } });
                    } else {
                        callback(false, { error: { code: undefined, description: e.getMessage() } });
                    }
                }
            });

            const tokenTask = this.nativeObject.sendEmailVerification();
            tokenTask.addOnSuccessListener(innerSuccessCallback);
            tokenTask.addOnFailureListener(innerFailureCallback);
        }
    };

    /**
     * Indicates the email address associated with this user has been verified.
     *
     * @event isEmailVerified
     * @return {Boolean} verified
     * @android
     * @ios
     * @since 0.1
     */
    isEmailVerified: () => boolean = () => {
        if (!AndroidConfig.isEmulator) {
            return this.nativeObject.isEmailVerified();
        }
    };

    /**
     * Update email.
     *
     *  Possible error code;
     *   + `EmailAlreadyInUse`
     *   + `InvalidEmail`
     *   + `RequiresRecentLogin`
     *
     * @event updateEmail
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
    updateEmail = (email: string, callback: UserCallback) => {
        if (!AndroidConfig.isEmulator) {
            const innerSuccessCallback = NativeOnSuccessListener.implement({
                onSuccess: function (result) {
                    callback(true);
                }
            });

            const innerFailureCallback = NativeOnFailureListener.implement({
                onFailure: function (e) {
                    const errorCode = '' + e.getErrorCode();

                    if (errorCode.includes('ERROR_OPERATION_NOT_ALLOWED')) {
                        callback(false, { error: { code: AuthError.OperationNotAllowed, description: e.getMessage() } });
                    } else if (errorCode.includes('ERROR_INVALID_EMAIL')) {
                        callback(false, { error: { code: AuthError.InvalidEmail, description: e.getMessage() } });
                    } else if (errorCode.includes('ERROR_EMAIL_ALREADY_IN_USE')) {
                        callback(false, { error: { code: AuthError.EmailAlreadyInUse, description: e.getMessage() } });
                    } else if (errorCode.includes('ERROR_WEAK_PASSWORD')) {
                        callback(false, { error: { code: AuthError.WeakPassword, description: e.getMessage() } });
                    } else if (errorCode.includes('recent')) {
                        callback(false, { error: { code: AuthError.RequiresRecentLogin, description: e.getMessage() } });
                    } else {
                        callback(false, { error: { code: undefined, description: e.getMessage() } });
                    }
                }
            });

            const tokenTask = this.nativeObject.updateEmail(email);
            tokenTask.addOnSuccessListener(innerSuccessCallback);
            tokenTask.addOnFailureListener(innerFailureCallback);
        }
    };

    /**
     * Update password.
     *
     *  Possible error code;
     *   + `OperationNotAllowed`
     *   + `WeakPassword`
     *   + `RequiresRecentLogin`
     *
     * @event updatePassword
     * @param {String} password
     * @param {Function} callback
     * @param {Boolean} callback.isSuccess
     * @param {Object} callback.error
     * @param {String} callback.error.code
     * @param {String} callback.error.description
     * @android
     * @ios
     * @since 0.1
     */
    updatePassword = (password: string, callback: UserCallback) => {
        if (!AndroidConfig.isEmulator) {
            const innerSuccessCallback = NativeOnSuccessListener.implement({
                onSuccess: function (result) {
                    callback(true);
                }
            });

            const innerFailureCallback = NativeOnFailureListener.implement({
                onFailure: function (e) {
                    const errorCode = '' + e.getErrorCode();

                    if (errorCode.includes('ERROR_OPERATION_NOT_ALLOWED')) {
                        callback(false, { error: { code: AuthError.OperationNotAllowed, description: e.getMessage() } });
                    } else if (errorCode.includes('ERROR_INVALID_EMAIL')) {
                        callback(false, { error: { code: AuthError.InvalidEmail, description: e.getMessage() } });
                    } else if (errorCode.includes('ERROR_EMAIL_ALREADY_IN_USE')) {
                        callback(false, { error: { code: AuthError.EmailAlreadyInUse, description: e.getMessage() } });
                    } else if (errorCode.includes('ERROR_WEAK_PASSWORD')) {
                        callback(false, { error: { code: AuthError.WeakPassword, description: e.getMessage() } });
                    } else if (errorCode.includes('recent')) {
                        callback(false, { error: { code: AuthError.RequiresRecentLogin, description: e.getMessage() } });
                    } else {
                        callback(false, { error: { code: undefined, description: e.getMessage() } });
                    }
                }
            });

            const tokenTask = this.nativeObject.updatePassword(password);
            tokenTask.addOnSuccessListener(innerSuccessCallback);
            tokenTask.addOnFailureListener(innerFailureCallback);
        }
    };

    /**
     * Reloads the user’s profile data from the server.
     * 
     *  Possible error code;
     *      `RequiresRecentLogin` - Updating email is a security sensitive
                operation that requires a recent login from the user. This error indicates the user
                has not signed in recently enough.
    *
    * @event reload
    * @param {Function} callback
    * @param {Boolean} callback.isSuccess
    * @param {Object} callback.error
    * @param {String} callback.error.code
    * @param {String} callback.error.description
    * @android
    * @ios
    * @since 0.1
    */
    reload = (callback: UserCallback) => {
        if (!AndroidConfig.isEmulator) {
            const innerSuccessCallback = NativeOnSuccessListener.implement({
                onSuccess: function (result) {
                    callback(true);
                }
            });

            const innerFailureCallback = NativeOnFailureListener.implement({
                onFailure: function (e) {
                    const errorCode = '' + e.getErrorCode();

                    if (errorCode.includes('recent')) {
                        callback(false, { error: { code: AuthError.RequiresRecentLogin, description: e.getMessage() } });
                    } else {
                        callback(false, { error: { code: undefined, description: e.getMessage() } });
                    }
                }
            });

            const tokenTask = this.nativeObject.reload();
            tokenTask.addOnSuccessListener(innerSuccessCallback);
            tokenTask.addOnFailureListener(innerFailureCallback);
        }
    };

    /**
     * Deletes the user record from your Firebase project's database. 
     * If the operation is successful, the user will be signed out.
     * 
     *  Possible error code;
     *      `RequiresRecentLogin` - Updating email is a security sensitive
                operation that requires a recent login from the user. This error indicates the user
                has not signed in recently enough.
    *
    * @event delete
    * @param {Function} callback
    * @param {Boolean} callback.isSuccess
    * @param {Object} callback.error
    * @param {String} callback.error.code
    * @param {String} callback.error.description
    * @android
    * @ios
    * @since 0.1
    */
    delete = (callback: UserCallback) => {
        if (!AndroidConfig.isEmulator) {
            const innerSuccessCallback = NativeOnSuccessListener.implement({
                onSuccess: function (result) {
                    callback(true);
                }
            });

            const innerFailureCallback = NativeOnFailureListener.implement({
                onFailure: function (e) {
                    const errorCode = '' + e.getErrorCode();

                    if (errorCode.includes('recent')) {
                        callback(false, { error: { code: AuthError.RequiresRecentLogin, description: e.getMessage() } });
                    } else {
                        callback(false, { error: { code: undefined, description: e.getMessage() } });
                    }
                }
            });

            const tokenTask = this.nativeObject.delete();
            tokenTask.addOnSuccessListener(innerSuccessCallback);
            tokenTask.addOnFailureListener(innerFailureCallback);
        }
    };

    /**
     * Reauthenticate.
     *
     *  Possible error code;
     *   + `OperationNotAllowed`
     *   + `UserDisabled`
     *   + `WrongPassword`
     *   + `UserMismatch`
     *   + `InvalidEmail`
     *
     * @event reauthenticate
     * @param {String} email
     * @param {String} password
     * @param {Function} callback
     * @param {Boolean} callback.isSuccess
     * @param {Object} callback.error
     * @param {String} callback.error.code
     * @param {String} callback.error.description
     * @android
     * @ios
     * @since 0.1
     */
    reauthenticate = (email: string, password: string, callback: UserCallback) => {
        if (!AndroidConfig.isEmulator) {
            const credential = NativeEmailAuthProvider.getCredential(email, password);
            const innerSuccessCallback = NativeOnSuccessListener.implement({
                onSuccess: function (result) {
                    callback(true);
                }
            });

            const innerFailureCallback = NativeOnFailureListener.implement({
                onFailure: function (e) {
                    const errorCode = '' + e.getErrorCode();

                    if (errorCode.includes('ERROR_USER_DISABLED')) {
                        // thrown if the password is not strong enough
                        callback(false, { error: { code: AuthError.UserDisabled, description: e.getMessage() } });
                    } else if (errorCode.includes('ERROR_USER_NOT_FOUND')) {
                        // thrown if the password is not strong enough
                        callback(false, { error: { code: AuthError.UserMismatch, description: e.getMessage() } });
                    } else if (errorCode.includes('ERROR_WRONG_PASSWORD')) {
                        // thrown if the password is not strong enough
                        callback(false, { error: { code: AuthError.WrongPassword, description: e.getMessage() } });
                    } else if (errorCode.includes('ERROR_INVALID_EMAIL')) {
                        // thrown if the password is not strong enough
                        callback(false, { error: { code: AuthError.InvalidEmail, description: e.getMessage() } });
                    } else if (errorCode.includes('ERROR_OPERATION_NOT_ALLOWED')) {
                        // thrown if the password is not strong enough
                        callback(false, { error: { code: AuthError.OperationNotAllowed, description: e.getMessage() } });
                    } else {
                        callback(false, { error: { code: undefined, description: e.getMessage() } });
                    }
                }
            });

            const tokenTask = this.nativeObject.reauthenticate(credential);
            tokenTask.addOnSuccessListener(innerSuccessCallback);
            tokenTask.addOnFailureListener(innerFailureCallback);
        }
    };

    /**
     * Returns the phone number of the user, as stored in the Firebase project's user database, or null if none exists
     *
     * @event getPhoneNumber
     * @android
     * @ios
     * @since 0.1
     */
    getPhoneNumber = () => {
        if (!AndroidConfig.isEmulator) {
            return this.nativeObject.getPhoneNumber();
        }
    };

    /**
     * Returns a string used to uniquely identify your user in your Firebase project's user database.
     *
     * @event getUID
     * @android
     * @ios
     * @since 0.1
     */
    getUID: () => string = () => {
        if (!AndroidConfig.isEmulator) {
            return this.nativeObject.getUid();
        }
    };

    /**
     * Returns true if the user is anonymous.
     *
     * @event isAnonymous
     * @android
     * @ios
     * @since 0.1
     */
    isAnonymous: () => boolean = () => {
        if (!AndroidConfig.isEmulator) {
            return this.nativeObject.isAnonymous();
        }
    };

    /**
     * Returns token.
     *
     * @event getIdToken
     * @param {Boolean} forceRefresh
     * @param {Function} callback
     * @param {String} callback.token
     * @param {String} callback.error
     * @android
     * @ios
     * @since 0.1
     */
    getIdToken = (forceRefresh: boolean, callback: UserCallback) => {
        if (!AndroidConfig.isEmulator) {
            const innerSuccessCallback = NativeOnSuccessListener.implement({
                onSuccess: function (result) {
                    callback(result.getToken());
                }
            });

            const innerFailureCallback = NativeOnFailureListener.implement({
                onFailure: function (e) {
                    callback(undefined, e.getMessage());
                }
            });

            const tokenTask = this.nativeObject.getToken(forceRefresh);
            tokenTask.addOnSuccessListener(innerSuccessCallback);
            tokenTask.addOnFailureListener(innerFailureCallback);
        }
    };
}
module.exports = User;
