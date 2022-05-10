import System from '@smartface/native/device/system';
import type analyticsAndroid from './analytics-Android';
import type analyticsIOS from './analytics-iOS';

const Analytics: typeof analyticsAndroid & typeof analyticsIOS = require(`./analytics-${System.OS}`);

export default Analytics;
module.exports = Analytics;
