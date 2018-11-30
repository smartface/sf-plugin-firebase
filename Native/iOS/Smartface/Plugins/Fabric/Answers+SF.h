//
//  Answers+SF.h
//  fabric
//
//  Created by Dogan Ekici on 7.02.2018.
//  Copyright © 2018 Smartface. All rights reserved.
//

#import <Crashlytics/Crashlytics.h>
#import <Foundation/Foundation.h>
#import <JavaScriptCore/JavaScriptCore.h>

@protocol AnswersExport <JSExport, NSObject>
+ (void)logSignUpWithMethod:(nullable NSString *)signUpMethodOrNil
                        success:(nullable NSNumber *)signUpSucceededOrNil
               customAttributes:(nullable ANS_GENERIC_NSDICTIONARY(NSString *, id) *)customAttributesOrNil;
+ (void)logLoginWithMethod:(nullable NSString *)loginMethodOrNil
                       success:(nullable NSNumber *)loginSucceededOrNil
              customAttributes:(nullable ANS_GENERIC_NSDICTIONARY(NSString *, id) *)customAttributesOrNil;
+ (void)logShareWithMethod:(nullable NSString *)shareMethodOrNil
                   contentName:(nullable NSString *)contentNameOrNil
                   contentType:(nullable NSString *)contentTypeOrNil
                     contentId:(nullable NSString *)contentIdOrNil
              customAttributes:(nullable ANS_GENERIC_NSDICTIONARY(NSString *, id) *)customAttributesOrNil;
+ (void)logInviteWithMethod:(nullable NSString *)inviteMethodOrNil
               customAttributes:(nullable ANS_GENERIC_NSDICTIONARY(NSString *, id) *)customAttributesOrNil;
+ (void)logPurchaseWithPrice:(nullable NSDecimalNumber *)itemPriceOrNil
                        currency:(nullable NSString *)currencyOrNil
                         success:(nullable NSNumber *)purchaseSucceededOrNil
                        itemName:(nullable NSString *)itemNameOrNil
                        itemType:(nullable NSString *)itemTypeOrNil
                          itemId:(nullable NSString *)itemIdOrNil
                customAttributes:(nullable ANS_GENERIC_NSDICTIONARY(NSString *, id) *)customAttributesOrNil;
+ (void)logLevelStart:(nullable NSString *)levelNameOrNil
         customAttributes:(nullable ANS_GENERIC_NSDICTIONARY(NSString *, id) *)customAttributesOrNil;
+ (void)logLevelEnd:(nullable NSString *)levelNameOrNil
                  score:(nullable NSNumber *)scoreOrNil
                success:(nullable NSNumber *)levelCompletedSuccesfullyOrNil
       customAttributes:(nullable ANS_GENERIC_NSDICTIONARY(NSString *, id) *)customAttributesOrNil;
+ (void)logAddToCartWithPrice:(nullable NSDecimalNumber *)itemPriceOrNil
                         currency:(nullable NSString *)currencyOrNil
                         itemName:(nullable NSString *)itemNameOrNil
                         itemType:(nullable NSString *)itemTypeOrNil
                           itemId:(nullable NSString *)itemIdOrNil
                 customAttributes:(nullable ANS_GENERIC_NSDICTIONARY(NSString *, id) *)customAttributesOrNil;
+ (void)logStartCheckoutWithPrice:(nullable NSDecimalNumber *)totalPriceOrNil
                             currency:(nullable NSString *)currencyOrNil
                            itemCount:(nullable NSNumber *)itemCountOrNil
                     customAttributes:(nullable ANS_GENERIC_NSDICTIONARY(NSString *, id) *)customAttributesOrNil;
+ (void)logRating:(nullable NSNumber *)ratingOrNil
          contentName:(nullable NSString *)contentNameOrNil
          contentType:(nullable NSString *)contentTypeOrNil
            contentId:(nullable NSString *)contentIdOrNil
     customAttributes:(nullable ANS_GENERIC_NSDICTIONARY(NSString *, id) *)customAttributesOrNil;
+ (void)logContentViewWithName:(nullable NSString *)contentNameOrNil
                       contentType:(nullable NSString *)contentTypeOrNil
                         contentId:(nullable NSString *)contentIdOrNil
                  customAttributes:(nullable ANS_GENERIC_NSDICTIONARY(NSString *, id) *)customAttributesOrNil;
+ (void)logSearchWithQuery:(nullable NSString *)queryOrNil
              customAttributes:(nullable ANS_GENERIC_NSDICTIONARY(NSString *, id) *)customAttributesOrNil;
+ (void)logCustomEventWithName:(NSString *)eventName
              customAttributes:(nullable ANS_GENERIC_NSDICTIONARY(NSString *, id) *)customAttributesOrNil;
@end

@interface Answers (SF)

@end
