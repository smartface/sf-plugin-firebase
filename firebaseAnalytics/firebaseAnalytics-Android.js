const NativeFirebaseAnalytics = requireClass('com.google.firebase.analytics.FirebaseAnalytics');
const NativeOnCompleteListener = requireClass('com.google.android.gms.tasks.OnCompleteListener');
const NativeBundle = requireClass('android.os.Bundle'); 
const AndroidConfig = require("sf-core/util/Android/androidconfig");

function FirebaseAnalytics(nativeFirebaseApp) {
    var self = this;

    this.nativeObject = NativeFirebaseAnalytics.getInstance(AndroidConfig.activity);

    Object.defineProperties(self, {
        'logEvent': {
            value: function(name, params) {
                var bundle = new NativeBundle();
                for(var i = 0 ; i<params.length ; i++){
                    if(typeof(params[i].value) === "string"){
                        bundle.putString(params[i].key,params[i].value);
                    }
                    else if (typeof(params[i].value) === "number"){
                        bundle.putInt(params[i].key,params[i].value);
                    }
                }
                self.nativeObject.logEvent(name, bundle);
            },
            enumerable: true,
            configurable: true
        },
        'setUserProperty': {
            value: function(name, value) {
                self.nativeObject.setUserProperty(name, value);
            },
            enumerable: true,
            configurable: true
        },
        'setUserId': {
            value: function(id) {
                self.nativeObject.setUserId(id);
            },
            enumerable: true,
            configurable: true
        },
        'setCurrentScreen': {
            value: function(screenName, screenClassOverride) {
                self.nativeObject.setCurrentScreen(AndroidConfig.activity, screenName, screenClassOverride);
            },
            enumerable: true,
            configurable: true
        },
        'getAppInstanceId': {
            value: function(callback) {
                var innerCallback = NativeOnCompleteListener.implement({
                    onComplete: function(task) {
                       if(task.isSuccessful()){
                           callback(task.getResult(),"");
                       }else{
                           callback("",task.getException().getMessage());
                       }
                    }
                });

                self.nativeObject.getAppInstanceId().addOnCompleteListener(innerCallback);
            },
            enumerable: true,
            configurable: true
        }
    });

    self.ios = {};
}

FirebaseAnalytics.ios = {};

module.exports = FirebaseAnalytics;
