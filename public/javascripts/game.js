ar game = new  Phaser.Game(640,480,Phaser.AUTO,'game');
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
game.state.start('start');


