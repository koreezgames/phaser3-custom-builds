const config = require('./webpack.config');
const merge = require('webpack-merge');
module.exports = merge(config, {
  entry: {
    'phaser-no-sound-no-spine-no-physics': './scripts/phaser-no-sound-no-spine-no-physics.js',
  },
});
