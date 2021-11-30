// @ts-ignore
import System from '@smartface/native/device/system';
import type FirebaseAnalyticsAndroid from './firebaseAnalytics-Android';
import type FirebaseAnalyticsIOS from './firebaseAnalytics-iOS';

const FirebaseAnalytics: typeof FirebaseAnalyticsAndroid & typeof FirebaseAnalyticsIOS = require(`./firebaseAnalytics-${System.OS}`);

export = FirebaseAnalytics;
