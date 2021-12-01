export default class Auth {
    ios: {
        /**
         * The current user language code. This property can be set to the app's current language by
         * calling `useAppLanguage`.
         *
         * @property {String} languageCode
         * @ios
         * @since 0.1
         */
        languageCode?: string;
        /**
         * Sets `languageCode` to the app's current language.
         *
         * @event useAppLanguage
         * @ios
         * @since 0.1
         */
        useAppLanguage?: () => void;
    };
    constructor(App) {
        this.ios = {};
    }

    /**
     * Synchronously gets the cached current user, or undefined if there is none
     *
     * @event getCurrentUser
     * @return {User}
     * @android
     * @ios
     * @since 0.1
     */
    getCurrentUser = function () {};

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
     * @param {User} callback.User
     * @param {Object} callback.error
     * @param {String} callback.error.code
     * @param {String} callback.error.description
     * @android
     * @ios
     * @since 0.1
     */
    createUserWithEmailAndPassword = function (email: string, password: string, callback) {};

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
     * @param {User} callback.User
     * @param {Object} callback.error
     * @param {String} callback.error.code
     * @param {String} callback.error.description
     * @android
     * @ios
     * @since 0.1
     */
    signInWithEmailAndPassword = function (email: string, password: string, callback) {};

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
     * @param {User} callback.User
     * @param {Object} callback.error
     * @param {String} callback.error.code
     * @param {String} callback.error.description
     * @android
     * @ios
     * @since 0.1
     */
    signInWithCustomToken = function (token: string, callback) {};

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
     * @param {User} callback.User
     * @param {Object} callback.error
     * @param {String} callback.error.code
     * @param {String} callback.error.description
     * @android
     * @ios
     * @since 0.1
     */
    signInAnonymously = function (callback) {};

    /**
     * Signs out the current user.
     *
     * @event signOut
     * @android
     * @ios
     * @since 0.1
     */
    signOut = function () {};

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
    sendPasswordResetEmail = function (email: string, callback) {};

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
    verifyPasswordResetCode = function (code: string, callback) {};

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
    confirmPasswordReset = function (code: string, newPassword: string, callback) {};
}