var Phaser = require('./phaser-sound-no-spine-no-physics');
require('plugins/spine/dist/SpineWebGLPlugin');

Phaser.SpinePlugin = window.SpinePlugin;

//  Export it

module.exports = Phaser;

global.Phaser = Phaser;
