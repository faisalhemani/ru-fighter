var game = new Phaser.Game(800, 600, Phaser.CANVAS, 'phaser-example', { preload: preload, create: create, render: render });

function preload() {

    //game.load.image('title', 'assets/pics/catastrophi.png');

    //game.load.spritesheet('button', 'assets/buttons/flixel-button.png', 80, 20);
    //game.load.bitmapFont('nokia', 'assets/fonts/bitmapFonts/nokia16black.png', 'assets/fonts/bitmapFonts/nokia16black.xml');

    // game.load.audio('sfx', [ 'assets/audio/SoundEffects/fx_mixdown.mp3', 'assets/audio/SoundEffects/fx_mixdown.ogg' ]);
    game.load.audio('sfx', 'assets/battletheme.mp3');

}

var audio;

function create() {
	audio = game.add.audio('sfx');
	audio.onDecoded.add(start, this);
}

function start() {
	audio.fadeIn(4000);
}

function render() {
	game.debug.soundInfo(audio, 20, 32);
}
