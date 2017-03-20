function createAtomicRestructure()
{
	var x = game.rnd.integerInRange(game.width/2, game.width);
	var random = game.rnd.integerInRange(0, 1);
	var sprite = 'redPartical';
	if (random)
		sprite = 'bluePartical';
	var light = particles.lights.create(x,0,sprite);
	light.scale.setTo(2,2);
}

function animateAtomicRestructure()
{
	particles.lights.setAll('y', 10, true, true, 1);
	particles.lights.forEach(checkLight, this, true);
}

function checkLight(light)
{
	try 
	{	
		if (light.y > game.height)
		{
			light.kill();
		}
	}
	catch (error)
	{
		log(['checkLight','catch'], light);
	}
}