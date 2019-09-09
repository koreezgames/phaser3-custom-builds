const config = require('./webpack.config');
const merge = require('webpack-merge');
module.exports = merge(config, {
  entry: {
    'phaser-no-sound-spine-no-physics': './scripts/phaser-no-sound-spine-no-physics.js',
  },
});
