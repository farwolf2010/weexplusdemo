package com.farwolf.audio.event;

public class AudioEvent {

    public AudioEvent(int current, int total, int state) {
        this.current = current;
        this.total = total;
        this.state = state;
    }

    public int current;

    public AudioEvent(int current, int total) {
        this.current = current;
        this.total = total;
    }

    public int total;
    public AudioEvent(int state) {
        this.state = state;
    }

    public int state=0;
    public final static int STATE_PREPARED=0;
    public final static int STATE_STARTPLAY=1;
    public final static int STATE_PLAY=2;
    public final static int STATE_COMPELETE=3;
    public final static int STATE_ERROR=4;
    public final static int STATE_SEEK_COMPELETE=5;
    public final static int STATE_BufferingUpdate=6;




}
