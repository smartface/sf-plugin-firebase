export = FirebaseAnalyticsParam;

declare namespace FirebaseAnalyticsParam {
    /** 
     * Game achievement ID (String).
     */
    const ACHIEVEMENT_ID: "achievement_id";

    /** 
     * Character used in game (String).
     */
    const CHARACTER: "character";

    /** 
     * Travel class (String).
     */
    const TRAVEL_CLASS: "travel_class";

    /** 
     *  Type of content selected (String).
     */
    const CONTENT_TYPE: "content_type";

    /** 
     * Purchase currency in 3-letter ISO_4217 format (String).
     */
    const CURRENCY: "currency";

    /** 
     * Coupon code for a purchasable item (String).
     */
    const COUPON: "coupon";

    /** 
     * The departure date, check-in date or rental start date for the item. This should be in YYYY-MM-DD format (String).
     */
    const START_DATE: "start_date";

    /** 
     * The arrival date, check-out date or rental end date for the item. This should be in YYYY-MM-DD format (String).
     */
    const END_DATE: "end_date";

    /** 
     * Flight number for travel events (String).
     */
    const FLIGHT_NUMBER: "flight_number";

    /** 
     * Group/clan/guild ID (String).
     */
    const GROUP_ID: "group_id";

    /** 
     * Item category (String).
     */
    const ITEM_CATEGORY: "item_category";

    /** 
     * Item ID (String).
     */
    const ITEM_ID: "item_id";

    /** 
     * The Google Place ID (String) that corresponds to the associated item. Alternatively, you can supply your own custom Location ID.
     */
    const ITEM_LOCATION_ID: "item_location_id";

    /** 
     * Item name (String).
     */
    const ITEM_NAME: "item_name";

    /** 
     * Location (String). The Google Place ID that corresponds to the associated event. Alternatively, you can supply your own custom Location ID.
     */
    const LOCATION: "location";

    /** 
     * Level in game (Number).
     */
    const LEVEL: "level";

    /** 
     * Sign up method (String).
     */
    const SIGN_UP_METHOD: "sign_up_method";

    /** 
     * Number of nights staying at hotel (Number).
     */
    const NUMBER_OF_NIGHTS: "number_of_nights";

    /** 
     * Number of passengers traveling (Number).
     */
    const NUMBER_OF_PASSENGERS: "number_of_passengers";

    /** 
     * Number of rooms for travel events (Number).
     */
    const NUMBER_OF_ROOMS: "number_of_rooms";

    /** 
     * Flight or Travel destination (String).
     */
    const DESTINATION: "destination";

    /** 
     * Flight or Travel origin (String).
     */
    const ORIGIN: "origin";

    /** 
     * Purchase price (Number).
     */
    const PRICE: "price";

    /** 
     * Purchase quantity (Number).
     */
    const QUANTITY: "quantity";

    /** 
     * Score in game (String).
     */
    const SCORE: "score";

    /** 
     * Shipping cost (Number).
     */
    const SHIPPING: "shipping";

    /** 
     * A single ID for a ecommerce group transaction (String).
     */
    const TRANSACTION_ID: "transaction_id";

    /** 
     * The search string/keywords used (String).
     */
    const SEARCH_TERM: "search_term";

    /** 
     * Tax amount (Number).
     */
    const TAX: "tax";

    /** 
     * A context-specific numeric value which is accumulated automatically for each event type. 
     * This is a general purpose parameter that is useful for accumulating a key metric that pertains to an event. 
     * Examples include revenue, distance, time and points. Value should be Number.
     */
    const VALUE: "value";

    /** 
     * Name of virtual currency type (String).
     */
    const VIRTUAL_CURRENCY_NAME: "virtual_currency_name";

    /** 
     * The individual campaign name, slogan, promo code, etc. 
     * Some networks have pre-defined macro to capture campaign information, otherwise can be populated by developer. Highly Recommended (String).
     */
    const CAMPAIGN: "campaign";

    /** 
     * The origin of your traffic, such as an Ad network (for example, google) or partner (urban airship). 
     * Identify the advertiser, site, publication, etc. that is sending traffic to your property. Highly recommended (String).
     */
    const SOURCE: "source";

    /** 
     * The advertising or marketing medium, for example: cpc, banner, email, push. Highly recommended (String).
     */
    const MEDIUM: "medium";

    /** 
     * If you’re manually tagging keyword campaigns, you should use utm_term to specify the keyword (String).
     */
    const TERM: "term";

    /** 
     * Campaign content (String).
     */
    const CONTENT: "content";

    /** 
     * Campaign custom parameter (String). Used as a method of capturing custom data in a campaign. 
     */
    const CP1: "cp1";
}