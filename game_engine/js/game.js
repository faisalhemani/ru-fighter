var game = new Phaser.Game(800, 600, Phaser.AUTO, '', { preload: preload, create: create, update: update });

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
	//requestPlayers();
	game.load.image('player1', 'assets/enemy_btn.png');
	log(['preload'],'ended');
}

function create() 
{
	log(['create'],'started');
	player1 = new Player(0, game.world.centerY, 'player1');
	player2 = new Player(game.world.width-sprite.width, game.world.centerY, 'player');
    
    game.physics.startSystem(Phaser.Physics.ARCADE);
    player1.sprite = createPlayer(player1.x, player1.y, player1.key);
    player2.sprite = createPlayer(player2.x, player2.y, player2.key);
    log(['create'],'ended');
}

function update() 
{
	log(['update'],'started');
	controlPlayer(player1,game.input.x,player1.y);
	log(['update'],'ended');
}

function createPlayer(x,y,key)
{
	var player = game.add.sprite(x,y,key);
	player.anchor.setTo(0.5,0.5);
	game.physics.arcade.enable(player);
	player.body.collideWorldBounds = true;
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
		}
		else
		{

		}
	}
	request.onerror = function ()
	{
		log(['requestPlayers','onerror'],'error');
	}
	request.send();
}

function log(tags, message)
{
	var prefix = '';
	for (var i = 0; i < tags.length; i++)
	{
		prefix = prefix + '['+tags[i]+']';
	}
	return prefix+' : '+message;
}