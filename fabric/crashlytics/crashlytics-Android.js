function Crashlytics() {
	this.nativeClass = Crashlytics.NativeClass;
}

const AndroidConfig = require("sf-core/util/Android/androidconfig");

Crashlytics.NativeClass = requireClass("com.crashlytics.android.Crashlytics");

Crashlytics.setUserIdentifier = function(identifier){
    if(!AndroidConfig.isEmulator)
        Crashlytics.NativeClass.setUserIdentifier(identifier);
};

Crashlytics.setUserName = function(name){
    if(!AndroidConfig.isEmulator)
        Crashlytics.NativeClass.setUserName(name);
};

Crashlytics.setUserEmail = function(email){
    if(!AndroidConfig.isEmulator)
        Crashlytics.NativeClass.setUserEmail(email);
};

Crashlytics.setString = function(key, value){
    if(!AndroidConfig.isEmulator)
        Crashlytics.NativeClass.setString(key, value);
};

Crashlytics.setBool = function(key, value){
    if(!AndroidConfig.isEmulator)
        Crashlytics.NativeClass.setBool(key, value);
};

Crashlytics.setFloat = function(key, value){
    if(!AndroidConfig.isEmulator)
        Crashlytics.NativeClass.setFloat(key, value);
};

Crashlytics.setInt = function(key, value){
    if(!AndroidConfig.isEmulator)
        Crashlytics.NativeClass.setInt(key, value);
};

Crashlytics.getVersion = function(){
    if(!AndroidConfig.isEmulator)
        return Crashlytics.NativeClass.getInstance().getVersion();
    else
        return;
};

Crashlytics.crash = function(){
    if(!AndroidConfig.isEmulator)
        Crashlytics.NativeClass.getInstance().crash();
};

module && (module.exports = Crashlytics);
