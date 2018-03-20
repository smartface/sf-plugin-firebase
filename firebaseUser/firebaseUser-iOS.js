const FirebaseAuth = require("../firebaseUser");
const Invocation = require('sf-core/util').Invocation;

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
        'getIdToken': {
            value: function(forceRefresh, callback) {
                var callbackHandler = function(e){
                    if (typeof callback === 'function') {
                        if (e.error) {
                            callback(undefined,FirebaseAuth.ios.native.getErrorObject(e.error));
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

FirebaseUser.ios.native.phoneNumber = function(user){
	return Invocation.invokeInstanceMethod(user,"phoneNumber",[],"NSString");
}

FirebaseUser.ios.native.email = function(user){
	return Invocation.invokeInstanceMethod(user,"email",[],"NSString");
}

FirebaseUser.ios.native.uid = function(user){
	return Invocation.invokeInstanceMethod(user,"uid",[],"NSString");
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

module.exports = FirebaseUser;