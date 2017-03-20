//player constructor
function Player(x,y,key)
{
	this.x = x;
	this.y = y;
	this.key = key;
	this.sprite = {};
	this.model = {};
}

//creates the player sprite
function createPlayer(x,y,key)
{
	var player = game.add.sprite(x,y,key);
	player.anchor.setTo(0.5,0.5);
	game.physics.arcade.enable(player);
	player.body.collideWorldBounds = true;
	return player;
}

//move the player
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