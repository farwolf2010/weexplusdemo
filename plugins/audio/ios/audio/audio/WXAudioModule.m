#import "WXAudioModule.h"
#import <WeexPluginLoader/WeexPluginLoader.h>
#import "audio.h"
#import <FSAudioStream.h>
#import "Weex.h"

WX_PlUGIN_EXPORT_MODULE(audio, WXAudioModule)
@implementation WXAudioModule
@synthesize weexInstance;
WX_EXPORT_METHOD(@selector(play))
WX_EXPORT_METHOD(@selector(pause))
WX_EXPORT_METHOD(@selector(stop))
WX_EXPORT_METHOD(@selector(seek:))
WX_EXPORT_METHOD_SYNC(@selector(isPlay))
WX_EXPORT_METHOD(@selector(getUrl:))
WX_EXPORT_METHOD(@selector(volume:))
WX_EXPORT_METHOD(@selector(loop:))
WX_EXPORT_METHOD(@selector(setOnPrepared:))
WX_EXPORT_METHOD(@selector(setOnPlaying:))
WX_EXPORT_METHOD(@selector(setOnCompletion:))
WX_EXPORT_METHOD(@selector(setOnError:))
WX_EXPORT_METHOD(@selector(setOnStartPlay:))
WX_EXPORT_METHOD(@selector(setUrl:))





-(void)play{
    
    if (![audio sharedManager].isPlaying) {
        [[audio sharedManager] pause];
    }else{
        if(self.playurl!=nil)
        {
            NSString* url=[Weex getFinalUrl:self.playurl weexInstance:weexInstance].absoluteString;
            [[audio sharedManager] playFromURL:[NSURL URLWithString:url]];
        }
        
    }
    
}

-(void)setUrl:(NSMutableDictionary*)param{
    if(self.playurl!=nil){
        [self stop];
        self.playurl=nil;
    }
    NSString* url=param[@"url"];
    self.playurl=url;
    BOOL autoplay= [@"" add: param[@"autoplay"]].boolValue;
    url=[Weex getFinalUrl:url weexInstance:weexInstance].absoluteString;
    
    
    [[audio sharedManager] setUrl:[NSURL URLWithString:url]];
    if(autoplay){
        [[audio sharedManager] play];
    }
    
}

-(void)getUrl:(WXModuleCallback)callback{
    
    dispatch_async(dispatch_get_main_queue(), ^{
        if([audio sharedManager].url==nil){
            callback(@{@"url":@""});
            return;
        }
        NSString *url= [audio sharedManager].url.absoluteString;
        NSString *res=@"";
        if([url startWith:@"file://"]){
            res=[url replace:@"file://" withString:PREFIX_SDCARD];
        }else{
            res=url;
        }
        callback(@{@"url":res});
    });
}


-(void)addListener{
    
    
    __weak typeof (self) weakself=self;
    if( [audio sharedManager].isPlaying){
        _timer = [NSTimer scheduledTimerWithTimeInterval:0.5
                                                  target:weakself
                                                selector:@selector(updateProcess)
                                                userInfo:nil
                                                 repeats:YES];
        [_timer fire];
    }
    [audio sharedManager].onStateChange = ^(FSAudioStreamState state) {
        if(state==kFsAudioStreamPlaying){
            //           [audio sharedManager].currentTimePlayed
            [weakself releaseTimer];
            _timer = [NSTimer scheduledTimerWithTimeInterval:0.5
                                                      target:weakself
                                                    selector:@selector(updateProcess)
                                                    userInfo:nil
                                                     repeats:YES];
            [_timer fire];
            if(weakself.onStartPlay){
                weakself.onStartPlay(@{}, true);
            }
            
        } if(state==kFsAudioStreamPlaybackCompleted){
            if(self.loop){
                [self setUrl:@{@"url":self.playurl,@"autoplay":@(true)}];
                
            }
        }
        
    };
    
    
}

-(void)updateProcess{
    
    if([audio sharedManager].isPlaying){
        
        unsigned current=([audio sharedManager].currentTimePlayed.minute*60+[audio sharedManager].currentTimePlayed.second)*1000;
        unsigned total=([audio sharedManager].duration.minute*60+[audio sharedManager].duration.second)*1000;
        float percent=(float)current/total;
        if(self.onPlaying)
            _onPlaying(@{@"current":@(current),@"total": @(total),@"percent":@(percent)},true);
        
    }
    
}

-(void)pause{
    if ([audio sharedManager].isPlaying) {
        [[audio sharedManager] pause];
    }
}

-(void)stop{
    self.playurl=nil;
    [self releaseTimer];
    [[audio sharedManager] stop];
}

-(void)seek:(float)time{
    
    
    dispatch_async(dispatch_get_main_queue(), ^{
        //    FSStreamPosition position;
        FSStreamPosition pos = {0};
        
        unsigned total=([audio sharedManager].duration.minute*60+[audio sharedManager].duration.second)*1000;
        pos.position = time/total;
        //     position.position = time;
        // 跳转进度
        [[audio sharedManager] seekToPosition:pos];
        [[audio sharedManager] play];
    });
}

-(BOOL)isPlay{
    return [audio sharedManager].isPlaying;
}

-(void)volume:(float)time{
    [audio sharedManager].volume=time;
}

-(void)loop:(BOOL)loop{
    self.loop=loop;
}
-(void)setOnStartPlay:(WXModuleKeepAliveCallback)callback{
    self.onStartPlay=callback;
}
-(void)setOnPrepared:(WXModuleKeepAliveCallback)callback{
    self.onPrepared=callback;
}
-(void)setOnPlaying:(WXModuleKeepAliveCallback)callback{
    _onPlaying=callback;
    [self addListener];
}
-(void)setOnCompletion:(WXModuleKeepAliveCallback)callback{
    
    __weak typeof (self) weakself=self;
    [audio sharedManager].onCompletion = ^{
        weakself.playurl=nil;
        [weakself releaseTimer];
        callback(@{},true);
    };
}

-(void)setOnError:(WXModuleKeepAliveCallback)callback{
    [audio sharedManager].onFailure = ^(FSAudioStreamError error, NSString *errorDescription) {
        callback(@{},true);
    };
}

-(void)releaseTimer{
    if (_timer) {
        if ([_timer isValid]) {
            [_timer invalidate];
            _timer = nil;
        }
    }
}

- (void)dealloc {
    [self releaseTimer];
}

@end
