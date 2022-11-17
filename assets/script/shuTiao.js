

cc.Class({
    extends: cc.Component,

    properties: {
        shuTiaoPrefab:cc.Prefab,
        timer:0,
        speed:0,
    },

    // LIFE-CYCLE CALLBACKS:

     onLoad () {
        this.speed = cc.find('Canvas').getComponent('bgMove').speed;
     },

    start () {

    },

    getNewShutiao () {
        var minX = -450;
        var maxX = 450;
        var x = Math.floor(Math.random() * (maxX-minX) + minX);
        var minY = -100;
        var maxY = 200;
        var y = Math.floor(Math.random() * (maxY-minY) + minY);
        var newShuTiao = cc.instantiate(this.shuTiaoPrefab);
        newShuTiao.setPosition(new cc.v2(x,y));
        this.node.addChild(newShuTiao);

    },

     update (dt) {
        this.timer += dt;
        if (this.timer >= 5){
            this.getNewShutiao();
            this.timer = 0;
        }
     },
});
