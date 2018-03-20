const NativeFirebaseMessaging = requireClass('com.google.firebase.messaging.FirebaseMessaging');

const AndroidConfig = require("sf-core/util/Android/androidconfig");
const Notifications = require("sf-core/notifications");

function FirebaseMessaging() {}

if (!AndroidConfig.isEmulator) {
    FirebaseMessaging.nativeObject = NativeFirebaseMessaging.getInstance();
}

// GET TOKEN ICIN PUSH PERMISSION GEREKLI
Object.defineProperties(FirebaseMessaging, {
    'getToken': {
        value: function(callback) {
            if (!AndroidConfig.isEmulator) {
                Notifications.registerForPushNotifications(function(e) {
                    callback(e.token);
                }, function() {
                    callback(undefined);
                });
            }
        },
        enumerable: true,
        configurable: true
    },
    'subscribeToTopic': {
        value: function(topic) {
            if (!AndroidConfig.isEmulator) {
                FirebaseMessaging.nativeObject.subscribeToTopic(topic);
            }
        },
        enumerable: true,
        configurable: true
    },
    'unsubscribeFromTopic': {
        value: function(topic) {
            FirebaseMessaging.nativeObject.unsubscribeFromTopic(topic);
        },
        enumerable: true,
        configurable: true
    }
});

FirebaseMessaging.ios = {};

module.exports = FirebaseMessaging;
