const FirebaseAnalyticsEvent = {};

/** 
 * Add Payment Info event. This event signifies that a user has submitted their payment information to your app.
 */
FirebaseAnalyticsEvent.ADD_PAYMENT_INFO = "add_payment_info";

/** 
 * E-Commerce Add To Cart event. This event signifies that an item was added to a cart for purchase. 
 */
FirebaseAnalyticsEvent.ADD_TO_CART = "add_to_cart";

/** 
 * E-Commerce Add To Wishlist event. This event signifies that an item was added to a wishlist. Use this event to identify popular gift items in your app.
 */
FirebaseAnalyticsEvent.ADD_TO_WISHLIST = "add_to_wishlist";

/** 
 * App Open event. By logging this event when an App becomes active, developers can understand how often users leave and return during the course of a Session. 
 * Although Sessions are automatically reported, this event can provide further clarification around the continuous engagement of app-users
 */
FirebaseAnalyticsEvent.APP_OPEN = "app_open";

/** 
 * E-Commerce Begin Checkout event. This event signifies that a user has begun the process of checking out.
 */
FirebaseAnalyticsEvent.BEGIN_CHECKOUT = "begin_checkout";

/** 
 * Campaign Detail event. Log this event to supply the referral details of a re-engagement campaign.
 */
FirebaseAnalyticsEvent.CAMPAIGN_DETAILS = "campaign_details";

/** 
 * E-Commerce Purchase event. This event signifies that an item was purchased by a user.
 */
FirebaseAnalyticsEvent.ECOMMERCE_PURCHASE = "ecommerce_purchase";

/** 
 * Generate Lead event. Log this event when a lead has been generated in the app to understand the efficacy of your install and re-engagement campaigns.
 */
FirebaseAnalyticsEvent.GENERATE_LEAD = "generate_lead";

/** 
 * Join Group event. Log this event when a user joins a group such as a guild, team or family. Use this event to analyze how popular certain groups or social features are in your app.
 */
FirebaseAnalyticsEvent.JOIN_GROUP = "join_group";

/** 
 * Level Up event. This event signifies that a player has leveled up in your gaming app. 
 * It can help you gauge the level distribution of your userbase and help you identify certain levels that are difficult to pass.
 */
FirebaseAnalyticsEvent.LEVEL_UP = "level_up";

/** 
 * Login event. Apps with a login feature can report this event to signify that a user has logged in.
 */
FirebaseAnalyticsEvent.LOGIN = "login";

/** 
 * Post Score event. Log this event when the user posts a score in your gaming app. This event can help you understand how users are actually performing in your game and it can help you correlate high scores with certain audiences or behaviors.
 */
FirebaseAnalyticsEvent.POST_SCORE = "post_score";

/** 
 * Present Offer event. This event signifies that the app has presented a purchase offer to a user.
 */
FirebaseAnalyticsEvent.PRESENT_OFFER = "present_offer";

/** 
 * E-Commerce Purchase Refund event. This event signifies that an item purchase was refunded.
 */
FirebaseAnalyticsEvent.PURCHASE_REFUND = "purchase_refund";

/** 
 * Search event. Apps that support search features can use this event to contextualize search operations by supplying the appropriate, corresponding parameters. 
 * This event can help you identify the most popular content in your app.
 */
FirebaseAnalyticsEvent.SEARCH = "search";

/** 
 * Select Content event. This general purpose event signifies that a user has selected some content of a certain type in an app. The content can be any object in your app. 
 * This event can help you identify popular content and categories of content in your app.
 */
FirebaseAnalyticsEvent.SELECT_CONTENT = "select_content";

/** 
 * Share event. Apps with social features can log the Share event to identify the most viral content.
 */
FirebaseAnalyticsEvent.SHARE = "share";

/** 
 * Sign Up event. This event indicates that a user has signed up for an account in your app. The parameter signifies the method by which the user signed up. 
 * Use this event to understand the different behaviors between logged in and logged out users.
 */
FirebaseAnalyticsEvent.SIGN_UP = "sign_up";

/** 
 * Spend Virtual Currency event. This event tracks the sale of virtual goods in your app and can help you identify which virtual goods are the most popular objects of purchase.
 */
FirebaseAnalyticsEvent.SPEND_VIRTUAL_CURRENCY = "spend_virtual_currency";

/** 
 * Tutorial Begin event. This event signifies the start of the on-boarding process in your app.
 */
FirebaseAnalyticsEvent.TUTORIAL_BEGIN = "tutorial_begin";

/** 
 * Tutorial End event. Use this event to signify the user’s completion of your app’s on-boarding process.
 */
FirebaseAnalyticsEvent.TUTORIAL_COMPLETE = "tutorial_complete";

/** 
 * Unlock Achievement event. Log this event when the user has unlocked an achievement in your game. 
 * Since achievements generally represent the breadth of a gaming experience, this event can help you understand how many users are experiencing all that your game has to offer.
 */
FirebaseAnalyticsEvent.UNLOCK_ACHIEVEMENT = "unlock_achievement";

/** 
 * View Item event. This event signifies that some content was shown to the user. This content may be a product, a webpage or just a simple image or text. Use the appropriate parameters to contextualize the event. 
 * Use this event to discover the most popular items viewed in your app.
 */
FirebaseAnalyticsEvent.VIEW_ITEM = "view_item";

/** 
 * View Item List event. Log this event when the user has been presented with a list of items of a certain category.
 */
FirebaseAnalyticsEvent.VIEW_ITEM_LIST = "view_item_list";

/** 
 * View Search Results event. Log this event when the user has been presented with the results of a search.
 */
FirebaseAnalyticsEvent.VIEW_SEARCH_RESULTS = "view_search_results";

/** 
 * Earn Virtual Currency event. This event tracks the awarding of virtual currency in your app.
 */
FirebaseAnalyticsEvent.EARN_VIRTUAL_CURRENCY = "earn_virtual_currency";

module.exports = Object.freeze(FirebaseAnalyticsEvent);