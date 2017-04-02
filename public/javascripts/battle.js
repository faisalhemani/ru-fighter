var random;
var turn = '';

var player_hp_display, player_mana_display, player_speed_display;
var enemy_hp_display, enemy_mana_display, enemy_speed_display;
var graphics;

function battle()
{
	random = game.rnd;
	var choice = random.integerInRange(0, 1);
	game.physics.startSystem(Phaser.Physics.ARCADE);
	topText();
}

function topText()
{
	graphics = game.add.graphics(10,10);

	//set a fill and line style
	graphics.beginFill(0x000000, 0.8);
	graphics.lineStyle(2, 0x0f0f12);

	//draw a rectangle
	graphics.drawRect(90,10,860,40);

	if (gameOver)
		graphics.destroy();

	window.graphics = graphics;

	console.log(enemy);

	player_hp_display = game.add.text(110,30,"Hp : " + player.stats.hp, {
		font: "20px Arial",
		fill: "#ff0000",
		align: "center" 
	});

    player_mana_display = game.add.text(260,30,"Mp : " + player.stats.mana,{
                font: "20px Arial",
                fill: "#ff0000",
                align: "center" 
    });

	if(player.facility == "Science")
 		var uspeed = "3";
	else
		uspeed = "2";

	player_speed_display = game.add.text(410,30,"Speed : " + player.stats.speed,{
                font: "20px Arial",
                fill: "#ff0000",
                align: "center" 
	});

    enemy_hp_display = game.add.text(560,30,"Hp : " + enemy.stats.hp,{
                font: "20px Arial",
                fill: "#00ff00",
                align: "center" 
    });


    enemy_mana_display = game.add.text(710,30,"Mp : " + enemy.stats.mana,{
                font: "20px Arial",
                fill: "#00ff00",
                align: "center" 
	});

	enemy_speed_display = game.add.text(860,30,"Speed : " + enemy.stats.speed,{
                font: "20px Arial",
                fill: "#00ff00",
                align: "center" 
	});

	playerSpeed();
}


function playerSpeed()
{
	console.log("checking which player will go first");
	//chance("checking which player will go first");
	var choice = random.integerInRange(0, 1);
	//speed same
	if(player.stats.speed == enemy.stats.speed)
	{
		if(choice == 1)
		{
			turn = 'player';
			console.log("Speed tie: player will go first");
			if(player.facility == "Science")
				science();
	        else
	        	engineering();
	    }
		else
		{
			turn = 'ai';
			console.log("Speed tie: AI will go first");
			if (enemy.facility == 'Science')
				aisci_attacks();
		    else
		    	aieng_attacks();
		}
	}
	else if (player.stats.speed > enemy.stats.speed)
	{
		turn = 'player';
		console.log("Player is faster: player will go first");
		if(player.facility == "Science")
			science();
		else
			engineering();
	}
	else
	{
		turn = 'ai';
		console.log("AI is faster: AI will go first");

		if (enemy.facility == 'Science')
			aisci_attacks();
		else
			aieng_attacks();
	}
}

function sleep(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

function clearBattle(){
	graphics.destroy();
	player_speed_display.destroy();
	player_mana_display.destroy();
	player_hp_display.destroy();
	enemy_speed_display.destroy();
	enemy_mana_display.destroy();
	enemy_hp_display.destroy();
}

function gameOver(){
	console.log('Game over!');
	clearBattle();
}