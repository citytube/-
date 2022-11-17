

cc.Class({
    extends: cc.Component,

    properties: {
        jumpHeight: 200,
        score:cc.Label,
        shuTiaoSum:0,
    },

    // LIFE-CYCLE CALLBACKS:

    onLoad() {
        cc.systemEvent.on(cc.SystemEvent.EventType.KEY_DOWN, function (event) {
            if (event.keyCode == cc.macro.KEY.w) {
                this.node.runAction(this.setJumpAction());
            }
        }, this);

        //打开碰撞
        cc.director.getCollisionManager().enabled = true;
    },

    onCollisionEnter: function (other, self) {
        //碰到陷阱后闪烁
        if (other.node.group == 'xianJing') {
            this.shuTiaoSum--;
            this.score.string = this.shuTiaoSum;
            self.node.runAction(new cc.blink(2,4));
        }
        if (other.node.group == 'shuTiao') {
            this.shuTiaoSum++;
            other.node.destroy();
            this.score.string = this.shuTiaoSum;
        }
    },


        start() {

        },

        setJumpAction(){
            var jumpUp = cc.moveBy(0.3, cc.v2(0, this.jumpHeight)).easing(cc.easeCubicActionInOut());
            var jumpDown = cc.moveBy(0.3, cc.v2(0, -this.jumpHeight)).easing(cc.easeCubicActionIn());
            return cc.sequence(jumpUp, jumpDown);
        },

         update (dt) {
            if (this.shuTiaoSum == 0) {
                cc.director.loadScene('gameOver');
                
            }
         },

    
});
