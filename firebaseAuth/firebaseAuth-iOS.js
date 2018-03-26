const Invocation = require('sf-core/util').Invocation;
const FirebaseUser = require("../firebaseUser");

function FirebaseAuth(FirebaseApp) {
	var self = this;

	if (FirebaseApp) {
        self.nativeAuth = FirebaseAuth.ios.native.authWithApp(FirebaseApp);
	}else{
        self.nativeAuth = FirebaseAuth.ios.native.auth();
    }

    self.ios = {};

    Object.defineProperties(self.ios, {
        'languageCode': {
            get: function() {
                return FirebaseAuth.ios.native.getLanguageCode(self.nativeAuth);
            },
            set: function(value) {
                FirebaseAuth.ios.native.setLanguageCode(self.nativeAuth,value);
            },
            enumerable: true,
            configurable: true
        },        
        'useAppLanguage': {
            value: function() {
                FirebaseAuth.ios.native.useAppLanguage(self.nativeAuth);
            },
            enumerable: true,
            configurable: true
        }
    });

    Object.defineProperties(self, {
        'getCurrentUser': {
            value: function() {
                var user = FirebaseAuth.ios.native.currentUser(self.nativeAuth);
                if (user) {
                    return new FirebaseUser(user);
                }
                return undefined;
            },
            enumerable: true,
            configurable: true
        },
        'createUserWithEmailAndPassword': {
            value: function(email, password, callback) {
                var callbackHandler = function(e){
                    if (typeof callback === 'function') {
                        if (e.error) {
                            callback(undefined,FirebaseAuth.ios.native.getErrorObject(e.error));
                        }else{
                            callback(new FirebaseUser(e.user),undefined);
                        }
                    }
                };
                FirebaseAuth.ios.native.createUserWithEmailPasswordCompletion(self.nativeAuth,email,password,callbackHandler);
            },
            enumerable: true,
            configurable: true
        },
        'signInWithEmailAndPassword': {
            value: function(email, password, callback) {
                var callbackHandler = function(e){
                    if (typeof callback === 'function') {
                        if (e.error) {
                            callback(undefined,FirebaseAuth.ios.native.getErrorObject(e.error));
                        }else{
                            callback(new FirebaseUser(e.user),undefined);
                        }
                    }
                };
                FirebaseAuth.ios.native.signInWithEmailPasswordCompletion(self.nativeAuth,email,password,callbackHandler);
            },
            enumerable: true,
            configurable: true
        },
        'signInWithCustomToken': {
            value: function(token, callback) {
                var callbackHandler = function(e){
                    if (typeof callback === 'function') {
                        if (e.error) {
                            callback(undefined,FirebaseAuth.ios.native.getErrorObject(e.error));
                        }else{
                            callback(new FirebaseUser(e.user),undefined);
                        }
                    }
                };
                FirebaseAuth.ios.native.signInWithCustomTokenCompletion(self.nativeAuth,token,callbackHandler);
            },
            enumerable: true,
            configurable: true
        },
        'signInAnonymously': {
            value: function(callback) {
                var callbackHandler = function(e){
                    if (typeof callback === 'function') {
                        if (e.error) {
                            callback(undefined,FirebaseAuth.ios.native.getErrorObject(e.error));
                        }else{
                            callback(new FirebaseUser(e.user),undefined);
                        }
                    }
                };
                FirebaseAuth.ios.native.signInAnonymouslyWithCompletion(self.nativeAuth,callbackHandler);
            },
            enumerable: true,
            configurable: true
        },
        'sendPasswordResetEmail': {
            value: function(email, callback) {
                var callbackHandler = function(e){
                    if (typeof callback === 'function') {
                        if (e.error) {
                            callback(false,FirebaseAuth.ios.native.getErrorObject(e.error));
                        }else{
                            callback(true,undefined);
                        }
                    }
                };
                FirebaseAuth.ios.native.sendPasswordResetWithEmailCompletion(self.nativeAuth,email,callbackHandler);
            },
            enumerable: true,
            configurable: true
        },
        'verifyPasswordResetCode': {
            value: function(code, callback) {
                var callbackHandler = function(e){
                    if (typeof callback === 'function') {
                        if (e.error) {
                            callback(undefined,FirebaseAuth.ios.native.getErrorObject(e.error));
                        }else{
                            callback(e.email,undefined);
                        }
                    }
                };
                FirebaseAuth.ios.native.verifyPasswordResetCodeCompletion(self.nativeAuth,code,callbackHandler);
            },
            enumerable: true,
            configurable: true
        },
        'confirmPasswordReset': {
            value: function(code, newPassword, callback) {
                var callbackHandler = function(e){
                    if (typeof callback === 'function') {
                        if (e.error) {
                            callback(false,FirebaseAuth.ios.native.getErrorObject(e.error));
                        }else{
                            callback(true,undefined);
                        }
                    }
                };
                FirebaseAuth.ios.native.confirmPasswordResetWithCodeNewPasswordCompletion(self.nativeAuth,code,newPassword,callbackHandler);
            },
            enumerable: true,
            configurable: true
        },
        'signOut': {
            value: function() {
                FirebaseAuth.ios.native.signOut(self.nativeAuth);
            },
            enumerable: true,
            configurable: true
        }
    });
}

FirebaseAuth.Error = require("./firebaseAuthErrors");

FirebaseAuth.ios = {};
FirebaseAuth.ios.native = {};

FirebaseAuth.ios.native.auth = function(){
	return Invocation.invokeClassMethod("FIRAuth","auth",[],"NSObject");
};

FirebaseAuth.ios.native.authWithApp = function(app){
    var argApp = new Invocation.Argument({
        type:"NSObject",
        value: app
    });
	return Invocation.invokeClassMethod("FIRAuth","authWithApp:",[argApp],"NSObject");
};

FirebaseAuth.ios.native.app = function(auth){
	return Invocation.invokeInstanceMethod(auth,"app",[],"NSObject");
}

FirebaseAuth.ios.native.currentUser = function(auth){
	return Invocation.invokeInstanceMethod(auth,"currentUser",[],"NSObject");
}

FirebaseAuth.ios.native.getLanguageCode = function(auth){
	return Invocation.invokeInstanceMethod(auth,"languageCode",[],"NSString");
}

FirebaseAuth.ios.native.setLanguageCode = function(auth,languageCode){
    var argLanguageCode = new Invocation.Argument({
        type:"NSString",
        value: languageCode
    });
    Invocation.invokeInstanceMethod(auth,"setLanguageCode:",[argLanguageCode]);
}

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
FirebaseAuth.ios.native.signInWithEmailPasswordCompletion = function(auth,email,password,completion)
{
	var argEmail = new Invocation.Argument({
        type:"NSString",
        value: email
    });
    var argPassword = new Invocation.Argument({
        type:"NSString",
        value: password
    });
    var argCompletion = new Invocation.Argument({
        type:"FIRAuthResultCallback",
        value: function(e){
        	completion(e);
        }
    });
	Invocation.invokeInstanceMethod(auth,"signInWithEmail:password:completion:",[argEmail,argPassword,argCompletion]);
}

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
FirebaseAuth.ios.native.createUserWithEmailPasswordCompletion = function(auth,email,password,completion)
{
    var argEmail = new Invocation.Argument({
        type:"NSString",
        value: email
    });
    var argPassword = new Invocation.Argument({
        type:"NSString",
        value: password
    });
    var argCompletion = new Invocation.Argument({
        type:"FIRAuthResultCallback",
        value: function(e){
            completion(e);
        }
    });
    Invocation.invokeInstanceMethod(auth,"createUserWithEmail:password:completion:",[argEmail,argPassword,argCompletion]);
}

/**
    Possible error codes:

    + `InvalidCustomToken` - Indicates a validation error with
        the custom token.
    + `CustomTokenMismatch` - Indicates the service account and the API key
        belong to different projects.
*/
FirebaseAuth.ios.native.signInWithCustomTokenCompletion = function(auth,token,completion)
{
    var argToken = new Invocation.Argument({
        type:"NSString",
        value: token
    });
    var argCompletion = new Invocation.Argument({
        type:"FIRAuthResultCallback",
        value: function(e){
            completion(e);
        }
    });
    Invocation.invokeInstanceMethod(auth,"signInWithCustomToken:completion:",[argToken,argCompletion]);
}

/**
    Possible error codes:

    + `OperationNotAllowed` - Indicates that anonymous accounts are
        not enabled. Enable them in the Auth section of the Firebase console.
*/
FirebaseAuth.ios.native.signInAnonymouslyWithCompletion = function(auth,completion)
{
    var argCompletion = new Invocation.Argument({
        type:"FIRAuthResultCallback",
        value: function(e){
            completion(e);
        }
    });
    Invocation.invokeInstanceMethod(auth,"signInAnonymouslyWithCompletion:",[argCompletion]);
}

/**
    Possible error codes:

    + `KeychainError` - Indicates an error occurred when accessing the
        keychain. The `NSLocalizedFailureReasonErrorKey` field in the `NSError.userInfo`
        dictionary will contain more information about the error encountered.
*/

FirebaseAuth.ios.native.signOut = function(auth)
{
    var argError = new Invocation.Argument({
        type:"NSObject",
        value: undefined
    });
    return Invocation.invokeInstanceMethod(auth,"signOut:",[argError]);
}

FirebaseAuth.ios.native.getErrorObject = function(nativeError)
{
    var code = Invocation.invokeInstanceMethod(nativeError,"code",[],"NSInteger");
    var localizedDescription = Invocation.invokeInstanceMethod(nativeError,"localizedDescription",[],"NSString");

    return {code: code, description: localizedDescription};
}

FirebaseAuth.ios.native.useAppLanguage = function(auth)
{
    return Invocation.invokeInstanceMethod(auth,"useAppLanguage",[]);
}

FirebaseAuth.ios.native.sendPasswordResetWithEmailCompletion = function(auth,email,completion)
{
    var argEmail = new Invocation.Argument({
        type:"NSString",
        value: email
    });
    var argCompletion = new Invocation.Argument({
        type:"UserProfileChangeCallback",
        value: function(e){
            completion(e);
        }
    });
    Invocation.invokeInstanceMethod(auth,"sendPasswordResetWithEmail:completion:",[argEmail,argCompletion]);
}

FirebaseAuth.ios.native.verifyPasswordResetCodeCompletion = function(auth,code,completion)
{
    var argCode = new Invocation.Argument({
        type:"NSString",
        value: code
    });
    var argCompletion = new Invocation.Argument({
        type:"VerifyPasswordResetCodeCallback",
        value: function(e){
            completion(e);
        }
    });
    Invocation.invokeInstanceMethod(auth,"verifyPasswordResetCode:completion:",[argCode,argCompletion]);
}

FirebaseAuth.ios.native.confirmPasswordResetWithCodeNewPasswordCompletion = function(auth,code,newPassword,completion)
{
    var argCode = new Invocation.Argument({
        type:"NSString",
        value: code
    });
    var argNewPassword = new Invocation.Argument({
        type:"NSString",
        value: newPassword
    });
    var argCompletion = new Invocation.Argument({
        type:"UserProfileChangeCallback",
        value: function(e){
            completion(e);
        }
    });
    Invocation.invokeInstanceMethod(auth,"confirmPasswordResetWithCode:newPassword:completion:",[argCode,argNewPassword,argCompletion]);
}

FirebaseAuth.ios.native.errorCode = {
    InvalidCustomToken : 17000,
    CustomTokenMismatch : 17002,
    InvalidCredential : 17004,
    UserDisabled : 17005,
    OperationNotAllowed : 17006,
    EmailAlreadyInUse : 17007,
    InvalidEmail : 17008,
    WrongPassword : 17009,
    TooManyRequests : 17010,
    UserNotFound : 17011,
    AccountExistsWithDifferentCredential : 17012,
    RequiresRecentLogin : 17014,
    ProviderAlreadyLinked : 17015,
    NoSuchProvider : 17016,
    InvalidUserToken : 17017,
    NetworkError : 17020,
    UserTokenExpired : 17021,
    InvalidAPIKey : 17023,
    UserMismatch : 17024,
    CredentialAlreadyInUse : 17025,
    WeakPassword : 17026,
    AppNotAuthorized : 17028,
    ExpiredActionCode : 17029,
    InvalidActionCode : 17030,
    InvalidMessagePayload : 17031,
    InvalidSender : 17032,
    InvalidRecipientEmail : 17033,
    MissingEmail : 17034,
    MissingIosBundleID : 17036,
    MissingAndroidPackageName : 17037,
    UnauthorizedDomain : 17038,
    InvalidContinueURI : 17039,
    MissingContinueURI : 17040,
    MissingPhoneNumber : 17041,
    InvalidPhoneNumber : 17042,
    MissingVerificationCode : 17043,
    InvalidVerificationCode : 17044,
    MissingVerificationID : 17045,
    InvalidVerificationID : 17046,
    MissingAppCredential : 17047,
    InvalidAppCredential : 17048,
    SessionExpired : 17051,
    QuotaExceeded : 17052,
    MissingAppToken : 17053,
    NotificationNotForwarded : 17054,
    AppNotVerified : 17055,
    CaptchaCheckFailed : 17056,
    WebContextAlreadyPresented : 17057,
    WebContextCancelled : 17058,
    AppVerificationUserInteractionFailure : 17059,
    InvalidClientID : 17060,
    WebNetworkRequestFailed : 17061,
    WebInternalError : 17062,
    KeychainError : 17995,
    FirebaseAuthInternalError : 17999
}

module.exports = FirebaseAuth;