const Invocation = require('sf-core/util').Invocation;

function FirebaseMessaging() {}

FirebaseMessaging.ios = {};

FirebaseMessaging.subscribeToTopic = function(topic){
	FirebaseMessaging.ios.native.subscribeToTopic(topic);
}

FirebaseMessaging.unsubscribeFromTopic = function(topic){
	FirebaseMessaging.ios.native.unsubscribeFromTopic(topic);
}

FirebaseMessaging.getToken = function(callback){
	if (typeof callback === 'function'){
		callback(FirebaseMessaging.ios.native.FCMToken());
	}
}

FirebaseMessaging.ios.onTokenReflesh = function(){}

// //////////// Native //////////////
FirebaseMessaging.ios.native = {};

FirebaseMessaging.ios.native.messaging = function(){
	return Invocation.invokeClassMethod("FIRMessaging","messaging",[],"NSObject");
}

FirebaseMessaging.ios.native.FCMToken = function(){
	return Invocation.invokeInstanceMethod(FirebaseMessaging.ios.native.messaging(),"FCMToken",[],"NSString");
}

FirebaseMessaging.ios.native.subscribeToTopic = function(topic){
    var argTopic = new Invocation.Argument({
        type:"NSString",
        value: topic
    });
    Invocation.invokeInstanceMethod(FirebaseMessaging.ios.native.messaging(),"subscribeToTopic:",[argTopic]);
}

FirebaseMessaging.ios.native.unsubscribeFromTopic = function(topic){
    var argTopic = new Invocation.Argument({
        type:"NSString",
        value: topic
    });
    Invocation.invokeInstanceMethod(FirebaseMessaging.ios.native.messaging(),"unsubscribeFromTopic:",[argTopic]);
}

FirebaseMessaging.ios.native.messagingDidReceiveRegistrationToken = function(){
	if (!FirebaseMessaging.ios.native.messagingDelegate) {
		var messagingAlloc = Invocation.invokeClassMethod("MessagingDelegate","alloc",[],"id");
		FirebaseMessaging.ios.native.messagingDelegate = Invocation.invokeInstanceMethod(messagingAlloc,"init",[],"NSObject");
		var argDelegate = new Invocation.Argument({
        	type: "NSObject",
        	value: FirebaseMessaging.ios.native.messagingDelegate
    	});       
    	Invocation.invokeInstanceMethod(FirebaseMessaging.ios.native.messaging(),"setDelegate:",[argDelegate]);
	}
	var argMessaggingDidRecieve = new Invocation.Argument({
	    type:"JSValue",
	    value: function(e){
	    	if (typeof FirebaseMessaging.ios.onTokenReflesh === 'function') {
	    		FirebaseMessaging.ios.onTokenReflesh(e.fcmToken);
	    	}
	    }
    });
    Invocation.invokeInstanceMethod(FirebaseMessaging.ios.native.messagingDelegate,"setMessagingDidReceiveRegistrationToken:",[argMessaggingDidRecieve]);
}

FirebaseMessaging.ios.native.messagingDidReceiveRegistrationToken();

module.exports = FirebaseMessaging;