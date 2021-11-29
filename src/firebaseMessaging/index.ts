import System from '@smartface/native/device/system';
import type FirebaseMessagingAndroid from './firebaseMessaging-Android';
import type FirebaseMessagingIOS from './firebaseMessaging-iOS';

const FirebaseMessaging: typeof FirebaseMessagingAndroid & typeof FirebaseMessagingIOS = require(`./firebaseMessaging-${System.OS}`);

export = FirebaseMessaging;
