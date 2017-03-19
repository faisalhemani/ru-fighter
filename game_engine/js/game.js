/* IGNORE THIS COMMENTED OUT CODE IT IS NOT IN USE
//stores minimum width per breakpoint
var dimensions = {
	'widthSmall' : 720,
	'widthMedium' : 1200,
	'widthLarge' : 1920
}
//stores breakpoint keys and phaser values
var mode = {
	small : {
		'width' : 'window.innerWidth',
		'height' : 'window.innerHeight'
	},
	medium : {
		'width' : 800,
		'height' : 600
	},
	large : {
		//todo
	}
}

if (window.innerWidth < dimensions.small)
{

}
*/

log(['viewport', 'width'],window.innerWidth);
log(['viewport', 'width'],window.innerHeight);

var game = new Phaser.Game(window.innerWidth, window.innerHeight, Phaser.AUTO, '', { preload: preload, create: create, update: update });

var json_url = {
	ip : 'http://35.162.14.150',
	port : ':8081'
}

//player constructor
function Player(x,y,key)
{
	this.x = x;
	this.y = y;
	this.key = key;
	this.sprite = {};
	this.model = {};
}

//object to store player 1 related information
var player1;
//object to store player 2 related information
var player2;

var sprite = {
	width: 16,
	height : 16
}

function preload() 
{
	log(['preload'],'started');
	//creates the players of the game
	player1 = new Player(100, game.world.centerY, 'player1');
	player2 = new Player(game.world.width-sprite.width-100, game.world.centerY, 'player2');
	//use Phaser.ScaleManage.EXACT_FIT for exact screen scaling
	scaleGame();
	//request player data from game db & wait until player response is recieved
	requestPlayers();
	//load the player sprite images
	game.load.image('player1', 'assets/'+player1.model.avatar);
	game.load.image('player2', 'assets/'+player2.model.avatar);
	//sets the background color
	game.stage.backgroundColor = '#eee';

	//logs player1's relative sprite image path 
	log(['preload','player1'],'assets/'+player1.model.avatar);
	log(['preload'],'ended');
}

//all phaser functionality to scale the game to the viewport
function scaleGame()
{
	game.scale.scaleMode = Phaser.ScaleManager.SHOW_ALL;
	game.scale.setScreenSize();
	game.scale.pageAlignHorizontally = true;
    game.scale.pageAlignVertically = true;
    game.scale.maxWidth = 1280;
    game.scale.maxheight = 800;
}

function create() 
{
	log(['create'],'started');
    //game.stage.scale.startFullScreen();
    //game.physics.startSystem(Phaser.Physics.ARCADE);
    player1.sprite = createPlayer(player1.x, player1.y, player1.key);
    player1.sprite.scale.setTo(0.1,0.1);
    player2.sprite = createPlayer(player2.x, player2.y, player2.key);
    player2.sprite.scale.setTo(0.1,0.1);
    log(['create'],'ended');
}

function update() 
{
	//controlPlayer(player1,game.input.x,player1.y);
}

function createPlayer(x,y,key)
{
	var player = game.add.sprite(x,y,key);
	player.anchor.setTo(0.5,0.5);
	//game.physics.arcade.enable(player);
	//player.body.collideWorldBounds = true;
	return player;
}

function controlPlayer(player,x,y)
{
	player.x = x;
	player.y = y;

	if (player.x < player.width/2)
		player.width = player.width/2;
	else if (player.x > game.world.width - player.width/2)
		player.width = game.world.width - paddle.width/2;
}

function requestPlayers()
{
	var request = new XMLHttpRequest();
	//Run sync so that we wait for our response before trying to operate with it. 
	request.open('GET',json_url.ip+json_url.port, false);
	log(['requestPlayers','open'],json_url.ip+json_url.port);
	request.onload = function ()
	{
		if (request.status >= 200 && request.status < 400)
		{
			log(['requestPlayers','onload'],request.responseText);
			storePlayers(request.responseText);
			return;
		}
		else
		{
			alert('Request defined');
		}
	}
	request.onerror = function ()
	{
		log(['requestPlayers','onerror'],'error');
		alert('Error on request');
	}
	request.send();
}

function storePlayers(JSONText)
{
	var players = [];
	//only store data when defined
	if (typeof(JSONText) != 'undefined')
	{
		players = JSON.parse(JSONText);
		player1.model = players[0];
		player2.model = players[1];
		//print recived players name for debugging purposes
		log(['storePlayers','player1.model.name'],player1.model.name);
		log(['storePlayers','player1.model.name'],player1.model.name);
	}
	else
		alert('Could not store player data : undefined');
}

function log(tags, message)
{
	var prefix = '';
	for (var i = 0; i < tags.length; i++)
	{
		prefix = prefix + '['+tags[i]+']';
	}
	console.log(prefix+' : '+message);
}