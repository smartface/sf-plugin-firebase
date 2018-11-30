function Crashlytics(params) {}

Crashlytics.setUserIdentifier = function(identifier){
	try{
		__SF_Crashlytics.sharedInstance().setUserIdentifier(identifier);
	} catch (e) {}
};

Crashlytics.setUserName = function(name){
	try{
		__SF_Crashlytics.sharedInstance().setUserName(name);
	} catch (e) {}
};

Crashlytics.setUserEmail = function(email){
	try{
		__SF_Crashlytics.sharedInstance().setUserEmail(email);
	} catch (e) {}	
};

Crashlytics.setBool = function(key, value){
	try{
		__SF_Crashlytics.sharedInstance().setBoolValueForKey(value,key);
	} catch (e) {}
};

Crashlytics.getVersion = function(){
	try{
		return __SF_Crashlytics.sharedInstance().version;
	} catch (e) {
		return undefined;
	}
};

Crashlytics.setFloat = function(key, value){
	try{
		__SF_Crashlytics.sharedInstance().setFloatValueForKey(value,key);
	} catch (e) {}
};

Crashlytics.setInt = function(key, value){
	try{
		__SF_Crashlytics.sharedInstance().setIntValueForKey(value,key);
	} catch (e) {}
};

Crashlytics.setString = function(key, value){
	try{
		__SF_Crashlytics.sharedInstance().setObjectValueForKey(value,key);
	} catch (e) {}
};

Crashlytics.crash = function(){
	try{
		__SF_Crashlytics.sharedInstance().crash();
	} catch (e) {}
};

module && (module.exports = Crashlytics);
