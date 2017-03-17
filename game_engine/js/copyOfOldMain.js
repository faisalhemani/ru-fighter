//-------------------------- Global Variable -------------------------

var game_started = 0;
//scale
var scaleRatio = window.devicePixelRatio/3;

//TitlePage
var amber_logo;
var RUFighter_logo;
var startBtn;

//Home Screen
var DesktopBtn;
var MobileBtn;
var Dlbl;
var Mlbl;

//sign up screen 
var  signup_screen;
var signupBtn;
var Signlbl;

//char select
var charslect_screen;
var charselectBtn;
var charlbl;

//map
var map_screen;
var redBtn;

//audio
var music;

//--------mock battle setup
//science skills
var sRA, sSA, sUtility, sUltimate, RAbtn, SAbtn, Utilitybtn, Ultimatebtn, SALbl, RALbl, UtilityLbl, UltimateLbl; 

//engineering skills
var eRA, eSA, eUtility, eUltimate;

//points 
var Hptxt, hp = 50, mptxt, mp = 25, spdtxt, spd;
var cHptxt, chp = 50, cmptxt, cmp = 25, cspdtxt, cspd;
var hplbl, hplbl2, mplbl, mplbl2,spdlbl, splbl2;

var user;
var computer;
var fire;

var sci, scilbl, eng, englbl;
var counter = 0; 
var complbl;


//--------------------------- Game ---------------------------------
function getWidth() {
        return window.innerWidth;//window.devicePixelRatio;
}

function getHeight() {
        return window.innerHeight; // window.devicePixelRatio;
}

//var game = new Phaser.Game(Width,Height, Phaser.AUTO);
var game = new Phaser.Game(80%,80%,/*getWidth(), getHeight(),*/ Phaser.CANVAS, 'phaser-example', {
        preload: preload,
        create: create,
        update: update,
        render: render,
});

function preload() {

	//Home Page images 
	game.load.image('amber_logo', 'assets/AmberLabs_logo.png');
        game.load.image('RUFighter_logo', 'assets/RUFighter_logo.png');


        game.load.image('DesktopBtn', 'assets/desktop.png');
	game.load.image('MobileBtn', 'assets/mobile.png');

	//Sign up screen
	game.load.image('signup_screen', 'assets/signup_screen.jpg');
	game.load.image('signupBtn', 'assets/button.png');

	//char slection screen
	game.load.image('charselect_screen', 'assets/charactercreation_screen.jpg');
	game.load.image('charselectBtn', 'assets/button.png');


	//map
	game.load.image('map_screen', 'assets/map_screen.jpg');
        game.load.image('redBtn', 'assets/button.png');

	//mock battle screen buttons
	game.load.image('RAbtn', 'assets/button.png');
        game.load.image('SAbtn', 'assets/button.png');
 	game.load.image('Utilitybtn', 'assets/button.png');
        game.load.image('Ultimatebtn', 'assets/button.png');
 	game.load.image('sci', 'assets/button.png');
        game.load.image('eng', 'assets/button.png');

	game.load.audio('battletheme', 'assets/battletheme.mp3');
}

function create() 
{
        if (!game_started)
	//                startScreen();
        	homePage();
	else
        {
                console.log("game starting");
                clearScreen();
               // signupScreen();
                //display_game();
        }

	music = game.add.audio('battletheme', 1, true);
	//music.play();

	music.onDecoded.add(start, this);
	//music = new Sound(game, 'battletheme', 1, true);
	//game.music.setDecodedCallback(music, start, this);

	//start();

	//music.fadein(4000, true);
	//music.play();
	//music.onDecoded.add(startThemeSong, this);
	//startThemeSong();
	//battletheme.fadeIn(4000);
}

function update()
{

  /*
        if (game_started)
        {
                console.log("game starting");
                clearScreen();
                display_game();
                game_started = 0;
        }
        */
}

function render()
{
         //Code from https://phaser.io/examples/v2/display/viewport
                var x = 32;
                var y = 0;
                var yi = 32;

}

function homePage(){
	game.stage.backgroundColor = 'grey';

        DesktopBtn = game.add.sprite(getWidth()/2 - 100, getHeight()/2 - 200, 'DesktopBtn');
        DesktopBtn.scale.setTo(scaleRatio/2, scaleRatio/2);
	DesktopBtn.inputEnabled = true;
	DesktopBtn.events.onInputDown.add(desktop_action, this);
/*
	var style = { 
			font: "32px Arial", 
			fill: "#000000",
			wordWrap: true, 
			wordWrapWidth: DesktopBtn.width,
			align: "center" };
	Dlbl = game.add.text(0,0,"Desktop",style);
	Dlbl.x = Math.floor(DesktopBtn.x + 30);
	Dlbl.y = Math.floor(DesktopBtn.y + 20);
*/


	MobileBtn = game.add.sprite(getWidth()/2 - 100, getHeight()/2 + 100, 'MobileBtn');
        MobileBtn.scale.setTo(scaleRatio/2,scaleRatio/2);
        MobileBtn.inputEnabled = true;
        MobileBtn.events.onInputDown.add(mobile_action, this);
	var style = {
			font: "32px Arial",
			fill: "#000000",
			wordWrap: true,
			wordWrapWidth: MobileBtn.width,
			align : "center"}
	Mlbl = game.add.text(0,0,"Mobile",style);
        Mlbl.x = Math.floor(MobileBtn.x + 40);
        Mlbl.y = Math.floor(MobileBtn.y + 20);

}
/*
async function start() {
	//music.play();
	//var i;
	//setInterval(function() {
	//	music.volume += 0.1;
	//}, 500);
	//for(i = 0; i < 10; i++) {
	//	setTimeout(500);
	//	music.volume += 0.1;
	//	console.log(music.volume);
	//}
	//music.volume = 1;
	//music.play();
	music.fadeIn(4000);
	console.log('Playing the music');
}*/

// Desktop Title page
function desktop_action() {
	console.log("You are using desktop version");

	amber_logo = game.add.sprite(390, 190, 'amber_logo');
        amber_logo.scale.setTo(scaleRatio, scaleRatio);
        RUFighter_logo = game.add.sprite(50,175,'RUFighter_logo');
        RUFighter_logo.scale.setTo(scaleRatio*3 ,scaleRatio*3);


	//remove(amber_logo);
	//remove(RUFighter_logo);
	remove(DesktopBtn);
	remove(MobileBtn);
	remove(Dlbl);
	remove(Mlbl);

	startBtn = game.add.sprite(400,575, 'DesktopBtn');
        startBtn.scale.setTo(scaleRatio/2,scaleRatio/2);
        startBtn.inputEnabled = true;
        startBtn.events.onInputDown.add(D_start_action, this);

        var style = { 
                        font: "32px Arial", 
                        fill: "#000000",
                        wordWrap: true, 
                        wordWrapWidth: startBtn.width,
                        align: "center" };
        Dlbl = game.add.text(0,0,"Start",style);
        Dlbl.x = Math.floor(startBtn.x + 50);
        Dlbl.y = Math.floor(startBtn.y + 20);
}

function D_start_action(){

	remove(amber_logo);
        remove(RUFighter_logo);
	remove(startBtn);

	//science
 	sci = game.add.sprite(getWidth()/2 -100,475, 'sci');
        sci.scale.setTo(scaleRatio/2,scaleRatio/2);
        sci.inputEnabled = true;
        sci.events.onInputDown.add(sci_action, this);

        var style = { 
                        font: "32px Arial", 
                        fill: "#000000",
                        wordWrap: true, 
                        wordWrapWidth: sci.width,
                        align: "center" };
        scilbl = game.add.text(0,0,"Science",style);
        scilbl.x = Math.floor(sci.x);
        scilbl.y = Math.floor(sci.y + 20);

	//eng
	eng = game.add.sprite(getWidth()/2 +100,575, 'eng');
        eng.scale.setTo(scaleRatio/2,scaleRatio/2);
        eng.inputEnabled = true;
        eng.events.onInputDown.add(eng_action, this);

        var style = { 
                        font: "32px Arial", 
                        fill: "#000000",
                        wordWrap: true, 
                        wordWrapWidth: eng.width,
                        align: "center" };
        englbl = game.add.text(0,0,"Engineering",style);
        englbl.x = Math.floor(eng.x);
        englbl.y = Math.floor(eng.y + 20);

}

function sci_action(){
	remove(sci);
	remove(scilbl);
	remove(eng);
	remove(englbl);

	//ra
        RAbtn = game.add.sprite(getWidth()/2 - getWidth()/4 * 2 ,getHeight() - 100, 'RAbtn');
        RAbtn.scale.setTo(scaleRatio/2,scaleRatio/2);
        RAbtn.inputEnabled = true;
        RAbtn.events.onInputDown.add(RA_action, this);

        var style = { 
                        font: "32px Arial", 
                        fill: "#000000",
                        wordWrap: true, 
                        wordWrapWidth: RAbtn.width,
                        align: "center" };
        RAlbl = game.add.text(0,0,"Reg. attack",style);
        RAlbl.x = Math.floor(RAbtn.x);
        RAlbl.y = Math.floor(RAbtn.y + 20);

	//sa
        SAbtn = game.add.sprite(getWidth()/2 - getWidth()/4,getHeight() - 100, 'SAbtn');
        SAbtn.scale.setTo(scaleRatio/2,scaleRatio/2);
        SAbtn.inputEnabled = true;
        SAbtn.events.onInputDown.add(SA_action, this);

        var style = { 
                        font: "32px Arial", 
                        fill: "#000000",
                        wordWrap: true, 
                        wordWrapWidth: SAbtn.width,
                        align: "center" };
        SAbtnlbl = game.add.text(0,0,"Special attack",style);
        SAbtnlbl.x = Math.floor(SAbtn.x);
        SAbtnlbl.y = Math.floor(SAbtn.y + 20);

	//ultimate
        Ultimatebtn = game.add.sprite(getWidth()/2 + 50,getHeight() -100, 'Ultimatebtn');
        Ultimatebtn.scale.setTo(scaleRatio/2,scaleRatio/2);
        Ultimatebtn.inputEnabled = true;
        Ultimatebtn.events.onInputDown.add(ultimate_action, this);

        var style = { 
                        font: "32px Arial", 
                        fill: "#000000",
                        wordWrap: true, 
                        wordWrapWidth: Ultimatebtn.width,
                        align: "center" };
        Ultimatelbl = game.add.text(0,0,"Ultimate",style);
        Ultimatelbl.x = Math.floor(Ultimatebtn.x);
        Ultimatelbl.y = Math.floor(Ultimatebtn.y + 20);

 	//utility
        Utilitybtn = game.add.sprite(getWidth()/2 + getWidth()/4,getHeight()-100, 'Utilitybtn');
        Utilitybtn.scale.setTo(scaleRatio/2,scaleRatio/2);
        Utilitybtn.inputEnabled = true;
        Utilitybtn.events.onInputDown.add(utility_action, this);

        var style = { 
                        font: "32px Arial", 
                        fill: "#000000",
                        wordWrap: true, 
                        wordWrapWidth: Utilitybtn.width,
                        align: "center" };
        Utilitylbl = game.add.text(0,0,"Utility",style);
        Utilitylbl.x = Math.floor(Utilitybtn.x);
        Utilitylbl.y = Math.floor(Utilitybtn.y + 20);

	Hptxt = "HP: " + hp;
        mptxt = "MP: " + mp;
        spd = 3;
        spdtxt = "SPD: " + spd;

        cHptxt = "HP: " + chp;
        cmptxt = "MP: " + cmp;
        cspd = 2;
        cspdtxt = "SPD: " + cspd;

        hplbl = game.add.text(10,10, Hptxt, {font: "15px Arial", fill: "#ff00ff"});
        mplbl = game.add.text(110,10, mptxt, {font: "15px Arial", fill: "#ff00ff"});
 	spdlbl = game.add.text(210,10, spdtxt, {font: "15px Arial", fill: "#ff00ff"});

  	hplbl2 = game.add.text(410,10, cHptxt, {font: "15px Arial", fill: "#ff3654"});
	mplbl2 = game.add.text(510,10, cmptxt, {font: "15px Arial", fill: "#ff3654"});
       	spdlbl2 = game.add.text(610,10,cspdtxt, {font: "15px Arial", fill: "#ff3654"});

}

function SA_action()
{
	if( mp >= 3){
	hplbl.destroy();
	mplbl.destroy();
	hplbl2.destroy();
	mplbl2.destroy();
	if (counter > 0)
	{
		console.log(counter);
		counter++;
		mp++;
		cmp++;
        consoleDisplay();

	}

	chp = chp - 8;
        mp = mp - 3;
        consoleDisplay();
	computerMove();
	}
	complbl.destroy();
}

function computerMove()
{



	if(counter == 0)
	{
		counter++;
	}

 	if (cmp >= 14)
        {
                hp = hp - 18;
                cmp = cmp - 14;

		complblb =  game.add.text(20,20, "Comp. attack: Ultimate", {font: "35px Arial", fill: "#ff00ff"});

        consoleDisplay();

                updateText();
        }
        else if (cmp >= 6)
        {
                hp = hp - 10;
                cmp = cmp - 6;

 		complblb =  game.add.text(20,20, "Comp. attack: Utility", {font: "35px Arial", fill: "#ff00ff"});

        consoleDisplay();

                updateText();
        }
        else if (cmp >= 3)
        {
                hp = hp - 8;
                cmp = cmp -3;


 		complblb =  game.add.text(20,20, "Comp. attack: Special", {font: "35px Arial", fill: "#ff00ff"});

        consoleDisplay();

                updateText();

        }
        else if (cmp >= 0)
        {
                hp = hp -3;
 		complblb =  game.add.text(20,20, "Comp. attack: Regular", {font: "35px Arial", fill: "#ff00ff"});

        consoleDisplay();
                updateText();
        }

}

function RA_action(){

// complbl.destroy();


	 hplbl.destroy();
        mplbl.destroy();
        hplbl2.destroy();
        mplbl2.destroy();
        if (counter > 0)
        {
                counter++;
                mp++;
                cmp++;
        consoleDisplay();


        }

        chp = chp - 6;
       // mp = mp - 3;

        consoleDisplay();

        computerMove();


}

function utility_action(){

 //complbl.destroy();

	if (mp >=6)
	{

	 hplbl.destroy();
        mplbl.destroy();
        hplbl2.destroy();
        mplbl2.destroy();
        if (counter > 0)
        {
                counter++;
                mp++;
                cmp++;
        consoleDisplay();

        }

        chp = chp - 10;
        mp = mp - 8;
        consoleDisplay();

        computerMove();
	}

}

function ultimate_action(){

 //complbl.destroy();


	if( mp >=14)
	{
	 hplbl.destroy();
        mplbl.destroy();
        hplbl2.destroy();
        mplbl2.destroy();
        if (counter > 0)
        {
                counter++;
                mp++;
                cmp++;
        	        consoleDisplay();

	}

        chp = chp - 18;
        mp = mp - 14;
	consoleDisplay();
        computerMove();
	}

}
function eng_action(){
	remove(sci);
        remove(scilbl);
        remove(eng);
        remove(englbl);


}

function updateText(){

	Hptxt = "HP: " + hp;
        mptxt = "MP: " + mp;
        spd = 3;
        spdtxt = "SPD: " + spd;

        cHptxt = "HP: " + chp;
        cmptxt = "MP: " + cmp;
        cspd = 2;
        cspdtxt = "SPD: " + cspd;

        hplbl = game.add.text(10,10, Hptxt, {font: "15px Arial", fill: "#ff00ff"});
        mplbl = game.add.text(110,10, mptxt, {font: "15px Arial", fill: "#ff00ff"});
        spdlbl = game.add.text(210,10, spdtxt, {font: "15px Arial", fill: "#ff00ff"});

        hplbl2 = game.add.text(410,10, cHptxt, {font: "15px Arial", fill: "#ff3654"});
        mplbl2 = game.add.text(510,10, cmptxt, {font: "15px Arial", fill: "#ff3654"});
        spdlbl2 = game.add.text(610,10,cspdtxt, {font: "15px Arial", fill: "#ff3654"});

        checkVictory();


}

function checkVictory(){
	
	  if (hp <= 0)
                {
	   		hplbl.destroy();
        	        hplbl = game.add.text(10,10, "You Lost :(", {font: "55px Arial", fill: "#ff00ff"});
                	mplbl.destroy();
                	hplbl2.destroy();
                	mplbl2.destroy();
                	spdlbl.destroy();
                	spdlbl2.destroy();
                	defeat();
                }
                else if (chp <=0)
                {
  			hplbl.destroy();
                	hplbl = game.add.text(10,10, "You WON :)", {font: "55px Arial", fill: "#ff00ff"});
                	mplbl.destroy();
                	hplbl2.destroy();
                	mplbl2.destroy();
                	spdlbl.destroy();
                	spdlbl2.destroy();
                	victory();
                }
}

function consoleDisplay()
{
	console.log("HP: " + hp + " MP: " + mp);
        console.log("CHP: " + chp + " CMP: " + cmp);

}
function victory(){
}
function defeat(){
}

//Mobile Title Page
function mobile_action(){
	console.log("You are using mobile version");
//--------------------- need a pic for amber labs ------------------------------------------------
	amber_logo = game.add.sprite(getWidth()/2, getHeight()/2 - getHeight()/4, 'amber_logo');
        amber_logo.scale.setTo(scaleRatio/4, scaleRatio/4);
        RUFighter_logo = game.add.sprite(getWidth()/2 - getWidth()/3, getHeight()/4,'RUFighter_logo');
//      RUFighter_logo.scale.setTo(scaleRatio/2 ,scaleRatio/2);


        //remove(amber_logo);
        //remove(RUFighter_logo);
        remove(DesktopBtn);
        remove(MobileBtn);
        remove(Dlbl);
        remove(Mlbl);

	startBtn = game.add.sprite(getWidth()/2 - getWidth()/10 , getHeight()/2, 'DesktopBtn');
        startBtn.scale.setTo(scaleRatio/5,scaleRatio/5);
        startBtn.inputEnabled = true;
        startBtn.events.onInputDown.add(M_start_action, this);

        var style = { 
                        font: "32px Arial", 
                        fill: "#000000",
                        wordWrap: true, 
                        wordWrapWidth: startBtn.width,
                        align: "center" };
        Dlbl = game.add.text(0,0,"Start",style);
        Dlbl.x = Math.floor(startBtn.x + 50);
        Dlbl.y = Math.floor(startBtn.y + 20);


}

function M_start_action() {

	remove(amber_logo);
        remove(RUFighter_logo);
        remove(startBtn);

	signupScreen();
}

//sign up screen
function signupScreen()
{
        console.log("in sign up screen");
        signup_screen = game.add.sprite(0,0,'signup_screen');
	//signup_screen.scale.setTo(scaleRatio*2, scaleRatio*2);
	signup_screen.width = getWidth();
	signup_screen.height = getHeight();

        signupBtn = game.add.button(358,getHeight()-300, 'signupBtn' , signup_action, this, 2,1,0);
	signupBtn.width = 300;
	signupBtn.height = 78;
	signupBtn.inputEnabled = true;
        signupBtn.events.onInputDown.add(signup_action, this);

        var style = { 
                        font: "38px Arial", 
                        fill: "#000000",
                        wordWrap: true, 
                        wordWrapWidth: signupBtn.width,
                        align: "center" };
        Signlbl = game.add.text(0,0,"Sign Up",style);
        Signlbl.x = Math.floor(signupBtn.x + 50);
        Signlbl.y = Math.floor(signupBtn.y + 20);


//      btn =
}

function signup_action(){

        console.log('clearing sign up screen and goig to char slection');
        //clearScreen();

        remove(signup_screen);
        remove(signupBtn);
        charSelectScreen();
}

function charSelectScreen()
{
        console.log("in char select screen");
        charselect_screen = game.add.sprite(0,0,'charselect_screen');
	charselect_screen.width = getWidth();
        charselect_screen.height = getHeight();

	charselectBtn = game.add.button(690,1278, 'charselectBtn' , charselect_action, this, 2,1,0);
        charselectBtn.width = 200;
        charselectBtn.height = 78;
        charselectBtn.inputEnabled = true;
        charselectBtn.events.onInputDown.add(charselect_action, this);

        var style = { 
                        font: "38px Arial", 
                        fill: "#000000",
                        wordWrap: true, 
                        wordWrapWidth: charselectBtn.width,
                        align: "center" };
        charlbl = game.add.text(0,0,"Submit",style);
        charlbl.x = Math.floor(charselectBtn.x + 50);
        charlbl.y = Math.floor(charselectBtn.y + 20);

}

function charselect_action(){

        console.log("clearing char screen and going to the map");
        remove(charselect_screenn);
        remove(charselectBtn);
	remove(charlbl);
        map_screen = game.add.sprite(0,0,'map_screen');
        redBtn = game.add.button(300,300,'redBtn',redBtn_action,this ,2, 1 ,0);
}


function redBtn_action()
{
        remove(map_screen);
        remove(redBtn);
        console.log("going to battle screen");
//        display_game();
}

//-----------------------------------------CALLING SERVER FUNCTION ----------------------
function callingServer(){

	var request = new XMLHttpRequest();
        var url = 'http:52.38.67.158/player.json';
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

function computerServer(){

	var request = new XMLHttpRequest();
        var url = 'http:52.38.67.158/AI_ExampleLv1.json';
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


function remove(element)
{
        element.visible = false;
}
