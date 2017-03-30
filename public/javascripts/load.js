var load = {
        preload: function () {
                console.log("In the Load funtion:)");
                this.logo = this.add.sprite(this.game.world.centerX, this.game.centerY);
                this.logo.anchor.setTo(0.5);

                this.preloadBar = this.add.sprite(this.game.world.centerX, this.game.world.centerY -25);
                this.preloadBar.anchor.setTo(0.5);
                this.load.setPreloadSprite(this.preloadBar);

		//change the faisal and xavier once  player 1 and player 2 are ready
		this.load.image('player1', 'assets/HAMID.png');
        	this.load.image('player2', 'assets/picka.png');
/*
		this.load.image("player1", "http://35.162.14.150/game_engine/js/CharSelect/faisal.png");
                this.load.image("player2", "http://35.162.14.150/game_engine/js/CharSelect/xavier.png");
  */
                this.load.image("transp", "http://35.162.14.150/game_engine/js/CharSelect/transp.png");
                this.load.image("bg", "assets/charselect/atrium.jpg");
                //load all game images here
//Science skills 
        this.load.spritesheet('ss', 'assets/science_skills/sb_special.png', 200,100);
        this.load.spritesheet('sr', 'assets/science_skills/sb_reg.png', 200,100);
        this.load.spritesheet('sul', 'assets/science_skills/sb_ultimate.png',200,100);
        this.load.spritesheet('sut', 'assets/science_skills/sb_utility.png',200,100);
//engineering skills
        this.load.image('es', 'assets/engineering_skills/eb_special.png');
        this.load.image('er', 'assets/engineering_skills/eb_reg.png');
        this.load.image('eul', 'assets/engineering_skills/eb_ultimate.png');
        this.load.image('eut', 'assets/engineering_skills/eb_utility.png');
//Battle screens

        //Xavier
        this.load.image('xavier_bg', 'assets/battle_screens/xavier/victoria_lane.jpg');
        this.load.image('xavier', 'assets/battle_screens/xavier/xavier.png');


        //Faisal
        this.load.image('faisal_bg', 'assets/battle_screens/faisal/background.jpg');
        this.load.image('faisal', 'assets/battle_screens/faisal/faisal.png');

        //Jess
        this.load.image('jess_bg', 'assets/battle_screens/jessica/outside_eng.jpg');
	this.load.image.('jess', 'assets/battle_screens/jessica/jessica.png');

        //Tom
        this.load.image('tom_bg', 'assets/battle_screens/tom/bridge.jpg');
        this.load.image('tom', 'assets/battle_screens/tom/tom.png');


        //Alex
        this.load.image('alex_bg', 'assets/battle_screens/alex/kerr_hall.jpg');
        this.load.image('alex', 'assets/battle_screens/alex/alex.png');

        //Retinder
        this.load.image('retinder_bg', 'assets/battle_screens/retinder/outside_slc.jpg');
	this.load.image('retinder_bg', 'assets/battle_screens/retinder/retinder.png');

	},
        create: function () {
                this.state.start('logo');
        }
};

