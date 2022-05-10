import AuthErrors from '../Auth/authErrors';

import Invocation from '@smartface/native/util/iOS/invocation';

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

export default class User {
    nativeUser: any;
    static ios: {
        native?: any;
    } = {
        native: {
            isAnonymous: function (user) {
                return Invocation.invokeInstanceMethod(user, 'isAnonymous', [], 'BOOL');
            },

            isEmailVerified: function (user) {
                return Invocation.invokeInstanceMethod(user, 'isEmailVerified', [], 'BOOL');
            },

            displayName: function (user) {
                return Invocation.invokeInstanceMethod(user, 'displayName', [], 'NSString');
            },

            photoURL: function (user) {
                const url = Invocation.invokeInstanceMethod(user, 'photoURL', [], 'NSObject');
                return Invocation.invokeInstanceMethod(url, 'absoluteString', [], 'NSString');
            },

            setDisplayName: function (user, displayName, completion) {
                const profileChangeRequest = Invocation.invokeInstanceMethod(user, 'profileChangeRequest', [], 'NSObject');
                // @ts-ignore
                const argDisplayName = new Invocation.Argument({
                    type: 'NSString',
                    value: displayName
                });
                // @ts-ignore
                Invocation.invokeInstanceMethod(profileChangeRequest, 'setDisplayName:', [argDisplayName]);
                // @ts-ignore
                const argCompletion = new Invocation.Argument({
                    type: 'UserProfileChangeCallback',
                    value: function (e) {
                        completion(e);
                    }
                });
                // @ts-ignore
                Invocation.invokeInstanceMethod(profileChangeRequest, 'commitChangesWithCompletion:', [argCompletion]);
            },

            setPhotoURL: function (user, photoURL, completion) {
                // @ts-ignore
                const argURL = new Invocation.Argument({
                    type: 'NSString',
                    value: photoURL
                });
                const url = Invocation.invokeClassMethod('NSURL', 'URLWithString:', [argURL], 'NSObject');

                const profileChangeRequest = Invocation.invokeInstanceMethod(user, 'profileChangeRequest', [], 'NSObject');
                // @ts-ignore
                const argPhotoURL = new Invocation.Argument({
                    type: 'NSObject',
                    value: url
                });
                // @ts-ignore
                Invocation.invokeInstanceMethod(profileChangeRequest, 'setPhotoURL:', [argPhotoURL]);
                // @ts-ignore
                const argCompletion = new Invocation.Argument({
                    type: 'UserProfileChangeCallback',
                    value: function (e) {
                        completion(e);
                    }
                });
                // @ts-ignore
                Invocation.invokeInstanceMethod(profileChangeRequest, 'commitChangesWithCompletion:', [argCompletion]);
            },

            phoneNumber: function (user) {
                return Invocation.invokeInstanceMethod(user, 'phoneNumber', [], 'NSString');
            },

            email: function (user) {
                return Invocation.invokeInstanceMethod(user, 'email', [], 'NSString');
            },

            uid: function (user) {
                return Invocation.invokeInstanceMethod(user, 'uid', [], 'NSString');
            },

            reloadWithCompletion: function (user, completion) {
                // @ts-ignore
                const argCompletion = new Invocation.Argument({
                    type: 'UserProfileChangeCallback',
                    value: function (e) {
                        completion(e);
                    }
                });
                // @ts-ignore
                Invocation.invokeInstanceMethod(user, 'reloadWithCompletion:', [argCompletion]);
            },

            updateEmailCompletion: function (user, email, completion) {
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
                Invocation.invokeInstanceMethod(user, 'updateEmail:completion:', [argEmail, argCompletion]);
            },

            updatePasswordCompletion: function (user, password, completion) {
                // @ts-ignore
                const argPassword = new Invocation.Argument({
                    type: 'NSString',
                    value: password
                });
                // @ts-ignore
                const argCompletion = new Invocation.Argument({
                    type: 'UserProfileChangeCallback',
                    value: function (e) {
                        completion(e);
                    }
                });
                // @ts-ignore
                Invocation.invokeInstanceMethod(user, 'updatePassword:completion:', [argPassword, argCompletion]);
            },

            getIDTokenForcingRefreshCompletion: function (user, forceRefresh, completion) {
                // @ts-ignore
                const argForceRefresh = new Invocation.Argument({
                    type: 'BOOL',
                    value: forceRefresh
                });
                // @ts-ignore
                const argCompletion = new Invocation.Argument({
                    type: 'FIRAuthTokenCallback',
                    value: function (e) {
                        completion(e);
                    }
                });
                // @ts-ignore
                return Invocation.invokeInstanceMethod(user, 'getIDTokenForcingRefresh:completion:', [argForceRefresh, argCompletion]);
            },

            getErrorObject: function (nativeError) {
                const code = Invocation.invokeInstanceMethod(nativeError, 'code', [], 'NSInteger');
                const localizedDescription = Invocation.invokeInstanceMethod(nativeError, 'localizedDescription', [], 'NSString');

                return { code: code, description: localizedDescription };
            },

            reauthenticateWithCredentialCompletion: function (user, email, password, completion) {
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

                const credential = Invocation.invokeClassMethod(
                    'FIREmailAuthProvider',
                    'credentialWithEmail:password:',
                    [argEmail, argPassword],
                    'NSObject'
                );
                // @ts-ignore
                const argCredential = new Invocation.Argument({
                    type: 'NSObject',
                    value: credential
                });
                // @ts-ignore
                const argCompletion = new Invocation.Argument({
                    type: 'UserProfileChangeCallback',
                    value: function (e) {
                        completion(e);
                    }
                });
                // @ts-ignore
                Invocation.invokeInstanceMethod(user, 'reauthenticateWithCredential:completion:', [argCredential, argCompletion]);
            },

            deleteWithCompletion: function (user, completion) {
                // @ts-ignore
                const argCompletion = new Invocation.Argument({
                    type: 'UserProfileChangeCallback',
                    value: function (e) {
                        completion(e);
                    }
                });
                // @ts-ignore
                Invocation.invokeInstanceMethod(user, 'deleteWithCompletion:', [argCompletion]);
            },

            sendEmailVerificationWithCompletion: function (user, completion) {
                // @ts-ignore
                const argCompletion = new Invocation.Argument({
                    type: 'UserProfileChangeCallback',
                    value: function (e) {
                        completion(e);
                    }
                });
                // @ts-ignore
                Invocation.invokeInstanceMethod(user, 'sendEmailVerificationWithCompletion:', [argCompletion]);
            }
        }
    };

    /**
     * @classdesc Firebase User
     * @see {@link https://firebase.google.com/docs/reference/js/firebase.User|firebase.User}
     * @constructor
     */
    constructor(FIRUser) {
        this.nativeUser = FIRUser;
    }

    /**
     * Returns the main email address of the user, as stored in the Firebase project's user database.
     *
     * @method getEmail
     * @android
     * @ios
     * @since 0.1
     */
    getEmail: () => string = () => User.ios.native.email(this.nativeUser);

    /**
     * Returns the main display name of this user from the Firebase project's user database.
     *
     * @method getDisplayName
     * @android
     * @ios
     * @since 0.1
     */
    getDisplayName: () => string = () => User.ios.native.displayName(this.nativeUser);

    /**
     * Returns the URL of this user's main profile picture, as stored in the Firebase project's user database.
     *
     * @method getPhotoURL
     * @android
     * @ios
     * @since 0.1
     */
    getPhotoURL: () => string = () => User.ios.native.photoURL(this.nativeUser);

    /**
     * Returns the phone number of the user, as stored in the Firebase project's user database, or null if none exists
     *
     * @method getPhoneNumber
     * @android
     * @ios
     * @since 0.1
     */
    getPhoneNumber: () => string = () => User.ios.native.phoneNumber(this.nativeUser);

    /**
     * Returns a string used to uniquely identify your user in your Firebase project's user database.
     *
     * @method getUID
     * @android
     * @ios
     * @since 0.1
     */
    getUID: () => string = () => User.ios.native.uid(this.nativeUser);

    /**
     * Returns true if the user is anonymous.
     *
     * @method isAnonymous
     * @android
     * @ios
     * @since 0.1
     */
    isAnonymous: () => boolean = () => User.ios.native.isAnonymous(this.nativeUser);

    /**
     * Indicates the email address associated with this user has been verified.
     *
     * @method isEmailVerified
     * @return {Boolean} verified
     * @android
     * @ios
     * @since 0.1
     */
    isEmailVerified: () => boolean = () => User.ios.native.isEmailVerified(this.nativeUser);

    /**
     * Reloads the user’s profile data from the server.
     * 
     *  Possible error code;
     *      `RequiresRecentLogin` - Updating email is a security sensitive
                operation that requires a recent login from the user. This error indicates the user
                has not signed in recently enough.
    *
    * @method reload
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
        const callbackHandler = function (e) {
            if (typeof callback === 'function') {
                if (e.error) {
                    callback(false, User.ios.native.getErrorObject(e.error));
                } else {
                    callback(true, undefined);
                }
            }
        };
        User.ios.native.reloadWithCompletion(this.nativeUser, callbackHandler);
    };

    /**
     * Set displayName.
     *
     * @method setDisplayName
     * @param {String} displayName
     * @param {Function} callback
     * @param {String} callback.token
     * @param {String} callback.error
     * @android
     * @ios
     * @since 0.1
     */
    setDisplayName = (displayName: string, callback: UserCallback) => {
        const callbackHandler = function (e) {
            if (typeof callback === 'function') {
                if (e.error) {
                    callback(false, User.ios.native.getErrorObject(e.error).description);
                } else {
                    callback(true, undefined);
                }
            }
        };
        User.ios.native.setDisplayName(this.nativeUser, displayName, callbackHandler);
    };

    /**
     * Set photoURL.
     *
     * @method setPhotoURL
     * @param {String} photoURL
     * @param {Function} callback
     * @param {String} callback.token
     * @param {String} callback.error
     * @android
     * @ios
     * @since 0.1
     */
    setPhotoURL = (photoURL: string, callback: UserCallback) => {
        const callbackHandler = function (e) {
            if (typeof callback === 'function') {
                if (e.error) {
                    callback(false, User.ios.native.getErrorObject(e.error).description);
                } else {
                    callback(true, undefined);
                }
            }
        };
        User.ios.native.setPhotoURL(this.nativeUser, photoURL, callbackHandler);
    };

    /**
     * Update email.
     *
     *  Possible error code;
     *   + `EmailAlreadyInUse`
     *   + `InvalidEmail`
     *   + `RequiresRecentLogin`
     *
     * @method updateEmail
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
        const callbackHandler = function (e) {
            if (typeof callback === 'function') {
                if (e.error) {
                    callback(false, User.ios.native.getErrorObject(e.error));
                } else {
                    callback(true, undefined);
                }
            }
        };
        User.ios.native.updateEmailCompletion(this.nativeUser, email, callbackHandler);
    };

    /**
     * Update password.
     *
     *  Possible error code;
     *   + `OperationNotAllowed`
     *   + `WeakPassword`
     *   + `RequiresRecentLogin`
     *
     * @method updatePassword
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
        const callbackHandler = function (e) {
            if (typeof callback === 'function') {
                if (e.error) {
                    callback(false, User.ios.native.getErrorObject(e.error));
                } else {
                    callback(true, undefined);
                }
            }
        };
        User.ios.native.updatePasswordCompletion(this.nativeUser, password, callbackHandler);
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
     * @method reauthenticate
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
        const callbackHandler = function (e) {
            if (typeof callback === 'function') {
                if (e.error) {
                    callback(false, User.ios.native.getErrorObject(e.error));
                } else {
                    callback(true, undefined);
                }
            }
        };
        User.ios.native.reauthenticateWithCredentialCompletion(this.nativeUser, email, password, callbackHandler);
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
    * @method delete
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
        var callbackHandler = function (e) {
            if (typeof callback === 'function') {
                if (e.error) {
                    callback(false, User.ios.native.getErrorObject(e.error));
                } else {
                    callback(true, undefined);
                }
            }
        };
        User.ios.native.deleteWithCompletion(this.nativeUser, callbackHandler);
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
     * @method sendEmailVerification
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
        const callbackHandler = function (e) {
            if (typeof callback === 'function') {
                if (e.error) {
                    callback(false, User.ios.native.getErrorObject(e.error));
                } else {
                    callback(true, undefined);
                }
            }
        };
        User.ios.native.sendEmailVerificationWithCompletion(this.nativeUser, callbackHandler);
    };

    /**
     * Returns token.
     *
     * @method getIdToken
     * @param {Boolean} forceRefresh
     * @param {Function} callback
     * @param {String} callback.token
     * @param {String} callback.error
     * @android
     * @ios
     * @since 0.1
     */
    getIdToken = (forceRefresh: boolean, callback: UserCallback) => {
        const callbackHandler = function (e) {
            if (typeof callback === 'function') {
                if (e.error) {
                    const error = User.ios.native.getErrorObject(e.error);
                    callback(undefined, error.description);
                } else {
                    callback(e.token, undefined);
                }
            }
        };
        User.ios.native.getIDTokenForcingRefreshCompletion(this.nativeUser, forceRefresh, callbackHandler);
    };
}
module.exports = User;
