enum FirebaseAnalyticsParam {
    /**
     * Game achievement ID (String).
     */
    ACHIEVEMENT_ID = 'achievement_id',

    /**
     * Character used in game (String).
     */
    CHARACTER = 'character',

    /**
     * Travel class (String).
     */
    TRAVEL_CLASS = 'travel_class',

    /**
     *  Type of content selected (String).
     */
    CONTENT_TYPE = 'content_type',

    /**
     * Purchase currency in 3-letter ISO_4217 format (String).
     */
    CURRENCY = 'currency',

    /**
     * Coupon code for a purchasable item (String).
     */
    COUPON = 'coupon',

    /**
     * The departure date, check-in date or rental start date for the item. This should be in YYYY-MM-DD format (String).
     */
    START_DATE = 'start_date',

    /**
     * The arrival date, check-out date or rental end date for the item. This should be in YYYY-MM-DD format (String).
     */
    END_DATE = 'end_date',

    /**
     * Flight number for travel events (String).
     */
    FLIGHT_NUMBER = 'flight_number',

    /**
     * Group/clan/guild ID (String).
     */
    GROUP_ID = 'group_id',

    /**
     * Item category (String).
     */
    ITEM_CATEGORY = 'item_category',

    /**
     * Item ID (String).
     */
    ITEM_ID = 'item_id',

    /**
     * The Google Place ID (String) that corresponds to the associated item. Alternatively, you can supply your own custom Location ID.
     */
    ITEM_LOCATION_ID = 'item_location_id',

    /**
     * Item name (String).
     */
    ITEM_NAME = 'item_name',

    /**
     * Location (String). The Google Place ID that corresponds to the associated event. Alternatively, you can supply your own custom Location ID.
     */
    LOCATION = 'location',

    /**
     * Level in game (Number).
     */
    LEVEL = 'level',

    /**
     * Sign up method (String).
     */
    SIGN_UP_METHOD = 'sign_up_method',

    /**
     * Number of nights staying at hotel (Number).
     */
    NUMBER_OF_NIGHTS = 'number_of_nights',

    /**
     * Number of passengers traveling (Number).
     */
    NUMBER_OF_PASSENGERS = 'number_of_passengers',

    /**
     * Number of rooms for travel events (Number).
     */
    NUMBER_OF_ROOMS = 'number_of_rooms',

    /**
     * Flight or Travel destination (String).
     */
    DESTINATION = 'destination',

    /**
     * Flight or Travel origin (String).
     */
    ORIGIN = 'origin',

    /**
     * Purchase price (Number).
     */
    PRICE = 'price',

    /**
     * Purchase quantity (Number).
     */
    QUANTITY = 'quantity',

    /**
     * Score in game (String).
     */
    SCORE = 'score',

    /**
     * Shipping cost (Number).
     */
    SHIPPING = 'shipping',

    /**
     * A single ID for a ecommerce group transaction (String).
     */
    TRANSACTION_ID = 'transaction_id',

    /**
     * The search string/keywords used (String).
     */
    SEARCH_TERM = 'search_term',

    /**
     * Tax amount (Number).
     */
    TAX = 'tax',

    /**
     * A context-specific numeric value which is accumulated automatically for each event type.
     * This is a general purpose parameter that is useful for accumulating a key metric that pertains to an event.
     * Examples include revenue, distance, time and points. Value should be Number.
     */
    VALUE = 'value',

    /**
     * Name of virtual currency type (String).
     */
    VIRTUAL_CURRENCY_NAME = 'virtual_currency_name',

    /**
     * The individual campaign name, slogan, promo code, etc.
     * Some networks have pre-defined macro to capture campaign information, otherwise can be populated by developer. Highly Recommended (String).
     */
    CAMPAIGN = 'campaign',

    /**
     * The origin of your traffic, such as an Ad network (for example, google) or partner (urban airship).
     * Identify the advertiser, site, publication, etc. that is sending traffic to your property. Highly recommended (String).
     */
    SOURCE = 'source',

    /**
     * The advertising or marketing medium, for example: cpc, banner, email, push. Highly recommended (String).
     */
    MEDIUM = 'medium',

    /**
     * If you’re manually tagging keyword campaigns, you should use utm_term to specify the keyword (String).
     */
    TERM = 'term',

    /**
     * Campaign content (String).
     */
    CONTENT = 'content',

    /**
     * Campaign custom parameter (String). Used as a method of capturing custom data in a campaign.
     */
    CP1 = 'cp1'
}

export default FirebaseAnalyticsParam;
