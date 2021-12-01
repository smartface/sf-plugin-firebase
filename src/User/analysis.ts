export default class User {
    /**
     * Returns the main email address of the user, as stored in the Firebase project's user database.
     *
     * @event getEmail
     * @android
     * @ios
     * @since 0.1
     */
    getEmail = function () {};

    /**
     * Returns the main display name of this user from the Firebase project's user database.
     *
     * @event getDisplayName
     * @android
     * @ios
     * @since 0.1
     */
    getDisplayName = function () {};

    /**
     * Returns a string used to uniquely identify your user in your Firebase project's user database.
     *
     * @event getDisplayName
     * @android
     * @ios
     * @since 0.1
     */
    getUID = function () {};

    /**
     * Returns true if the user is anonymous.
     *
     * @event isAnonymous
     * @android
     * @ios
     * @since 0.1
     */
    isAnonymous = function () {};

    /**
     * Returns true if the user is anonymous.
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
    getIdToken = function (forceRefresh, callback) {};

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
    setDisplayName = function (displayName, callback) {};

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
    setPhotoURL = function (photoURL, callback) {};

    /**
     * Returns the URL of this user's main profile picture, as stored in the Firebase project's user database.
     *
     * @event getPhotosURL
     * @android
     * @ios
     * @since 0.1
     */
    getPhotosURL = function () {};

    /**
     * Deletes the user record from your Firebase project's database.
     * If the operation is successful, the user will be signed out.
     *
     *  Possible error code;
     *      `RequiresRecentLogin` - Updating email is a security sensitive
     *           operation that requires a recent login from the user. This error indicates the user
     *           has not signed in recently enough.
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
    delete = function (callback) {};

    /**
     * Reloads the user’s profile data from the server.
     *
     *  Possible error code;
     *      `RequiresRecentLogin` - Updating email is a security sensitive
     *           operation that requires a recent login from the user. This error indicates the user
     *           has not signed in recently enough.
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
    reload = function (callback) {};

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
    sendEmailVerification = function (callback) {};

    /**
     * Indicates the email address associated with this user has been verified.
     *
     * @event isEmailVerified
     * @return {Boolean} verified
     * @android
     * @ios
     * @since 0.1
     */
    isEmailVerified = function () {};

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
    reauthenticate = function (email, password, callback) {};

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
    updateEmail = function (email, callback) {};

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
    updatePassword = function (password, callback) {};
}
