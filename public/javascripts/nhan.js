var enemy;

function nhanclass()
{
	enemy = new Player(780,180,'nhan');
	nhan_bg = game.add.sprite(0,0,'nhan_bg');
        nhan_bg.scale.setTo(0.9,0.9);
//	console.log("Background: " + nhan_bg);
	enemy.sprite.scale.setTo(0.25,0.25);
//	console.log("Nhan: " + nhan);
    //nhan.scale.setTo(0.25,0.25);
	characterBounce(nhan);
}
