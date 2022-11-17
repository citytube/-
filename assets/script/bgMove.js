

cc.Class({
    extends: cc.Component,

    properties: {
        //不能用小寫，Node的首字母要大寫！
        bg1: cc.Node,
        bg2: cc.Node,
        speed: 200,
        //計時器
        timer:0,
        //陷阱动态生成声明
        xianJingPrefab:cc.Prefab,
        xianJingTimer:0,
        //距离显示
        runSum:cc.Label,
        // runNum:0,
    },

    // LIFE-CYCLE CALLBACKS:

    onLoad() {
        this.tiggerX = -this.bg1.width/2;
    },

    start() {

    },

    getNewXianJing () {
        var newXianJing = cc.instantiate(this.xianJingPrefab);
        var min = -200;
        var max = -100;
        var y = Math.floor(Math.random() * (max-min) + min);
        newXianJing.setPosition(new cc.v2(700,y));
        this.node.addChild(newXianJing);

    },

    update(dt) {
        //隨著時間增大，背景移速增快
        this.timer += dt;
        this.speed = 20*this.timer + 200;
        //陷阱生成时间
        this.xianJingTimer += dt;
        if(this.xianJingTimer >= 3) { 
            this.xianJingTimer = 0;
            this.getNewXianJing();
        }
        //距离显示
        Global.runNum += this.speed * dt;
        this.runSum.string = Math.floor(Global.runNum);
        this.bg1.x -= dt * this.speed;
        this.bg2.x -= dt * this.speed;
        if (this.bg1.x <= this.tiggerX)
            this.bg1.x = this.bg2.x+this.bg1.width;
        else if (this.bg2.x <= this.tiggerX)
            this.bg2.x = this.bg1.x+this.bg1.width;
    },
});
