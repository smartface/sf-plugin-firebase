const Invocation = require('@smartface/native/util').Invocation;

function FirebaseUser(FIRUser) {
	var self = this;

	self.nativeUser = FIRUser;

	Object.defineProperties(self, {
        'getEmail': {
            value: function() {
                return FirebaseUser.ios.native.email(self.nativeUser);
            },
            enumerable: true,
            configurable: true
        },
        'getDisplayName': {
            value: function() {
                return FirebaseUser.ios.native.displayName(self.nativeUser);
            },
            enumerable: true,
            configurable: true
        },
        'getPhotoURL': {
            value: function() {
                return FirebaseUser.ios.native.photoURL(self.nativeUser);
            },
            enumerable: true,
            configurable: true
        },
        'getPhoneNumber': {
            value: function() {
                return FirebaseUser.ios.native.phoneNumber(self.nativeUser);
            },
            enumerable: true,
            configurable: true
        },
        'getUID': {
            value: function() {
                return FirebaseUser.ios.native.uid(self.nativeUser);
            },
            enumerable: true,
            configurable: true
        },
        'isAnonymous': {
            value: function() {
                return FirebaseUser.ios.native.isAnonymous(self.nativeUser);
            },
            enumerable: true,
            configurable: true
        },
        'isEmailVerified': {
            value: function() {
                return FirebaseUser.ios.native.isEmailVerified(self.nativeUser);
            },
            enumerable: true,
            configurable: true
        },
        'reload': {
            value: function(callback) {
                var callbackHandler = function(e){
                    if (typeof callback === 'function') {
                        if (e.error) {
                            callback(false,FirebaseUser.ios.native.getErrorObject(e.error));
                        }else{
                            callback(true,undefined);
                        }
                    }
                };
                FirebaseUser.ios.native.reloadWithCompletion(self.nativeUser,callbackHandler);
            },
            enumerable: true,
            configurable: true
        },
        'setDisplayName': {
            value: function(displayName,callback) {
                var callbackHandler = function(e){
                    if (typeof callback === 'function') {
                        if (e.error) {
                            callback(false,FirebaseUser.ios.native.getErrorObject(e.error).description);
                        }else{
                            callback(true,undefined);
                        }
                    }
                };
                FirebaseUser.ios.native.setDisplayName(self.nativeUser,displayName,callbackHandler);
            },
            enumerable: true,
            configurable: true
        },
        'setPhotoURL': {
            value: function(photoURL,callback) {
                var callbackHandler = function(e){
                    if (typeof callback === 'function') {
                        if (e.error) {
                            callback(false,FirebaseUser.ios.native.getErrorObject(e.error).description);
                        }else{
                            callback(true,undefined);
                        }
                    }
                };
                FirebaseUser.ios.native.setPhotoURL(self.nativeUser,photoURL,callbackHandler);
            },
            enumerable: true,
            configurable: true
        },
        'updateEmail': {
            value: function(email,callback) {
                var callbackHandler = function(e){
                    if (typeof callback === 'function') {
                        if (e.error) {
                            callback(false,FirebaseUser.ios.native.getErrorObject(e.error));
                        }else{
                            callback(true,undefined);
                        }
                    }
                };
                FirebaseUser.ios.native.updateEmailCompletion(self.nativeUser,email,callbackHandler);
            },
            enumerable: true,
            configurable: true
        },
        'updatePassword': {
            value: function(password,callback) {
                var callbackHandler = function(e){
                    if (typeof callback === 'function') {
                        if (e.error) {
                            callback(false,FirebaseUser.ios.native.getErrorObject(e.error));
                        }else{
                            callback(true,undefined);
                        }
                    }
                };
                FirebaseUser.ios.native.updatePasswordCompletion(self.nativeUser,password,callbackHandler);
            },
            enumerable: true,
            configurable: true
        },
        'reauthenticate': {
            value: function(email,password,callback) {
                var callbackHandler = function(e){
                    if (typeof callback === 'function') {
                        if (e.error) {
                            callback(false,FirebaseUser.ios.native.getErrorObject(e.error));
                        }else{
                            callback(true,undefined);
                        }
                    }
                };
                FirebaseUser.ios.native.reauthenticateWithCredentialCompletion(self.nativeUser,email,password,callbackHandler);
            },
            enumerable: true,
            configurable: true
        },
        'delete': {
            value: function(callback) {
                var callbackHandler = function(e){
                    if (typeof callback === 'function') {
                        if (e.error) {
                            callback(false,FirebaseUser.ios.native.getErrorObject(e.error));
                        }else{
                            callback(true,undefined);
                        }
                    }
                };
                FirebaseUser.ios.native.deleteWithCompletion(self.nativeUser,callbackHandler);
            },
            enumerable: true,
            configurable: true
        },
        'sendEmailVerification': {
            value: function(callback) {
                var callbackHandler = function(e){
                    if (typeof callback === 'function') {
                        if (e.error) {
                            callback(false,FirebaseUser.ios.native.getErrorObject(e.error));
                        }else{
                            callback(true,undefined);
                        }
                    }
                };
                FirebaseUser.ios.native.sendEmailVerificationWithCompletion(self.nativeUser,callbackHandler);
            },
            enumerable: true,
            configurable: true
        },
        'getIdToken': {
            value: function(forceRefresh, callback) {
                var callbackHandler = function(e){
                    if (typeof callback === 'function') {
                        if (e.error) {
                            var error = FirebaseUser.ios.native.getErrorObject(e.error);
                            callback(undefined,error.description);
                        }else{
                            callback(e.token,undefined);
                        }
                    }
                };
                FirebaseUser.ios.native.getIDTokenForcingRefreshCompletion(self.nativeUser,forceRefresh,callbackHandler);
            },
            enumerable: true,
            configurable: true
        }
    });
}

FirebaseUser.ios = {};
FirebaseUser.ios.native = {};

FirebaseUser.ios.native.isAnonymous = function(user){
	return Invocation.invokeInstanceMethod(user,"isAnonymous",[],"BOOL");
}

FirebaseUser.ios.native.isEmailVerified = function(user){
	return Invocation.invokeInstanceMethod(user,"isEmailVerified",[],"BOOL");
}

FirebaseUser.ios.native.displayName = function(user){
	return Invocation.invokeInstanceMethod(user,"displayName",[],"NSString");
}

FirebaseUser.ios.native.photoURL = function(user){
    var url = Invocation.invokeInstanceMethod(user,"photoURL",[],"NSObject");
    return Invocation.invokeInstanceMethod(url,"absoluteString",[],"NSString");
}

FirebaseUser.ios.native.setDisplayName = function(user,displayName,completion){
    var profileChangeRequest = Invocation.invokeInstanceMethod(user,"profileChangeRequest",[],"NSObject");
    var argDisplayName = new Invocation.Argument({
        type:"NSString",
        value: displayName
    });
    Invocation.invokeInstanceMethod(profileChangeRequest,"setDisplayName:",[argDisplayName]);

    var argCompletion = new Invocation.Argument({
        type:"UserProfileChangeCallback",
        value: function(e){
            completion(e);
        }
    });

    Invocation.invokeInstanceMethod(profileChangeRequest,"commitChangesWithCompletion:",[argCompletion]);
}

FirebaseUser.ios.native.setPhotoURL = function(user,photoURL,completion){
    var argURL = new Invocation.Argument({
        type:"NSString",
        value: photoURL
    });
    var url = Invocation.invokeClassMethod("NSURL","URLWithString:",[argURL],"NSObject");

    var profileChangeRequest = Invocation.invokeInstanceMethod(user,"profileChangeRequest",[],"NSObject");
    var argPhotoURL = new Invocation.Argument({
        type:"NSObject",
        value: url
    });
    Invocation.invokeInstanceMethod(profileChangeRequest,"setPhotoURL:",[argPhotoURL]);

    var argCompletion = new Invocation.Argument({
        type:"UserProfileChangeCallback",
        value: function(e){
            completion(e);
        }
    });

    Invocation.invokeInstanceMethod(profileChangeRequest,"commitChangesWithCompletion:",[argCompletion]);
}

FirebaseUser.ios.native.phoneNumber = function(user){
	return Invocation.invokeInstanceMethod(user,"phoneNumber",[],"NSString");
}

FirebaseUser.ios.native.email = function(user){
	return Invocation.invokeInstanceMethod(user,"email",[],"NSString");
}

FirebaseUser.ios.native.uid = function(user){
	return Invocation.invokeInstanceMethod(user,"uid",[],"NSString");
}

FirebaseUser.ios.native.reloadWithCompletion = function(user,completion){
    var argCompletion = new Invocation.Argument({
        type:"UserProfileChangeCallback",
        value: function(e){
            completion(e);
        }
    });
    Invocation.invokeInstanceMethod(user,"reloadWithCompletion:",[argCompletion]);
}

FirebaseUser.ios.native.updateEmailCompletion = function(user,email,completion){
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
    Invocation.invokeInstanceMethod(user,"updateEmail:completion:",[argEmail,argCompletion]);
}

FirebaseUser.ios.native.updatePasswordCompletion = function(user,password,completion){
    var argPassword = new Invocation.Argument({
        type:"NSString",
        value: password
    });
    var argCompletion = new Invocation.Argument({
        type:"UserProfileChangeCallback",
        value: function(e){
            completion(e);
        }
    });
    Invocation.invokeInstanceMethod(user,"updatePassword:completion:",[argPassword,argCompletion]);
}

FirebaseUser.ios.native.getIDTokenForcingRefreshCompletion = function(user,forceRefresh,completion){
    var argForceRefresh = new Invocation.Argument({
        type:"BOOL",
        value: forceRefresh
    });
    var argCompletion = new Invocation.Argument({
        type:"FIRAuthTokenCallback",
        value: function(e){
        	completion(e);
        }
    });
	return Invocation.invokeInstanceMethod(user,"getIDTokenForcingRefresh:completion:",[argForceRefresh,argCompletion]);
}

FirebaseUser.ios.native.getErrorObject = function(nativeError)
{
    var code = Invocation.invokeInstanceMethod(nativeError,"code",[],"NSInteger");
    var localizedDescription = Invocation.invokeInstanceMethod(nativeError,"localizedDescription",[],"NSString");

    return {code: code, description: localizedDescription};
}

FirebaseUser.ios.native.reauthenticateWithCredentialCompletion = function(user,email,password,completion){
    var argEmail = new Invocation.Argument({
        type:"NSString",
        value: email
    });
    var argPassword = new Invocation.Argument({
        type:"NSString",
        value: password
    });

    var credential = Invocation.invokeClassMethod("FIREmailAuthProvider","credentialWithEmail:password:",[argEmail,argPassword],"NSObject");

    var argCredential = new Invocation.Argument({
        type:"NSObject",
        value: credential
    });

    var argCompletion = new Invocation.Argument({
        type:"UserProfileChangeCallback",
        value: function(e){
            completion(e);
        }
    });
    Invocation.invokeInstanceMethod(user,"reauthenticateWithCredential:completion:",[argCredential,argCompletion]);
}

FirebaseUser.ios.native.deleteWithCompletion = function(user,completion){
    var argCompletion = new Invocation.Argument({
        type:"UserProfileChangeCallback",
        value: function(e){
            completion(e);
        }
    });

    Invocation.invokeInstanceMethod(user,"deleteWithCompletion:",[argCompletion]);
}

FirebaseUser.ios.native.sendEmailVerificationWithCompletion = function(user,completion){
    var argCompletion = new Invocation.Argument({
        type:"UserProfileChangeCallback",
        value: function(e){
            completion(e);
        }
    });

    Invocation.invokeInstanceMethod(user,"sendEmailVerificationWithCompletion:",[argCompletion]);
}

module.exports = FirebaseUser;