## Events

<dl>
<dt><a href="#event_getEmail">"getEmail"</a></dt>
<dd><p>Returns the main email address of the user, as stored in the Firebase project&#39;s user database.</p>
</dd>
<dt><a href="#event_getDisplayName">"getDisplayName"</a></dt>
<dd><p>Returns the main display name of this user from the Firebase project&#39;s user database.</p>
</dd>
<dt><a href="#event_getDisplayName">"getDisplayName"</a></dt>
<dd><p>Returns a string used to uniquely identify your user in your Firebase project&#39;s user database.</p>
</dd>
<dt><a href="#event_isAnonymous">"isAnonymous"</a></dt>
<dd><p>Returns true if the user is anonymous.</p>
</dd>
<dt><a href="#event_getIdToken">"getIdToken" (forceRefresh, callback)</a></dt>
<dd><p>Returns true if the user is anonymous.</p>
</dd>
<dt><a href="#event_setDisplayName">"setDisplayName" (displayName, callback)</a></dt>
<dd><p>Set displayName.</p>
</dd>
<dt><a href="#event_setPhotoURL">"setPhotoURL" (photoURL, callback)</a></dt>
<dd><p>Set photoURL.</p>
</dd>
<dt><a href="#event_getPhotosURL">"getPhotosURL"</a></dt>
<dd><p>Returns the URL of this user&#39;s main profile picture, as stored in the Firebase project&#39;s user database.</p>
</dd>
<dt><a href="#event_delete">"delete" (callback)</a></dt>
<dd><p>Deletes the user record from your Firebase project&#39;s database. 
If the operation is successful, the user will be signed out.</p>
<p> Possible error code;
     <code>RequiresRecentLogin</code> - Updating email is a security sensitive
            operation that requires a recent login from the user. This error indicates the user
            has not signed in recently enough.</p>
</dd>
<dt><a href="#event_reload">"reload" (callback)</a></dt>
<dd><p>Reloads the user’s profile data from the server.</p>
<p> Possible error code;
     <code>RequiresRecentLogin</code> - Updating email is a security sensitive
            operation that requires a recent login from the user. This error indicates the user
            has not signed in recently enough.</p>
</dd>
<dt><a href="#event_sendEmailVerification">"sendEmailVerification" (callback)</a></dt>
<dd><p>Initiates email verification for the user.</p>
<p> Possible error code;</p>
<ul>
<li><code>UserNotFound</code> - Indicates the user account was not found.</li>
<li><code>UserDisabled</code></li>
<li><code>InvalidUserToken</code></li>
<li><code>UserTokenExpired</code></li>
</ul>
</dd>
<dt><a href="#event_isEmailVerified">"isEmailVerified"</a> ⇒ <code>Boolean</code></dt>
<dd><p>Indicates the email address associated with this user has been verified.</p>
</dd>
<dt><a href="#event_reauthenticate">"reauthenticate" (email, password, callback)</a></dt>
<dd><p>Reauthenticate.</p>
<p> Possible error code;</p>
<ul>
<li><code>OperationNotAllowed</code></li>
<li><code>UserDisabled</code></li>
<li><code>WrongPassword</code></li>
<li><code>UserMismatch</code></li>
<li><code>InvalidEmail</code></li>
</ul>
</dd>
<dt><a href="#event_updateEmail">"updateEmail" (email, callback)</a></dt>
<dd><p>Update email.</p>
<p> Possible error code;</p>
<ul>
<li><code>EmailAlreadyInUse</code></li>
<li><code>InvalidEmail</code></li>
<li><code>RequiresRecentLogin</code></li>
</ul>
</dd>
<dt><a href="#event_updatePassword">"updatePassword" (password, callback)</a></dt>
<dd><p>Update password.</p>
<p> Possible error code;</p>
<ul>
<li><code>OperationNotAllowed</code></li>
<li><code>WeakPassword</code></li>
<li><code>RequiresRecentLogin</code></li>
</ul>
</dd>
</dl>

<a name="event_getEmail"></a>

## "getEmail"
Returns the main email address of the user, as stored in the Firebase project's user database.

**Kind**: event emitted  
**Android**:   
**Ios**:   
**Since**: 0.1  
<a name="event_getDisplayName"></a>

## "getDisplayName"
Returns the main display name of this user from the Firebase project's user database.

**Kind**: event emitted  
**Android**:   
**Ios**:   
**Since**: 0.1  
<a name="event_getDisplayName"></a>

## "getDisplayName"
Returns a string used to uniquely identify your user in your Firebase project's user database.

**Kind**: event emitted  
**Android**:   
**Ios**:   
**Since**: 0.1  
<a name="event_isAnonymous"></a>

## "isAnonymous"
Returns true if the user is anonymous.

**Kind**: event emitted  
**Android**:   
**Ios**:   
**Since**: 0.1  
<a name="event_getIdToken"></a>

## "getIdToken" (forceRefresh, callback)
Returns true if the user is anonymous.

**Kind**: event emitted  
**Android**:   
**Ios**:   
**Since**: 0.1  

| Param | Type |
| --- | --- |
| forceRefresh | <code>Boolean</code> | 
| callback | <code>function</code> | 
| callback.token | <code>String</code> | 
| callback.error | <code>String</code> | 

<a name="event_setDisplayName"></a>

## "setDisplayName" (displayName, callback)
Set displayName.

**Kind**: event emitted  
**Android**:   
**Ios**:   
**Since**: 0.1  

| Param | Type |
| --- | --- |
| displayName | <code>String</code> | 
| callback | <code>function</code> | 
| callback.token | <code>String</code> | 
| callback.error | <code>String</code> | 

<a name="event_setPhotoURL"></a>

## "setPhotoURL" (photoURL, callback)
Set photoURL.

**Kind**: event emitted  
**Android**:   
**Ios**:   
**Since**: 0.1  

| Param | Type |
| --- | --- |
| photoURL | <code>String</code> | 
| callback | <code>function</code> | 
| callback.token | <code>String</code> | 
| callback.error | <code>String</code> | 

<a name="event_getPhotosURL"></a>

## "getPhotosURL"
Returns the URL of this user's main profile picture, as stored in the Firebase project's user database.

**Kind**: event emitted  
**Android**:   
**Ios**:   
**Since**: 0.1  
<a name="event_delete"></a>

## "delete" (callback)
Deletes the user record from your Firebase project's database. 
If the operation is successful, the user will be signed out.

 Possible error code;
     `RequiresRecentLogin` - Updating email is a security sensitive
            operation that requires a recent login from the user. This error indicates the user
            has not signed in recently enough.

**Kind**: event emitted  
**Android**:   
**Ios**:   
**Since**: 0.1  

| Param | Type |
| --- | --- |
| callback | <code>function</code> | 
| callback.isSuccess | <code>Boolean</code> | 
| callback.error | <code>Object</code> | 
| callback.error.code | <code>String</code> | 
| callback.error.description | <code>String</code> | 

<a name="event_reload"></a>

## "reload" (callback)
Reloads the user’s profile data from the server.

 Possible error code;
     `RequiresRecentLogin` - Updating email is a security sensitive
            operation that requires a recent login from the user. This error indicates the user
            has not signed in recently enough.

**Kind**: event emitted  
**Android**:   
**Ios**:   
**Since**: 0.1  

| Param | Type |
| --- | --- |
| callback | <code>function</code> | 
| callback.isSuccess | <code>Boolean</code> | 
| callback.error | <code>Object</code> | 
| callback.error.code | <code>String</code> | 
| callback.error.description | <code>String</code> | 

<a name="event_sendEmailVerification"></a>

## "sendEmailVerification" (callback)
Initiates email verification for the user.

 Possible error code;
  + `UserNotFound` - Indicates the user account was not found.
  + `UserDisabled`
  + `InvalidUserToken`
  + `UserTokenExpired`

**Kind**: event emitted  
**Android**:   
**Ios**:   
**Since**: 0.1  

| Param | Type |
| --- | --- |
| callback | <code>function</code> | 
| callback.isSuccess | <code>Boolean</code> | 
| callback.error | <code>Object</code> | 
| callback.error.code | <code>String</code> | 
| callback.error.description | <code>String</code> | 

<a name="event_isEmailVerified"></a>

## "isEmailVerified" ⇒ <code>Boolean</code>
Indicates the email address associated with this user has been verified.

**Kind**: event emitted  
**Returns**: <code>Boolean</code> - verified  
**Android**:   
**Ios**:   
**Since**: 0.1  
<a name="event_reauthenticate"></a>

## "reauthenticate" (email, password, callback)
Reauthenticate.

 Possible error code;
  + `OperationNotAllowed`
  + `UserDisabled`
  + `WrongPassword`
  + `UserMismatch`
  + `InvalidEmail`

**Kind**: event emitted  
**Android**:   
**Ios**:   
**Since**: 0.1  

| Param | Type |
| --- | --- |
| email | <code>String</code> | 
| password | <code>String</code> | 
| callback | <code>function</code> | 
| callback.isSuccess | <code>Boolean</code> | 
| callback.error | <code>Object</code> | 
| callback.error.code | <code>String</code> | 
| callback.error.description | <code>String</code> | 

<a name="event_updateEmail"></a>

## "updateEmail" (email, callback)
Update email.

 Possible error code;
  + `EmailAlreadyInUse`
  + `InvalidEmail`
  + `RequiresRecentLogin`

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

<a name="event_updatePassword"></a>

## "updatePassword" (password, callback)
Update password.

 Possible error code;
  + `OperationNotAllowed`
  + `WeakPassword`
  + `RequiresRecentLogin`

**Kind**: event emitted  
**Android**:   
**Ios**:   
**Since**: 0.1  

| Param | Type |
| --- | --- |
| password | <code>String</code> | 
| callback | <code>function</code> | 
| callback.isSuccess | <code>Boolean</code> | 
| callback.error | <code>Object</code> | 
| callback.error.code | <code>String</code> | 
| callback.error.description | <code>String</code> | 

