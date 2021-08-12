function FirebaseCrashlytics() {
	this.nativeClass = FirebaseCrashlytics.NativeClass;
}

const AndroidConfig = require("@smartface/native/util/Android/androidconfig");

FirebaseCrashlytics.NativeClass = requireClass("com.crashlytics.android.Crashlytics");

FirebaseCrashlytics.setUserIdentifier = function(identifier){
    if(!AndroidConfig.isEmulator)
    FirebaseCrashlytics.NativeClass.setUserIdentifier(identifier);
};

FirebaseCrashlytics.setUserName = function(name){
    if(!AndroidConfig.isEmulator)
    FirebaseCrashlytics.NativeClass.setUserName(name);
};

FirebaseCrashlytics.setUserEmail = function(email){
    if(!AndroidConfig.isEmulator)
    FirebaseCrashlytics.NativeClass.setUserEmail(email);
};

FirebaseCrashlytics.setString = function(key, value){
    if(!AndroidConfig.isEmulator)
    FirebaseCrashlytics.NativeClass.setString(key, value);
};

FirebaseCrashlytics.setBool = function(key, value){
    if(!AndroidConfig.isEmulator)
    FirebaseCrashlytics.NativeClass.setBool(key, value);
};

FirebaseCrashlytics.setFloat = function(key, value){
    if(!AndroidConfig.isEmulator)
    FirebaseCrashlytics.NativeClass.setFloat(key, value);
};

FirebaseCrashlytics.setInt = function(key, value){
    if(!AndroidConfig.isEmulator)
    FirebaseCrashlytics.NativeClass.setInt(key, value);
};

FirebaseCrashlytics.getVersion = function(){
    if(!AndroidConfig.isEmulator)
        return FirebaseCrashlytics.NativeClass.getInstance().getVersion();
    else
        return;
};
 
FirebaseCrashlytics.crash = function(){
    if(!AndroidConfig.isEmulator)
    FirebaseCrashlytics.NativeClass.getInstance().crash();
};

FirebaseCrashlytics.with = function(kits){
    //ToDo: Remove when iOS also migrated to Firebase.	
};

module && (module.exports = FirebaseCrashlytics);
