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

//object to store player related information
var player1;
var player2;
var player3; 

var sprite = {
	width: 16,
	height : 16
}

function preload() 
{
	log(['preload'],'started');
	//creates the players of the game
	player1 = new Player(100, game.world.centerY/2, 'player1');
	player2 = new Player(game.world.width-sprite.width-100, game.world.centerY/2, 'player2');
	player3 = new Player(100, game.world.centerY/2, 'player3');
	//use Phaser.ScaleManage.EXACT_FIT for exact screen scaling
	scaleGame();
	//request player data from game db & wait until player response is recieved
	requestPlayers();
	//load the player sprite images
	game.load.image('player1', 'assets/'+player1.model.avatar);
	game.load.image('player2', 'assets/'+player2.model.avatar);
	game.load.spritesheet('player3', 'assets/metalslug.png',37, 45, 18);
	//load the game background image
	game.load.image('background', 'assets/battle_screens/'+player2.model.name+'/'+'background.jpg');
	//sets the background color
	game.stage.backgroundColor = '#000';

	//logs player1's relative sprite image path 
	log(['preload','player1'],'assets/'+player1.model.avatar);
	log(['preload','player1'],'assets/'+player2.model.avatar);
	log(['preload'],'ended');
}

//all phaser functionality to scale the game to the viewport
function scaleGame()
{
	game.scale.scaleMode = Phaser.ScaleManager.SHOW_ALL;
	game.scale.setScreenSize();
	game.scale.pageAlignHorizontally = true;
	game.scale.pageAlignVertically = true;
	game.scale.maxWidth = 720;
	game.scale.maxheight = 720;
}

function create() 
{
	log(['create'],'started');
	//game.stage.scale.startFullScreen();
	//game.physics.startSystem(Phaser.Physics.ARCADE);
	createBackground('background');
	displayPlayer(player1);
	displayPlayer(player2);
	createPlayer(player3);
	log(['create'],'ended');
}

function createBackground(key)
{
	var background = game.add.sprite(0,0,key);
	background.scale.setTo(0.2,0.2);
	return background;
}

function update() 
{
	//controlPlayer(player1,game.input.x,player1.y);
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
