// @ts-ignore
import System from '@smartface/native/device/system';
import type FirebaseAndroid from './firebase-Android';
import type FirebaseIOS from './firebase-iOS';
import Analytics from './Analytics';
import App from './App';
import Auth from './Auth';
import Crashlytics from './Crashlytics';
import Messaging from './Messaging';
import User from './User';

const Firebase: typeof FirebaseAndroid & typeof FirebaseIOS = require(`./firebase-${System.OS}`);
export default Firebase;
module.exports = Firebase;
export { Analytics, App, Auth, Crashlytics, Messaging, User };
export {
    Analytics as FirebaseAnalytics,
    App as FirebaseApp,
    Auth as FirebaseAuth,
    Crashlytics as FirebaseCrashlytics,
    Messaging as FirebaseMessaging,
    User as FirebaseUser
}; // Backward compatibility
