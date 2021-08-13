
const FirebaseCrashlytics = {};
FirebaseCrashlytics.NativeClass = requireClass("com.google.firebase.crashlytics.FirebaseCrashlytics");
const AndroidConfig = require("@smartface/native/util/Android/androidconfig");

FirebaseCrashlytics.setUserIdentifier = function(identifier){
    if(!AndroidConfig.isEmulator)
        FirebaseCrashlytics.NativeClass.getInstance().setUserId(identifier);
};

FirebaseCrashlytics.setString = function(key, value){
    if(!AndroidConfig.isEmulator)
        FirebaseCrashlytics.NativeClass.getInstance().setCustomKey(key, value);
};

FirebaseCrashlytics.setBool = function(key, value){
    if(!AndroidConfig.isEmulator)
        FirebaseCrashlytics.NativeClass.getInstance().setCustomKey(key, value);
};

FirebaseCrashlytics.setFloat = function(key, value){
    if(!AndroidConfig.isEmulator)
        FirebaseCrashlytics.NativeClass.getInstance().setCustomKey(key, value);
};

FirebaseCrashlytics.setInt = function(key, value){
    if(!AndroidConfig.isEmulator)
        FirebaseCrashlytics.NativeClass.getInstance().setCustomKey(key, value);
};

FirebaseCrashlytics.ios = {};
FirebaseCrashlytics.ios.setUserName = function(name){
    //ToDo: No longer supported.
};

FirebaseCrashlytics.ios.setUserEmail = function(email){
    //ToDo: No longer supported.
};

FirebaseCrashlytics.ios.getVersion = function(){
    //ToDo: No longer supported.
    return 0;
};
 
FirebaseCrashlytics.ios.crash = function(){
    //ToDo: No longer supported.
};

FirebaseCrashlytics.ios.with = function(kits){
    //ToDo: No longer supported.	
};

module && (module.exports = FirebaseCrashlytics);
