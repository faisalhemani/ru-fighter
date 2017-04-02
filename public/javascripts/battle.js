var random;

function battle()
{
	random = game.rnd;
	var choice = random.integerInRange(0, 1);
	game.physics.startSystem(Phaser.Physics.ARCADE);
	topText();
}

function topText()
{
	var graphics = game.add.graphics(10,10);

	//set a fill and line style
	graphics.beginFill(0x000000, 0.8);
	graphics.lineStyle(2, 0x0f0f12);

	//draw a rectangle
	graphics.drawRect(90,10,860,40);

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

	//playerSpeed(speed, cspeed);
}


function playerSpeed(user, computer)
{
	if(counter == 0)
	{
		console.log("checking which player will go first");
		//chance("checking which player will go first");
	 	random = game.rnd.integerInRange(0, 1);
		//speed same
		if(user == computer)
		{
			if(random == 1)
			{
				chance("You Will Go First, All The Best");
				console.log("player will go first");
				player_counter++;
				 if(player.facility == "Science")
			                science();
	        		else
	        		        engineering();
			}
			else
			{
				ai_counter++;
	 			chance("AI Will Go First");
				console.log("AI will go first");
				if (computer == 3)
	        	                aisci_attacks();
		                else
	                	        aieng_attacks();

			}
		}
		else if (user > computer)
		{
			player_counter++;
			 chance("You Will Go First, All The Best");
			console.log("player will go first");
			if(player.facility == "Science")
	                        science();
	                else
		                engineering();
		}
		else
		{
			ai_counter++;
		 	chance("AI Will Go First");
			console.log("AI will go first");

			if (computer == 3)
				aisci_attacks();
			else
				aieng_attacks();
		}

		counter++;
	}
	else 
		trueBattle();
}