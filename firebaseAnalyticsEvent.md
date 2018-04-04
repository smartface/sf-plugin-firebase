<a name="FirebaseAnalyticsEvent"></a>

## FirebaseAnalyticsEvent : <code>enum</code>
Predefined firebase events

**Kind**: global enum  
**Read only**: true  
**Properties**

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| ADD_PAYMENT_INFO | <code>string</code> | <code>&quot;add_payment_info&quot;</code> | Add Payment Info event. This event signifies that a user has submitted their payment information to your app. |
| ADD_TO_CART | <code>string</code> | <code>&quot;add_to_cart&quot;</code> | E-Commerce Add To Cart event. This event signifies that an item was added to a cart for purchase. <br /> **params** - FirebaseAnalytics.Param.ITEM_ID (String) - FirebaseAnalytics.Param.ITEM_NAME (String) - FirebaseAnalytics.Param.ITEM_CATEGORY (String) - FirebaseAnalytics.Param.QUANTITY (Number) - FirebaseAnalytics.Param.PRICE (Number)  - FirebaseAnalytics.Param.VALUE (Number)  - FirebaseAnalytics.Param.CURRENCY (String)  - FirebaseAnalytics.Param.ORIGIN (String)  - FirebaseAnalytics.Param.ITEM_LOCATION_ID (String)  - FirebaseAnalytics.Param.DESTINATION (String)  - FirebaseAnalytics.Param.START_DATE (String)  - FirebaseAnalytics.Param.END_DATE (String) |
| ADD_TO_WISHLIST | <code>string</code> | <code>&quot;add_to_wishlist&quot;</code> | E-Commerce Add To Wishlist event. This event signifies that an item was added to a wishlist. Use this event to identify popular gift items in your app. |
| APP_OPEN | <code>string</code> | <code>&quot;app_open&quot;</code> | App Open event. By logging this event when an App becomes active, developers can understand how often users leave and return during the course of a Session. Although Sessions are automatically reported, this event can provide further clarification around the continuous engagement of app-users |
| BEGIN_CHECKOUT | <code>string</code> | <code>&quot;begin_checkout&quot;</code> | E-Commerce Begin Checkout event. This event signifies that a user has begun the process of checking out. |
| CAMPAIGN_DETAILS | <code>string</code> | <code>&quot;campaign_details&quot;</code> | Campaign Detail event. Log this event to supply the referral details of a re-engagement campaign. |
| ECOMMERCE_PURCHASE | <code>string</code> | <code>&quot;ecommerce_purchase&quot;</code> | E-Commerce Purchase event. This event signifies that an item was purchased by a user. |
| GENERATE_LEAD | <code>string</code> | <code>&quot;generate_lead&quot;</code> | Generate Lead event. Log this event when a lead has been generated in the app to understand the efficacy of your install and re-engagement campaigns. |
| JOIN_GROUP | <code>string</code> | <code>&quot;join_group&quot;</code> | Join Group event. Log this event when a user joins a group such as a guild, team or family. Use this event to analyze how popular certain groups or social features are in your app. |
| LEVEL_UP | <code>string</code> | <code>&quot;level_up&quot;</code> | Level Up event. This event signifies that a player has leveled up in your gaming app. It can help you gauge the level distribution of your userbase and help you identify certain levels that are difficult to pass. |
| LOGIN | <code>string</code> | <code>&quot;login&quot;</code> | Login event. Apps with a login feature can report this event to signify that a user has logged in. |
| POST_SCORE | <code>string</code> | <code>&quot;post_score&quot;</code> | Post Score event. Log this event when the user posts a score in your gaming app. This event can help you understand how users are actually performing in your game and it can help you correlate high scores with certain audiences or behaviors. |
| PRESENT_OFFER | <code>string</code> | <code>&quot;present_offer&quot;</code> | Present Offer event. This event signifies that the app has presented a purchase offer to a user. |
| PURCHASE_REFUND | <code>string</code> | <code>&quot;purchase_refund&quot;</code> | E-Commerce Purchase Refund event. This event signifies that an item purchase was refunded. |
| SEARCH | <code>string</code> | <code>&quot;search&quot;</code> | Search event. Apps that support search features can use this event to contextualize search operations by supplying the appropriate, corresponding parameters. This event can help you identify the most popular content in your app. |
| SELECT_CONTENT | <code>string</code> | <code>&quot;select_content&quot;</code> | Select Content event. This general purpose event signifies that a user has selected some content of a certain type in an app. The content can be any object in your app. This event can help you identify popular content and categories of content in your app. |
| SHARE | <code>string</code> | <code>&quot;share&quot;</code> | Share event. Apps with social features can log the Share event to identify the most viral content. |
| SIGN_UP | <code>string</code> | <code>&quot;sign_up&quot;</code> | Sign Up event. This event indicates that a user has signed up for an account in your app. The parameter signifies the method by which the user signed up. Use this event to understand the different behaviors between logged in and logged out users. |
| SPEND_VIRTUAL_CURRENCY | <code>string</code> | <code>&quot;spend_virtual_currency&quot;</code> | Spend Virtual Currency event. This event tracks the sale of virtual goods in your app and can help you identify which virtual goods are the most popular objects of purchase. |
| TUTORIAL_BEGIN | <code>string</code> | <code>&quot;tutorial_begin&quot;</code> | Tutorial Begin event. This event signifies the start of the on-boarding process in your app. |
| TUTORIAL_COMPLETE | <code>string</code> | <code>&quot;tutorial_complete&quot;</code> | Tutorial End event. Use this event to signify the user’s completion of your app’s on-boarding process. |
| UNLOCK_ACHIEVEMENT | <code>string</code> | <code>&quot;unlock_achievement&quot;</code> | Unlock Achievement event. Log this event when the user has unlocked an achievement in your game. Since achievements generally represent the breadth of a gaming experience, this event can help you understand how many users are experiencing all that your game has to offer. |
| VIEW_ITEM | <code>string</code> | <code>&quot;view_item&quot;</code> | View Item event. This event signifies that some content was shown to the user. This content may be a product, a webpage or just a simple image or text. Use the appropriate parameters to contextualize the event. Use this event to discover the most popular items viewed in your app. |
| VIEW_ITEM_LIST | <code>string</code> | <code>&quot;view_item_list&quot;</code> | View Item List event. Log this event when the user has been presented with a list of items of a certain category. |
| VIEW_SEARCH_RESULTS | <code>string</code> | <code>&quot;view_search_results&quot;</code> | View Search Results event. Log this event when the user has been presented with the results of a search. |
| EARN_VIRTUAL_CURRENCY | <code>string</code> | <code>&quot;earn_virtual_currency&quot;</code> | Earn Virtual Currency event. This event tracks the awarding of virtual currency in your app. |

