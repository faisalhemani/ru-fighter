var game;
var speedMult= 0.7;
var friction  =  0.99;
var chars = ["Faisal", "Xavier"];
window.onload = function () {
	game =  new Phaser.Game (2000,2000, Phaser.AUTO, "");
	game.state.add("PlayGame", playGame);	
	game.state.start("PlayGame");
}
var playGame = function (game) {};
playGame.prototype = {
	preload: function () {

		game.load.image("Faisal", "http://52.38.67.158/game_engine/js/CharSelect/faisal.png");
		game.load.image("Xavier", "http://52.38.67.158/game_engine/js/CharSelect/xavier.png");
	},
	create: function () {
		game.stage.backgroundColor = "#5f503b";
		game.add.text(game.width/2, 50, "Select your Faculty!", {font:"18px Helvetica", fill: "#ffffff"}).anchor.set(0.5);
		this.scrollingMap = game.add.tileSprite(0, 0, game.width/2 + chars.length * 90 + 64, game.height, "transp");
		this.scrollingMap.inputEnabled = true;
		this.scrollingMap.input.enableDrag(false);
		this.scrollingMap.savedPosition = new Phaser.Point(this.scrollingMap.x, this.scrollingMap.y);
		this.scrollingMap.isBeingDragged = false;
		this.scrollingMap.movingSpeed = 0;
		this.scrollingMap.input.allowVerticalDrag = false;
		this.scrollingMap.input.boundsRect = new Phaser.Rectangle(game.width - this.scrollingMap.width, game.height - this.scrollingMap.height, this.scrollingMap.width * 2 - game.width, this.scrollingMap.height * 2 - game.height);
		for (var i = 0; i< chars.length; i++){
			var character = game.add.image(game.width/2 + i *90, game.height/2, "Character");
			character.anchor.set(0.5);
			this.scrollingMap.addChild(character);
		}
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
				this.scrollingMap.getChildAt(i).scale.setTo(1.5);
				zoomed = true; 
			} else {
				this.scrollingMap.getChildAt(i).scale.setTo(1);
			} 
		}
		if (this.scrollingMap.isBeingDragged) {
			this.scrollingMap.savedPosition = new Phaser.Point(this.scrollingMap.x, this.scrollingMap.y);
		} else {
			if (this.scrollingMap.movingSpeed > 1){
				this.scrollingMap.x += this.scrollingMap.movingSpeed * Math.cos(this.scrollingMap.movingangle);
				if (this.scrollingMap.x > game.width - this.scrollingMap.width){
					this.scrollingMap.x = game.width - this.scrollingMap.width;
					this.scrollingMap.movingSpeed *= 0.5;
					this.scrollingMap.movingangle += Math.PI;
				}
				if (this.scrollingMap.x > 0){
					this.scrollingMap.x = 0;
					this.scrollingMap.movingSpeed *= 0.5;
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
	}

}
