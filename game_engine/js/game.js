var game = new Phaser.Game(800, 600, Phaser.AUTO, '', { preload: preload, create: create, update: update });

var json_url = {
	ip : 'http://35.162.14.150',
	port : ':8081'
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

function log(tags, message)
{
	var prefix = '';
	for (var i = 0; i < tags.length; i++)
	{
		prefix = prefix + '['+tags[i]+']';
	}
	return prefix+' : '+message;
}