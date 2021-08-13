## Events

<dl>
<dt><a href="#event_onTokenReflesh">"onTokenReflesh"</a></dt>
<dd><p>The FCM token is used to identify this device so that FCM can send notifications to it.
 It is associated with your APNS token when the APNS token is supplied, so that sending
 messages to the FCM token will be delivered over APNS.</p>
<p> The FCM token is sometimes refreshed automatically. <code>onTokenReflesh</code> method will be called once a token is
 available, or has been refreshed. Typically it should be called once per app start, but
 may be called more often, if token is invalidated or updated.</p>
<p> Once you have an FCM token, you should send it to your application server, so it can use
 the FCM token to send notifications to your device.</p>
</dd>
<dt><a href="#event_subscribeToTopic">"subscribeToTopic" (topic)</a></dt>
<dd><p>Asynchronously subscribes to a topic.</p>
</dd>
<dt><a href="#event_unsubscribeFromTopic">"unsubscribeFromTopic" (topic)</a></dt>
<dd><p>Asynchronously unsubscribe from a topic.</p>
</dd>
</dl>

<a name="event_onTokenReflesh"></a>

## "onTokenReflesh"
The FCM token is used to identify this device so that FCM can send notifications to it.
 It is associated with your APNS token when the APNS token is supplied, so that sending
 messages to the FCM token will be delivered over APNS.

 The FCM token is sometimes refreshed automatically. `onTokenReflesh` method will be called once a token is
 available, or has been refreshed. Typically it should be called once per app start, but
 may be called more often, if token is invalidated or updated.

 Once you have an FCM token, you should send it to your application server, so it can use
 the FCM token to send notifications to your device.

**Kind**: event emitted  
**Ios**:   
**Since**: 0.1  
<a name="event_subscribeToTopic"></a>

## "subscribeToTopic" (topic)
Asynchronously subscribes to a topic.

**Kind**: event emitted  
**Android**:   
**Ios**:   
**Since**: 0.1  

| Param | Type |
| --- | --- |
| topic | <code>String</code> | 

<a name="event_unsubscribeFromTopic"></a>

## "unsubscribeFromTopic" (topic)
Asynchronously unsubscribe from a topic.

**Kind**: event emitted  
**Android**:   
**Ios**:   
**Since**: 0.1  

| Param | Type |
| --- | --- |
| topic | <code>String</code> | 

