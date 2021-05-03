const Invocation    = require('sf-core/util').Invocation;
const FirebaseAuth = require("../firebaseAuth");

function FirebaseApp(nativeObject) {
    var self = this;
    self.nativeObject = nativeObject;
    self.ios = {};
    self.android = {};
    self.ios.native = {};
    self.ios.native.firOptions = FirebaseApp.ios.native.options(self.nativeObject);

    self.auth = function(){
        return new FirebaseAuth(self);
    };

    self.ios.delete = function(callback){
        function callbackHandler(e){
            if (typeof callback === 'function') {
                callback(e.success);
            }
        }
        FirebaseApp.ios.native.deleteApp(self.nativeObject,callbackHandler);
    };

    Object.defineProperties(self, {
        'getName': {
            value: function() {
                return FirebaseApp.ios.native.name(self.nativeObject);
            },
            enumerable: true,
            configurable: true
        },
        'getApiKey': {
            value: function() {
                return Invocation.invokeInstanceMethod(self.ios.native.firOptions,"APIKey",[],"NSString");
            },
            enumerable: true,
            configurable: true
        },
        'getApplicationId': {
            value: function() {
                return Invocation.invokeInstanceMethod(self.ios.native.firOptions,"googleAppID",[],"NSString");
            },
            enumerable: true,
            configurable: true
        },
        'getDatabaseUrl': {
            value: function() {
                return Invocation.invokeInstanceMethod(self.ios.native.firOptions,"databaseURL",[],"NSString");
            },
            enumerable: true,
            configurable: true
        },
        'getGcmSenderId': {
            value: function() {
                return Invocation.invokeInstanceMethod(self.ios.native.firOptions,"GCMSenderID",[],"NSString");
            },
            enumerable: true,
            configurable: true
        },
        'getStorageBucket': {
            value: function() {
                return Invocation.invokeInstanceMethod(self.ios.native.firOptions,"storageBucket",[],"NSString");
            },
            enumerable: true,
            configurable: true
        }
    });

    Object.defineProperties(self.ios, {
        'getBundleId': {
            value: function() {
                return Invocation.invokeInstanceMethod(self.ios.native.firOptions,"bundleID",[],"NSString");
            },
            enumerable: true,
            configurable: true
        },
        'getClientId': {
            value: function() {
                return Invocation.invokeInstanceMethod(self.ios.native.firOptions,"clientID",[],"NSString");
            },
            enumerable: true,
            configurable: true
        },
        'getTrackingId': {
            value: function() {
                return Invocation.invokeInstanceMethod(self.ios.native.firOptions,"trackingID",[],"NSString");
            },
            enumerable: true,
            configurable: true
        }
    });
}


///// Native //////
FirebaseApp.ios = {};
FirebaseApp.ios.native = {};
FirebaseApp.ios.native.configureWithOptions = function(firOptions){
    var argOptions = new Invocation.Argument({
        type:"NSObject",
        value: firOptions
    });
    Invocation.invokeClassMethod("FIRApp","configureWithOptions:",[argOptions]);
}

FirebaseApp.ios.native.configureWithNameOptions = function(name,firOptions){
    var argName = new Invocation.Argument({
        type:"NSString",
        value: name
    });
    var argOptions = new Invocation.Argument({
        type:"NSObject",
        value: firOptions
    });
    Invocation.invokeClassMethod("FIRApp","configureWithName:options:",[argName,argOptions]);
}

FirebaseApp.ios.native.defaultApp = function(){
    return Invocation.invokeClassMethod("FIRApp","defaultApp",[],"NSObject");
}

FirebaseApp.ios.native.configure = function(){
    Invocation.invokeClassMethod("FIRApp","configure");
}

FirebaseApp.ios.native.appNamed = function(name){
    var argName = new Invocation.Argument({
        type:"NSString",
        value: name
    });
    return Invocation.invokeClassMethod("FIRApp","appNamed:",[argName],"NSObject");
}

FirebaseApp.ios.native.allApps = function(){
    return Invocation.invokeClassMethod("FIRApp","allApps",[],"id");
}

FirebaseApp.ios.native.name = function(firApp){
    return Invocation.invokeInstanceMethod(firApp,"name",[],"NSString");
}

FirebaseApp.ios.native.options = function(firApp){
    return Invocation.invokeInstanceMethod(firApp,"options",[],"NSObject");
}

FirebaseApp.ios.native.deleteApp = function(firApp,callback){
    var argCallback = new Invocation.Argument({
        type:"JSValue",
        value: function(e){
            callback(e);
        }
    });
    Invocation.invokeInstanceMethod(firApp,"deleteAppBridge:",[argCallback]);
}

module.exports = FirebaseApp;
