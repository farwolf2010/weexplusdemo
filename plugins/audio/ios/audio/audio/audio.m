//
//  audio.m
//  audio
//
//  Created by 郑江荣 on 2019/2/25.
//  Copyright © 2019 郑江荣. All rights reserved.
//

#import "audio.h"

@implementation audio
+(FSAudioStream*)sharedManager {
    static dispatch_once_t onceToken;
    static FSAudioStream *instance;
    dispatch_once(&onceToken, ^{
        instance = [[FSAudioStream alloc] init];
        instance.strictContentTypeChecking = NO;
        instance.defaultContentType = @"audio/mpeg";
    });
    return instance;
}
@end
