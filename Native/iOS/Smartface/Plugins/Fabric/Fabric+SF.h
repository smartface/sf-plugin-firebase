//
//  Fabric+Fabric_SF.h
//  fabric
//
//  Created by Dogan Ekici on 6.02.2018.
//  Copyright © 2018 Smartface. All rights reserved.
//

#import <Foundation/Foundation.h>
#import <JavaScriptCore/JavaScriptCore.h>
#import <Fabric/Fabric.h>

@protocol FabricExport <JSExport, NSObject>
+ (instancetype)with:(NSArray *)kitClasses;
+ (instancetype)sharedSDK;
+ (instancetype)withStringArray:(NSArray *)array;
@property (nonatomic, assign) BOOL debug;
@end

@interface Fabric (SF)
+ (instancetype)withStringArray:(NSArray *)array;
@end
