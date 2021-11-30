import FirebaseAuthErrors from 'firebaseAuth/firebaseAuthErrors';

// @ts-ignore
import { Invocation } from '@smartface/native/util';

type FirebaseUserErrorBody = {
    code?: FirebaseAuthErrors;
    description: string;
};

type FirebaseUserCallback = (
    FirebaseUser: any,
    options?: {
        error: FirebaseUserErrorBody;
        isSuccess?: boolean;
        email?: string;
        token?: string;
    }
) => void | ((arg: boolean) => void);

export default class FirebaseUser {
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
                const argDisplayName = new Invocation.Argument({
                    type: 'NSString',
                    value: displayName
                });
                Invocation.invokeInstanceMethod(profileChangeRequest, 'setDisplayName:', [argDisplayName]);

                const argCompletion = new Invocation.Argument({
                    type: 'UserProfileChangeCallback',
                    value: function (e) {
                        completion(e);
                    }
                });

                Invocation.invokeInstanceMethod(profileChangeRequest, 'commitChangesWithCompletion:', [argCompletion]);
            },

            setPhotoURL: function (user, photoURL, completion) {
                const argURL = new Invocation.Argument({
                    type: 'NSString',
                    value: photoURL
                });
                const url = Invocation.invokeClassMethod('NSURL', 'URLWithString:', [argURL], 'NSObject');

                const profileChangeRequest = Invocation.invokeInstanceMethod(user, 'profileChangeRequest', [], 'NSObject');
                const argPhotoURL = new Invocation.Argument({
                    type: 'NSObject',
                    value: url
                });
                Invocation.invokeInstanceMethod(profileChangeRequest, 'setPhotoURL:', [argPhotoURL]);

                const argCompletion = new Invocation.Argument({
                    type: 'UserProfileChangeCallback',
                    value: function (e) {
                        completion(e);
                    }
                });

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
                const argCompletion = new Invocation.Argument({
                    type: 'UserProfileChangeCallback',
                    value: function (e) {
                        completion(e);
                    }
                });
                Invocation.invokeInstanceMethod(user, 'reloadWithCompletion:', [argCompletion]);
            },

            updateEmailCompletion: function (user, email, completion) {
                const argEmail = new Invocation.Argument({
                    type: 'NSString',
                    value: email
                });
                const argCompletion = new Invocation.Argument({
                    type: 'UserProfileChangeCallback',
                    value: function (e) {
                        completion(e);
                    }
                });
                Invocation.invokeInstanceMethod(user, 'updateEmail:completion:', [argEmail, argCompletion]);
            },

            updatePasswordCompletion: function (user, password, completion) {
                const argPassword = new Invocation.Argument({
                    type: 'NSString',
                    value: password
                });
                const argCompletion = new Invocation.Argument({
                    type: 'UserProfileChangeCallback',
                    value: function (e) {
                        completion(e);
                    }
                });
                Invocation.invokeInstanceMethod(user, 'updatePassword:completion:', [argPassword, argCompletion]);
            },

            getIDTokenForcingRefreshCompletion: function (user, forceRefresh, completion) {
                const argForceRefresh = new Invocation.Argument({
                    type: 'BOOL',
                    value: forceRefresh
                });
                const argCompletion = new Invocation.Argument({
                    type: 'FIRAuthTokenCallback',
                    value: function (e) {
                        completion(e);
                    }
                });
                return Invocation.invokeInstanceMethod(user, 'getIDTokenForcingRefresh:completion:', [argForceRefresh, argCompletion]);
            },

            getErrorObject: function (nativeError) {
                const code = Invocation.invokeInstanceMethod(nativeError, 'code', [], 'NSInteger');
                const localizedDescription = Invocation.invokeInstanceMethod(nativeError, 'localizedDescription', [], 'NSString');

                return { code: code, description: localizedDescription };
            },

            reauthenticateWithCredentialCompletion: function (user, email, password, completion) {
                const argEmail = new Invocation.Argument({
                    type: 'NSString',
                    value: email
                });
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

                const argCredential = new Invocation.Argument({
                    type: 'NSObject',
                    value: credential
                });

                const argCompletion = new Invocation.Argument({
                    type: 'UserProfileChangeCallback',
                    value: function (e) {
                        completion(e);
                    }
                });
                Invocation.invokeInstanceMethod(user, 'reauthenticateWithCredential:completion:', [argCredential, argCompletion]);
            },

            deleteWithCompletion: function (user, completion) {
                const argCompletion = new Invocation.Argument({
                    type: 'UserProfileChangeCallback',
                    value: function (e) {
                        completion(e);
                    }
                });

                Invocation.invokeInstanceMethod(user, 'deleteWithCompletion:', [argCompletion]);
            },

            sendEmailVerificationWithCompletion: function (user, completion) {
                const argCompletion = new Invocation.Argument({
                    type: 'UserProfileChangeCallback',
                    value: function (e) {
                        completion(e);
                    }
                });

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
     * @event getEmail
     * @android
     * @ios
     * @since 0.1
     */
    getEmail: () => string = () => FirebaseUser.ios.native.email(this.nativeUser);

    /**
     * Returns the main display name of this user from the Firebase project's user database.
     *
     * @event getDisplayName
     * @android
     * @ios
     * @since 0.1
     */
    getDisplayName: () => string = () => FirebaseUser.ios.native.displayName(this.nativeUser);

    /**
     * Returns the URL of this user's main profile picture, as stored in the Firebase project's user database.
     *
     * @event NtosURL
     * @android
     * @ios
     * @since 0.1
     */
    getPhotoURL: () => string = () => FirebaseUser.ios.native.photoURL(this.nativeUser);

    /**
     * Returns the phone number of the user, as stored in the Firebase project's user database, or null if none exists
     *
     * @event getPhoneNumber
     * @android
     * @ios
     * @since 0.1
     */
    getPhoneNumber: () => string = () => FirebaseUser.ios.native.phoneNumber(this.nativeUser);

    /**
     * Returns a string used to uniquely identify your user in your Firebase project's user database.
     *
     * @event getUID
     * @android
     * @ios
     * @since 0.1
     */
    getUID: () => string = () => FirebaseUser.ios.native.uid(this.nativeUser);

    /**
     * Returns true if the user is anonymous.
     *
     * @event isAnonymous
     * @android
     * @ios
     * @since 0.1
     */
    isAnonymous: () => boolean = () => FirebaseUser.ios.native.isAnonymous(this.nativeUser);

    /**
     * Indicates the email address associated with this user has been verified.
     *
     * @event isEmailVerified
     * @return {Boolean} verified
     * @android
     * @ios
     * @since 0.1
     */
    isEmailVerified: () => boolean = () => FirebaseUser.ios.native.isEmailVerified(this.nativeUser);

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
    reload = (callback: FirebaseUserCallback) => {
        const callbackHandler = function (e) {
            if (typeof callback === 'function') {
                if (e.error) {
                    callback(false, FirebaseUser.ios.native.getErrorObject(e.error));
                } else {
                    callback(true, undefined);
                }
            }
        };
        FirebaseUser.ios.native.reloadWithCompletion(this.nativeUser, callbackHandler);
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
    setDisplayName = (displayName: string, callback: FirebaseUserCallback) => {
        const callbackHandler = function (e) {
            if (typeof callback === 'function') {
                if (e.error) {
                    callback(false, FirebaseUser.ios.native.getErrorObject(e.error).description);
                } else {
                    callback(true, undefined);
                }
            }
        };
        FirebaseUser.ios.native.setDisplayName(this.nativeUser, displayName, callbackHandler);
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
    setPhotoURL = (photoURL: string, callback: FirebaseUserCallback) => {
        const callbackHandler = function (e) {
            if (typeof callback === 'function') {
                if (e.error) {
                    callback(false, FirebaseUser.ios.native.getErrorObject(e.error).description);
                } else {
                    callback(true, undefined);
                }
            }
        };
        FirebaseUser.ios.native.setPhotoURL(this.nativeUser, photoURL, callbackHandler);
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
    updateEmail = (email: string, callback: FirebaseUserCallback) => {
        const callbackHandler = function (e) {
            if (typeof callback === 'function') {
                if (e.error) {
                    callback(false, FirebaseUser.ios.native.getErrorObject(e.error));
                } else {
                    callback(true, undefined);
                }
            }
        };
        FirebaseUser.ios.native.updateEmailCompletion(this.nativeUser, email, callbackHandler);
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
    updatePassword = (password: string, callback: FirebaseUserCallback) => {
        const callbackHandler = function (e) {
            if (typeof callback === 'function') {
                if (e.error) {
                    callback(false, FirebaseUser.ios.native.getErrorObject(e.error));
                } else {
                    callback(true, undefined);
                }
            }
        };
        FirebaseUser.ios.native.updatePasswordCompletion(this.nativeUser, password, callbackHandler);
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
    reauthenticate = (email: string, password: string, callback: FirebaseUserCallback) => {
        const callbackHandler = function (e) {
            if (typeof callback === 'function') {
                if (e.error) {
                    callback(false, FirebaseUser.ios.native.getErrorObject(e.error));
                } else {
                    callback(true, undefined);
                }
            }
        };
        FirebaseUser.ios.native.reauthenticateWithCredentialCompletion(this.nativeUser, email, password, callbackHandler);
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
    delete = (callback: FirebaseUserCallback) => {
        var callbackHandler = function (e) {
            if (typeof callback === 'function') {
                if (e.error) {
                    callback(false, FirebaseUser.ios.native.getErrorObject(e.error));
                } else {
                    callback(true, undefined);
                }
            }
        };
        FirebaseUser.ios.native.deleteWithCompletion(this.nativeUser, callbackHandler);
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
    sendEmailVerification = (callback: FirebaseUserCallback) => {
        const callbackHandler = function (e) {
            if (typeof callback === 'function') {
                if (e.error) {
                    callback(false, FirebaseUser.ios.native.getErrorObject(e.error));
                } else {
                    callback(true, undefined);
                }
            }
        };
        FirebaseUser.ios.native.sendEmailVerificationWithCompletion(this.nativeUser, callbackHandler);
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
    getIdToken = (forceRefresh: boolean, callback: FirebaseUserCallback) => {
        const callbackHandler = function (e) {
            if (typeof callback === 'function') {
                if (e.error) {
                    const error = FirebaseUser.ios.native.getErrorObject(e.error);
                    callback(undefined, error.description);
                } else {
                    callback(e.token, undefined);
                }
            }
        };
        FirebaseUser.ios.native.getIDTokenForcingRefreshCompletion(this.nativeUser, forceRefresh, callbackHandler);
    };
}
