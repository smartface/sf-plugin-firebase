const FirebaseAnalytics = require("./firebaseAnalytics");
const FirebaseApp = require("./firebaseApp");
const FirebaseAuth = require("./firebaseAuth");
const FirebaseMessaging = require("./firebaseMessaging");
const FirebaseUser = require("./firebaseUser");

const NativeFirebaseApp = requireClass('com.google.firebase.FirebaseApp');
const NativeFirebaseOptions = requireClass('com.google.firebase.FirebaseOptions');
const AndroidConfig = require("sf-core/util/Android/androidconfig");
const File = require('sf-core/io/file');
const FileStream = require('sf-core/io/filestream');

function Firebase() {}

Firebase.initializeApp = function(options, name) {

    var googleJsonFile = new File({
        path: options.androidFile
    });

    if (googleJsonFile.exists) {

        var fileStreamRead = googleJsonFile.openStream(FileStream.StreamType.READ, FileStream.ContentMode.TEXT);
        var readedFileText = fileStreamRead.readToEnd();
        var googleJson = JSON.parse(readedFileText);
        fileStreamRead.close();

        var builder = new NativeFirebaseOptions.Builder();
        builder = builder.setApplicationId(googleJson.client[0].client_info.mobilesdk_app_id);
        builder = builder.setApiKey(googleJson.client[0].api_key.current_key);
        builder = builder.setDatabaseUrl(googleJson.project_info.firebase_url);
        builder = builder.setStorageBucket(googleJson.project_info.storage_bucket);
        builder = builder.setGcmSenderId(googleJson.project_info.project_number);
        var nativeFirebaseApp;
        if (name) {
            nativeFirebaseApp = NativeFirebaseApp.initializeApp(AndroidConfig.activity, builder.build(), name);
        }
        else {
            nativeFirebaseApp = NativeFirebaseApp.initializeApp(AndroidConfig.activity, builder.build());
        }
        return new FirebaseApp(nativeFirebaseApp);
    }

};

Firebase.app = function(name) {
    var nativeFirebaseApp;
    if (name) {
        nativeFirebaseApp = NativeFirebaseApp.getInstance(name);
    }
    else {
        nativeFirebaseApp = NativeFirebaseApp.getInstance();
    }
    return new FirebaseApp(nativeFirebaseApp);
};

Firebase.apps = function() {
    var result = [];
    var appList = NativeFirebaseApp.getApps(AndroidConfig.activity);
    for (var i = 0; i < appList.size(); i++) {
        result.push(new FirebaseApp(appList.get(i)));
    }
    return result;
};

Firebase.auth = function(FirebaseApp) {
    return new FirebaseAuth(FirebaseApp);
};

Firebase.analytics = function(FirebaseApp) {
    return new FirebaseAnalytics(FirebaseApp);
};

Firebase.messaging = function(FirebaseApp) {
    return new FirebaseMessaging(FirebaseApp);
};
