var cgraphics;
function chance(message){

        console.log("chance function will display who will be playing first");
        cgraphics = game.add.graphics(0,0);

        //set a fill and line style
        cgraphics.beginFill(0x000000, 0.8);
        cgraphics.lineStyle(2, 0x0f0f12);

        //draw a rectangle
        cgraphics.drawRect(200,200,650,150);

        window.graphics = cgraphics;

	 message_txt = game.add.text(220,255,message,{
		font: "40px Arial",
		fill: "#ff0000",
		align: "center" });

}
var report_txt, message_txt;
function ai_dmg(report){

        console.log("function will display the dmg the ai has taken");
        var graphics = game.add.graphics(0,0);

        //set a fill and line style
        graphics.beginFill(0x000000, 0.8);
        graphics.lineStyle(2, 0x0f0f12);

        //draw a rectangle
        graphics.drawRect(780,245,90,40);

        window.graphics = graphics;

        report_txt = game.add.text(790,255,report,{
                font: "20px Arial",
                fill: "#ffffff",
                align: "center" });

}

var player_report_txt;
function player_dmg(report){

        console.log("This will show the dmg player has taken");
        var graphics = game.add.graphics(0,0);

        //set a fill and line style
        graphics.beginFill(0x000000, 0.8);
        graphics.lineStyle(2, 0x0f0f12);

        //draw a rectangle
        graphics.drawRect(250,245,90,50);

        window.graphics = graphics;

        player_report_txt = game.add.text(260,255,report,{
                font: "20px Arial",
                fill: "#ffffff",
                align: "center" });

}

var endgame_txt;
function endgame(report){

        console.log("This will show the dmg player has taken");
        var graphics = game.add.graphics(0,0);

        //set a fill and line style
        graphics.beginFill(0x000000, 0.8);
        graphics.lineStyle(2, 0x0f0f12);

        //draw a rectangle
        graphics.drawRect(250,245,90,50);

        window.graphics = graphics;

        endgame_txt = game.add.text(260,255,report,{
                font: "20px Arial",
                fill: "#ffffff",
                align: "center" });

}








/*
function topText(ai_hp, ai_mp, ai_speed)
{

//rectangle box

	var graphics = game.add.graphics(10,10);

	//set a fill and line style
	graphics.beginFill(0x000000, 0.8);
	graphics.lineStyle(2, 0x0f0f12);

	//draw a rectangle
	graphics.drawRect(90,10,860,40);

	window.graphics = graphics;

//Text

	var hp = "50";
	var hplbl = game.add.text(110,30,"Hp : " + hp,{
		font: "20px Arial",
		fill: "#ff0000",
		align: "center" });

 	var mp = "25";
        var mplbl = game.add.text(260,30,"Mp : " + mp,{
                font: "20px Arial",
                fill: "#ff0000",
                align: "center" });

	if(player.facility == "Science")
 		var speed = "3";
	else
		speed = "2";

var speedlbl = game.add.text(410,30,"Speed : " + speed,{
                font: "20px Arial",
                fill: "#ff0000",
                align: "center" });


 	var chp = ai_hp;
        var chplbl = game.add.text(560,30,"Hp : " + chp,{
                font: "20px Arial",
                fill: "#00ff00",
                align: "center" });


 	var cmp = ai_mp;
        var cmplbl = game.add.text(710,30,"Hp : " + cmp,{
                font: "20px Arial",
                fill: "#00ff00",
                align: "center" });

        var cspeed = ai_speed;
        var cspeedlbl = game.add.text(860,30,"Speed : " + cspeed,{
                font: "20px Arial",
                fill: "#00ff00",
                align: "center" });

playerSpeed(speed, cspeed);
}
*/
