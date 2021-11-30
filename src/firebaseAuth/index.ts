// @ts-ignore
import System from '@smartface/native/device/system';
import type FirebaseAuthAndroid from './firebaseAuth-Android';
import type FirebaseAuthIOS from './firebaseAuth-iOS';

const FirebaseAuth: typeof FirebaseAuthAndroid & typeof FirebaseAuthIOS = require(`./firebaseAuth-${System.OS}`);

export = FirebaseAuth;
