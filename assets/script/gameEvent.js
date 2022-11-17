

cc.Class({
    extends: cc.Component,

    properties: {
        resumeGame: cc.Node,
        // bgmResume: cc.Node,
        bgmStop: cc.Node,
    },

    // LIFE-CYCLE CALLBACKS:

    // onLoad () {},

    start() {

    },

    gameStop() {
        cc.director.pause();
        this.resumeGame.active = true;
        this.node.active = false;

    },

    gameResume() {
        //关闭弹窗
        this.resumeGame.active = false;
        this.node.active = true;
        cc.director.resume();

    },

    gemaRestart() {
        Global.runNum = 0;
        cc.director.resume();
        cc.director.loadScene('test');
    },

    bgm_Stop() {
        //  this.audioSource.pause();
        this.bgmStop.active = false;
    },

    bgm_resume() {
        this.bgmStop.active = true;
    },

    // update (dt) {},
});
