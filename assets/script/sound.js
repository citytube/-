

cc.Class({
    extends: cc.Component,

    properties: {

        button_sound:cc.AudioClip,
        // bgm:{
        //     type:cc.AudioClip,
        //     default:null,
        // },
    },

    // LIFE-CYCLE CALLBACKS:

    //  onLoad () {
    //     //true or false 為音樂是否循環，1為音量大小，0~1（？）
    //     cc.audioEngine.play(this,bgm,true,1)
    //  },


    start () {

    },
    onPlaySoundEffect:function(target,data){
        if( data == 'button'){
            cc.audioEngine.play(this.button_sound,false,1)
        }
    },

    // update (dt) {},
});
