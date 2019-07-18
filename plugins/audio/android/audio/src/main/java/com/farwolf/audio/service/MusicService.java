package com.farwolf.audio.service;

import android.media.MediaPlayer;
import android.net.Uri;
import android.os.Handler;
import android.os.Message;

import com.farwolf.audio.event.AudioEvent;
import com.farwolf.weex.app.WeexApplication;

import org.greenrobot.eventbus.EventBus;

import java.util.Timer;
import java.util.TimerTask;

public class MusicService  {

    public Timer timer;

    public static MediaPlayer mPlayer = null;

    public static MusicService service;

    public String url;




    public static MusicService getService(){
        if(service==null)
            service=new MusicService();
        return service;
    }


    public static boolean isRun(){

        return service!=null;
    }

    public void release(){
        if (mPlayer != null) {
            try {
                mPlayer.stop();
                mPlayer.release();
            } finally {
                mPlayer = null;
            }
        }
    }

    public void setUrl(String url,boolean autoplay){
//       if(this.url!=null&&this.url.equals(url)){
//           return;
//       }
        this.url=url;
        try{
            if (mPlayer != null) {
                release();
            }
            mPlayer=MediaPlayer.create(WeexApplication.getInstance(),Uri.parse(url));
//            mPlayer.setDataSource(url);
//            mPlayer.prepare();
            if(autoplay){
                play();
            }

        }
        catch (Exception e){
            e.printStackTrace();
        }

    }


    public void play(){
        if(url==null){
            return;
        }
        if(mPlayer==null){
            setUrl(url,false);
        }
        setListener();
        statTimer();
        mPlayer.start();
        EventBus.getDefault().post(new AudioEvent(AudioEvent.STATE_STARTPLAY));
    }


//    public void play(String url){
//        if(url!=null&&!url.equals(this.url)){
//            setUrl(url);
//        }
//        if(mPlayer==null){
//            setUrl(url);
//        }
//        setListener();
//        statTimer();
//
//        mPlayer.start();
//
//        EventBus.getDefault().post(new AudioEvent(AudioEvent.STATE_STARTPLAY));
//    }

    public void pause(){
        if(mPlayer!=null){
            mPlayer.pause();
        }
    }


    public void stop(){
        if(mPlayer!=null){
            mPlayer.stop();
            mPlayer.release();
            mPlayer=null;
            this.url=null;
        }
    }

    public void seek(int msec){
        if(mPlayer!=null){
            mPlayer.seekTo(msec);
            mPlayer.start();
        }
    }


    public boolean isPlay() {
        if(mPlayer!=null){
            mPlayer.isPlaying();
        }
        return false;
    }

    public void volume(int vo){
        if(mPlayer!=null){
            mPlayer.setVolume(vo,vo);
        }
    }


    public void setLoop(boolean loop){
        if(mPlayer!=null){
            mPlayer.setLooping(loop);
        }
    }

    public void setListener(){
        if(mPlayer!=null){

            mPlayer.setOnPreparedListener(new MediaPlayer.OnPreparedListener() {
                @Override
                public void onPrepared(MediaPlayer mediaPlayer) {
                    EventBus.getDefault().post(new AudioEvent(AudioEvent.STATE_PREPARED));

                }
            });
            mPlayer.setOnCompletionListener(new MediaPlayer.OnCompletionListener() {
                @Override
                public void onCompletion(MediaPlayer mediaPlayer) {
                    EventBus.getDefault().post(new AudioEvent(AudioEvent.STATE_COMPELETE));
                    cancelTimer();
                }
            });
            mPlayer.setOnErrorListener(new MediaPlayer.OnErrorListener() {
                @Override
                public boolean onError(MediaPlayer mediaPlayer, int i, int i1) {
                    EventBus.getDefault().post(new AudioEvent(AudioEvent.STATE_ERROR));
                    cancelTimer();
                    return false;
                }
            });
            mPlayer.setOnSeekCompleteListener(new MediaPlayer.OnSeekCompleteListener() {
                @Override
                public void onSeekComplete(MediaPlayer mediaPlayer) {
                    EventBus.getDefault().post(new AudioEvent(AudioEvent.STATE_SEEK_COMPELETE));

                }
            });
            mPlayer.setOnBufferingUpdateListener(new MediaPlayer.OnBufferingUpdateListener() {
                @Override
                public void onBufferingUpdate(MediaPlayer mediaPlayer, int i) {
                    EventBus.getDefault().post(new AudioEvent(AudioEvent.STATE_BufferingUpdate));

                }
            });

        }
    }



    Handler handler = new Handler() {
        @Override
        public void handleMessage(Message msg) {
            if (msg.what == 1){
                //do something
                if(mPlayer!=null)
                    EventBus.getDefault().post(new AudioEvent(mPlayer.getCurrentPosition(),mPlayer.getDuration(),AudioEvent.STATE_PLAY));
                else{
                    cancelTimer();
                }
            }
            super.handleMessage(msg);
        }
    };

    //
    public void cancelTimer(){
        if(timer!=null)
            timer.cancel();
        timer=null;
    }

    public void statTimer(){
//        timerTask.scheduledExecutionTime();
        if(timer!=null) {
            timer.cancel();
        }
        timer = new Timer();

        TimerTask timerTask = new TimerTask() {
            @Override
            public void run() {
                Message message = new Message();
                message.what = 1;
                handler.sendMessage(message);
            }
        };
        timer.schedule(timerTask,0,500);
    }
}
