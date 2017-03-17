//----------------------------------- global variables ------------------------------

var game_started = 0;
var timer;
var amber, rufighter, startbtn, start_bg;

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


//----------------------------------- game frame ------------------------------------

/*
initializing the game
*/

var game = new Phaser.Game(1100, 600, Phaser.CANVAS, 'phaser-example', {
        preload: preload,
        create: create,
        update: update,
        render: render,
});

function preload() {

        game.scale.scaleMode = Phaser.ScaleManager.SHOW_ALL;
        game.scale.setScreenSize();

	//start music
	//game.load.audio('sfx', 'assets/battletheme.mp3');

	//start screen 

        game.load.image('amber', 'assets/title_screen/logo.png');
        game.load.image('rufighter', 'assets/title_screen/RUFighter_logo.png');
        game.load.image('startbtn', 'assets/title_screen/start.png');
	game.load.image('start_bg', 'assets/title_screen/slc_tiles.jpg');

	game.load.image('player1', 'assets/faisal_new.png');
	game.load.image('player2', 'assets/xavier.png');

	//Science skills 
	game.load.spritesheet('ss', 'assets/science_skills/sb_special.png', 200,100);
     	game.load.spritesheet('sr', 'assets/science_skills/sb_reg.png', 200,100);
     	game.load.spritesheet('sul', 'assets/science_skills/sb_ultimate.png',200,100);
     	game.load.spritesheet('sut', 'assets/science_skills/sb_utility.png',200,100);

 	game.load.image('es', 'assets/engineering_skills/eb_special.png');
        game.load.image('er', 'assets/engineering_skills/eb_reg.png');
        game.load.image('eul', 'assets/engineering_skills/eb_ultimate.png');
        game.load.image('eut', 'assets/engineering_skills/eb_utility.png');

	//Xavier
	game.load.image('xavier_bg', 'assets/battle_screens/xavier/victoria_lane.jpg');

	//Faisal
	game.load.image('faisal_bg', 'assets/battle_screens/faisal/devo.jpg');
 	game.load.image('faisal', 'assets/battle_screens/faisal/faisal.png');

	//Jess
	game.load.image('jess_bg', 'assets/battle_screens/jess/victoria_lane.jpg');

	//Tom
	game.load.image('tom_bg', 'assets/battle_screens/xavier/victoria_lane.jpg');

	//Alex
	game.load.image('alex_bg', 'assets/battle_screens/xavier/victoria_lane.jpg');

	//Retinder
	game.load.image('retinder_bg', 'assets/battle_screen/retinder/outside_slc.jpg');


}

function create()
{
        if (!game_started)
                startScreen();
        else
        {
                console.log("game starting");
                clearScreen();
                signupScreen();
        }

}

function update()
{
}

function render() {
                //Code from https://phaser.io/examples/v2/display/viewport
                var x = 32;
                var y = 0;
                var yi = 32;
}


//----------------------------------- Screens ---------------------------------------

function width(){
	return window.innerWidth;
	console.log('Width: ' + window.innerWidth);
}
function height(){
	return window.innerHeight;
	console.log('Height: ' + window.innerHeight);
}

var audio;

function startScreen(){

	console.log("in start screen " + window.innerHeight);
     	game.stage.backgroundColor = '#000';

	//audio = game.add.audio('sfx');
	//audio.play();
	//audio.onDecoded.add(audio_start,this);

	amber = game.add.sprite(100, 200,'amber');

	game.time.events.add(Phaser.Timer.SECOND , fadePicture, this);
}

function audio_start() {

	console.log("in audio");
	audio.fadeIn(5000);
	//audio.play();

}

//fix the fade picture
function fadePicture(){

	console.log("in fade");
	game.add.tween(amber).to( {alpha: 0}, 2000, Phaser.Easing.Linear.None, true);

        start_bg = game.add.sprite(0,0,'start_bg');
        start_bg.scale.setTo(0.3,0.3);

        rufighter = game.add.sprite(150, 20,'rufighter');
//      rufighter.scale.setTo(1,1)
        startbtn = game.add.sprite(800, 525,'startbtn');
//      startbtn.scale.setTo(0.8,0.8);
        startbtn.anchor.set(0.5);
        startbtn.inputEnabled = true;
        startbtn.events.onInputDown.add(start_action, this);
}

function start_action(){
	console.log("clearing the start screen");
	remove(start_bg);
	remove(amber);
	remove(rufighter);
	remove(startbtn);
	battleFeild();
}

function battleFeild(){
	console.log("in the battle screen");
	callingServer();
}

//------------------------------------ server related ---------------------------------
function callingServer(){

	console.log("calling the server");
	var request = new XMLHttpRequest();
        var url = 'http://52.38.67.158:8081/';
        request.open('GET',url,true);
        request.onload = function ()
        {
                if (request.status >= 200 && request.status < 400)
                {
                        //do something 
                        storeJSON(JSON.parse(request.response));
                }
                else
                {
                        console.log("URL could not be reached: "+url);
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
	ai_info();
	//ai_info(JSON_object[1].avatar, JSON_object[1].facility,JSON_object[1].name, JSON_object[1].stats);
//	user_info(JSON_object[0].avatar, JSON_object[0].facility,JSON_object[0].name, JSON_object[0].stats);
	//ai_info(JSON_object[1].location, JSON_object[1].facility,JSON_object[1].name, JSON_object[1].stats);

}

//---------------------------------- player info ----------------------------

function user_info(avatar, facility, name, stats){

	console.log( avatar); 
	console.log(facility);
	console.log(name); 
	console.log(stats);
/*
	this.avatar = game.add.sprite(6,300,'player1');
	this.avatar.scale.setTo(0.2,0.2);
*/
	if( facility == "Science")
	{
		console.log("going to science");
		science(avatar);
	}
	else
		engineering();

  	this.avatar = game.add.sprite(770,100,'player1');
        this.avatar.scale.setTo(0.2,0.2);


}

function ai_info(/*location, facility, name, stats*/){
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
	science();
}

//--------------------------------- battle screens -------------------------

//faisal
function devo(){
	//background
	faisal_bg = game.add.sprite(30,0,'faisal_bg');
        faisal_bg.scale.setTo(0.2,0.2);

	//character
	faisal = game.add.sprite(700/*350*/,/*150*/150,'faisal');
        faisal.scale.setTo(0.15,0.15);



}

// --------------------------------- facility skills ------------------------

var regTxt, specialTxt, UtilityTxt, UltimateTxt;

function science(/*avatar*/){

	console.log("in science");

 	regTxt = game.add.text(120, 550, "DMG: 5     MP Cost: 0",
                                {font: "15px Arial", fill: "#ffffff"});
        specialTxt = game.add.text(340, 550, "DMG: 8     MP Cost: 3", 
                                {font: "15px Arial", fill: "#ffffff"});

        UitlityTxt = game.add.text(560, 550, "Heal: 5     MP Cost: 6", 
                                {font: "15px Arial", fill: "#ffffff"});

        UltimateTxt = game.add.text(780, 550, "DMG: 18     MP Cost: 14", 
                                {font: "15px Arial", fill: "#ffffff"});

	console.log("text is up");

	reg = game.add.button(100,450, 'sr');
	special = game.add.button(320 ,450,'ss');//, ss_action, this, 2,1,0);
	utility = game.add.button(540 ,450,'sut');//, utility_action, this,2,1,0);
	ultimate = game.add.button(760 ,450,'sul');//, ultimate_action, this, 2,1,0);
	console.log("buttons are up");
}

function sr_action(){



}
function ss_action(){}
function utility_action(){}
function ultimate(){}
function engineering(){

}

//----------------------------------- skill function -----------------------
function reg_action(){


}

//----------------------------------- remove ---------------------------------

function remove(element)
{
        element.visible = false;
}
