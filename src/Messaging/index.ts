// @ts-ignore
import System from '@smartface/native/device/system';
import type messagingAndroid from './messaging-Android';
import type messagingIOS from './messaging-iOS';

const Messaging: typeof messagingAndroid & typeof messagingIOS = require(`./messaging-${System.OS}`);

export = Messaging;
