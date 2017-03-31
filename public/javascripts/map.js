var map = {
        preload: function () {
                console.log("MAP");

		//move to load state!!!!!!!!!!!!!!!!!!!!!
		this.map = this.load.image("map", "assets/map.png");
 		this.town = this.load.image("town", "assets/enemy_btn.png");

        },
        create: function () {
                // this is just to test stuff
                /*game.background = this.game.add.sprite(0,0, 'bg');
                var character = game.add.sprite(0,0,'faisal');
                character.anchor.set(0.5);
                character.inputEnabled = true;
                character.scale.setTo(0.65);*/

		this.map = this.add.image(0, 0, "map");
		//this.map.scale.setTo(1);
		this.map.width = 1100;
		this.map.height = 600;
/*
		for(var i = 0; i < 7; i++) {
			var town = this.add.image(this.rnd.integerInRange(50, this.game.world.width - 50), game.rnd.integerInRange(50, this.game.world.height - 50), "town");
			town.anchor.setTo(0.5);
			town.inputEnabled = true;
			town.events.onInputDown.add(selectTown,this);
			town.events.onInputUp.add(confirmTown, this);
		}
*/

 			var kerr = this.add.image(550,260, "town");
                        kerr.anchor.setTo(0.5);
			kerr.scale.setTo(0.5,0.5);
                        kerr.inputEnabled = true;
                        kerr.events.onInputDown.add(selectTown,this);
                        kerr.events.onInputUp.add(confirmTown, this);

 			var lake = this.add.image(540, 330, "town");
                        lake.anchor.setTo(0.5);
			lake.scale.setTo(0.5,0.5);
                        lake.inputEnabled = true;
                        lake.events.onInputDown.add(selectLake,this);
                        lake.events.onInputUp.add(confirmLake, this);

 			var vic = this.add.image(490, 305, "town");
                        vic.anchor.setTo(0.5);
			vic.scale.setTo(0.5,0.5);
                        vic.inputEnabled = true;
                        vic.events.onInputDown.add(selectVic,this);
                        vic.events.onInputUp.add(confirmVic, this);

			var eng = this.add.image(820, 280, "town");
                        eng.anchor.setTo(0.5);
                        eng.scale.setTo(0.5,0.5);
                        eng.inputEnabled = true;
                        eng.events.onInputDown.add(selectEng,this);
                        eng.events.onInputUp.add(confirmEng, this);

                        var slc = this.add.image(360, 300, "town");
                        slc.anchor.setTo(0.5);
                        slc.scale.setTo(0.5,0.5);
                        slc.inputEnabled = true;
                        slc.events.onInputDown.add(selectSLC,this);
                        slc.events.onInputUp.add(confirmSLC, this);

 			var bridge = this.add.image(790, 240, "town");
                        bridge.anchor.setTo(0.5);
                        bridge.scale.setTo(0.5,0.5);
                        bridge.inputEnabled = true;
                        bridge.events.onInputDown.add(selectBridge,this);
                        bridge.events.onInputUp.add(confirmBridge, this);

 			var gould = this.add.image(380, 330, "town");
                        gould.anchor.setTo(0.5);
                        gould.scale.setTo(0.5,0.5);
                        gould.inputEnabled = true;
                        gould.events.onInputDown.add(selectSLC,this);
                        gould.events.onInputUp.add(confirmSLC, this);

		this.input.onUp.add(clickMap, this);
                //if (faisal)
                //      this.state.start('faisal');
                //else if (alex)
                //      this.state.start('alex');
                // and therest of the people like that as well
        },
	update: function() {
		this.input.onUp.add(clickMap, this);
	}
};

var candidateVic;

function clickMap() {
	console.log("Clicked the map");
}

function selectVic(sprite, pointer) {
	candidateVic = sprite;
}

function confirmVic(sprite, pointer) {
	if(candidateVic == sprite) {
		alert("Vic selected");
	}
}

var candidateLake;

function selectLake(sprite, pointer) {
        candidateLake = sprite;
}

function confirmLake(sprite, pointer) {
        if(candidateLake == sprite) {
                alert("Lake");
        }
}

var candidateEng;

function selectEng(sprite, pointer) {
        candidateEng = sprite;
}

function confirmEng(sprite, pointer) {
        if(candidateEng == sprite) {
                alert("Eng");
        }
}
var candidateSLC;

function selectSLC(sprite, pointer) {
        candidateSLC = sprite;
}

function confirmSLC(sprite, pointer) {
        if(candidateSLC == sprite) {
                alert("SLC");
        }
}


var candidateTown;

function selectTown(sprite, pointer) {
        candidateTown = sprite;
}

function confirmTown(sprite, pointer) {
        if(candidateTown == sprite) {
                alert("Town");
        }
}

var candidateBridge;

function selectBridge(sprite, pointer) {
        candidateBridge = sprite;
}

function confirmBridge(sprite, pointer) {
        if(candidateBridge == sprite) {
                alert("Bridge");
        }
}
var candidateGould;

function selectGould(sprite, pointer) {
        candidateGould = sprite;
}

function confirmGould(sprite, pointer) {
        if(candidateGould == sprite) {
                alert("Gould");
        }
}


