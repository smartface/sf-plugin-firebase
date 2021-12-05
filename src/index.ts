import Analytics from './Analytics';
import App from './App';
import Auth from './Auth';
import Crashlytics from './Crashlytics';
import Messaging from './Messaging';
import User from './User';
import Firebase from './firebaseExport';
export { Analytics };
export { App };
export { Auth };
export { Crashlytics };
export { Messaging };
export { User };
export {
    Analytics as FirebaseAnalytics,
    App as FirebaseApp,
    Auth as FirebaseAuth,
    Crashlytics as FirebaseCrashlytics,
    Messaging as FirebaseMessaging,
    User as FirebaseUser
}; // Backward compatibility
export { Firebase as default };
