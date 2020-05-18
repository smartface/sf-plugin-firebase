export = Answers;

/**
 * @class Answers
 * @since 1.0
 * @see https://fabric.io/home
 *
 * With one click, you can enable real-time analytics that help you understand what’s happening in your app. 
 * Fabric provides insights into your core goals, such as growth, retention, and engagement. 
 * Finally, analytics you don’t need to analyze.
 *
 */
declare class Answers {
    /**
     * To log a custom event to be sent to Answers, use the following
     *
     *     @example
     *      const Answers = require('sf-plugin-fabric/answers');
     *		Answers.logCustom('your-event-name', 
                [
                    new Answers.CustomAttribute("key1","value"), 
                    new Answers.CustomAttribute("key2",12)
                ] 
            );
            @since 1.0
    */
    static logCustom(eventName: string, customAttributes: Answers.CustomAttribute[]): void;
}

declare namespace Answers {
    /**
     * CustomAttribute for logCustom.
     *
     *     @example
     *      import Answers = require('sf-plugin-fabric/answers');
     *		const attribute1 = new Answers.CustomAttribute("key","value");
    *		const attribute2 = new Answers.CustomAttribute("key", 12);
    *
    * @since 1.0
    */
    class CustomAttribute {
        constructor(key: String, value: string | number);
        key: string;
        value: string | number;
    }
}