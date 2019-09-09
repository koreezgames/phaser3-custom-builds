const config = require('./webpack.config');
const merge = require('webpack-merge');
module.exports = merge(config, {
  entry: {
    'phaser-no-sound-no-spine-physics': './scripts/phaser-no-sound-no-spine-physics.js',
  },
});
