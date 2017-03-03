var Width = getWidth();
var Height = getHeight();
var background;
var opening_screen;
var start_button;

function getWidth() {
	return window.innerWidth;
}

function getHeight() {
	return window.innerHeight;
}

//var game = new Phaser.Game(Width,Height, Phaser.AUTO);
var game = new Phaser.Game(Width, Height, Phaser.CANVAS, 'phaser-example', {
	preload: preload,
	create: create,
	update: update,
	render: render,
});

function preload() {
	//game.scale.maxWidth = 1920;
	//game.scale.maxHeight = 1080;

	//Take from
	//https://phaser.io/docs/2.6.2/Phaser.ScaleManager.html#pageAlignVertically
	game.scale.scaleMode = Phaser.ScaleManager.SHOW_ALL;
	game.scale.setScreenSize();
	game.load.image('background', 'assets/AmberLabs_logo.png');
	game.load.image('opening_screen', 'assets/RUFighter_logo.png');
	game.load.spritesheet('start_button', 'assets/button.png',150,90);
}

function create() {
	game.stage.backgroundColor = '#000000';

	opening_screen = game.add.sprite(game.world.centerX/2, game.world.centerY/2, 'opening_screen');
	background = game.add.sprite(game.world.centerX + game.world.centerX/6 ,game.world.centerY/2-30,'background');
	background.scale.setTo(0.4,0.4);
//game.add.sprite(0,0, 'background');

	start_button = game.add.button(game.world.centerX, game.world.centerY, 'start_button', actionOnClick, this, 2, 1, 0);
	start_button.scale.setTo(0.3,0.3);
}

function update() {

}

function render() {
		//Code from https://phaser.io/examples/v2/display/viewport
		var x = 32;
		var y = 0;
		var yi = 32;

		//resizeGame();

/*		game.debug.text('Viewport', x, y += yi);

		game.debug.text('Viewport Width: ' + game.scale.viewportWidth, x, y += yi);;
		game.debug.text('window.innerWidth: ' + window.innerWidth, x, y += yi);
		game.debug.text('window.outerWidth: ' + window.outerWidth, x, y += yi);

		game.debug.text('Viewport Height: ' + game.scale.viewportHeight, x, y += yi);
		game.debug.text('window.innerHeight: ' + window.innerHeight, x, y += yi);
		game.debug.text('window.outerHeight: ' + window.outerHeight, x, y += yi);

		game.debug.text('Document', x, y += yi*2);

		game.debug.text('Document Width: ' + game.scale.documentWidth, x, y += yi);
		game.debug.text('Document Height: ' + game.scale.documentHeight, x, y += yi);

		x = Width/2;
		y = 0;

		game.debug.text('Device', x, y += yi);

		game.debug.text('window.screen.width: ' + window.screen.width, x, y += yi);
		game.debug.text('window.screen. availWidth: ' + window.screen.availWidth, x, y += yi);
		game.debug.text('window.screen.height: ' + window.screen.height, x, y += yi);
		game.debug.text('window.screen.availHeight: ' + window.screen.availHeight, x, y += yi);

		if(window.innerWidth < window.innerHeight) {
			console.log('Portrait');
			Phaser.ScaleManager.forcePortrait = true;
			Phaser.ScaleManager.forceLandscape = false;
		}
		else {
			console.log('Landscape');
			Phaser.ScaleManager.forcePortrait = false;
			Phaser.ScaleManager.forceLandscape = true;
		}*/
}

function resizeGame() {
	var height = $(window).height();
	var width = $(window).width();

	game.width = width;
	game.height = height;

	game.stage.bounds.width = width;
	game.stage.bounds.height = height;

	if(game.renderType = Phaser.WEBGL) {
		game.renderer.resize(width, height);
	}
}

function actionOnClick() {
	console.log("Button was clicked");
}

/*function resize() {
	Width = getWidth();
	Height = getHeight();
}*/

//game.state.add("GameState", GameState);
//game.state.start("GameState");
