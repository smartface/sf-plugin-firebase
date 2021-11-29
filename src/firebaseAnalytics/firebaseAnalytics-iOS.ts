// @ts-ignore
import { Invocation } from '@smartface/native/util';

function FirebaseAnalytics() {}

FirebaseAnalytics.Event = require('./firebaseAnalyticsEvent');
FirebaseAnalytics.Param = require('./firebaseAnalyticsParam');

FirebaseAnalytics.logEvent = function (name, customAttributes) {
    var customDictionary = {};
    if (customAttributes instanceof Array) {
        for (var i = 0; i < customAttributes.length; i++) {
            customDictionary[customAttributes[i].key] = customAttributes[i].value;
        }
    }
    FirebaseAnalytics.ios.native.logEventWithNameParameters(name, customDictionary);
};

FirebaseAnalytics.setUserProperty = function (name, value) {
    FirebaseAnalytics.ios.native.setUserPropertyStringForName(value, name);
};

FirebaseAnalytics.setUserId = function (id) {
    FirebaseAnalytics.ios.native.setUserID(id);
};

FirebaseAnalytics.setCurrentScreen = function (screenName, screenClassOverride) {
    FirebaseAnalytics.ios.native.setScreenNameScreenClass(screenName, screenClassOverride);
};

FirebaseAnalytics.getAppInstanceId = function (callback) {
    if (typeof callback === 'function') {
        callback(FirebaseAnalytics.ios.native.appInstanceID());
    }
};

FirebaseAnalytics.CustomAttribute = require('./customAttribute');

//////////// Native //////////////
FirebaseAnalytics.ios = {};
FirebaseAnalytics.ios.native = {};

FirebaseAnalytics.ios.native.logEventWithNameParameters = function (name, parameters) {
    var argName = new Invocation.Argument({
        type: 'NSString',
        value: name
    });
    var argParameters = new Invocation.Argument({
        type: 'id',
        value: parameters
    });
    Invocation.invokeClassMethod('FIRAnalytics', 'logEventWithName:parameters:', [argName, argParameters]);
};

FirebaseAnalytics.ios.native.setUserPropertyStringForName = function (value, name) {
    var argName = new Invocation.Argument({
        type: 'NSString',
        value: name
    });
    var argValue = new Invocation.Argument({
        type: 'NSString',
        value: value
    });
    Invocation.invokeClassMethod('FIRAnalytics', 'setUserPropertyString:forName:', [argValue, argName]);
};

FirebaseAnalytics.ios.native.setUserID = function (userID) {
    var argUserID = new Invocation.Argument({
        type: 'NSString',
        value: userID
    });
    Invocation.invokeClassMethod('FIRAnalytics', 'setUserID:', [argUserID]);
};

FirebaseAnalytics.ios.native.setScreenNameScreenClass = function (screenName, screenClassOverride) {
    var argScreen = new Invocation.Argument({
        type: 'NSString',
        value: screenName
    });
    var argClassOverride = new Invocation.Argument({
        type: 'NSString',
        value: screenClassOverride
    });
    Invocation.invokeClassMethod('FIRAnalytics', 'setScreenName:screenClass:', [argScreen, argClassOverride]);
};

FirebaseAnalytics.ios.native.appInstanceID = function () {
    return Invocation.invokeClassMethod('FIRAnalytics', 'appInstanceID', [], 'NSString');
};

module.exports = FirebaseAnalytics;
