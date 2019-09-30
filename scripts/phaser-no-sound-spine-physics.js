var Phaser = require('./phaser-no-sound-spine-no-physics');

Phaser.Physics = { Arcade: require('src/physics/arcade') };

//  Export it

module.exports = Phaser;

global.Phaser = Phaser;
