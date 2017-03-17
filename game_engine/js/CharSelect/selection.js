var game;
var speedMult= 0.7;
var friction  =  0.99;
var chars = ["Faisal", "Xavier"];
var gawd = ["Faisal", "Xavier"];
var faisal;
var xavier;
window.onload = function () {
	game =  new Phaser.Game (1366,673, Phaser.AUTO, "");
	game.state.add("PlayGame", playGame);	
	game.state.start("PlayGame");
}

var playGame = function (game) {};
playGame.prototype = {
	preload: function () {

		game.load.image("Faisal", "http://52.38.67.158/game_engine/js/CharSelect/faisal.png");
		game.load.image("Xavier", "http://52.38.67.158/game_engine/js/CharSelect/xavier.png");
		game.load.image("transp", "http://52.38.67.158/game_engine/js/CharSelect/transp.png");
		game.load.image("bg", "http://52.38.67.158/game_engine/js/CharSelect/bg.jpg");
	},
	create: function () {
		game.stage.backgroundColor = "#5f503b";
		game.add.text(game.width/2, 50, "Select your Faculty!", {font:"18px Helvetica", fill: "#ffffff"}).anchor.set(0.5);
		this.scrollingMap = game.add.tileSprite(0, 0, game.width + (chars.length* 90 +64)*2, game.height, "bg");
		this.scrollingMap.inputEnabled = true;
		this.scrollingMap.input.enableDrag(false);
		this.scrollingMap.savedPosition = new Phaser.Point(this.scrollingMap.x, this.scrollingMap.y);
		this.scrollingMap.isBeingDragged = false;
		this.scrollingMap.movingSpeed = 0;
		this.scrollingMap.input.allowVerticalDrag = false;
      		this.scrollingMap.input.boundsRect = new Phaser.Rectangle(game.width - this.scrollingMap.width, game.height - this.scrollingMap.height, this.scrollingMap.width * 2 - game.width, this.scrollingMap.height * 2 - game.height);
		

		for (var i = 0 ; i < chars.length; i++){
			var character = game.add.sprite(game.width/2 +(i * 480), game.height/2, chars[i]);
			character.anchor.set(0.5);
			character.inputEnabled = true;
			character.scale.setTo(0.65);
			this.scrollingMap.addChild(character);
			//faisal.events.onInputDown.add(listener, this);
		}
		
		/* Example of inputField Properties incase we need to change something
		var password = game.add.inputField(10, 90, {
    			font: '18px Arial',
    			fill: '#212121',
    			fontWeight: 'bold',
			width: 150,
    			padding: 8,
    			borderWidth: 1,
    			borderColor: '#000',
    			borderRadius: 6,
    			placeHolder: 'Password',
    			type: PhaserInput.InputType.password
		}); */
		
		//text = game.add.text(250, 16, '', { fill: '#ffffff' });
		//character.events.onInputDown.add(listener, this);
		/*var character = game.add.image(game.width/4 , game.height/2, "Xavier");
		character.anchor.set(0.5);
		character.scale.setTo(0.5, 0.5);
		this.scrollingMap.addChild(character);
		var character1 = game.add.image(game.width/4 *3, game.height/2, "Faisal");
                character1.anchor.set(0.5);
                character1.scale.setTo(0.5);
                this.scrollingMap.addChild(character1);*/
		
		this.scrollingMap.events.onDragStart.add(function (){
			this.scrollingMap.isBeingDragged = true;
			this.scrollingMap.movingSpeed = 0;
			}, this);
		this.scrollingMap.events.onDragStop.add(function(){
			this.scrollingMap.isBeingDragged = false;
			}, this);
	},
	update: function(){
		var zoomed = false;
		for (var i = 0; i < this.scrollingMap.children.length; i++){
			if (Math.abs(this.scrollingMap.children[i].world.x - game.width / 2) < 46 && !zoomed){
				this.scrollingMap.getChildAt(i).scale.setTo(0.8);
				zoomed = true; 
				//select();
			} else {
				this.scrollingMap.getChildAt(i).scale.setTo(0.65);
			}
		}
		if (this.scrollingMap.isBeingDragged) {
			this.scrollingMap.savedPosition = new Phaser.Point(this.scrollingMap.x, this.scrollingMap.y);
		} else {
			if (this.scrollingMap.movingSpeed > 1){
				this.scrollingMap.x += this.scrollingMap.movingSpeed * Math.cos(this.scrollingMap.movingangle);
				if (this.scrollingMap.x > game.width - this.scrollingMap.width){
					this.scrollingMap.x = game.width - this.scrollingMap.width;
					this.scrollingMap.movingSpeed = 1; //0.5
					this.scrollingMap.movingangle += Math.PI;
				}
				if (this.scrollingMap.x > 0){
					this.scrollingMap.x = 0;
					this.scrollingMap.movingSpeed = 1; //0.5;
					this.scrollingMap.movingangle += Math.PI;
				}
				this.scrollingMap.movingSpeed *= friction;
				this.scrollingMap.savedPosition = new Phaser.Point(this.scrollingMap.x, this.scrollingMap.y);
			} else{
				var point1 = new Phaser.Point(12,23);
				var point2 = new Phaser.Point(34,67);
                    		var distance = this.scrollingMap.savedPosition.distance(this.scrollingMap.position);
				this.scrollingMap.savedPosition.angle = function(a, b){
					return Math.atan2(a.y - b.y, a.x - b.x);
				};
                    		var angle = this.scrollingMap.savedPosition.angle(point1, point2);
                   		if(distance > 4){
                         		this.scrollingMap.movingSpeed = distance * speedMult;
                         		this.scrollingMap.movingangle = angle;
                    }
			}

		}
	},
	/*listener: function() {
		counter++;
   		text.text = "You clicked " + counter + " times!";
	}*/

}
