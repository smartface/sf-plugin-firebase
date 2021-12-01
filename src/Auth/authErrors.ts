enum AuthErrors {
    /**
     * Indicates the administrator disabled sign in with the specified identity provider.
     */
    OperationNotAllowed = 17006,
    /**
     * Indicates the user's account is disabled on the server.
     */
    UserDisabled = 17005,
    /**
     * Indicates the user attempted sign in with a wrong password.
     */
    WrongPassword = 17009,
    /**
     * Indicates the email is invalid.
     */
    InvalidEmail = 17008,
    /**
     * Indicates the email used to attempt a sign up is already in use.
     */
    EmailAlreadyInUse = 17007,
    /**
     * Indicates an attempt to set a password that is considered too weak.
     */
    WeakPassword = 17026,
    /**
     * Indicates a validation error with the custom token.
     */
    InvalidCustomToken = 17000,
    /**
     * Indicates the service account and the API key belong to different projects.
     */
    CustomTokenMismatch = 17002,
    /**
     * Indicates the IDP token or requestUri is invalid.
     */
    InvalidCredential = 17004,
    /**
     * Indicates that an attempt was made to reauthenticate with a user which is not the current
     *  user.
     */
    UserMismatch = 17024,
    /**
     * Indicates the user has attemped to change email or password more than 5 minutes after
     * signing in.
     */
    RequiresRecentLogin = 17014,
    /**
     * Indicates that there are invalid parameters in the payload during a "send password reset
     *  email" attempt.
     */
    InvalidMessagePayload = 17031,
    /**
     * Indicates that the sender email is invalid during a "send password reset email" attempt.
     */
    InvalidSender = 17032,
    /**
     * Indicates that the recipient email is invalid.
     */
    InvalidRecipientEmail = 17033,
    /**
     * Indicates the user account was not found.
     */
    UserNotFound = 17011,
    /**
     * Indicates the saved token has expired, for example, the user may have changed account
     * password on another device. The user needs to sign in again on the device that made this
     * request.
     */
    UserTokenExpired = 17021,
    /**
     * Indicates user's saved auth credential is invalid, the user needs to sign in again.
     */
    InvalidUserToken = 17017,
    /**
     * Indicates the OOB code is expired.
     */
    ExpiredActionCode = 17029,
    /**
     * Indicates the OOB code is invalid.
     */
    InvalidActionCode = 17030
}

export default AuthErrors;
