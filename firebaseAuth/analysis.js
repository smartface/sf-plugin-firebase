function FirebaseAuth() {}

FirebaseAuth.prototype.languageCode = function() {}; 
FirebaseAuth.prototype.getCurrentUser = function() {};

FirebaseAuth.prototype.createUserWithEmailAndPassword = function(email,password,callback) {};  // callback(FirebaseUser,isSuccess)
FirebaseAuth.prototype.signInWithEmailAndPassword = function(email,password,callback) {};  // callback(FirebaseUser,isSuccess)
FirebaseAuth.prototype.signInWithCustomToken = function(token,callback) {};  // callback(FirebaseUser,isSuccess)
FirebaseAuth.prototype.signInAnonymously  = function(callback) {}; // callback(FirebaseUser,isSuccess)
FirebaseAuth.prototype.signOut  = function() {}; 
