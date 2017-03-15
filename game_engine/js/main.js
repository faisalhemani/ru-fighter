//----------------------------------- global variables ------------------------------

var game_started = 0;

var amber, rufighter, startbtn;

/*
user details
*/

var name, avatar, stats, facility;
var name2, avatar2, stats2, facility2;

var reg, special, utility, ultimate, reg2, special2, utility2, ultimate2;

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

	//start screen 

        game.load.image('amber', 'assets/AmberLabs_logo.png');
        game.load.image('rufighter', 'assets/RUFighter_logo.png');
        game.load.image('startbtn', 'assets/start.png');



	game.load.image('player1', 'assets/thomas.png');
	game.load.image('player2', 'assets/HAMID.png');

	//Science skills 
	game.load.image('ss', 'assets/science_skills/sb_special.png');
     	game.load.image('sr', 'assets/science_skills/sb_reg.png');
     	game.load.image('sul', 'assets/science_skills/sb_ultimate.png');
     	game.load.image('sut', 'assets/science_skills/sb_utility.png');

 	game.load.image('es', 'assets/engineering_skills/eb_special.png');
        game.load.image('er', 'assets/engineering_skills/eb_reg.png');
        game.load.image('eul', 'assets/engineering_skills/eb_ultimate.png');
        game.load.image('eut', 'assets/engineering_skills/eb_utility.png');

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
}
function height(){
	return window.innerHeight;
}
function startScreen(){

	console.log("in start screen");
     	game.stage.backgroundColor = '#000';

	amber = game.add.sprite(window.innerWidth/10, height()/2 ,'amber');

	rufighter = game.add.sprite(width()/5, height()/10,'rufighter');

	startbtn = game.add.sprite(width()/2 + width()/3 + width()/6, height() - height()/3,'startbtn');

	startbtn.anchor.set(0.5);
	startbtn.inputEnabled = true;
	startbtn.events.onInputDown.add(start_action, this);

}

function start_action(){

	console.log("clearing the start screen");
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
        console.log(JSON_object);
	console.log(JSON_object[0]);
	console.log(JSON_object[1]);


	user_info(JSON_object[0].avatar, JSON_object[0].facility,JSON_object[0].name, JSON_object[0].stats);
	ai_info(JSON_object[1].avatar, JSON_object[1].facility,JSON_object[1].name, JSON_object[1].stats);

}

//---------------------------------- player info ----------------------------

function user_info(avatar, facility, name, stats){

	console.log( avatar); 
	console.log(facility);
	console.log(name); 
	console.log(stats);

	this.avatar = game.add.sprite(width()/9,height()/8,'player1');
	this.avatar.scale.setTo(0.2,0.2);

	if( facility == "Science")
		science();
	else
		engineering();

}

function ai_info(avatar, facility, name, stats){

	console.log( avatar); 
        console.log(facility);
        console.log(name); 
        console.log(stats);

        this.avatar2 = game.add.sprite(width()/2 + width()/3,height()/2,'player2');
        this.avatar2.scale.setTo(0.2,0.2);


}

// --------------------------------- facility skills ------------------------

function science(){

	reg = game.add.sprite(width()/15 ,window.innerHeight - 100,'sr');
  	reg.anchor.set(0.5);
        reg.inputEnabled = true;
        reg.events.onInputDown.add(reg_action, this);

}

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
