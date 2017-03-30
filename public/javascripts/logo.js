var logo = {
        preload: function () {
                console.log("LOGO");
		this.logo = this.add.sprite(this.game.world.centerX/5, this.game.centerY/2,'logo');
                this.logo.scale.setTo(0.5,0.5);
                this.preloadBar = this.add.sprite(this.game.world.centerX/3.5, this.game.world.centerY/2, 'preloadBar');

        },
        create: function () {
                this.state.start('menu');
        }
};



