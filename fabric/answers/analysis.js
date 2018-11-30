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
function Answers(params){}

/**
 * CustomAttribute for logCustom.
 *
 *     @example
 *      const Answers = require('sf-plugin-fabric/answers');
 *		var attribute1 = new Answers.CustomAttribute("key","value");
 *		var attribute2 = new Answers.CustomAttribute("key",12);
 *
 * @android
 * @ios
 * @static
 * @since 1.0
 */
Answers.CustomAttribute = {key,value};

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
 *
 * @method logCustom
 * @param {String} eventName
 * @param {Array} Answers.CustomAttribute
 * @android
 * @ios
 * @static
 * @since 1.0
 */
Answers.logCustom = function(eventName, customAttributes){}

module.exports = Answers;
