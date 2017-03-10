var Width = getWidth();
var Height = getHeight();
var background;
var opening_screen;
var start_button;
var game_started = 0;
var game;

var button1;
var button2;
var button3;
var button4;

var player1;
var player2;

//user
var hpText;
var mpText;
var spdText;
var hp;
var mp;
var spd;

//compuer
var chpText;
var cmpText;
var cspdText;
var chp;
var cmp;
var cspd;

//screens 
var signup_screen;
var login_screen;
var charselect_screen;
var map_screen;
var battle_screen;

//signup button 
var signupBtn;


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

	//buttons for the player 
	game.load.spritesheet('button1', 'assets/button.png',200,100);
	game.load.spritesheet('button2', 'assets/button.png',200,100);
	game.load.spritesheet('button3', 'assets/button.png',200,100);
	game.load.spritesheet('button4', 'assets/button.png',200,100);

	//player
	game.load.image('player1', 'assets/Faisal.png');
	game.load.image('player2', 'assets/Xavier.png');

	// screens
	game.load.image('signup_screen', 'assets/signup_screen.jpg');
        game.load.image('login_screen', 'assets/login_screen.png');
	game.load.image('charselect_screen', 'assets/charactercreation_screen.jpg.png');
        game.load.image('map_screen', 'assets/map_screen.png');

	game.load.spritesheet('signupBtn' , 'assets/button.png',50,100);
}

function create() 
{
	if (!game_started)
		startScreen();
	else
	{
		console.log("game starting");
		clearScreen();
		signupScreen();
	}

}

//sign up screen
function signupScreen()
{
	console.log("in sign up screen");
	signup_screen = game.add.sprite(0,0,'signup_screen');
	signupBtn = game.add.button(300,600, 'signupbtn' , signup_action, this, 2,1,0);
}

function signup_action(){

	console.log('clearing sign up screen and goig to char slection');
	clearScreen();
	charSelectScreen();
}

function charSelectScreen()
{
	cosole.log("in char select screen");

}

function display_game()
{
//	graphics = game.add.graphics(0,0);
//	person2 = game.add.graphics(0,0);
//	graphics.beginFill(0xFF0000,1);
//	graphics.drawCircle(300,300,100);
//	person2.beginFill(0x00FF00, 1);
//	person2.drawCircle(600,300,100);

	//display buttons 
        button1 =  game.add.button(10,600, 'button1', button1_action, this, 2,1,0);
	button2 =  game.add.button(220,600, 'button2', button2_action, this, 2,1,0);
	button3 =  game.add.button(440,600, 'button3', button3_action, this, 2,1,0);
	button4 =  game.add.button(660,600, 'button4', button4_action, this, 2,1,0);
	
	//calling server
	callingServer();

}

//tile page
function startScreen()
{
	game.stage.backgroundColor = '#000000';

	opening_screen = game.add.sprite(game.world.centerX/2, game.world.centerY/2, 'opening_screen');
	background = game.add.sprite(game.world.centerX + game.world.centerX/6 ,game.world.centerY/2-30,'background');
	background.scale.setTo(0.4,0.4);
//game.add.sprite(0,0, 'background');

	start_button = game.add.button(game.world.centerX, game.world.centerY, 'start_button', actionOnClick, this, 2, 1, 0);
	start_button.scale.setTo(0.3,0.3);
}

function clearScreen()
{
	console.log("clearing screen");
	//game.remove(opening_screen);
	//game.
	remove(opening_screen);
	remove(start_button);
	remove(background);
	game.world.remove(background);
	//game.world.removeAll();
	//console.log("Here");
}

function remove(element)
{
	element.visible = false;
	//element.remove();
}

function update() 
{
	/*
	if (game_started)
        {
                console.log("game starting");
                clearScreen();
                display_game();
		game_started = 0;
        }
	*/
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

function actionOnClick()
{
	clearScreen();
	game_started = 1;
	console.log(game_started);
	signupScreen();
}

/*
function healthAction(){
	text = game.add.text(50,50, "Your Health is : 10", {font: "65px Arial", fill: '#ff0000'});
	text.anchore.set(0.5,0.5);
}
*/

function callingServer(){
	
	var request = new XMLHttpRequest();
	var url = 'http://52.38.67.158/player.json';
	request.open('GET',url,true);
	request.onload = function ()
	{
		if (request.status >= 200 && request.status < 400)
		{
			//do something 
			storeJSON(JSON.parse(request.response));
		}
		else
		{
			console.log("URL could not be reached: "+url);
			alert("game server could not be reached");
		}
	};
	request.onerror = function ()
	{
		alert("error");
	}
	request.send();
}

function storeJSON(JSON_object)
{
	console.log(JSON_object.hp);
	//user info 
	hp = "HP: " + JSON_object.hp;
	mp = "MP: " + JSON_object.maxhp;
	spd = "SPD: " +  JSON_object.facility;
	hpText = game.add.text(10,10, hp, {font: "25px Arial", fill: "#ff0000"});
        mpText = game.add.text(100,10, mp, {font: "25px Arial", fill: "#ff0000"});
        spdText = game.add.text(200,10,spd, {font: "25px Arial", fill: "#ff0000"});

	//computer info 
	chp = "HP: " + JSON_object.hp;
        cmp = "MP: " + JSON_object.maxhp;
        cspd = "SPD: " +  JSON_object.facility;
        chpText = game.add.text(300,10, chp, {font: "25px Arial", fill: "#ff00ff"});
        cmpText = game.add.text(400,10, cmp, {font: "25px Arial", fill: "#ff00ff"});
        cspdText = game.add.text(500,10,cspd, {font: "25px Arial", fill: "#ff00ff"});


	//players 
	person1 = game.add.sprite(500,300,'player1');
	person2 = game.add.sprite(400,320,'player2');

}

//button functions

function button1_action(){
	console.log('button 1');
}

function button2_action(){
	console.log("button 2");
}

function button3_action(){
	console.log("button 3");
}

function button4_action(){
	console.log("button 4");
}



/*function resize() {
	Width = getWidth();
	Height = getHeight();
}*/

//game.state.add("GameState", GameState);
//game.state.start("GameState");
