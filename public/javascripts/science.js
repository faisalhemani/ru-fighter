
var particles = {
	lights : {},
	explosions : {},
	kunai : {}
};

var lights;

var regTxt, specialTxt, utilityTxt, ultimateTxt;
var skill_graphics;
var reg, special, utility, ultimate;

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
	if (particles.kunai.children.length <= 3)
		damage(5,doKunai, 3);
}

function science_special()
{
	damage(8, doExplosion, 50);
}

function science_utility()
{
	//damage(0, )
}

function science_ultimate()
{
	damage(18, doAtomicRestructure, 50);
}

function damage(damage, animation, amount) {
	if (turn === 'player')
	{
		animation(amount);
		if (enemy.stats.hp - damage >= 0) {
			enemy.stats.hp = enemy.stats.hp - damage;
			console.log(enemy.stats.hp);
			turn = ai;
			clearStats();
			clearSkills();
			topText();
			AI();
		}
		else{
			enemy.stats.hp = 0;
			gameOver();
		}
		
	}
}

function heal(){

}

function displayScience()
{
	skill_graphics = game.add.graphics(0,0);
	particles.lights = game.add.group();
	particles.explosions = game.add.group();
	particles.kunai = game.add.group();
	
	//set a fill and line style
	skill_graphics.beginFill(0x000000, 0.8);
	skill_graphics.lineStyle(2, 0x000000);

	//draw a rectangle
	skill_graphics.drawRect(90,460,880,130);

 	window.graphics = skill_graphics;

	//Text
	regTxt = game.add.text(120, 570, "DMG: 5	MP Cost: 0",
    	{font: "15px Arial", fill:" #ffffff"});
	specialTxt = game.add.text(340, 570, "DMG: 8     MP Cost: 3", 
    	{font: "15px Arial", fill: "#ffffff"});

	utilityTxt = game.add.text(560, 570, "Heal: 5     MP Cost: 6", 
    	{font: "15px Arial", fill: "#ffffff"});

 	ultimateTxt = game.add.text(780, 570, "DMG: 18     MP Cost: 14", 
    	{font: "15px Arial", fill: "#ffffff"});
	
	reg = game.add.sprite(100,470, 'sr');
	special = game.add.sprite(320 ,470,'ss');//, science_special, this, 2,1,0);
	utility = game.add.sprite(540 ,470,'sut');//, science_utility, this,2,1,0);
	ultimate = game.add.sprite(760 ,470,'sul');//, science_ultimate, this, 2,1,0);
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
