//
//  Fabric+Fabric_SF.m
//  fabric
//
//  Created by Dogan Ekici on 6.02.2018.
//  Copyright © 2018 Smartface. All rights reserved.
//


#import "Fabric+SF.h"
#import <Crashlytics/Crashlytics.h>

@implementation Fabric (SF)

+ (instancetype)withStringArray:(NSArray *)array{
    NSMutableArray *classArray = [[NSMutableArray alloc] init];
    for (NSString *string in array)
    {
        Class class = NSClassFromString(string);
        if (class != nil){
          [classArray addObject:[class class]];
        }
    }
    
    return [Fabric with:classArray];
}
    
@end
