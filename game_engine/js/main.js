var game = new Phaser.Game(640,360, Phaser.AUTO);

var GameState = 
{
	preload : function()
	{
		game.load.image('logo', 'assets/logo.png');
	},
	create: function()
	{
		this.logo = this.game.add.sprite(0,0, 'logo');
	},
	update: function()
	{

	}
};

game.state.add("GameState", GameState);
game.state.start("GameState");