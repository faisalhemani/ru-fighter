var random;

function battle()
{
	random = game.rnd;
	var choice = random.integerInRange(0, 1);
	game.physics.startSystem(Phaser.Physics.ARCADE);
	topText();
}

function topText(enemy)
{
	var graphics = game.add.graphics(10,10);

	//set a fill and line style
	graphics.beginFill(0x000000, 0.8);
	graphics.lineStyle(2, 0x0f0f12);

	//draw a rectangle
	graphics.drawRect(90,10,860,40);

	window.graphics = graphics;

	console.log(enemy);

	uhp_txt = game.add.text(110,30,"Hp : " + player.stats.hp, {
		font: "20px Arial",
		fill: "#ff0000",
		align: "center" 
	});

    umana_txt = game.add.text(260,30,"Mp : " + player.stats.mana,{
                font: "20px Arial",
                fill: "#ff0000",
                align: "center" });

	if(player.facility == "Science")
 		var uspeed = "3";
	else
		uspeed = "2";

	uspeed_txt = game.add.text(410,30,"Speed : " + player.stats.speed,{
                font: "20px Arial",
                fill: "#ff0000",
                align: "center" });

    chp_txt = game.add.text(560,30,"Hp : " + enemy.stats.hp,{
                font: "20px Arial",
                fill: "#00ff00",
                align: "center" });


    cmana_txt = game.add.text(710,30,"Mp : " + enemy.stats.mana,{
                font: "20px Arial",
                fill: "#00ff00",
                align: "center" });

	cspeed_txt = game.add.text(860,30,"Speed : " + enemy.stats.speed,{
                font: "20px Arial",
                fill: "#00ff00",
                align: "center" });

	//playerSpeed(speed, cspeed);
}