// @ts-ignore
import System from '@smartface/native/device/system';
import type userAndroid from './user-Android';
import type userIOS from './user-iOS';

const User: typeof userAndroid & typeof userIOS = require(`./user-${System.OS}`);

export default User;
module.exports = User;
