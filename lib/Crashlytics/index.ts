import System from '@smartface/native/device/system';
import type crashlyticsAndroid from './crashlytics-Android';
import type crashlyticsIOS from './crashlytics-iOS';

const Crashlytics: typeof crashlyticsAndroid & typeof crashlyticsIOS = require(`./crashlytics-${System.OS}`);

export default Crashlytics;
module.exports = Crashlytics;
