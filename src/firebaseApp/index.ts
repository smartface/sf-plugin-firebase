// @ts-ignore
import System from '@smartface/native/device/system';
import type FirebaseAppAndroid from './firebaseApp-Android';
import type FirebaseAppIOS from './firebaseApp-iOS';

const FirebaseApp: typeof FirebaseAppAndroid & typeof FirebaseAppIOS = require(`./firebaseApp-${System.OS}`);

export = FirebaseApp;
