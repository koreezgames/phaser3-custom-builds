var Phaser = require('./phaser-no-sound-no-spine-no-physics');

Phaser.Sound = require('src/sound');
Phaser.Loader.FileTypes.AudioSpriteFile = require('src/loader/filetypes/AudioSpriteFile');

//  Export it

module.exports = Phaser;

global.Phaser = Phaser;
