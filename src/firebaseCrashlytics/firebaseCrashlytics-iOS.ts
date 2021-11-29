function Crashlytics(params) {}

Crashlytics.setUserIdentifier = function(identifier){
	try{
		__SF_Crashlytics.sharedInstance().setUserIdentifier(identifier);
	} catch (e) {}
};

Crashlytics.setBool = function(key, value){
	try{
		__SF_Crashlytics.sharedInstance().setBoolValueForKey(value,key);
	} catch (e) {}
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

Crashlytics.ios = {};
Crashlytics.ios.setUserName = function(name){
	try{
		__SF_Crashlytics.sharedInstance().setUserName(name);
	} catch (e) {}
};

Crashlytics.ios.setUserEmail = function(email){
	try{
		__SF_Crashlytics.sharedInstance().setUserEmail(email);
	} catch (e) {}	
};


Crashlytics.ios.crash = function(){
	try{
		__SF_Crashlytics.sharedInstance().crash();
	} catch (e) {}
}; 

Crashlytics.ios.getVersion = function(){
	try{
		return __SF_Crashlytics.sharedInstance().version;
	} catch (e) {
		return undefined;
	}
};

Crashlytics.ios.with = function(kits){
	try {
	    var kitsStringArray = [];
	    for (var kit in kits){
	        kitsStringArray.push(kits[kit].constructor.name);
	    }
	    __SF_Fabric.withStringArray(kitsStringArray);
    } catch (e) {}
}

module && (module.exports = Crashlytics);
