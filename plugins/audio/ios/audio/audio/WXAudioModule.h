//
//  WXAudioModule.h
//  AFNetworking
//
//  Created by 郑江荣 on 2019/3/4.
//

#import <Foundation/Foundation.h>
#import <WeexSDK/WXEventModuleProtocol.h>
#import <WeexSDK/WXModuleProtocol.h>



@interface WXAudioModule : NSObject <WXModuleProtocol>
@property(nonatomic,strong) NSString*playurl;
@property (nonatomic, weak) NSTimer *timer;
@property(nonatomic) BOOL*loop;
@property(nonatomic) WXModuleKeepAliveCallback onPlaying;
@property(nonatomic) WXModuleKeepAliveCallback onPrepared;
@property(nonatomic) WXModuleKeepAliveCallback onStartPlay;
//@property(nonatomic,strong) AVPlayer *player;



@end


