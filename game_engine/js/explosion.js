function createExplosion()
{
	var explosion = particles.explosions.create(0, game.world.randomY, 'explosion');
	explosion.animations.add('walk');
	explosion.play('walk', 10, true);
}

function animateExplosion()
{
	particles.explosions.setAll('x', 10, true, true, 1);
	particles.explosions.forEach(checkExplosion, this, true);
}

function doExplosion(repeat)
{
	game.time.events.repeat(50, repeat, createExplosion, this);
}

function checkExplosion(sprite)
{
	try
	{
		//log(['checkSprite', 'sprite.x'], sprite.x);
		//log(['checkSprite', 'game.width/2'], game.width/2)
		//log(['checkSprite','if'],sprite.x > game.width/2);
		if (sprite.x > game.width/2)
		{
			sprite.kill();
			//particles.zombies.remove(sprite,true);
		}
	}
	catch(error)
	{
		log(['checkSprite','catch'], sprite);
	}
}