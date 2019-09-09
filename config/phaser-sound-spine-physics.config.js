const config = require('./webpack.config');
const merge = require('webpack-merge');
module.exports = merge(config, {
  entry: {
    'phaser-sound-spine-physics': './scripts/phaser-sound-spine-physics.js',
  },
});
