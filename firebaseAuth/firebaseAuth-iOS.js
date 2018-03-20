const Invocation = require('sf-core/util').Invocation;
const FirebaseUser = require("../firebaseUser");

function FirebaseAuth(FirebaseApp) {
	var self = this;

	if (FirebaseApp) {
        self.nativeAuth = FirebaseAuth.ios.native.authWithApp(FirebaseApp);
	}else{
        self.nativeAuth = FirebaseAuth.ios.native.auth();
    }

    Object.defineProperties(self, {
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
        'signOut': {
            value: function() {
                FirebaseAuth.ios.native.signOut(self.nativeAuth);
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
}

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
///////Error Codes
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
///////Error Codes
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
///////Error Codes
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
///////Error Codes
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
///////Error Codes
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

module.exports = FirebaseAuth;