var game = new Phaser.Game(800, 600, Phaser.AUTO, 'game');

game.state.add('Boot', Game.Boot);
game.state.add('Load', Game.Load);
game.state.add('Menu', Game.Menu);
game.state.add('Play', Game.Play);
// game.state.add('End', Game.End);

game.state.start('Boot');
