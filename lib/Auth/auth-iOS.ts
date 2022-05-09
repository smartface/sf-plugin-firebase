// @ts-ignore
import { Invocation } from '@smartface/native/util';
import AuthErrors from './authErrors';
import User from '../User';

type UserErrorBody = {
    code?: AuthErrors;
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

const errorCode = {
    InvalidCustomToken: 17000,
    CustomTokenMismatch: 17002,
    InvalidCredential: 17004,
    UserDisabled: 17005,
    OperationNotAllowed: 17006,
    EmailAlreadyInUse: 17007,
    InvalidEmail: 17008,
    WrongPassword: 17009,
    TooManyRequests: 17010,
    UserNotFound: 17011,
    AccountExistsWithDifferentCredential: 17012,
    RequiresRecentLogin: 17014,
    ProviderAlreadyLinked: 17015,
    NoSuchProvider: 17016,
    InvalidUserToken: 17017,
    NetworkError: 17020,
    UserTokenExpired: 17021,
    InvalidAPIKey: 17023,
    UserMismatch: 17024,
    CredentialAlreadyInUse: 17025,
    WeakPassword: 17026,
    AppNotAuthorized: 17028,
    ExpiredActionCode: 17029,
    InvalidActionCode: 17030,
    InvalidMessagePayload: 17031,
    InvalidSender: 17032,
    InvalidRecipientEmail: 17033,
    MissingEmail: 17034,
    MissingIosBundleID: 17036,
    MissingAndroidPackageName: 17037,
    UnauthorizedDomain: 17038,
    InvalidContinueURI: 17039,
    MissingContinueURI: 17040,
    MissingPhoneNumber: 17041,
    InvalidPhoneNumber: 17042,
    MissingVerificationCode: 17043,
    InvalidVerificationCode: 17044,
    MissingVerificationID: 17045,
    InvalidVerificationID: 17046,
    MissingAppCredential: 17047,
    InvalidAppCredential: 17048,
    SessionExpired: 17051,
    QuotaExceeded: 17052,
    MissingAppToken: 17053,
    NotificationNotForwarded: 17054,
    AppNotVerified: 17055,
    CaptchaCheckFailed: 17056,
    WebContextAlreadyPresented: 17057,
    WebContextCancelled: 17058,
    AppVerificationUserInteractionFailure: 17059,
    InvalidClientID: 17060,
    WebNetworkRequestFailed: 17061,
    WebInternalError: 17062,
    KeychainError: 17995,
    FirebaseAuthInternalError: 17999
};

export default class Auth {
    static Error = AuthErrors;
    nativeAuth: any;
    static ios: {
        native?: any;
    } = {
        native: {
            auth : function () {
                return Invocation.invokeClassMethod('FIRAuth', 'auth', [], 'NSObject');
            },
    
            authWithApp : function (app) {
                // @ts-ignore
                const argApp = new Invocation.Argument({
                    type: 'NSObject',
                    value: app
                });
                return Invocation.invokeClassMethod('FIRAuth', 'authWithApp:', [argApp], 'NSObject');
            },
    
            app : function (auth) {
                return Invocation.invokeInstanceMethod(auth, 'app', [], 'NSObject');
            },
    
            currentUser : function (auth) {
                return Invocation.invokeInstanceMethod(auth, 'currentUser', [], 'NSObject');
            },
    
            getLanguageCode : function (auth) {
                return Invocation.invokeInstanceMethod(auth, 'languageCode', [], 'NSString');
            },
    
            setLanguageCode : function (auth, languageCode) {
                // @ts-ignore
                const argLanguageCode = new Invocation.Argument({
                    type: 'NSString',
                    value: languageCode
                });
                // @ts-ignore
                Invocation.invokeInstanceMethod(auth, 'setLanguageCode:', [argLanguageCode]);
            },
    
            /**
                Possible error codes:
            
                + `OperationNotAllowed` - Indicates that email and password
                    accounts are not enabled. Enable them in the Auth section of the
                    Firebase console.
                + `UserDisabled` - Indicates the user's account is disabled.
                + `WrongPassword` - Indicates the user attempted
                    sign in with an incorrect password.
                + `InvalidEmail` - Indicates the email address is malformed.
            */
            signInWithEmailPasswordCompletion : function (auth, email, password, completion) {
                // @ts-ignore
                const argEmail = new Invocation.Argument({
                    type: 'NSString',
                    value: email
                });
                // @ts-ignore
                const argPassword = new Invocation.Argument({
                    type: 'NSString',
                    value: password
                });
                // @ts-ignore
                const argCompletion = new Invocation.Argument({
                    type: 'FIRAuthResultCallback',
                    value: function (e) {
                        completion(e);
                    }
                });
                // @ts-ignore
                Invocation.invokeInstanceMethod(auth, 'signInWithEmail:password:completion:', [argEmail, argPassword, argCompletion]);
            },
    
            /**
                Possible error codes:
                
                + `InvalidEmail` - Indicates the email address is malformed.
                + `EmailAlreadyInUse` - Indicates the email used to attempt sign up
                    already exists. Call fetchProvidersForEmail to check which sign-in mechanisms the user
                    used, and prompt the user to sign in with one of those.
                + `OperationNotAllowed` - Indicates that email and password accounts
                    are not enabled. Enable them in the Auth section of the Firebase console.
                + `WeakPassword` - Indicates an attempt to set a password that is
                    considered too weak. The NSLocalizedFailureReasonErrorKey field in the NSError.userInfo
                    dictionary object will contain more detailed explanation that can be shown to the user.
            */
            createUserWithEmailPasswordCompletion : function (auth, email, password, completion) {
                // @ts-ignore
                const argEmail = new Invocation.Argument({
                    type: 'NSString',
                    value: email
                });
                // @ts-ignore
                const argPassword = new Invocation.Argument({
                    type: 'NSString',
                    value: password
                });
                // @ts-ignore
                const argCompletion = new Invocation.Argument({
                    type: 'FIRAuthResultCallback',
                    value: function (e) {
                        completion(e);
                    }
                });
                // @ts-ignore
                Invocation.invokeInstanceMethod(auth, 'createUserWithEmail:password:completion:', [argEmail, argPassword, argCompletion]);
            },
    
            /**
                Possible error codes:
            
                + `InvalidCustomToken` - Indicates a validation error with
                    the custom token.
                + `CustomTokenMismatch` - Indicates the service account and the API key
                    belong to different projects.
            */
            signInWithCustomTokenCompletion : function (auth, token, completion) {
                // @ts-ignore
                const argToken = new Invocation.Argument({
                    type: 'NSString',
                    value: token
                });
                // @ts-ignore
                const argCompletion = new Invocation.Argument({
                    type: 'FIRAuthResultCallback',
                    value: function (e) {
                        completion(e);
                    }
                });
                // @ts-ignore
                Invocation.invokeInstanceMethod(auth, 'signInWithCustomToken:completion:', [argToken, argCompletion]);
            },
    
            /**
                Possible error codes:
            
                + `OperationNotAllowed` - Indicates that anonymous accounts are
                    not enabled. Enable them in the Auth section of the Firebase console.
            */
            signInAnonymouslyWithCompletion : function (auth, completion) {
                // @ts-ignore
                const argCompletion = new Invocation.Argument({
                    type: 'FIRAuthResultCallback',
                    value: function (e) {
                        completion(e);
                    }
                });
                // @ts-ignore
                Invocation.invokeInstanceMethod(auth, 'signInAnonymouslyWithCompletion:', [argCompletion]);
            },
    
            /**
                Possible error codes:
            
                + `KeychainError` - Indicates an error occurred when accessing the
                    keychain. The `NSLocalizedFailureReasonErrorKey` field in the `NSError.userInfo`
                    dictionary will contain more information about the error encountered.
            */
    
            signOut : function (auth) {
                // @ts-ignore
                const argError = new Invocation.Argument({
                    type: 'NSObject',
                    value: undefined
                });
                // @ts-ignore
                return Invocation.invokeInstanceMethod(auth, 'signOut:', [argError]);
            },
    
            getErrorObject : function (nativeError) {
                const code = Invocation.invokeInstanceMethod(nativeError, 'code', [], 'NSInteger');
                const localizedDescription = Invocation.invokeInstanceMethod(nativeError, 'localizedDescription', [], 'NSString');
    
                return { code: code, description: localizedDescription };
            },
    
            useAppLanguage : function (auth) {
                // @ts-ignore
                return Invocation.invokeInstanceMethod(auth, 'useAppLanguage', []);
            },
    
            sendPasswordResetWithEmailCompletion : function (auth, email, completion) {
                // @ts-ignore
                const argEmail = new Invocation.Argument({
                    type: 'NSString',
                    value: email
                });
                // @ts-ignore
                const argCompletion = new Invocation.Argument({
                    type: 'UserProfileChangeCallback',
                    value: function (e) {
                        completion(e);
                    }
                });
                // @ts-ignore
                Invocation.invokeInstanceMethod(auth, 'sendPasswordResetWithEmail:completion:', [argEmail, argCompletion]);
            },
    
            verifyPasswordResetCodeCompletion : function (auth, code, completion) {
                // @ts-ignore
                const argCode = new Invocation.Argument({
                    type: 'NSString',
                    value: code
                });
                // @ts-ignore
                const argCompletion = new Invocation.Argument({
                    type: 'VerifyPasswordResetCodeCallback',
                    value: function (e) {
                        completion(e);
                    }
                });
                // @ts-ignore
                Invocation.invokeInstanceMethod(auth, 'verifyPasswordResetCode:completion:', [argCode, argCompletion]);
            },
    
            confirmPasswordResetWithCodeNewPasswordCompletion : function (auth, code, newPassword, completion) {
                // @ts-ignore
                const argCode = new Invocation.Argument({
                    type: 'NSString',
                    value: code
                });
                // @ts-ignore
                const argNewPassword = new Invocation.Argument({
                    type: 'NSString',
                    value: newPassword
                });
                // @ts-ignore
                const argCompletion = new Invocation.Argument({
                    type: 'UserProfileChangeCallback',
                    value: function (e) {
                        completion(e);
                    }
                });
                // @ts-ignore
                Invocation.invokeInstanceMethod(auth, 'confirmPasswordResetWithCode:newPassword:completion:', [
                    argCode,
                    argNewPassword,
                    argCompletion
                ]);
            },
    
            errorCode : errorCode,
    
            isFrameworkEnabled : function () {
                // @ts-ignore
                var invocation = __SF_NSInvocation.createClassInvocationWithSelectorInstance('alloc', 'FIROptions');
                return invocation ? true : false;
            }
        }
    };
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
         * @method useAppLanguage
         * @ios
         * @since 0.1
         */
        useAppLanguage?: () => void;
    } = {};
    constructor(App?: any) {
        App ? (this.nativeAuth = Auth.ios.native.authWithApp(App)) : (this.nativeAuth = Auth.ios.native.auth());
        Object.defineProperties(this.ios, {
            languageCode: {
                get: function () {
                    return Auth.ios.native.getLanguageCode(this.nativeAuth);
                },
                set: function (value) {
                    Auth.ios.native.setLanguageCode(this.nativeAuth, value);
                },
                enumerable: true,
                configurable: true
            },
            useAppLanguage: {
                value: function () {
                    Auth.ios.native.useAppLanguage(this.nativeAuth);
                },
                enumerable: true,
                configurable: true
            }
        });
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
        if (!Auth.ios.native.isFrameworkEnabled()) {
            // @ts-ignore
            return new User();
        }
        const user = Auth.ios.native.currentUser(this.nativeAuth);
        if (user) {
            return new User(user);
        }
        return undefined;
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
        const callbackHandler = function (e) {
            if (typeof callback === 'function') {
                if (e.error) {
                    callback(undefined, Auth.ios.native.getErrorObject(e.error));
                } else {
                    callback(new User(e.user), undefined);
                }
            }
        };
        Auth.ios.native.createUserWithEmailPasswordCompletion(this.nativeAuth, email, password, callbackHandler);
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
        const callbackHandler = function (e) {
            if (typeof callback === 'function') {
                if (e.error) {
                    callback(undefined, Auth.ios.native.getErrorObject(e.error));
                } else {
                    callback(new User(e.user), undefined);
                }
            }
        };
        Auth.ios.native.signInWithEmailPasswordCompletion(this.nativeAuth, email, password, callbackHandler);
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
        const callbackHandler = function (e) {
            if (typeof callback === 'function') {
                if (e.error) {
                    callback(undefined, Auth.ios.native.getErrorObject(e.error));
                } else {
                    callback(new User(e.user), undefined);
                }
            }
        };
        Auth.ios.native.signInWithCustomTokenCompletion(this.nativeAuth, token, callbackHandler);
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
        const callbackHandler = function (e) {
            if (typeof callback === 'function') {
                if (e.error) {
                    callback(undefined, Auth.ios.native.getErrorObject(e.error));
                } else {
                    callback(new User(e.user), undefined);
                }
            }
        };
        Auth.ios.native.signInAnonymouslyWithCompletion(this.nativeAuth, callbackHandler);
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
        const callbackHandler = function (e) {
            if (typeof callback === 'function') {
                if (e.error) {
                    callback(false, Auth.ios.native.getErrorObject(e.error));
                } else {
                    callback(true, undefined);
                }
            }
        };
        Auth.ios.native.sendPasswordResetWithEmailCompletion(this.nativeAuth, email, callbackHandler);
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
        const callbackHandler = function (e) {
            if (typeof callback === 'function') {
                if (e.error) {
                    callback(undefined, Auth.ios.native.getErrorObject(e.error));
                } else {
                    callback(e.email, undefined);
                }
            }
        };
        Auth.ios.native.verifyPasswordResetCodeCompletion(this.nativeAuth, code, callbackHandler);
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
        const callbackHandler = function (e) {
            if (typeof callback === 'function') {
                if (e.error) {
                    callback(false, Auth.ios.native.getErrorObject(e.error));
                } else {
                    callback(true, undefined);
                }
            }
        };
        Auth.ios.native.confirmPasswordResetWithCodeNewPasswordCompletion(this.nativeAuth, code, newPassword, callbackHandler);
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
        Auth.ios.native.signOut(this.nativeAuth);
    };
}
module.exports = Auth;
