const config = require('./webpack.config');
const merge = require('webpack-merge');
module.exports = merge(config, {
  entry: {
    'phaser-sound-no-spine-physics': './scripts/phaser-sound-no-spine-physics.js',
  },
});
