## Events

<dl>
<dt><a href="#event_logEvent">"logEvent" (name, params)</a></dt>
<dd><p>Logs an app event. The event can have up to 25 parameters. Events with the same name must have the same parameters. Up to 500 event names are supported. 
Using predefined events and/or parameters is recommended for optimal reporting.</p>
</dd>
<dt><a href="#event_setUserProperty">"setUserProperty" (name, value)</a></dt>
<dd><p>Sets a user property to a given value. Up to 25 user property names are supported. 
Once set, user property values persist throughout the app lifecycle and across sessions.</p>
</dd>
<dt><a href="#event_setUserId">"setUserId" (id)</a></dt>
<dd><p>Sets the user ID property. This feature must be used in accordance with Google’s Privacy Policy.</p>
</dd>
<dt><a href="#event_setCurrentScreen">"setCurrentScreen" (id)</a></dt>
<dd><p>Sets the current screen name, which specifies the current visual context in your app. 
This helps identify the areas in your app where users spend their time and how they interact with your app. 
Must be called on the main thread.</p>
</dd>
</dl>

<a name="event_logEvent"></a>

## "logEvent" (name, params)
Logs an app event. The event can have up to 25 parameters. Events with the same name must have the same parameters. Up to 500 event names are supported. 
Using predefined events and/or parameters is recommended for optimal reporting.

**Kind**: event emitted  
**Android**:   
**Ios**:   
**Since**: 0.1  

| Param | Type |
| --- | --- |
| name | <code>String</code> | 
| params | <code>FirebaseAnalytics.CustomAttribute</code> | 

<a name="event_setUserProperty"></a>

## "setUserProperty" (name, value)
Sets a user property to a given value. Up to 25 user property names are supported. 
Once set, user property values persist throughout the app lifecycle and across sessions.

**Kind**: event emitted  
**Android**:   
**Ios**:   
**Since**: 0.1  

| Param | Type |
| --- | --- |
| name | <code>String</code> | 
| value | <code>String</code> \| <code>Number</code> | 

<a name="event_setUserId"></a>

## "setUserId" (id)
Sets the user ID property. This feature must be used in accordance with Google’s Privacy Policy.

**Kind**: event emitted  
**Android**:   
**Ios**:   
**Since**: 0.1  

| Param | Type |
| --- | --- |
| id | <code>String</code> | 

<a name="event_setCurrentScreen"></a>

## "setCurrentScreen" (id)
Sets the current screen name, which specifies the current visual context in your app. 
This helps identify the areas in your app where users spend their time and how they interact with your app. 
Must be called on the main thread.

**Kind**: event emitted  
**Android**:   
**Ios**:   
**Since**: 0.1  

| Param | Type |
| --- | --- |
| id | <code>String</code> | 

