var random;

function battle()
{
	random = game.rnd;
	var choice = random.integerInRange(0, 1);
	game.physics.startSystem(Phaser.Physics.ARCADE);
}

function topText(ai_hp, ai_mp, ai_speed)
{
	var graphics = game.add.graphics(10,10);

	//set a fill and line style
	graphics.beginFill(0x000000, 0.8);
	graphics.lineStyle(2, 0x0f0f12);

	//draw a rectangle
	graphics.drawRect(90,10,860,40);

	window.graphics = graphics;

	uhp_txt = game.add.text(110,30,"Hp : " + uhp,{
		font: "20px Arial",
		fill: "#ff0000",
		align: "center" });

 	 umana = "25";
         umana_txt = game.add.text(260,30,"Mp : " + umana,{
                font: "20px Arial",
                fill: "#ff0000",
                align: "center" });

	if(player.facility == "Science")
 		var uspeed = "3";
	else
		uspeed = "2";

	uspeed_txt = game.add.text(410,30,"Speed : " + uspeed,{
                font: "20px Arial",
                fill: "#ff0000",
                align: "center" });


 	 chp = ai_hp;
         chp_txt = game.add.text(560,30,"Hp : " + chp,{
                font: "20px Arial",
                fill: "#00ff00",
                align: "center" });


 	 cmana = ai_mp;
        cmana_txt = game.add.text(710,30,"Mp : " + cmana,{
                font: "20px Arial",
                fill: "#00ff00",
                align: "center" });

         cspeed = ai_speed;
         cspeed_txt = game.add.text(860,30,"Speed : " + cspeed,{
                font: "20px Arial",
                fill: "#00ff00",
                align: "center" });

	playerSpeed(speed, cspeed);
}