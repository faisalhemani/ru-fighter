var map = {
        preload: function () {
                console.log("MAP");
                this.logo = this.add.sprite(this.game.world.centerX, this.game.centerY);
                this.logo.anchor.setTo(0.5);

                this.preloadBar = this.add.sprite(this.game.world.centerX, this.game.world.centerY -25);
                this.preloadBar.anchor.setTo(0.5);
                this.load.setPreloadSprite(this.preloadBar);

                this.load.image("faisal", "http://35.162.14.150/game_engine/js/CharSelect/faisal.png");
                this.load.image("xavier", "http://35.162.14.150/game_engine/js/CharSelect/xavier.png");
                this.load.image("bg", "assets/charselect/atrium.jpg");

        },
        create: function () {
                // this is just to test stuff
                game.background = this.game.add.sprite(0,0, 'bg');
                var character = game.add.sprite(0,0,'faisal');
                character.anchor.set(0.5);
                character.inputEnabled = true;
                character.scale.setTo(0.65);

                //if (faisal)
                //      this.state.start('faisal');
                //else if (alex)
                //      this.state.start('alex');
                // and therest of the people like that as well
        }
};


