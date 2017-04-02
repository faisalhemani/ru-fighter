var enemy;

function enemy(name, facility, background)
{
	enemy = new Player(780,180,name,facility);
	nhan_bg = game.add.sprite(0,0,background);
    nhan_bg.scale.setTo(0.9,0.9);

	displayPlayer(enemy);
	characterBounce(enemy.sprite);
}
