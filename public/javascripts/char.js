//the background
var background;

//variables to save starting position of mouse or finger
var startX;
var startY;

//sub variable
var moveIndex;

//tracks map speed
var screenSpeed;

//a group to place background and characters
var charGroup;

//the character you will select
var characterChoice;

//character choices
var player1;
var player2;

//Text to let the user know which character is selected
var text;
var selectedChar = "Selected Character: ";
var style;

//boolean to keep track of which character is selected
var player1Selected;
var player2Selected;

var char = {
        preload: function () {
                console.log("CHARSELECT");
        },
        create: function () {
		//goFullScreen();
		charGroup = game.add.group();
		background = game.add.image(0,0,"bg");
		background.height = game.height;
		background.width = game.width;
		charGroup.add(background);

		//Creates xavier and adds an event listener
		player1 = game.add.image(game.width/4, game.height - game.height/3,"Xavier");
		player1.selected = false;
		xavier.anchor.setTo(0.5);
		xavier.inputEnabled = true;
		xavier.events.onInputDown.add(selectXavier, this);
		xavier.events.onInputUp.add(confirmXavier, this);
		charGroup.add(xavier);

		//Creates Faisal and adds an event listener
		faisal = game.add.image((3 * game.width)/4, game.height - game.height/3, "Faisal");
		faisal.selected = false;
		faisal.anchor.setTo(0.5);
		faisal.inputEnabled = true;
		faisal.events.onInputDown.add(selectFaisal, this);
		faisal.events.onInputUp.add(confirmFaisal, this);
		charGroup.add(faisal);

		charGroup.x = (game.width - background.width)/2;
		charGroup.y = (game.width - background.width)/2;

		game.input.onDown.add(fingerOnScreen, this);

		style = { font: "32px Arial", fill: "#000000", wordWrap: false, wordWrapWidth: "100px", align: "center"};
		text = game.add.text(game.width/2, 0, "Selected Character is not chosen yet", style);
		//next state
                this.state.start('map');
        },
	fingerOnScreen: function ()
	{
		startX = game.input.worldX;
		startY = game.input.worldY;
		charGroup.saveX = charGroup.x;
		charGroup.saveY = charGroup.y;

		game.input.onDown.remove(fingerOnScreen);
		game.input.onUp.add(stopScreen);
		//moveIndex = game.input.addMoveCallback(dragScreen, this);
	},

	dragScreen: function()
	{
		var currentX = game.input.worldX;
		var currentY = game.input.worldY;
		var deltaX = startX - currentX;
		var deltaY = startY - currentY;
		if (deltaX * deltaX + deltaY * deltaY > 25)
		{
			characterChoice = null;
		}
		if(mapGroup.x < - map.width + game.width)
		{
               		mapGroup.x = - map.width + game.width;
          	}
          	if(mapGroup.x > 0)
		{
               		mapGroup.x = 0;
          	}
	},

	stopScreen: function ()
	{
		game.input.onDown.add(fingerOnScreen);
		game.input.onUp.remove(stopScreen);
		//game.input.deleteMoveCallback(moveIndex);
	},

	selectXavier: function(sprite, pointer)
	{
		characterChoice = sprite;
	},

	confirmXavier: function(sprite, pointer)
	{
		if (characterChoice == sprite)
		{
                        xavierSelected = true;
                        faisalSelected = false;
                        console.log("Xavier is: " +xavierSelected);
                        console.log("Faisal is: " +faisalSelected);
			//alert("Xavier selected!");
			characterText();
		}
	},

        selectFaisal: function(sprite, pointer)
        {
                characterChoice = sprite;
        },

        confirmFaisal: function(sprite, pointer)
        {
                if (characterChoice == sprite)
                {
                        xavierSelected = false;
                        faisalSelected = true;
                        console.log("Xavier is: " +xavierSelected);
                        console.log("Faisal is: " +faisalSelected);
                        //alert("Faisal selected!");
			characterText();
                }
        },


	Update: function()
	{
		if (xavier.input.pointerOver()) 
		{
			console.log("Here xavier");
			xavier.alpha = 1;
			xavier.scale.setTo(1.2);
			//if (faisalSelected)
			//{
        	        	faisal.alpha = 0.7;
	                	faisal.scale.setTo(1);
			//}
		}
		else if (faisal.input.pointerOver()) 
		{
			console.log("Here faisal");
			faisal.alpha = 1;
			faisal.scale.setTo(1.2);
			//if (xavierSelected)
			//{
                        	xavier.alpha = 0.7;
                        	xavier.scale.setTo(1);
			//}
		}
		else 
		{
			console.log("Here else");
			xavier.alpha = 0.7;
			xavier.scale.setTo(1);
			faisal.alpha = 0.7;
			faisal.scale.setTo(1);
		}
		//text = game.add.text(0, 0, characterText(), style);
	},
	
	characterText: function()
	{
		//text = game.add.text(0, 0, "", style);
		if (xavierSelected) {
			text.setText("Selected Character: Xavier");
			console.log("1");
		}
		else if (faisalSelected) {
			text.setText("Selected Character: Faisal");
			console.log("2");
		}
		else {
			text.setText("Selected Character is not chosen yet");
			console.log("3");
		}
	}
};





