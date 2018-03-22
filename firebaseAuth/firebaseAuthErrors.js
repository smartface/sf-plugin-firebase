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


module.exports = Object.freeze(FirebaseAuthErrors);