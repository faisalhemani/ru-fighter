var start = {
        preload: function () {
               console.log("BOOT");

                game.scale.scaleMode = Phaser.ScaleManager.SHOW_ALL;
                game.scale.pageAlignHorizontally = true;
                game.scale.pageAlignVertically = true;
                game.load.image('preloadBar', 'http://www.my-wall-decal.com/img/loading_progess_bar_wall_decal_single.jpg');
                game.load.image('logo','http://vignette2.wikia.nocookie.net/streetfighter/images/f/f6/SF_Logo.png/revision/latest?cb=20130310140822');
 
        },
        create: function () {
                this.state.start('load');
        }
};

