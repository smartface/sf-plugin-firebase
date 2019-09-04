const NativeFirebaseAnalytics = requireClass('com.google.firebase.analytics.FirebaseAnalytics');
const NativeBundle = requireClass('android.os.Bundle');
const AndroidConfig = require("sf-core/util/Android/androidconfig");

function FirebaseAnalytics() {}

if (!AndroidConfig.isEmulator) {
    FirebaseAnalytics.nativeObject = function (){ return NativeFirebaseAnalytics.getInstance(AndroidConfig.activity); };
}

FirebaseAnalytics.CustomAttribute = require("./customAttribute");
FirebaseAnalytics.Event = require("./firebaseAnalyticsEvent");
FirebaseAnalytics.Param = require("./firebaseAnalyticsParam");


Object.defineProperties(FirebaseAnalytics, {
    'logEvent': {
        value: function(name, customAttributes) {
            if (!AndroidConfig.isEmulator) {
                var bundle = new NativeBundle();
                
                if(customAttributes instanceof Array){
                    for (var i = 0; i < customAttributes.length; i++) {
                        let value = customAttributes[i].value;            
                        if (typeof(value) === "string") {
                            bundle.putString(customAttributes[i].key, value);
                        }
                        else if (typeof(value) === "number") {
                            if(Number.isInteger(value))
                                bundle.putInt(customAttributes[i].key, value);
                            else
                                bundle.putDouble(customAttributes[i].key, value);   
                        }
                    }
                }
                
                FirebaseAnalytics.nativeObject().logEvent(name, bundle);
            }
        },
        enumerable: true,
        configurable: true
    },
    'setUserProperty': {
        value: function(name, value) {
            if (!AndroidConfig.isEmulator) {
                FirebaseAnalytics.nativeObject().setUserProperty(name, value);
            }
        },
        enumerable: true,
        configurable: true
    },
    'setUserId': {
        value: function(id) {
            if (!AndroidConfig.isEmulator) {
                FirebaseAnalytics.nativeObject().setUserId(id);
            }
        },
        enumerable: true,
        configurable: true
    },
    'setCurrentScreen': {
        value: function(screenName, screenClassOverride) {
            if (!AndroidConfig.isEmulator) {
                FirebaseAnalytics.nativeObject().setCurrentScreen(AndroidConfig.activity, screenName, screenClassOverride);
            }
        },
        enumerable: true,
        configurable: true
    }
});

FirebaseAnalytics.ios = {};

module.exports = FirebaseAnalytics;
