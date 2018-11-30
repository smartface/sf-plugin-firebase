function Answers() {
	this.nativeClass = Answers.NativeClass;
}

const AndroidConfig = require("sf-core/util/Android/androidconfig");

Answers.NativeClass = requireClass("com.crashlytics.android.answers.Answers");
Answers.CustomEvent = requireClass("com.crashlytics.android.answers.CustomEvent");
Answers.CustomAttribute = require("./customattribute");

Answers.logCustom = function(eventName, customAttributes){
	
	if(!AndroidConfig.isEmulator){
		var event = new Answers.CustomEvent(eventName);
		if(customAttributes){
			for(var i = 0 ; i<customAttributes.length ; i++){
				if(customAttributes[i].key && customAttributes[i].value){
					event = event.putCustomAttribute(customAttributes[i].key, customAttributes[i].value);
				}	
				else {
	        		throw Error("key/value must not be null");
	        	}	
			}
		}
		Answers.NativeClass.getInstance().logCustom(event);
	}	
}
module && (module.exports = Answers);
