

cc.Class({
    extends: cc.Component,

    properties: {
        grade:cc.Label,
        jingle:cc.AudioClip,

    },

    // LIFE-CYCLE CALLBACKS:

     onLoad () {
        this.grade.string = "分数为：" + Math.round(Global.runNum);
     },

    start () {
        cc.audioEngine.play(this.jingle,false,1)
    },

    gemaRestart() {
        // cc.director.resume();
        Global.runNum = 0;
        cc.director.loadScene('test');
    },

    backToMenu () {
        Global.runNum = 0;
        cc.director.loadScene('start');
    },
    // update (dt) {},
});
