//
//  FIRApp+Smartface.h
//  demo
//
//  Created by Dogan Ekici on 8.03.2018.
//  Copyright © 2018 Smartface. All rights reserved.
//

#import <FirebaseCore/FirebaseCore.h>
#import <JavaScriptCore/JavaScriptCore.h>

@interface FIRApp (Smartface)

- (void)deleteAppBridge:(JSValue *)compblock;

@end
