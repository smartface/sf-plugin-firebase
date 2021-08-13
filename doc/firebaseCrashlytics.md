## Classes

<dl>
<dt><a href="#FirebaseCrashlytics">FirebaseCrashlytics</a></dt>
<dd></dd>
</dl>

<a name="FirebaseCrashlytics"></a>

## FirebaseCrashlytics
**Kind**: global class  
**Since**: 1.0

Spend less time finding and more time fixing crashes. 
Named the #1 performance SDK on both iOS and Android, FirebaseCrashlytics provides deep and actionable insights, even the exact line of code your app crashed on.  
<a name="setUserIdentifier"></a>

## .setUserIdentifier(UserIdentifier)
You can use FirebaseCrashlytics.setUserIdentifier to provide an ID number, token, or hashed value that uniquely identifies the end-user of your application without disclosing or transmitting any of their personal information.

**Kind**: static function  
**Android**:   
**Ios**:   
**Since**: 1.0  

| Param | Type |
| --- | --- |
| UserIdentifier | <code>String</code> | 

**Example**  
```js
import FirebaseCrashlytics from 'sf-plugin-firebase/firebaseCrashlytics';
     FirebaseCrashlytics.setUserIdentifier("UserIdentifier");
```
<a name="setUserName"></a>

## .setUserName(UserName)
If you would like to take advantage of advanced user identifier features, you can setUserName function.

**Kind**: static function  
**Ios**:   
**Since**: 1.0  

| Param | Type |
| --- | --- |
| UserName | <code>String</code> | 

**Example**  
```js
import FirebaseCrashlytics from 'sf-plugin-firebase/firebaseCrashlytics';
     FirebaseCrashlytics.ios.setUserName("UserName");
```
<a name="setUserEmail"></a>

## .setUserEmail(UserEmail)
If you would like to take advantage of advanced user identifier features, you can setUserEmail function.

**Kind**: static function  
**Ios**:   
**Since**: 1.0  

| Param | Type |
| --- | --- |
| UserEmail | <code>String</code> | 

**Example**  
```js
import FirebaseCrashlytics from 'sf-plugin-firebase/firebaseCrashlytics';
     FirebaseCrashlytics.ios.setUserEmail("UserEmail");
```
<a name="setString"></a>

## .setString(key, value)
Custom keys help you get the specific state of your app leading up to a crash. You can associate arbitrary key/value pairs with your crash reports, then use the custom keys to search and filter crash reports in the Firebase console.
Setting keys are as easy as calling: FirebaseCrashlytics.setString(key, value).

**Kind**: static function  
**Android**:   
**Ios**:   
**Since**: 1.0  

| Param | Type |
| --- | --- |
| key | <code>String</code> | 
| value | <code>String</code> | 

**Example**  
```js
import FirebaseCrashlytics from 'sf-plugin-firebase/firebaseCrashlytics';
     FirebaseCrashlytics.setString("key","value");
```
<a name="setBool"></a>

## .setBool(key, value)
Custom keys help you get the specific state of your app leading up to a crash. You can associate arbitrary key/value pairs with your crash reports, then use the custom keys to search and filter crash reports in the Firebase console.
Setting keys are as easy as calling: FirebaseCrashlytics.setBool(key, value).

**Kind**: static function  
**Android**:   
**Ios**:   
**Since**: 1.0  

| Param | Type |
| --- | --- |
| key | <code>String</code> | 
| value | <code>boolean</code> | 

**Example**  
```js
import FirebaseCrashlytics from 'sf-plugin-firebase/firebaseCrashlytics';
     FirebaseCrashlytics.setBool("key",true);
```
<a name="setFloat"></a>

## .setFloat(key, value)
Custom keys help you get the specific state of your app leading up to a crash. You can associate arbitrary key/value pairs with your crash reports, then use the custom keys to search and filter crash reports in the Firebase console.
Setting keys are as easy as calling: FirebaseCrashlytics.setFloat(key, value).

**Kind**: static function  
**Android**:   
**Ios**:   
**Since**: 1.0  

| Param | Type |
| --- | --- |
| key | <code>String</code> | 
| value | <code>number</code> | 

**Example**  
```js
import FirebaseCrashlytics from 'sf-plugin-firebase/firebaseCrashlytics';
     FirebaseCrashlytics.setFloat("key",true);
```
<a name="setInt"></a>

## .setInt(key, value)
Custom keys help you get the specific state of your app leading up to a crash. You can associate arbitrary key/value pairs with your crash reports, then use the custom keys to search and filter crash reports in the Firebase console.
Setting keys are as easy as calling: FirebaseCrashlytics.setInt(key, value).

**Kind**: static function  
**Android**:   
**Ios**:   
**Since**: 1.0  

| Param | Type |
| --- | --- |
| key | <code>String</code> | 
| value | <code>number</code> | 

**Example**  
```js
import FirebaseCrashlytics from 'sf-plugin-firebase/firebaseCrashlytics';
     FirebaseCrashlytics.setInt("key",true);
```
<a name="getVersion"></a>

## .getVersion()
Crashlytics version. In Android, always returns 0.

**Kind**: static function  
**Ios**:   
**Since**: 1.0  
**Example**  
```js
import FirebaseCrashlytics from 'sf-plugin-firebase/firebaseCrashlytics';
     FirebaseCrashlytics.ios.getVersion();
```
<a name="with"></a>

## .with(kits)
Initialize FirebaseCrashlytics and all provided kits.Only the first call to this method is honored. Subsequent calls are no-ops.
Call this method within your `app.js` and provide the kits you wish to use.

**Kind**: static function  
**Ios**:   
**Since**: 1.0  

| Param | Type |
| --- | --- |
| kits | <code>Array</code> | 

**Example**  
```js
import FirebaseCrashlytics from 'sf-plugin-firebase/firebaseCrashlytics';
     FirebaseCrashlytics.ios.with([new FirebaseCrashlytics()]);
```
