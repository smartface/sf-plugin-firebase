const NativeFirebaseAnalytics = requireClass('com.google.firebase.analytics.FirebaseAnalytics');
const NativeOnCompleteListener = requireClass('com.google.android.gms.tasks.OnCompleteListener');
const NativeBundle = requireClass('android.os.Bundle');
const AndroidConfig = require("sf-core/util/Android/androidconfig");

function FirebaseAnalytics() {}

if (!AndroidConfig.isEmulator) {
    FirebaseAnalytics.nativeObject = NativeFirebaseAnalytics.getInstance(AndroidConfig.activity);
}

Object.defineProperties(FirebaseAnalytics, {
    'logEvent': {
        value: function(name, customAttributes) {

            if (!AndroidConfig.isEmulator) {
                var bundle = new NativeBundle();
                for (var i = 0; i < customAttributes.length; i++) {
                    if (typeof(customAttributes[i].value) === "string") {
                        bundle.putString(customAttributes[i].key, customAttributes[i].value);
                    }
                    else if (typeof(customAttributes[i].value) === "number") {
                        bundle.putInt(customAttributes[i].key, customAttributes[i].value);
                    }
                }
                FirebaseAnalytics.nativeObject.logEvent(name, bundle);
            }
        },
        enumerable: true,
        configurable: true
    },
    'setUserProperty': {
        value: function(name, value) {
            if (!AndroidConfig.isEmulator) {
                FirebaseAnalytics.nativeObject.setUserProperty(name, value);
            }
        },
        enumerable: true,
        configurable: true
    },
    'setUserId': {
        value: function(id) {
            if (!AndroidConfig.isEmulator) {
                FirebaseAnalytics.nativeObject.setUserId(id);
            }
        },
        enumerable: true,
        configurable: true
    },
    'setCurrentScreen': {
        value: function(screenName, screenClassOverride) {
            if (!AndroidConfig.isEmulator) {
                FirebaseAnalytics.nativeObject.setCurrentScreen(AndroidConfig.activity, screenName, screenClassOverride);
            }
        },
        enumerable: true,
        configurable: true
    },
    'getAppInstanceId': {
        value: function(callback) {
            if (!AndroidConfig.isEmulator) {
                var innerCallback = NativeOnCompleteListener.implement({
                    onComplete: function(task) {
                        if (task.isSuccessful()) {
                            callback(task.getResult(), "");
                        }
                        else {
                            callback("", task.getException().getMessage());
                        }
                    }
                });

                FirebaseAnalytics.nativeObject.getAppInstanceId().addOnCompleteListener(innerCallback);
            }
        },
        enumerable: true,
        configurable: true
    }
});

FirebaseAnalytics.CustomAttribute = require("./customattribute");
FirebaseAnalytics.ios = {};

module.exports = FirebaseAnalytics;
