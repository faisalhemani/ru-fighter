var game;
var speedMult= 0.7;
var friction  =  0.99;

window.onload = function () {
	game =  new Phaser.Game (320,480, Phaser.AUTO, "");
	game.state.add("PlayGame", playGame);	
	game.state.start(playGame);
}
var playGame = function (game) {};
playGame.prototype = {
	preload: function () {
		game.load.image(
	}

}
