//
//  Crashlytics+SF.h
//  fabric
//
//  Created by Dogan Ekici on 6.02.2018.
//  Copyright © 2018 Smartface. All rights reserved.
//

#import <Foundation/Foundation.h>
#import <JavaScriptCore/JavaScriptCore.h>
#import <Crashlytics/Crashlytics.h>

@protocol CrashlyticsExport <JSExport, NSObject>
@property (nonatomic, readonly, copy) NSString *APIKey;
@property (nonatomic, readonly, copy) NSString *version;
@property (nonatomic, assign)         BOOL      debugMode;
+ (Crashlytics *)startWithAPIKey:(NSString *)apiKey;
+ (Crashlytics *)sharedInstance;
- (void)crash;
- (void)throwException;
+ (Crashlytics *)startWithAPIKey:(NSString *)apiKey delegate:(nullable id<CrashlyticsDelegate>)delegate;
- (void)setUserIdentifier:(nullable NSString *)identifier;
- (void)setUserName:(nullable NSString *)name;
- (void)setUserEmail:(nullable NSString *)email;
- (void)setObjectValue:(nullable id)value forKey:(NSString *)key;
- (void)setIntValue:(int)value forKey:(NSString *)key;
- (void)setBoolValue:(BOOL)value forKey:(NSString *)key;
- (void)setFloatValue:(float)value forKey:(NSString *)key;
- (void)recordError:(NSError *)error;
- (void)recordError:(NSError *)error withAdditionalUserInfo:(nullable CLS_GENERIC_NSDICTIONARY(NSString *, id) *)userInfo;
- (void)recordCustomExceptionName:(NSString *)name reason:(nullable NSString *)reason frameArray:(CLS_GENERIC_NSARRAY(CLSStackFrame *) *)frameArray;
@end

@interface Crashlytics (SF)

@end
