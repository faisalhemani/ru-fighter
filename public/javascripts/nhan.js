var enemy;

function nhanclass()
{
	enemy = new Player(780,180,'nhan');
	nhan_bg = game.add.sprite(0,0,'nhan_bg');
    nhan_bg.scale.setTo(0.9,0.9);

	displayPlayer(enemy);
	characterBounce(enemy.sprite);
}
