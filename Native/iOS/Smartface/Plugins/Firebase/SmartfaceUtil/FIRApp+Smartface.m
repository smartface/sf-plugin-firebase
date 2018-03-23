//
//  FIRApp+Smartface.m
//  demo
//
//  Created by Dogan Ekici on 8.03.2018.
//  Copyright © 2018 Smartface. All rights reserved.
//

#import "FIRApp+Smartface.h"

@implementation FIRApp (Smartface)

- (void)deleteAppBridge:(JSValue *)compblock {
    [self deleteApp:^(BOOL success) {
        [compblock callWithArguments:@[@{@"success":[NSNumber numberWithBool:success]}]];
    }];
}

@end
