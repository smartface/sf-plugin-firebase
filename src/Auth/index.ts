// @ts-ignore
import System from '@smartface/native/device/system';
import type authAndroid from './auth-Android';
import type authIOS from './auth-iOS';

const Auth: typeof authAndroid & typeof authIOS = require(`./auth-${System.OS}`);

export default Auth;
module.exports = Auth;
