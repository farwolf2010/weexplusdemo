package com.farwolf.audio.module;

import android.content.Intent;

import com.farwolf.audio.event.AudioEvent;
import com.farwolf.audio.service.BackService;
import com.farwolf.audio.service.MusicService;
import com.farwolf.weex.annotation.WeexModule;
import com.farwolf.weex.base.WXModuleBase;
import com.farwolf.weex.util.Const;
import com.farwolf.weex.util.Weex;
import com.taobao.weex.annotation.JSMethod;
import com.taobao.weex.bridge.JSCallback;

import org.greenrobot.eventbus.EventBus;
import org.greenrobot.eventbus.Subscribe;
import org.greenrobot.eventbus.ThreadMode;

import java.util.HashMap;
import java.util.Timer;

@WeexModule(name = "audio")
public class WXMusicModule extends WXModuleBase {

    Timer timer;
    boolean compelete;
    JSCallback onPrepared;
    JSCallback onStartPlay;
    JSCallback onPlaying;
    JSCallback onCompletion;
    JSCallback onError;
    JSCallback onSeekComplete;
    JSCallback onBufferingUpdate;
    JSCallback onServiceRecieve;


    public WXMusicModule(){
        if(!EventBus.getDefault().isRegistered(this))
        EventBus.getDefault().register(this);

    }



    @JSMethod
    public void setUrl(HashMap param){

        String url=param.get("url")+"";
        boolean autoplay=Boolean.valueOf(param.get("autoplay")+"");
        if(url.startsWith("root")){
        url=Weex.getRootPath(url,mWXSDKInstance);
        }else if(url.startsWith(Const.PREFIX_SDCARD)){
            url=url.replace(Const.PREFIX_SDCARD,"file://");
        }
        if(MusicService.isRun()){
            MusicService.getService().stop();
        }
        Intent in=new Intent(mWXSDKInstance.getContext(),BackService.class);
        in.putExtra("url",url);
        in.putExtra("autoplay",autoplay);
        mWXSDKInstance.getContext().startService(in);
    }


    @JSMethod
    public void play(){
        MusicService.getService().play();
    }

    @JSMethod
    public void pause(){
        MusicService.getService().pause();
    }

    @JSMethod
    public void stop(){
        MusicService.getService().stop();
    }


    @JSMethod
    public void getUrl(JSCallback callback){
        String  url= MusicService.getService().url;
        if(url.startsWith("file://")){
            url= url.replace("file://",Const.PREFIX_SDCARD);
        }
        HashMap m=new HashMap();
        m.put("url",url);
        callback.invoke(m);
//        return url;
    }

    @JSMethod
    public void seek(final int msec){
        getActivity().runOnUiThread(new Runnable() {
            @Override
            public void run() {
                MusicService.getService().seek(msec);
            }
        });

    }

    @JSMethod(uiThread = false)
    public boolean isPlay(){
        return  MusicService.getService().isPlay();
    }

    @JSMethod
    public void volume(int volume){
        MusicService.getService().volume(volume);
    }


    @JSMethod
    public void loop(boolean loop){
        MusicService.getService().setLoop(loop);
    }


    @JSMethod
    public void setOnPrepared(JSCallback onPrepared) {
        this.onPrepared = onPrepared;

    }
    @JSMethod
    public void setOnStartPlay(JSCallback onPrepared) {
        this.onStartPlay = onPrepared;
    }
    @JSMethod
    public void setOnPlaying(JSCallback onPlay) {
        this.onPlaying = onPlay;
        MusicService.getService().statTimer();


    }

    @JSMethod
    public void setOnCompletion(JSCallback onCompletion) {
        this.onCompletion = onCompletion;

    }

    @JSMethod
    public void setOnError(JSCallback onError) {
        this.onError = onError;

    }

    @JSMethod
    public void setOnSeekComplete(JSCallback onSeekComplete) {
        this.onSeekComplete = onSeekComplete;

    }

    @JSMethod
    public void setOnBufferingUpdate(JSCallback onBufferingUpdate) {
        this.onBufferingUpdate = onBufferingUpdate;

    }


    @Subscribe(threadMode = ThreadMode.MAIN)
    public void onEvent(AudioEvent e)
    {
          if(e.state==AudioEvent.STATE_PREPARED){
              if(this.onPrepared!=null){
                  onPrepared.invokeAndKeepAlive(null);
              }
          }else if(e.state==AudioEvent.STATE_STARTPLAY){
              if(this.onStartPlay!=null){
                  onStartPlay.invokeAndKeepAlive(null);
              }
          }else if(e.state==AudioEvent.STATE_PLAY){
              if(this.onPlaying!=null){
                  HashMap m=new HashMap();
                  m.put("current",e.current);
                  m.put("total",e.total);
                  float p=e.total==0?0:e.current/(float)e.total;
                  m.put("percent",p);
                  onPlaying.invokeAndKeepAlive(m);
              }
          }else if(e.state==AudioEvent.STATE_COMPELETE){
              if(this.onCompletion!=null){
                  onCompletion.invokeAndKeepAlive(null);
              }
          }else if(e.state==AudioEvent.STATE_ERROR){
              if(this.onError!=null){
                  onError.invokeAndKeepAlive(null);
              }
          }else if(e.state==AudioEvent.STATE_SEEK_COMPELETE){
              if(this.onSeekComplete!=null){
                  onSeekComplete.invokeAndKeepAlive(null);
              }
          }else if(e.state==AudioEvent.STATE_BufferingUpdate){
              if(this.onBufferingUpdate!=null){
                  onBufferingUpdate.invokeAndKeepAlive(null);
              }
          }
    }

    @Override
    public void onActivityDestroy() {
        super.onActivityDestroy();
        EventBus.getDefault().unregister(this);
        MusicService.getService().cancelTimer();
    }
}
