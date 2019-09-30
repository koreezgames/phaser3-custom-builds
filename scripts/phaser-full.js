/**
 * @author       Richard Davey <rich@photonstorm.com>
 * @copyright    2019 Photon Storm Ltd.
 * @license      {@link https://github.com/photonstorm/phaser/blob/master/license.txt|MIT License}
 */

require('src/polyfills');
require('plugins/spine/dist/SpineWebGLPlugin');

var CONST = require('src/const');
var Extend = require('src/utils/object/Extend');

/**
 * @namespace Phaser
 */

var Phaser = {
  Actions: require('src/actions'),
  Animations: require('src/animations'),
  Cache: require('src/cache'),
  Cameras: require('src/cameras'),
  Core: require('src/core'),
  Class: require('src/utils/Class'),
  Create: require('src/create'),
  Curves: require('src/curves'),
  Data: require('src/data'),
  Display: require('src/display'),
  DOM: require('src/dom'),
  Events: require('src/events/EventEmitter'),
  Game: require('src/core/Game'),
  GameObjects: require('src/gameobjects'),
  Geom: require('src/geom'),
  Input: require('src/input'),
  Loader: require('src/loader'),
  Math: require('src/math'),
  Physics: require('src/physics'),
  Plugins: require('src/plugins'),
  Renderer: require('src/renderer'),
  Scale: require('src/scale'),
  Scene: require('src/scene/Scene'),
  Scenes: require('src/scene'),
  Sound: require('src/sound'),
  Structs: require('src/structs'),
  Textures: require('src/textures'),
  Tilemaps: require('src/tilemaps'),
  Time: require('src/time'),
  Tweens: require('src/tweens'),
  Utils: require('src/utils'),
  SpinePlugin: window.SpinePlugin,
};

Phaser.GameObjects.Spine = require('plugins/spine/src/gameobject/SpineGameObject');

//   Merge in the consts

Phaser = Extend(false, Phaser, CONST);

//  Export it

module.exports = Phaser;

global.Phaser = Phaser;

/*
 * "Documentation is like pizza: when it is good, it is very, very good;
 * and when it is bad, it is better than nothing."
 *  -- Dick Brandon
 */
