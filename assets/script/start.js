

cc.Class({
    extends: cc.Component,

     properties: {

     },

    // LIFE-CYCLE CALLBACKS:

    // onLoad () {},

    start () {

    },

    // bundle.loadScene('test', function (err, scene) {
    //     cc.director.runScene(scene);
    // });

    playgame:function(){
        cc.director.loadScene('test');
    }


    // update (dt) {},

});
