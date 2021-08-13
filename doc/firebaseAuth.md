## Events

<dl>
<dt><a href="#event_getCurrentUser">"getCurrentUser"</a> ⇒ <code>FirebaseUser</code></dt>
<dd><p>Synchronously gets the cached current user, or undefined if there is none</p>
</dd>
<dt><a href="#event_useAppLanguage">"useAppLanguage"</a></dt>
<dd><p>Sets <code>languageCode</code> to the app&#39;s current language.</p>
</dd>
<dt><a href="#event_createUserWithEmailAndPassword">"createUserWithEmailAndPassword" (email, password, callback)</a></dt>
<dd><p>Creates and, on success, signs in a user with the given email address and password.</p>
<p>  Possible error codes:</p>
<ul>
<li><code>InvalidEmail</code> - Indicates the email address is malformed.</li>
<li><code>EmailAlreadyInUse</code> - Indicates the email used to attempt sign up
  already exists. Call fetchProvidersForEmail to check which sign-in mechanisms the user
  used, and prompt the user to sign in with one of those.</li>
<li><code>OperationNotAllowed</code> - Indicates that email and password accounts
  are not enabled. Enable them in the Auth section of the Firebase console.</li>
<li><code>WeakPassword</code> - Indicates an attempt to set a password that is
  considered too weak. The NSLocalizedFailureReasonErrorKey field in the NSError.userInfo
  dictionary object will contain more detailed explanation that can be shown to the user.</li>
</ul>
</dd>
<dt><a href="#event_signInWithEmailAndPassword">"signInWithEmailAndPassword" (email, password, callback)</a></dt>
<dd><p>Signs in using an email address and password.</p>
<p> Possible error codes:</p>
<ul>
<li><code>OperationNotAllowed</code> - Indicates that email and password
  accounts are not enabled. Enable them in the Auth section of the
  Firebase console.</li>
<li><code>UserDisabled</code> - Indicates the user&#39;s account is disabled.</li>
<li><code>WrongPassword</code> - Indicates the user attempted
  sign in with an incorrect password.</li>
<li><code>InvalidEmail</code> - Indicates the email address is malformed.</li>
</ul>
</dd>
<dt><a href="#event_signInWithCustomToken">"signInWithCustomToken" (token, callback)</a></dt>
<dd><p>Asynchronously signs in to Firebase with the given Auth token.</p>
<p>  Possible error codes:</p>
<ul>
<li><code>InvalidCustomToken</code> - Indicates a validation error with
  the custom token.</li>
<li><code>CustomTokenMismatch</code> - Indicates the service account and the API key
  belong to different projects.</li>
</ul>
</dd>
<dt><a href="#event_signInAnonymously">"signInAnonymously" (callback)</a></dt>
<dd><p>Asynchronously creates and becomes an anonymous user.</p>
<p>  Possible error codes:</p>
<ul>
<li><code>OperationNotAllowed</code> - Indicates that anonymous accounts are
  not enabled. Enable them in the Auth section of the Firebase console.</li>
</ul>
</dd>
<dt><a href="#event_signOut">"signOut"</a></dt>
<dd><p>Signs out the current user.</p>
</dd>
<dt><a href="#event_sendPasswordResetEmail">"sendPasswordResetEmail" (email, callback)</a></dt>
<dd><p>Initiates a password reset for the given email address.</p>
<pre><code> Possible error codes:

  + `OperationNotAllowed` - Indicates the administrator disabled sign
      in with the specified identity provider.
  + `UserNotFound` - Indicates the OOB code is expired.</code></pre></dd>
<dt><a href="#event_verifyPasswordResetCode">"verifyPasswordResetCode" (code, callback)</a></dt>
<dd><p>Checks the validity of a verify password reset code.</p>
<pre><code>  Possible error codes:

  + `OperationNotAllowed` - Indicates the administrator disabled sign
      in with the specified identity provider.
  + `ExpiredActionCode` - Indicates the OOB code is expired.
  + `InvalidActionCode` - Indicates the OOB code is invalid.</code></pre></dd>
<dt><a href="#event_confirmPasswordReset">"confirmPasswordReset" (code, newPassword, callback)</a></dt>
<dd><p>Resets the password given a code sent to the user outside of the app and a new password for the user.</p>
<pre><code>  Possible error codes:

  + `WeakPassword` - Indicates an attempt to set a password that is
       considered too weak.
  + `OperationNotAllowed` - Indicates the administrator disabled sign
      in with the specified identity provider.
  + `ExpiredActionCode` - Indicates the OOB code is expired.
  + `InvalidActionCode` - Indicates the OOB code is invalid.</code></pre></dd>
</dl>

<a name="event_getCurrentUser"></a>

## "getCurrentUser" ⇒ <code>FirebaseUser</code>
Synchronously gets the cached current user, or undefined if there is none

**Kind**: event emitted  
**Android**:   
**Ios**:   
**Since**: 0.1  
<a name="event_useAppLanguage"></a>

## "useAppLanguage"
Sets `languageCode` to the app's current language.

**Kind**: event emitted  
**Ios**:   
**Since**: 0.1  
<a name="event_createUserWithEmailAndPassword"></a>

## "createUserWithEmailAndPassword" (email, password, callback)
Creates and, on success, signs in a user with the given email address and password.

  Possible error codes:
  
  + `InvalidEmail` - Indicates the email address is malformed.
  + `EmailAlreadyInUse` - Indicates the email used to attempt sign up
      already exists. Call fetchProvidersForEmail to check which sign-in mechanisms the user
      used, and prompt the user to sign in with one of those.
  + `OperationNotAllowed` - Indicates that email and password accounts
      are not enabled. Enable them in the Auth section of the Firebase console.
  + `WeakPassword` - Indicates an attempt to set a password that is
      considered too weak. The NSLocalizedFailureReasonErrorKey field in the NSError.userInfo
      dictionary object will contain more detailed explanation that can be shown to the user.

**Kind**: event emitted  
**Android**:   
**Ios**:   
**Since**: 0.1  

| Param | Type |
| --- | --- |
| email | <code>String</code> | 
| password | <code>String</code> | 
| callback | <code>function</code> | 
| callback.FirebaseUser | <code>FirebaseUser</code> | 
| callback.error | <code>Object</code> | 
| callback.error.code | <code>String</code> | 
| callback.error.description | <code>String</code> | 

<a name="event_signInWithEmailAndPassword"></a>

## "signInWithEmailAndPassword" (email, password, callback)
Signs in using an email address and password.

 Possible error codes:

  + `OperationNotAllowed` - Indicates that email and password
      accounts are not enabled. Enable them in the Auth section of the
      Firebase console.
  + `UserDisabled` - Indicates the user's account is disabled.
  + `WrongPassword` - Indicates the user attempted
      sign in with an incorrect password.
  + `InvalidEmail` - Indicates the email address is malformed.

**Kind**: event emitted  
**Android**:   
**Ios**:   
**Since**: 0.1  

| Param | Type |
| --- | --- |
| email | <code>String</code> | 
| password | <code>String</code> | 
| callback | <code>function</code> | 
| callback.FirebaseUser | <code>FirebaseUser</code> | 
| callback.error | <code>Object</code> | 
| callback.error.code | <code>String</code> | 
| callback.error.description | <code>String</code> | 

<a name="event_signInWithCustomToken"></a>

## "signInWithCustomToken" (token, callback)
Asynchronously signs in to Firebase with the given Auth token.

  Possible error codes:

  + `InvalidCustomToken` - Indicates a validation error with
      the custom token.
  + `CustomTokenMismatch` - Indicates the service account and the API key
      belong to different projects.

**Kind**: event emitted  
**Android**:   
**Ios**:   
**Since**: 0.1  

| Param | Type |
| --- | --- |
| token | <code>String</code> | 
| callback | <code>function</code> | 
| callback.FirebaseUser | <code>FirebaseUser</code> | 
| callback.error | <code>Object</code> | 
| callback.error.code | <code>String</code> | 
| callback.error.description | <code>String</code> | 

<a name="event_signInAnonymously"></a>

## "signInAnonymously" (callback)
Asynchronously creates and becomes an anonymous user.

  Possible error codes:

  + `OperationNotAllowed` - Indicates that anonymous accounts are
      not enabled. Enable them in the Auth section of the Firebase console.

**Kind**: event emitted  
**Android**:   
**Ios**:   
**Since**: 0.1  

| Param | Type |
| --- | --- |
| callback | <code>function</code> | 
| callback.FirebaseUser | <code>FirebaseUser</code> | 
| callback.error | <code>Object</code> | 
| callback.error.code | <code>String</code> | 
| callback.error.description | <code>String</code> | 

<a name="event_signOut"></a>

## "signOut"
Signs out the current user.

**Kind**: event emitted  
**Android**:   
**Ios**:   
**Since**: 0.1  
<a name="event_sendPasswordResetEmail"></a>

## "sendPasswordResetEmail" (email, callback)
Initiates a password reset for the given email address.

     Possible error codes:
     
      + `OperationNotAllowed` - Indicates the administrator disabled sign
          in with the specified identity provider.
      + `UserNotFound` - Indicates the OOB code is expired.

**Kind**: event emitted  
**Android**:   
**Ios**:   
**Since**: 0.1  

| Param | Type |
| --- | --- |
| email | <code>String</code> | 
| callback | <code>function</code> | 
| callback.isSuccess | <code>Boolean</code> | 
| callback.error | <code>Object</code> | 
| callback.error.code | <code>String</code> | 
| callback.error.description | <code>String</code> | 

<a name="event_verifyPasswordResetCode"></a>

## "verifyPasswordResetCode" (code, callback)
Checks the validity of a verify password reset code.

      Possible error codes:
     
      + `OperationNotAllowed` - Indicates the administrator disabled sign
          in with the specified identity provider.
      + `ExpiredActionCode` - Indicates the OOB code is expired.
      + `InvalidActionCode` - Indicates the OOB code is invalid.

**Kind**: event emitted  
**Android**:   
**Ios**:   
**Since**: 0.1  

| Param | Type |
| --- | --- |
| code | <code>String</code> | 
| callback | <code>function</code> | 
| callback.email | <code>Boolean</code> | 
| callback.error | <code>Object</code> | 
| callback.error.code | <code>String</code> | 
| callback.error.description | <code>String</code> | 

<a name="event_confirmPasswordReset"></a>

## "confirmPasswordReset" (code, newPassword, callback)
Resets the password given a code sent to the user outside of the app and a new password for the user.

      Possible error codes:
     
      + `WeakPassword` - Indicates an attempt to set a password that is
           considered too weak.
      + `OperationNotAllowed` - Indicates the administrator disabled sign
          in with the specified identity provider.
      + `ExpiredActionCode` - Indicates the OOB code is expired.
      + `InvalidActionCode` - Indicates the OOB code is invalid.

**Kind**: event emitted  
**Android**:   
**Ios**:   
**Since**: 0.1  

| Param | Type |
| --- | --- |
| code | <code>String</code> | 
| newPassword | <code>String</code> | 
| callback | <code>function</code> | 
| callback.email | <code>Boolean</code> | 
| callback.error | <code>Object</code> | 
| callback.error.code | <code>String</code> | 
| callback.error.description | <code>String</code> | 

