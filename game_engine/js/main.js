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

//--------------------------- Game ---------------------------------
function getWidth() {
        return window.innerWidth * window.devicePixelRatio;
}

function getHeight() {
        return window.innerHeight * window.devicePixelRatio;
}

//var game = new Phaser.Game(Width,Height, Phaser.AUTO);
var game = new Phaser.Game(getWidth(), getHeight(), Phaser.CANVAS, 'phaser-example', {
        preload: preload,
        create: create,
        update: update,
        render: render,
});

function preload() {

	//Home Page images 
	game.load.image('amber_logo', 'assets/AmberLabs_logo.png');
        game.load.image('RUFighter_logo', 'assets/RUFighter_logo.png');
        game.load.image('DesktopBtn', 'assets/button.png');
	game.load.image('MobileBtn', 'assets/button.png');
	
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
	game.stage.backgroundColor = '#000000';

        DesktopBtn = game.add.sprite(250,190, 'DesktopBtn');
        DesktopBtn.scale.setTo(scaleRatio/2,scaleRatio/2);
	DesktopBtn.inputEnabled = true;
	DesktopBtn.events.onInputDown.add(desktop_action, this);

	var style = { 
			font: "32px Arial", 
			fill: "#000000",
			wordWrap: true, 
			wordWrapWidth: DesktopBtn.width,
			align: "center" };
	Dlbl = game.add.text(0,0,"Desktop",style);
	Dlbl.x = Math.floor(DesktopBtn.x + 30);
	Dlbl.y = Math.floor(DesktopBtn.y + 20);



	MobileBtn = game.add.sprite(250,400, 'MobileBtn');
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
}

//Mobile Title Page
function mobile_action(){
	console.log("You are using mobile version");

	amber_logo = game.add.sprite(245, 97, 'amber_logo');
        amber_logo.scale.setTo(0.2, 0.2);
        RUFighter_logo = game.add.sprite(20,87,'RUFighter_logo');
        RUFighter_logo.scale.setTo(scaleRatio*2 ,scaleRatio*2);


        //remove(amber_logo);
        //remove(RUFighter_logo);
        remove(DesktopBtn);
        remove(MobileBtn);
        remove(Dlbl);
        remove(Mlbl);

	startBtn = game.add.sprite(275,350, 'DesktopBtn');
        startBtn.scale.setTo(scaleRatio/2,scaleRatio/2);
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

}
function remove(element)
{
        element.visible = false;
}
