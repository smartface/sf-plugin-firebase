const FirebaseApp = require("./firebaseApp");
const FirebaseAuth = require("./firebaseAuth");

const NativeFirebaseApp = requireClass('com.google.firebase.FirebaseApp');
const NativeFirebaseOptions = requireClass('com.google.firebase.FirebaseOptions');
const AndroidConfig = require("sf-core/util/Android/androidconfig");

function Firebase() {}

Firebase.initializeApp = function(options, name) {
    if (!AndroidConfig.isEmulator) {
        var nativeFirebaseApp;
        if (name) {
            nativeFirebaseApp = NativeFirebaseApp.initializeApp(AndroidConfig.activity, name);
        }
        else {
            nativeFirebaseApp = NativeFirebaseApp.initializeApp(AndroidConfig.activity);
        }
        return new FirebaseApp(nativeFirebaseApp);
    } else {
        return new FirebaseApp();
    }
};

Firebase.app = function(name) {

    if (!AndroidConfig.isEmulator) {
        var nativeFirebaseApp;
        if (name) {
            nativeFirebaseApp = NativeFirebaseApp.getInstance(name);
        }
        else {
            nativeFirebaseApp = NativeFirebaseApp.getInstance();
        }
        return new FirebaseApp(nativeFirebaseApp);
    } else {
        return new FirebaseApp();
    }

};

Firebase.apps = function() {
    var result = [];
    if (!AndroidConfig.isEmulator) {
        var appList = NativeFirebaseApp.getApps(AndroidConfig.activity);
        for (var i = 0; i < appList.size(); i++) {
            result.push(new FirebaseApp(appList.get(i)));
        }
    }
    return result;
};

Firebase.auth = function(FirebaseApp) {
    if (!AndroidConfig.isEmulator) {
        return new FirebaseAuth(FirebaseApp);
    } else {
        return new FirebaseAuth();
    }
};

Firebase.analytics = require("./firebaseAnalytics");
Firebase.messaging = require("./firebaseMessaging");

Firebase.ios = {};
module.exports = Firebase;
