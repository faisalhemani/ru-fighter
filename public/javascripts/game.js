var game = new  Phaser.Game(1100,600,Phaser.AUTO,'phaser-container');
//game.state.add('boot', boot);
game.state.add('start', start);
game.state.add('load', load);
game.state.add('logo', logo);
game.state.add('title', title);
game.state.add('map', map);
game.state.add('char', char);
game.state.add('win', win);
game.state.add('lose', lose);
game.state.add('menu', menu);
game.state.add('play', play);
console.log('MAIN');

var introScreenMusic;
var battleMusic;
var peacefulMusic;
var currentMusic;
var beep;

introScreenMusic = document.createElement('audio');
introScreenMusic.setAttribute('id', 'introMusic');
introScreenMusic.setAttribute('src', 'assets/music/intro_screen.mp3');

battleMusic = document.createElement('audio');
battleMusic.setAttribute('id', 'battleMusic');
battleMusic.setAttribute('src', 'assets/music/commence_battletheme.mp3');

beep = document.createElement('audio');
beep.setAttribute('id', 'beep');
beep.setAttribute('src', 'assets/music/beep-07.mp3');

game.state.start('start');

function switchMusic(currMusic, nextMusic) {
	currMusic.pause();
	nextMusic.play();
	console.log("Switching music");
	if(nextMusic == battleMusic) {
		currentMusic = 1;
	}
}

function loopMusic() {
	if(currentMusic === 0 && (introScreenMusic.currentTime >= introScreenMusic.duration || introScreenMusic.currentTime === 0)) {
		introScreenMusic.currentTime = 0.0001;
		introScreenMusic.play();
		console.log("Intro loop");
	}
        else if(currentMusic === 1 && (battleMusic.currentTime >= battleMusic.duration || battleMusic.currentTime === 0)) {
                battleMusic.currentTime = 0.1;
                battleMusic.play();
		console.log("Battle loop");
        }
        else if(currentMusic === 2) {

        }
}
