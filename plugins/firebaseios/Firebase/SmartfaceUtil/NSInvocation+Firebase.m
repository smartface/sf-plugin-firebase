//
//  NSInvocation+Firebase.m
//  pushtest
//
//  Created by Dogan Ekici on 9.03.2018.
//  Copyright © 2018 Smartface. All rights reserved.
//

#import "NSInvocation+Firebase.h"
#import "Firebase.h"

@implementation NSInvocation (Firebase)

- (void)setFIRAuthResultCallbackArgument:(JSValue *)argument atIndex:(NSInteger)idx{
    void (^block)(id user,id error) = ^(id user,id error){
        [argument callWithArguments:@[@{@"user" : user != nil ? user : [NSNull null],
                                        @"error" : error !=nil ? error : [NSNull null]}]];
    };

    [self setArgument:&block atIndex:idx];
}

- (void)setFIRAuthTokenCallbackArgument:(JSValue *)argument atIndex:(NSInteger)idx{
    void (^block)(NSString *token,id error) = ^(NSString * token,id error){
        [argument callWithArguments:@[@{@"token" : token != nil ? token : [NSNull null],
                                        @"error" : error !=nil ? error : [NSNull null]}]];
    };
    
    [self setArgument:&block atIndex:idx];
}

- (void)setUserProfileChangeCallbackArgument:(JSValue *)argument atIndex:(NSInteger)idx{
    void (^block)(id error) = ^(id error){
        [argument callWithArguments:@[@{@"error" : error !=nil ? error : [NSNull null]}]];
    };
    
    [self setArgument:&block atIndex:idx];
}

- (void)setVerifyPasswordResetCodeCallbackArgument:(JSValue *)argument atIndex:(NSInteger)idx{
    void (^block)(NSString *email,id error) = ^(NSString *email,id error){
        [argument callWithArguments:@[@{@"email" : email != nil ? email : [NSNull null],
                                        @"error" : error !=nil ? error : [NSNull null]}]];
    };
    
    [self setArgument:&block atIndex:idx];
}

@end
