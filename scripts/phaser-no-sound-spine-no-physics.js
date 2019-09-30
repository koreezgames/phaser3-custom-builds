var Phaser = require('./phaser-no-sound-no-spine-no-physics');
require('plugins/spine/dist/SpineWebGLPlugin');

Phaser.SpinePlugin = window.SpinePlugin;
Phaser.GameObjects.Spine = require('plugins/spine/src/gameobject/SpineGameObject');

//  Export it

module.exports = Phaser;

global.Phaser = Phaser;
