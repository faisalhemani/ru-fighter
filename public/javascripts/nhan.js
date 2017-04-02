var enemy;

function enemy(name, facility, background)
{
	enemy = new Player(780,180,name,facility);
	nhan_bg = game.add.sprite(0,0,background);
    nhan_bg.scale.setTo(0.9,0.9);

	displayPlayer(enemy);
	characterBounce(enemy.sprite);
}

function AI(){
	//sleep(2000);
	var choice = random.integerInRange(0,3);
	switch (choice)
	{
		case 0:
			break;
		case 1:
			break;
		case 2:
			break;
		case 3:
			break;
	}
	turn = 'player';
	console.log('AI moved: '+choice);
}