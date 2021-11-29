const FirebaseAnalyticsParam = {};

/** 
 * Game achievement ID (String).
 */
FirebaseAnalyticsParam.ACHIEVEMENT_ID = "achievement_id";

/** 
 * Character used in game (String).
 */
FirebaseAnalyticsParam.CHARACTER = "character";

/** 
 * Travel class (String).
 */
FirebaseAnalyticsParam.TRAVEL_CLASS = "travel_class";

/** 
 *  Type of content selected (String).
 */
FirebaseAnalyticsParam.CONTENT_TYPE = "content_type";

/** 
 * Purchase currency in 3-letter ISO_4217 format (String).
 */
FirebaseAnalyticsParam.CURRENCY = "currency";

/** 
 * Coupon code for a purchasable item (String).
 */
FirebaseAnalyticsParam.COUPON = "coupon";

/** 
 * The departure date, check-in date or rental start date for the item. This should be in YYYY-MM-DD format (String).
 */
FirebaseAnalyticsParam.START_DATE = "start_date";

/** 
 * The arrival date, check-out date or rental end date for the item. This should be in YYYY-MM-DD format (String).
 */
FirebaseAnalyticsParam.END_DATE = "end_date";

/** 
 * Flight number for travel events (String).
 */
FirebaseAnalyticsParam.FLIGHT_NUMBER = "flight_number";

/** 
 * Group/clan/guild ID (String).
 */
FirebaseAnalyticsParam.GROUP_ID = "group_id";

/** 
 * Item category (String).
 */
FirebaseAnalyticsParam.ITEM_CATEGORY = "item_category";

/** 
 * Item ID (String).
 */
FirebaseAnalyticsParam.ITEM_ID = "item_id";

/** 
 * The Google Place ID (String) that corresponds to the associated item. Alternatively, you can supply your own custom Location ID.
 */
FirebaseAnalyticsParam.ITEM_LOCATION_ID = "item_location_id";

/** 
 * Item name (String).
 */
FirebaseAnalyticsParam.ITEM_NAME = "item_name";

/** 
 * Location (String). The Google Place ID that corresponds to the associated event. Alternatively, you can supply your own custom Location ID.
 */
FirebaseAnalyticsParam.LOCATION = "location";

/** 
 * Level in game (Number).
 */
FirebaseAnalyticsParam.LEVEL = "level";

/** 
 * Sign up method (String).
 */
FirebaseAnalyticsParam.SIGN_UP_METHOD = "sign_up_method";

/** 
 * Number of nights staying at hotel (Number).
 */
FirebaseAnalyticsParam.NUMBER_OF_NIGHTS = "number_of_nights";

/** 
 * Number of passengers traveling (Number).
 */
FirebaseAnalyticsParam.NUMBER_OF_PASSENGERS = "number_of_passengers";

/** 
 * Number of rooms for travel events (Number).
 */
FirebaseAnalyticsParam.NUMBER_OF_ROOMS = "number_of_rooms";

/** 
 * Flight or Travel destination (String).
 */
FirebaseAnalyticsParam.DESTINATION = "destination";

/** 
 * Flight or Travel origin (String).
 */
FirebaseAnalyticsParam.ORIGIN = "origin";

/** 
 * Purchase price (Number).
 */
FirebaseAnalyticsParam.PRICE = "price";

/** 
 * Purchase quantity (Number).
 */
FirebaseAnalyticsParam.QUANTITY = "quantity";

/** 
 * Score in game (String).
 */
FirebaseAnalyticsParam.SCORE = "score";

/** 
 * Shipping cost (Number).
 */
FirebaseAnalyticsParam.SHIPPING = "shipping";

/** 
 * A single ID for a ecommerce group transaction (String).
 */
FirebaseAnalyticsParam.TRANSACTION_ID = "transaction_id";

/** 
 * The search string/keywords used (String).
 */
FirebaseAnalyticsParam.SEARCH_TERM = "search_term";

/** 
 * Tax amount (Number).
 */
FirebaseAnalyticsParam.TAX = "tax";

/** 
 * A context-specific numeric value which is accumulated automatically for each event type. 
 * This is a general purpose parameter that is useful for accumulating a key metric that pertains to an event. 
 * Examples include revenue, distance, time and points. Value should be Number.
 */
FirebaseAnalyticsParam.VALUE = "value";

/** 
 * Name of virtual currency type (String).
 */
FirebaseAnalyticsParam.VIRTUAL_CURRENCY_NAME = "virtual_currency_name";

/** 
 * The individual campaign name, slogan, promo code, etc. 
 * Some networks have pre-defined macro to capture campaign information, otherwise can be populated by developer. Highly Recommended (String).
 */
FirebaseAnalyticsParam.CAMPAIGN = "campaign";

/** 
 * The origin of your traffic, such as an Ad network (for example, google) or partner (urban airship). 
 * Identify the advertiser, site, publication, etc. that is sending traffic to your property. Highly recommended (String).
 */
FirebaseAnalyticsParam.SOURCE = "source";

/** 
 * The advertising or marketing medium, for example: cpc, banner, email, push. Highly recommended (String).
 */
FirebaseAnalyticsParam.MEDIUM = "medium";

/** 
 * If you’re manually tagging keyword campaigns, you should use utm_term to specify the keyword (String).
 */
FirebaseAnalyticsParam.TERM = "term";

/** 
 * Campaign content (String).
 */
FirebaseAnalyticsParam.CONTENT = "content";

/** 
 * Campaign custom parameter (String). Used as a method of capturing custom data in a campaign. 
 */
FirebaseAnalyticsParam.CP1 = "cp1";

module.exports = Object.freeze(FirebaseAnalyticsParam);
