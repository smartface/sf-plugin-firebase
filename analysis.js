function Firebase() {}

// name optional
// options = {iOSGooglePlistPath:"", androidGoogleServiceJson:""}
Firebase.initializeApp = function(options,name) {};

// Return the default app or named app -- name optional
// Return firebaseApp
Firebase.app = function(name) {};

// Return firebaseApp array
Firebase.apps = function() {};

// Return firebaseApp Auth
Firebase.auth = function(FirebaseApp) {};

// Return firebaseApp Analytic
Firebase.analytics = function() {};

// Return firebaseApp messaging
Firebase.messaging = function() {};