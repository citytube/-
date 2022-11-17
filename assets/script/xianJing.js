

cc.Class({
    extends: cc.Component,

    properties: {
        speed: 0,

    },

    // LIFE-CYCLE CALLBACKS:

    onLoad() {
        //打开碰撞
        // cc.director.getCollisionManager().enabled = true;
        this.speed = cc.find('Canvas').getComponent('bgMove').speed;
    },

    start() {

    },

    update(dt) {

        this.node.x -= dt * this.speed;
        if (this.node.x <= -700) {
            this.node.destroy();
        }
    },
});
