//----------------------------------- global variables ------------------------------

var game_started = 0;
var timer;
var amber, rufighter, startbtn, start_bg;
var random ;//= game.rnd.integerInRange(0, 1);
/*
user details
*/

var name, avatar, stats, facility;
var name2, avatar2, stats2, facility2;

var reg, special, utility, ultimate, reg2, special2, utility2, ultimate2;

//battles
var bat;

//battle bg
var alex;
var alex_bg;

var faisal;
var faisal_bg;
var devo_loc = false;

var jess;
var jess_bg;

var tom;
var tom_bg;

var xavier;
var xavier_bg;

var retinder;
var retinder_bg;

var url = 'http://35.162.14.150';

//initializing the game
var game = new Phaser.Game(1100, 600, Phaser.CANVAS, 'phaser-example', {
        preload: preload,
        create: create,
        update: update,
        render: render,
});

function preload() 
{

    game.scale.scaleMode = Phaser.ScaleManager.SHOW_ALL;
    game.scale.setScreenSize();

	//start music
	//game.load.audio('sfx', 'assets/battletheme.mp3');

//start screen 
    game.load.image('amber', 'assets/title_screen/logo.png');
    game.load.image('rufighter', 'assets/title_screen/RUFighter_logo.png');
    game.load.image('startbtn', 'assets/title_screen/start.png');
    game.load.image('start_bg', 'assets/title_screen/slc_tiles.jpg');
//preload player images
	game.load.image('player1', 'assets/HAMID.png');
	game.load.image('player2', 'assets/picka.png');
//Science skills 
	game.load.spritesheet('ss', 'assets/science_skills/sb_special.png', 200,100);
    	game.load.spritesheet('sr', 'assets/science_skills/sb_reg.png', 200,100);
    	game.load.spritesheet('sul', 'assets/science_skills/sb_ultimate.png',200,100);
    	game.load.spritesheet('sut', 'assets/science_skills/sb_utility.png',200,100);
//engineering skills
 	game.load.image('es', 'assets/engineering_skills/eb_special.png');
   	 game.load.image('er', 'assets/engineering_skills/eb_reg.png');
    	game.load.image('eul', 'assets/engineering_skills/eb_ultimate.png');
    	game.load.image('eut', 'assets/engineering_skills/eb_utility.png');
//Battle screens

	//Xavier
	game.load.image('xavier_bg', 'assets/battle_screens/xavier/victoria_lane.jpg');

	//Faisal
	game.load.image('faisal_bg', 'assets/battle_screens/faisal/devo.jpg');
 	game.load.image('faisal', 'assets/battle_screens/faisal/faisal.png');

	//Jess
	game.load.image('jess_bg', 'assets/battle_screens/jess/outside_eng.jpg');

	//Tom
	game.load.image('tom_bg', 'assets/battle_screens/tom/bridge.jpg');

	//Alex
	game.load.image('alex_bg', 'assets/battle_screens/alex/kerr_hall.jpg');

	//Retinder
	game.load.image('retinder_bg', 'assets/battle_screens/retinder/outside_slc.jpg');


}

function create()
{
        if (!game_started)
	{
                random = game.rnd.integerInRange(0, 1);
		startScreen();
	}
        else
        {
                log(['create','phaser'], 'game starting');
                clearScreen();
                signupScreen();
        }

}

function update()
{
}

function render() 
{
                //Code from https://phaser.io/examples/v2/display/viewport
                var x = 32;
                var y = 0;
                var yi = 32;
}


//----------------------------------- Screens ---------------------------------------

function width()
{
	return window.innerWidth;
	console.log('Width: ' + window.innerWidth);
}
function height(){
	return window.innerHeight;
	console.log('Height: ' + window.innerHeight);
}

var audio;

function startScreen()
{
    log(['startScreen'],"in start screen " + window.innerHeight);
    game.stage.backgroundColor = '#000';

	//audio = game.add.audio('sfx');
	//audio.play();
	//audio.onDecoded.add(audio_start,this);

	amber = game.add.sprite(100, 200,'amber');

	game.time.events.add(Phaser.Timer.SECOND , fadePicture, this);
}

function audio_start() 
{

	console.log("in audio");
	audio.fadeIn(5000);
	//audio.play();

}

//fix the fade picture
function fadePicture()
{

	console.log("in fade");
	game.add.tween(amber).to( {alpha: 0}, 2000, Phaser.Easing.Linear.None, true);

    start_bg = game.add.sprite(0,0,'start_bg');
    start_bg.scale.setTo(0.3,0.3);

    rufighter = game.add.sprite(150, 20,'rufighter');
    //rufighter.scale.setTo(1,1)
    startbtn = game.add.sprite(800, 525,'startbtn');
    //startbtn.scale.setTo(0.8,0.8);
    startbtn.anchor.set(0.5);
    startbtn.inputEnabled = true;
    startbtn.events.onInputDown.add(start_action, this);
}

function start_action()
{
	console.log("clearing the start screen");
	remove(start_bg);
	remove(amber);
	remove(rufighter);
	remove(startbtn);
	battleFeild();
}

function battleFeild()
{
	console.log("in the battle screen");
	callingServer();
}

//------------------------------------ server related ---------------------------------
function callingServer()
{
	console.log("calling the server");
	var request = new XMLHttpRequest();
	var port = ':8081'
	log(['callingServer'], request);
        request.open('GET',url+port,true);
        request.onload = function ()
        {
                if (request.status >= 200 && request.status < 400)
                {
                        var object = JSON.parse(request.response);
                        console.log(object);
			//var avatar1 = 'assets/'+object[0].avatar;
                        //log(['callingServer','onload', 'response'],request.responseText);
                        storeJSON(object);
                        //log(['callingServer','onload','avatar1'], avatar1);
                        //game.load.image('player1', avatar1);
                        //game.add.sprite(770,100,'player1');
                }
                else
                {
			log(['callingServer', 'onload'],'game server denied request');
                        alert("game server could not be reached");
                }
        };
        request.onerror = function ()
        {
                alert("error");
        }
        request.send();
}

function storeJSON(JSON_object)
{
	uhp = JSON_object[0].stats.hp;
        console.log(uhp);  
        ulevel = JSON_object[0].stats.level;
        umana = JSON_object[0].stats.mana;
        uspeed = JSON_object[0].stats.speed;

 	chp = JSON_object[1].stats.hp;
        console.log(chp);  
        clevel = JSON_object[1].stats.level;
        cmana = JSON_object[1].stats.mana;
        cspeed = JSON_object[1].stats.speed;



	ai_info(JSON_object[1].stats);
	//ai_info(JSON_object[1].avatar, JSON_object[1].facility,JSON_object[1].name, JSON_object[1].stats);
	user_info(JSON_object[0].avatar, JSON_object[0].facility,JSON_object[0].name, JSON_object[0].stats);
	//ai_info(JSON_object[1].location, JSON_object[1].facility,JSON_object[1].name, JSON_object[1].stats);

}

/*
Player info area
*/
var txt_color;
var uhp_txt,uhp, ulevel_txt, ulevel, umana_txt, umana, uspeed_txt, uspeed;
var chp_txt,chp, clevel_txt, clevel, cmana_txt, cmana, cspeed_txt, cspeed;

function user_info(avatar, facility, name, stats)
{
	console.log("avatar "+ avatar);
	console.log(facility);
	console.log(name);
	console.log(stats);

	if( facility == "Science")
	{
		console.log("going to science");
		science(txt_color);
	}
	else
		engineering();

	if (avatar == "xavier.png")
	{
 		this.avatar = game.add.sprite(100,200,'player1');
     		this.avatar.scale.setTo(0.2,0.2);
	}
	else{
  		this.avatar = game.add.sprite(100,200,'player2');
        	this.avatar.scale.setTo(0.2,0.2);
	}

}

function ai_info(stats)
{
/*
	console.log(location);
        console.log(facility);
        console.log(name);
        console.log(stats);
*/

/*
	if( location == 'devo')
	{
		devo();
	}
*/
	devo();
	txt_color = '#000000';
	science(txt_color);
}

/*
Battle screens area
*/

//faisal
function devo()
{
	//background
	faisal_bg = game.add.sprite(30,0,'faisal_bg');
    	faisal_bg.scale.setTo(0.2,0.2);

	//character
	faisal = game.add.sprite(700/*350*/,/*150*/150,'faisal');
    	faisal.scale.setTo(0.15,0.15);

	//add sprites

}

/*
Facilities area
*/
var counter = 0;
var regTxt, specialTxt, UtilityTxt, UltimateTxt;
var ai_txt;
function science(txt_color)
{
	//log(['science'],'entered');

 	regTxt = game.add.text(120, 550, "DMG: 5     MP Cost: 0",
                                {font: "15px Arial", fill: txt_color});
        specialTxt = game.add.text(340, 550, "DMG: 8     MP Cost: 3", 
                                {font: "15px Arial", fill: txt_color});

        UitlityTxt = game.add.text(560, 550, "Heal: 5     MP Cost: 6", 
                                {font: "15px Arial", fill: txt_color});

        UltimateTxt = game.add.text(780, 550, "DMG: 18     MP Cost: 14", 
                                {font: "15px Arial", fill: txt_color});

//	log(['science'],'text is up');

	reg = game.add.sprite(100,450, 'sr');
	special = game.add.sprite(320 ,450,'ss');//, ss_action, this, 2,1,0);
	utility = game.add.sprite(540 ,450,'sut');//, utility_action, this,2,1,0);
	ultimate = game.add.sprite(760 ,450,'sul');//, ultimate_action, this, 2,1,0);
	console.log("buttons are up");

	console.log(counter);
	if(counter == 0 && uspeed == cspeed)
	{
			if( random == 0){
				console.log("Random: " + random);
                                dmg_txt = game.add.text(700,200,"Your Turn", {font: "30px Arial", fill: '#ffff00'});

				reg.inputEnabled = true;
	        		reg.events.onInputDown.add(sr_action,this);
        			special.inputEnabled = true;
	        		special.events.onInputDown.add(ss_action,this);
		        	utility.inputEnabled = true;
	        		utility.events.onInputDown.add(utility_action,this);
        			ultimate.inputEnabled = true;
        			ultimate.events.onInputDown.add(ultimate_action,this);
				counter++;
			}
			else{
				ai_txt = game.add.text(300,200, "AI GOES FIRST", {font: "45px Arial", fill: "#00ffff"});
				ai_science();
				dmg_txt = game.add.text(700,200,"Still need to add attacks for AI", {font: "30px Arial", fill: '#ffff00'});
				counter ++;
			}

	}
	else if(uspeed > cspeed)
	{
		 reg.inputEnabled = true;
	        reg.events.onInputDown.add(sr_action,this);
        	special.inputEnabled = true;
	        special.events.onInputDown.add(ss_action,this);
        	utility.inputEnabled = true;
        	utility.events.onInputDown.add(utility_action,this);
        	ultimate.inputEnabled = true;
        	ultimate.events.onInputDown.add(ultimate_action,this);


	}
	else if (speed<cspeed){

	}
	
	

	reg.inputEnabled = true;
	reg.events.onInputDown.add(sr_action,this);
	special.inputEnabled = true;
        special.events.onInputDown.add(ss_action,this);
	utility.inputEnabled = true;
        utility.events.onInputDown.add(utility_action,this);
	ultimate.inputEnabled = true;
        ultimate.events.onInputDown.add(ultimate_action,this);
	

	//text for hp and stuff 
	txt_color = '#0000ff';
        console.log("show the text");
        uhp_txt = game.add.text(170,15,"Hp: " + uhp,{font: "22px Arial", fill: txt_color});
        ulevel_txt = game.add.text(260,15,"Level: " + ulevel, {font: "22px Arial", fill: txt_color});
        umana_txt = game.add.text(370,15, "Mp: " +umana,{font: "22px Arial", fill: txt_color});
        uspeed_txt = game.add.text(480,15,"Speed: "+uspeed,{font: "22px Arial", fill: txt_color});

        console.log(uhp_txt);

  	txt_color = '#ff0000';
        console.log("show the text");
        chp_txt = game.add.text(630,15,"Hp: " + chp,{font: "22px Arial", fill: txt_color});
        clevel_txt = game.add.text(730,15,"Level: " + clevel, {font: "22px Arial", fill: txt_color});
        cmana_txt = game.add.text(830,15, "Mp: " +cmana,{font: "22px Arial", fill: txt_color});
        cspeed_txt = game.add.text(930,15,"Speed: "+cspeed,{font: "22px Arial", fill: txt_color});
        console.log(uhp_txt);

	dmg_txt.destroy();
}

var dmg_txt;
function sr_action(){
	dmg_txt.destroy();
	txt_color = '#ff0000';
	chp = chp - 5;
	chp_txt.destroy();
 	console.log("reg attack");
	chp_txt = game.add.text(630,15,"Hp: " + chp,{font: "22px Arial", fill: txt_color});
	dmg_txt = game.add.text(700,200,"DMG: 5", {font: "30px Arial", fill: txt_color});
	if(cspeed == 3) ai_science();
}

function ss_action() {
	dmg_txt.destroy();

	if( umana >=3)
	{
		txt_color = '#ff0000';
	        chp = chp - 8;
		umana = umana-3;
        	chp_txt.destroy();
        	umana_txt.destroy();
		console.log("special");
        	chp_txt = game.add.text(630,15,"Hp: " + chp,{font: "22px Arial", fill: txt_color});
		txt_color = '#0000ff'
        	umana_txt = game.add.text(370,15, "Mp: " +umana,{font: "22px Arial", fill: txt_color});
		dmg_txt = game.add.text(700,200,"DMG: 8", {font: "30px Arial", fill: txt_color});
		if(cspeed == 3) ai_science(); 
	}
}
function utility_action() {
	if(umana >= 6){
		txt_color = '#0000ff';
        	uhp = uhp + 5;
        	umana =umana-6;
        	uhp_txt.destroy();
        	umana_txt.destroy();
        	console.log("utility");
        	uhp_txt = game.add.text(170,15,"Hp: " + uhp,{font: "22px Arial", fill: txt_color});
        	txt_color = '#0000ff'
        	umana_txt = game.add.text(370,15, "Mp: " +umana,{font: "22px Arial", fill: txt_color});
		if(cspeed == 3) ai_science(); 
	}
}
function ultimate_action() {
	dmg_txt.destroy();

	if(umana >= 14)
	{
		txt_color = '#ff0000';
  	      	chp = chp - 18;
        	umana =umana-14;
        	chp_txt.destroy();
        	umana_txt.destroy();
        	console.log("ultimate");
        	chp_txt = game.add.text(630,15,"Hp: " + chp,{font: "22px Arial", fill: txt_color});
        	txt_color = '#0000ff'
        	umana_txt = game.add.text(370,15, "Mp: " +umana,{font: "22px Arial", fill: txt_color});
		dmg_txt = game.add.text(700,200,"DMG: 14", {font: "30px Arial", fill: txt_color});
		if(cspeed == 3) ai_science(); 
	}
}

function ai_science(){
	console.log("ai's turn");
	ai_txt.destroy();
}

function engineering() {
}

/*
Skill function area
*/
function reg_action() {}

//remove
function remove(element)
{
        element.visible = false;
}

//log
function log(tags, message)
{
	var prefix = '';
	for (var i = 0; i < tags.length; i++)
	{
		prefix = prefix + '['+tags[i]+']';
	}
	return prefix+' : '+message;
}
