//creating a preload state

var PreloadState = {
	preload: function(){
	this.logo = this.add.sprite(this.game.world.centerX, this.game.world.canterY);
	this.logo.anchor.setTo(0.5);

	this.preloadPage = this.add.sprite(this.game.centerX, this.game.centerY + 128, 'preloadPage');
	this.preloadPage.anchor.setTo(0.5);

	this.load.setPreloadSprite(this.preloadBar);


	},

	create: function(){
		this.state.start('GameState');
	}
};
