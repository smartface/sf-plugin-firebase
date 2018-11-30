function Answers(params) {}

Answers.CustomAttribute = require("./customattribute");

Answers.logCustom = function(eventName, customAttributes){
	try{
	    var customDictionary = {};
	    for(var i = 0 ; i < customAttributes.length ; i++){
	    	if(customAttributes[i].key && customAttributes[i].value){
	    		customDictionary[customAttributes[i].key] = customAttributes[i].value;
	    	}
	        else {
	        	throw Error("key/value must not be null");
	        }
	    }
	    __SF_Answers.logCustomEventWithNameCustomAttributes(eventName,customDictionary);
    } catch (e) {}
}

module && (module.exports = Answers);
