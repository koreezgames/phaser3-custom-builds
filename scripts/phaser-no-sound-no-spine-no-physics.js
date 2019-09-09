require('src/polyfills');

var CONST = require('src/const');
var Extend = require('src/utils/object/Extend');

var Phaser = {
  Cameras: {
    Scene2D: require('src/cameras/2d'),
  },
  Events: require('src/events/EventEmitter'),
  Game: require('src/core/Game'),
  GameObjects: {
    DisplayList: require('src/gameobjects/DisplayList'),
    UpdateList: require('src/gameobjects/UpdateList'),
    Image: require('src/gameobjects/image/Image'),
    Sprite: require('src/gameobjects/sprite/Sprite'),
    Text: require('src/gameobjects/text/static/Text'),
    Container: require('src/gameobjects/container/Container'),
  },
  Loader: {
    FileTypes: {
      AtlasJSONFile: require('src/loader/filetypes/AtlasJSONFile'),
      ImageFile: require('src/loader/filetypes/ImageFile'),
    },
    LoaderPlugin: require('src/loader/LoaderPlugin'),
  },
  Input: {
    InputPlugin: require('src/input/InputPlugin'),
    Mouse: require('src/input/mouse'),
    Pointer: require('src/input/Pointer'),
    Touch: require('src/input/touch'),
    Events: require('src/input/events'),
  },
  Plugins: require('src/plugins'),
  Scale: require('src/scale'),
  Scene: require('src/scene/Scene'),
  Scenes: require('src/scene'),
  Structs: { Size: require('src/structs/Size') },
  Time: require('src/time'),
  Tweens: require('src/tweens'),
  Animations: require('src/animations'),
  Physics: {},
};

//   Merge in the consts

Phaser = Extend(false, Phaser, CONST);

//  Export it

module.exports = Phaser;

global.Phaser = Phaser;
