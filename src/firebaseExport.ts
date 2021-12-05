// @ts-ignore
import System from '@smartface/native/device/system';
import type FirebaseAndroid from './firebase-Android';
import type FirebaseIOS from './firebase-iOS';
const Firebase: typeof FirebaseAndroid & typeof FirebaseIOS = require(`./firebase-${System.OS}`);

export default Firebase;
module.exports = Firebase;
