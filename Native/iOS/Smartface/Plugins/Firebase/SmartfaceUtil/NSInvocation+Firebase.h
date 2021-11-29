//
//  NSInvocation+Firebase.h
//  pushtest
//
//  Created by Dogan Ekici on 9.03.2018.
//  Copyright © 2018 Smartface. All rights reserved.
//

#import <Foundation/Foundation.h>
#import <JavaScriptCore/JavaScriptCore.h>

@protocol NSInvocationFirebaseExport <JSExport, NSObject>

- (void)setFIRAuthResultCallbackArgument:(JSValue *)argument atIndex:(NSInteger)idx;
- (void)setFIRAuthTokenCallbackArgument:(JSValue *)argument atIndex:(NSInteger)idx;
- (void)setUserProfileChangeCallbackArgument:(JSValue *)argument atIndex:(NSInteger)idx;
- (void)setVerifyPasswordResetCodeCallbackArgument:(JSValue *)argument atIndex:(NSInteger)idx;

@end

@interface NSInvocation (Firebase) <NSInvocationFirebaseExport>

- (void)setFIRAuthResultCallbackArgument:(JSValue *)argument atIndex:(NSInteger)idx;
- (void)setFIRAuthTokenCallbackArgument:(JSValue *)argument atIndex:(NSInteger)idx;
- (void)setUserProfileChangeCallbackArgument:(JSValue *)argument atIndex:(NSInteger)idx;
- (void)setVerifyPasswordResetCodeCallbackArgument:(JSValue *)argument atIndex:(NSInteger)idx;

@end
