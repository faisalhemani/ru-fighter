var mana_count = 0;

var random ;
var reg, special, utility, ultimate, reg2, special2, utility2, ultimate2;
var uhp_txt,uhp, ulevel_txt, ulevel, umana_txt, umana, uspeed_txt, uspeed;
var chp_txt,chp, clevel_txt, clevel, cmana_txt, cmana, cspeed_txt, cspeed;

function battle_functions()
{
	console.log("In battle function");
	ai();
	//playerSpeed();
	game.physics.startSystem(Phaser.Physics.ARCADE);
}

function ai()
{
	console.log("random: " + random);

	if(random == 1)
	{
		topText(ai_science_hp(), ai_science_mp(), ai_science_speed());
	}
	else
		topText(ai_eng_hp(), ai_eng_mp(), ai_eng_speed());
}


function topText(ai_hp, ai_mp, ai_speed)
{
c();
//rectangle box
console.log("IN TOP TEXT FUNCTION");
	var graphics = game.add.graphics(10,10);

	//set a fill and line style
	graphics.beginFill(0x000000, 0.8);
	graphics.lineStyle(2, 0x0f0f12);

	//draw a rectangle
	graphics.drawRect(90,10,860,40);

	window.graphics = graphics;

//Text

	uhp = "50";
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

var player_counter = 0, ai_counter = 0, counter = 0;


function playerSpeed(user, computer)
{
console.log("IM PS, counter: " + counter);
if(counter == 0)
{
	console.log("checking which player will go first");
 	random = game.rnd.integerInRange(0, 1);
	if(user == computer)
	{
		if(random == 1)
		{
			chance("You Will Go First, All The Best");
			console.log("player will go first");
			player_counter++;
			 if(player.facility == "Science")
		                science();
        		else
        		        engineering();
	/*		 if (computer == 3)
                        	aisci_attacks();
               	 	else
                        	aieng_attacks();
*/

		}
		else
		{
			ai_counter++;
 			chance("AI Will Go First");
			console.log("AI will go first");
			if (computer == 3)
        	        {
			       aisci_attacks();
			//	if(player.facility == "Science")
                        //        	science();
                        //	else
                        //        	engineering();
			}
	                else{
                	        aieng_attacks();
			//	if(player.facility == "Science")
                          //              science();
                        //        else
                        //                engineering();
                        }

		}
	}
	else if (user > computer)
	{
		player_counter++;
		 chance("You Will Go First, All The Best");
		console.log("player will go first");
		if(player.facility == "Science")
                        science();
                else
	                engineering();
//		 if (computer == 3)
  //                              aisci_attacks();
    //                    else
      //                          aieng_attacks();



	}
	else
	{
		ai_counter++;
	 	chance("AI Will Go First");
		console.log("AI will go first");

		if (computer == 3)
			aisci_attacks();
		else
			aieng_attacks();
	//	 if(player.facility == "Science")
          //              science();
            //    else
              //          engineering();
	}

	counter++;
	//truBattle();
}

}

//var mana_count = 0;

function trueBattle()
{
	console.log("IN TRUE BATTLE, MANACOUNTER: " + mana_count);
	message_txt.destroy;
	report_txt.destroy;
	player_report_txt.destroy;

	cgraphics.visible = false;
	console.log("counter: " + counter);
	console.log("user HP: " + uhp);
	console.log("AI HP: " + chp);
	if(counter > 0 && uhp > 0 && chp > 0)
	{
		cgraphics.visible = true;
		if(player_counter < ai_counter)
		{
			  chance("Now The YOU Will Attack");

                        if(player.facility == "Science")
                                science();
                        else
                                engineering();
                        ai_counter = ai_counter + 2; //uhp = uhp - 20;
                        console.log("AI cOUNTER: " + ai_counter);

//			 player_counter++;// chp = chp - 30;
  //                      console.log("Player counter: " + player_counter);

		}
		else
		{
//			console.log("player count is heigher so its AI's turen");
                         chance("Now The AI Will Attack");
                        if (cspeed == 3)
                                aisci_attacks();
                        else
                                aieng_attacks();
  //                      ai_counter = ai_counter + 2; //uhp = uhp - 20;
    //                    console.log("AI cOUNTER: " + ai_counter);

//
//			 chance("Now The YOU Will Attack");
//
//			if(player.facility == "Science")
  //                      	science();
    //            	else
      //                  	engineering();
			player_counter = player_counter + 2;// chp = chp - 30;
			console.log("Player counter: " + player_counter);
		}
	mana_count++;
	console.log("MANA COUNTER : " + mana_count);
	}
	if((mana_count%2))
	{
		cmana_txt.destroy;
		umana_txt.destroy;
		cmana = cmana+1;
        	cmana_txt = game.add.text(710,30,"Mp : " + cmana,{
                font: "20px Arial",
                fill: "#00ff00",
                align: "center" });
	 	umana = umana+1;
         	umana_txt = game.add.text(260,30,"Mp : " + umana,{
                font: "20px Arial",
                fill: "#ff0000",
                align: "center" });
		console.log("AI MP: " + cmana + "  USER MP: " + umana);
 	}

}

//var dmg_txt;

function sr_action(){
	chp = chp - 5;
	chp_txt.destroy();
 	console.log("user : reg attack");
	chp_txt = game.add.text(560,30,"Hp : " + chp,{
                font: "20px Arial",
                fill: "#00ff00",
                align: "center" });
	//chp_txt = game.add.text(630,15,"Hp: " + chp,{font: "22px Arial", fill: txt_color});
	report= "DMG: 5";
	ai_dmg(report);
	trueBattle();
//	if(cspeed == 3) ai_science();
}

function ss_action() {
	if( umana >=3)
	{
		//txt_color = '#ff0000';
	        chp = chp - 8;
		umana = umana-3;
        	chp_txt.destroy();
        	umana_txt.destroy();
		console.log("user : special");
        	chp_txt = game.add.text(560,30,"Hp : " + chp,{
                	font: "20px Arial",
                	fill: "#00ff00",
            		align: "center" });
		umana_txt = game.add.text(260,30,"Mp : " + umana,{
                	font: "20px Arial",
               	 	fill: "#ff0000",
                	align: "center" });
		report = "DMG: 8 ";
		ai_dmg(report);
		player_report = "MP: -3";
		player_dmg(player_report);
		trueBattle();

//		if(cspeed == 3) ai_science(); 
	}
}
function utility_action() {
	if(umana >= 6){
//		txt_color = '#0000ff';
        	uhp = uhp + 5;
        	umana =umana-6;
        	uhp_txt.destroy();
        	umana_txt.destroy();
        	console.log("user: utility");
		uhp_txt = game.add.text(110,30,"Hp : " + uhp,{
                	font: "20px Arial",
                	fill: "#ff0000",
                	align: "center" });
                umana_txt = game.add.text(260,30,"Mp : " + umana,{
                        font: "20px Arial",
                        fill: "#ff0000",
                        align: "center" });
                player_report = "HEAL: 5";
                player_dmg(player_report);
            trueBattle();
//		if(cspeed == 3) ai_science(); 
	}
}
function ultimate_action() {
//	dmg_txt.destroy();

	if(umana >= 14)
	{
		txt_color = '#ff0000';
  	      	chp = chp - 18;
        	umana =umana-14;
        	chp_txt.destroy();
        	umana_txt.destroy();
        	console.log("user: ultimate");
 		chp_txt = game.add.text(560,30,"Hp : " + chp,{
                        font: "20px Arial",
                        fill: "#00ff00",
                        align: "center" });
                umana_txt = game.add.text(260,30,"Mp : " + umana,{
                        font: "20px Arial",
                        fill: "#ff0000",
                        align: "center" });
                report = "DMG: 18 ";
                ai_dmg(report);
                player_report = "MP: -14";
                player_dmg(player_report);


              trueBattle();
	}
}

//engineering skill attacks for player --------------------------------------------------------

function er_action(){
	chp = chp - 5;
	chp_txt.destroy();
 	console.log("user : reg attack");
	chp_txt = game.add.text(560,30,"Hp : " + chp,{
                font: "20px Arial",
                fill: "#00ff00",
                align: "center" });
	//chp_txt = game.add.text(630,15,"Hp: " + chp,{font: "22px Arial", fill: txt_color});
	report= "DMG: 5";
	ai_dmg(report);
//	trueBattle();
 if (computer == 3)
                        aisci_attacks();
                else
                        aieng_attacks();


//	if(cspeed == 3) ai_science();
}

function es_action() {
	if( umana >=3)
	{
		//txt_color = '#ff0000';
	        chp = chp - 8;
		umana = umana-3;
        	chp_txt.destroy();
        	umana_txt.destroy();
		console.log("user : special");
        	chp_txt = game.add.text(560,30,"Hp : " + chp,{
                	font: "20px Arial",
                	fill: "#00ff00",
            		align: "center" });
		umana_txt = game.add.text(260,30,"Mp : " + umana,{
                	font: "20px Arial",
               	 	fill: "#ff0000",
                	align: "center" });
		report = "DMG: 8 ";
		ai_dmg(report);
		player_report = "MP: -3";
		player_dmg(player_report);
//trueBattle();
 if (computer == 3)
                        aisci_attacks();
                else
                        aieng_attacks();

//		if(cspeed == 3) ai_science(); 
	}
}
function eutility_action() {
	if(umana >= 6){
//		txt_color = '#0000ff';
        	chp = chp - 10;
        	umana =umana-6;
        	chp_txt.destroy();
        	umana_txt.destroy();
        	console.log("user: utility");
		chp_txt = game.add.text(560,30,"Hp : " + chp,{
                        font: "20px Arial",
                        fill: "#00ff00",
                        align: "center" });
                umana_txt = game.add.text(260,30,"Mp : " + umana,{
                        font: "20px Arial",
                        fill: "#ff0000",
                        align: "center" });
                report = "DMG: 10"
		ai_dmg(report);
                player_report = "MP: -6";
                player_dmg(player_report);
//          trueBattle();
 if (computer == 3)
                        aisci_attacks();
                else
                        aieng_attacks();

//		if(cspeed == 3) ai_science(); 
	}
}
function eultimate_action() {
//	dmg_txt.destroy();

	if(umana >= 14)
	{
		//txt_color = '#ff0000';
  	      	chp = chp - 18;
        	umana = umana - 14;
        	chp_txt.destroy();
        	umana_txt.destroy();
        	console.log("user: ultimate");
 		chp_txt = game.add.text(560,30,"Hp : " + chp,{
                        font: "20px Arial",
                        fill: "#00ff00",
                        align: "center" });
                umana_txt = game.add.text(260,30,"Mp : " + umana,{
                        font: "20px Arial",
                        fill: "#ff0000",
                        align: "center" });
                report = "DMG: 18 ";
                ai_dmg(report);
                player_report = "MP: -14";
                player_dmg(player_report);
 if (computer == 3)
                        aisci_attacks();
                else
                        aieng_attacks();


//            trueBattle();
	}
}


//---------------------------AI Attack Functions ---------------------------------------------
function ai_ultimate_action()
{

	uhp = uhp - 18;
	cmana = cmana - 14;
	uhp_txt.destroy();
       	cmana_txt.destroy();
	uhp_txt = game.add.text(110,30,"Hp : " + uhp,{
		font: "20px Arial",
		fill: "#ff0000",
		align: "center" });
	cmana_txt = game.add.text(710,30,"Mp : " + cmana,{
                font: "20px Arial",
                fill: "#00ff00",
                align: "center" });
	player_report = "DMG: 18 ";
        player_dmg(player_report);
        report = "MP: -14";
        ai_dmg(report);
  //      trueBattle();


}
function ai_utility_action()
{

	chp = chp + 10;
        cmana = cmana - 6;
        chp_txt.destroy();
        cmana_txt.destroy();
	chp_txt = game.add.text(560,30,"Hp : " + chp,{
                font: "20px Arial",
                fill: "#00ff00",
                align: "center" });
        cmana_txt = game.add.text(710,30,"Mp : " + cmana,{
                font: "20px Arial",
                fill: "#00ff00",
                align: "center" });
        report = "MP: -6 and HEAL: 10";
        ai_dmg(report);
//        trueBattle();


}
function  ai_ss_action()
{

	uhp = uhp - 8;
        cmana = cmana - 3;
        uhp_txt.destroy();
        cmana_txt.destroy();
        uhp_txt = game.add.text(110,30,"Hp : " + uhp,{
                font: "20px Arial",
                fill: "#ff0000",
                align: "center" });
        cmana_txt = game.add.text(710,30,"Mp : " + cmana,{
                font: "20px Arial",
                fill: "#00ff00",
                align: "center" });
        player_report = "DMG: 8 ";
        player_dmg(player_report);
        report = "MP: -3";
        ai_dmg(report);
//        trueBattle();


}
function ai_sr_action()
{

	uhp = uhp - 5;
       	//cmana = cmp - 14;
        uhp_txt.destroy();
        //cmana_txt.destroy();
        uhp_txt = game.add.text(110,30,"Hp : " + uhp,{
                font: "20px Arial",
                fill: "#ff0000",
                align: "center" });
       // cmana_txt = game.add.text(710,30,"Mp : " + cmana,{
         //       font: "20px Arial",
           //     fill: "#00ff00",
             //   align: "center" });
        player_report = "DMG: 5 ";
        player_dmg(player_report);
       // report = "MP: -14";
       // ai_dmg(report);
        //trueBattle();


}



// AI ATTACK FOR ENG  ---------------------------------------------------------------------------

function ai_eultimate_action()
{

	uhp = uhp - 18;
	cmana = cmana - 14;
	uhp_txt.destroy();
       	cmana_txt.destroy();
	uhp_txt = game.add.text(110,30,"Hp : " + uhp,{
		font: "20px Arial",
		fill: "#ff0000",
		align: "center" });
	cmana_txt = game.add.text(710,30,"Mp : " + cmana,{
                font: "20px Arial",
                fill: "#00ff00",
                align: "center" });
	player_report = "DMG: 18 ";
        player_dmg(player_report);
        report = "MP: -14";
        ai_dmg(report);
      //  trueBattle();


}
function ai_eutility_action()
{

	uhp = uhp - 10;
        cmana = cmana - 6;
        uhp_txt.destroy();
        cmana_txt.destroy();
	uhp_txt = game.add.text(110,30,"Hp : " + uhp,{
                font: "20px Arial",
                fill: "#ff0000",
                align: "center" });
        cmana_txt = game.add.text(710,30,"Mp : " + cmana,{
                font: "20px Arial",
                fill: "#00ff00",
                align: "center" });
        report = "MP: -6";
        ai_dmg(report);
	 player_report = "DMG: 10 ";
        player_dmg(player_report);
    //    trueBattle();


}
function  ai_es_action()
{

	uhp = uhp - 8;
        cmana = cmana - 3;
        uhp_txt.destroy();
        cmana_txt.destroy();
        uhp_txt = game.add.text(110,30,"Hp : " + uhp,{
                font: "20px Arial",
                fill: "#ff0000",
                align: "center" });
        cmana_txt = game.add.text(710,30,"Mp : " + cmana,{
                font: "20px Arial",
                fill: "#00ff00",
                align: "center" });
        player_report = "DMG: 8 ";
        player_dmg(player_report);
        report = "MP: -3";
        ai_dmg(report);
  //      trueBattle();


}
function ai_er_action()
{

	uhp = uhp - 5;
        uhp_txt.destroy();
        //cmana_txt.destroy();
        uhp_txt = game.add.text(110,30,"Hp : " + uhp,{
                font: "20px Arial",
                fill: "#ff0000",
                align: "center" });
        player_report = "DMG: 5 ";
        player_dmg(player_report);
//        trueBattle();


}
