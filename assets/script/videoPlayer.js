 //设置 Canvas 背景支持 alpha 通道,可讓canvas透明
 cc.macro.ENABLE_TRANSPARENT_CANVAS = true;


cc.Class({
    extends: cc.Component,
    

    properties: {
        videoPlayer: cc.VideoPlayer,

    },

    // LIFE-CYCLE CALLBACKS:

     onLoad () {
    //     this.videoPlayer.stayOnBottom = true;
    //  cc.macro.ENABLE_TRANSPARENT_CANVAS = true;

      },

    // videoPlayerEvent: function (sender, event) {
    //     cc.macro.ENABLE_TRANSPARENT_CANVAS = true;

    // },

    start() {
        this.videoPlayer.play();
    },


    // update (dt) {},
});
