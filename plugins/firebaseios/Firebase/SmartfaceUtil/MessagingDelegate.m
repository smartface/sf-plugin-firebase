//
//  MessagingDelegate.m
//  demo
//
//  Created by Dogan Ekici on 8.03.2018.
//  Copyright © 2018 Smartface. All rights reserved.
//

#import "MessagingDelegate.h"

@implementation MessagingDelegate

-(void)messaging:(FIRMessaging *)messaging didReceiveRegistrationToken:(NSString *)fcmToken{
    [self.messagingDidReceiveRegistrationToken callWithArguments:@[@{@"messaging":messaging,@"fcmToken":fcmToken}]];
}

@end
