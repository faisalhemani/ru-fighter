/*
var particles = {
	lights : game.add.group()
};*/

function science()
{
console.log("in science function");
//rectangle box

        var graphics = game.add.graphics(0,0);

        //set a fill and line style
        graphics.beginFill(0x000000, 0.8);
        graphics.lineStyle(2, 0x000000);

        //draw a rectangle
        graphics.drawRect(90,460,880,130);

        window.graphics = graphics;

//Text
	var regTxt = game.add.text(120, 570, "DMG: 5     MP Cost: 0",
                                {font: "15px Arial", fill:" #ffffff"});
       var  specialTxt = game.add.text(340, 570, "DMG: 8     MP Cost: 3", 
                                {font: "15px Arial", fill: "#ffffff"});

        var UitlityTxt = game.add.text(560, 570, "Heal: 5     MP Cost: 6", 
                                {font: "15px Arial", fill: "#ffffff"});

        var UltimateTxt = game.add.text(780, 570, "DMG: 18     MP Cost: 14", 
                                {font: "15px Arial", fill: "#ffffff"});

	var reg = game.add.sprite(100,470, 'sr');
	var special = game.add.sprite(320 ,470,'ss');//, ss_action, this, 2,1,0);
	var utility = game.add.sprite(540 ,470,'sut');//, utility_action, this,2,1,0);
	var ultimate = game.add.sprite(760 ,470,'sul');//, ultimate_action, this, 2,1,0);
	console.log("buttons are up");

	reg.inputEnabled = true;
	reg.events.onInputDown.add(sr_action,this);
	special.inputEnabled = true;
        special.events.onInputDown.add(ss_action,this);
	utility.inputEnabled = true;
        utility.events.onInputDown.add(utility_action,this);
	ultimate.inputEnabled = true;
        ultimate.events.onInputDown.add(ultimate_action,this);

	if (player.avatar == "xavier.png")
	{
 		this.avatar = game.add.sprite(100,200,'player1');
     		this.avatar.scale.setTo(0.2,0.2);
	}
	else{
  		this.avatar = game.add.sprite(100,200,'player2');
        	this.avatar.scale.setTo(0.2,0.2);
	}
}

function sr_action()
{
	doAtomicRestructure(50);	
}

function doAtomicRestructure(repeat)
{
	game.time.events.repeat(50, repeat, createAtomicRestructure, this);
}

function createAtomicRestructure()
{
	var x = game.rnd.integerInRange(0, game.width);
	var random = game.rnd.integerInRange(0, 1);
	var sprite = 'redPartical';
	if (random)
		sprite = 'bluePartical';
	console.log(x);
	//game.add.sprite(x,0,sprite);
	var light = particles.lights.create(0,0,'player1');
	//light.scale.setTo(2,2);
}

function animateAtomicRestructure()
{
	particles.lights.setAll('y', 10, true, true, 1);
	particles.lights.forEach(checkLight, this, true);
}

function player1Skills()
{
	var keyboard = game.input.keyboard;
	//var q = game.keyboard.addKey(Phaser.Keyboard.ONE);
	if (keyboard.isDown(Phaser.Keyboard.Q))
	{
		log(['player1Skills'],'keyboard Q down pressed');
		doAtomicRestructure(50);
	}
	if (keyboard.isDown(Phaser.Keyboard.W))
	{
		log(['player1Skills'],'keyboard W down pressed');
		doExplosion(50);
	}
	if (keyboard.isDown(Phaser.Keyboard.E))
	{
		log(['player1Skills'],'keyboard E down pressed');
		doSpiritBomb();
	}
	if (keyboard.isDown(Phaser.Keyboard.R))
	{
		log(['player1Skills'],'keyboard R down pressed');
	}
}
