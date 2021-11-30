// @ts-ignore
import System from '@smartface/native/device/system';
import type FirebaseUserAndroid from './firebaseUser-Android';
import type FirebaseUserIOS from './firebaseUser-iOS';

const FirebaseUser: typeof FirebaseUserAndroid & typeof FirebaseUserIOS = require(`./firebaseUser-${System.OS}`);

export = FirebaseUser;
