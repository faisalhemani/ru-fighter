
var particles = {
	lights : {},
	explosions : {},
	kunai : {}
};

var lights;

function science()
{
	console.log("in science function");
	//rectangle box
	displayScience();
    
	console.log("buttons are up");

	if (player.avatar == "xavier.png") {
 		this.avatar = game.add.sprite(100,200,'player1');
		this.avatar.scale.setTo(0.2,0.2);
	}
	else {
  		this.avatar = game.add.sprite(100,200,'player2');
		this.avatar.scale.setTo(0.2,0.2);
	}
}

function science_regular()
{
	doKunai(3); 	
	ai_counter = ai_counter + 2;
	turn = 'ai';
}

function science_special()
{
	doExplosion(50);
	turn = 'ai';
}

function science_utility()
{
	turn = 'ai';
}

function science_ultimate()
{
	doAtomicRestructure(50);
	turn = 'ai';
}

function displayScience()
{
	var graphics = game.add.graphics(0,0);
	particles.lights = game.add.group();
	particles.explosions = game.add.group();
	particles.kunai = game.add.group();
	
	//set a fill and line style
	graphics.beginFill(0x000000, 0.8);
	graphics.lineStyle(2, 0x000000);

	//draw a rectangle
	graphics.drawRect(90,460,880,130);

 	window.graphics = graphics;

	//Text
	var regTxt = game.add.text(120, 570, "DMG: 5	MP Cost: 0",
    	{font: "15px Arial", fill:" #ffffff"});
	var  specialTxt = game.add.text(340, 570, "DMG: 8     MP Cost: 3", 
    	{font: "15px Arial", fill: "#ffffff"});

	var UitlityTxt = game.add.text(560, 570, "Heal: 5     MP Cost: 6", 
    	{font: "15px Arial", fill: "#ffffff"});

 	var UltimateTxt = game.add.text(780, 570, "DMG: 18     MP Cost: 14", 
    	{font: "15px Arial", fill: "#ffffff"});
	
	var reg = game.add.sprite(100,470, 'sr');
	var special = game.add.sprite(320 ,470,'ss');//, science_special, this, 2,1,0);
	var utility = game.add.sprite(540 ,470,'sut');//, science_utility, this,2,1,0);
	var ultimate = game.add.sprite(760 ,470,'sul');//, science_ultimate, this, 2,1,0);
	scienceButtons(reg, special, utility, ultimate);
}

function scienceButtons(reg, special, utility, ultimate)
{
	if (turn == 'player') {
		reg.inputEnabled = true;
		reg.events.onInputDown.add(science_regular,this);
		special.inputEnabled = true;
		special.events.onInputDown.add(science_special,this);
		utility.inputEnabled = true;
		utility.events.onInputDown.add(science_utility,this);
		ultimate.inputEnabled = true;
   		ultimate.events.onInputDown.add(science_ultimate,this);
   	}
}
