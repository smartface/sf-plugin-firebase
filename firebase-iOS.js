const Invocation    = require('sf-core/util').Invocation;
const FirebaseAnalytics = require("./firebaseAnalytics");
const FirebaseApp = require("./firebaseApp");
const FirebaseAuth = require("./firebaseAuth");
const FirebaseMessaging = require("./firebaseMessaging");

function Firebase() {};

Firebase.initializeApp = function(options, name) {

    if (options && options.iosFile.exists) {
        
        var pathPlist = options.iosFile.nativeObject.getActualPath();

        var alloc = Invocation.invokeClassMethod("FIROptions","alloc",[],"id");
        var argPathPlist = new Invocation.Argument({
            type:"NSString",
            value: pathPlist
        });
        var firOptions = Invocation.invokeInstanceMethod(alloc,"initWithContentsOfFile:",[argPathPlist],"NSObject");

        var nativeFirebaseApp;
        if(name){
            FirebaseApp.ios.native.configureWithNameOptions(name,firOptions);
            nativeFirebaseApp = FirebaseApp.ios.native.appNamed(name);
        }
        else {
            FirebaseApp.ios.native.configureWithOptions(firOptions);
            nativeFirebaseApp = FirebaseApp.ios.native.defaultApp();
        }
        return new FirebaseApp(nativeFirebaseApp);

    }
};

Firebase.app = function(name) {
    var nativeFirebaseApp;
    if(name){
        nativeFirebaseApp = FirebaseApp.ios.native.appNamed(name);
    }else {
        nativeFirebaseApp = FirebaseApp.ios.native.defaultApp();
    }
    return new FirebaseApp(nativeFirebaseApp);
};

Firebase.apps = function() {
    var apps = FirebaseApp.ios.native.allApps();
    var keys = Object.keys(apps);
    var appArray = [];
    for (var i in keys){
        appArray.push(new FirebaseApp(apps[keys[i]]));
    }
    return appArray;
};

Firebase.auth = function(FirebaseApp) {
    return new FirebaseAuth(FirebaseApp);
};

Firebase.analytics = function(FirebaseApp) {
    return new FirebaseAnalytics();
};

Firebase.messaging = function(FirebaseApp) {
    return new FirebaseMessaging();
};

module.exports = Firebase;