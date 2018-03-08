function FirebaseAnalytics() {}

FirebaseAnalytics.prototype.logEvent = function(name, params) {};  // params is a key-value object. only number and string 
FirebaseAnalytics.prototype.setUserProperty = function(name, value) {};
FirebaseAnalytics.prototype.setUserId = function(id) {};
FirebaseAnalytics.prototype.setCurrentScreen = function(screenName, screenClassOverride) {};
FirebaseAnalytics.prototype.getAppInstanceId = function(callback) {}; // callback(appInstanceId /*String*/)

