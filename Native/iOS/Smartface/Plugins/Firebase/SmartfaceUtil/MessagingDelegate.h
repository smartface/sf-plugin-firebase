//
//  MessagingDelegate.h
//  demo
//
//  Created by Dogan Ekici on 8.03.2018.
//  Copyright © 2018 Smartface. All rights reserved.
//

#import <Foundation/Foundation.h>
#import "Firebase.h"
#import <JavaScriptCore/JavaScriptCore.h>

@interface MessagingDelegate : NSObject <FIRMessagingDelegate>
@property (strong) JSValue * _Nullable messagingDidReceiveRegistrationToken;
@end
