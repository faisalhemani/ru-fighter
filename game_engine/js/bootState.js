
var boot = {

	preload:  function()
	{
		this.game.load.image("loadingPage", "assets/loading_screen.jpg");
	},
	create: function()
	{
		this.state.start("preloader");
	}


};
//-----------------------------------------------------------------------
/*
module.exports = {
	perload: function() {
		this.load.image('progressPage', 'assets/loading_screen.jpg');
	},
	create: function()
	{
		game.load.onLoadStart.add(this.loadStart, this);
		game.load.onLoadComplete.add(this.loadComplete, this);
		this.start();
	},
	loadStart: function()
	{
		loadingProcess = new loadingProcessMoodule();
		loadingPrecess.show(true);

	},
	loadComplete: function()
	{
		game.physics.startSystem(Phaser.Physics.ARCADE);
		game.world.setBounds(0,0,6000,6000);
		this.game.state.start("Play");
	},
	update: function()
	{
		if (loadingProcess != null && loadingProcess.loadingProcessInPercentage != null)
		{
			loadingProcess.loadingProcessInPercentage.text = game.load.progress + ' %' ;

		}

	},
	start: function()
	{
		this.load.image('RUFL','assets/RUFighter_logo.png');
	}
};
*/
//------------------------------------------------------------------------
/*
//creating a boot state variable called bs
var bs = {

	//initiate some game-level settings
	init: function()  {

	//scaling options 
	this.scale.scaleMode = Phaser.ScaleManager.SHOW_ALL;
	this.scale.pageAlignHorizontally = true;
	this.scale.pageAlignVertically =true;
	},

	//preload function
	preload: function(){
	//load the loding screen (suppose to load the progress bar, but
	//im just using the loading page for now)

	this.load.image('progressPage', 'assets/loading_screen.jpg');
	},

	create: function()
	{
		this.game.stage.backgroundColor = '#aaa';
		this.state.start('PreloadState');
	}
}
*/
