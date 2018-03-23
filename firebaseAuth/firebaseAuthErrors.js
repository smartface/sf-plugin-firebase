const FirebaseAuthErrors = {};

/** 
 * Indicates the administrator disabled sign in with the specified identity provider.
 */
FirebaseAuthErrors.OperationNotAllowed = 17006;

/** 
 * Indicates the user's account is disabled on the server.
 */
FirebaseAuthErrors.UserDisabled = 17005;

/** 
 * Indicates the user attempted sign in with a wrong password.
 */
FirebaseAuthErrors.WrongPassword = 17009;

/** 
 * Indicates the email is invalid.
 */
FirebaseAuthErrors.InvalidEmail = 17008;

/** 
 * Indicates the email used to attempt a sign up is already in use.
 */
FirebaseAuthErrors.EmailAlreadyInUse = 17007;

/** 
 * Indicates an attempt to set a password that is considered too weak.
 */
FirebaseAuthErrors.WeakPassword = 17026;

/** 
 * Indicates a validation error with the custom token.
 */
FirebaseAuthErrors.InvalidCustomToken = 17000;

/** 
 * Indicates the service account and the API key belong to different projects.
 */
FirebaseAuthErrors.CustomTokenMismatch = 17002;

/** 
 * Indicates the IDP token or requestUri is invalid.
 */
FirebaseAuthErrors.InvalidCredential = 17004;

/** 
 * Indicates that an attempt was made to reauthenticate with a user which is not the current
 *  user.
 */
FirebaseAuthErrors.UserMismatch = 17024;

/** 
 * Indicates the user has attemped to change email or password more than 5 minutes after
 * signing in.
 */
FirebaseAuthErrors.RequiresRecentLogin = 17014;

/** 
 * Indicates that there are invalid parameters in the payload during a "send password reset
 *  email" attempt.
 */
FirebaseAuthErrors.InvalidMessagePayload = 17031;

/** 
 * Indicates that the sender email is invalid during a "send password reset email" attempt.
 */
FirebaseAuthErrors.InvalidSender = 17032;

/** 
 * Indicates that the recipient email is invalid.
 */
FirebaseAuthErrors.InvalidRecipientEmail = 17033;

/** 
 * Indicates the user account was not found.
 */
FirebaseAuthErrors.UserNotFound = 17011;

/** 
 * Indicates the saved token has expired, for example, the user may have changed account
    password on another device. The user needs to sign in again on the device that made this
    request.
 */
FirebaseAuthErrors.UserTokenExpired = 17021;

/** 
 * Indicates user's saved auth credential is invalid, the user needs to sign in again.
 */
FirebaseAuthErrors.InvalidUserToken = 17017;

module.exports = Object.freeze(FirebaseAuthErrors);
