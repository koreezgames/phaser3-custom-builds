const config = require('./webpack.config');
const merge = require('webpack-merge');
module.exports = merge(config, {
  entry: {
    'phaser-sound-spine-no-physics': './scripts/phaser-sound-spine-no-physics.js',
  },
});
