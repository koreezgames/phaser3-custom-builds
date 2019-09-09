const path = require('path');
const phaserPackageJson = require(path.resolve('node_modules/phaser/package.json'));
const webpack = require('webpack');
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');

module.exports = {
  resolve: {
    alias: {
      eventemitter3: path.resolve('node_modules/eventemitter3'),
    },
    modules: ['node_modules/phaser'],
  },

  output: {
    path: path.resolve(`phaser/${phaserPackageJson.version}`),
    filename: '[name].js',
    library: 'Phaser',
    libraryTarget: 'umd',
    sourceMapFilename: '[file].map',
    devtoolModuleFilenameTemplate: 'webpack:///[resource-path]',
    devtoolFallbackModuleFilenameTemplate: 'webpack:///[resource-path]?[hash]',
    umdNamedDefine: true,
  },

  optimization: {
    minimizer: [
      new UglifyJsPlugin({
        test: /\.js$/,
        parallel: true,
        uglifyOptions: {
          mangle: true,
          compress: {
            drop_console: true,
          },
          output: {
            comments: false,
            beautify: false,
          },
        },
      }),
    ],
  },

  plugins: [
    new webpack.DefinePlugin({
      'typeof EXPERIMENTAL': JSON.stringify(false),
      'typeof PLUGIN_CAMERA3D': JSON.stringify(false),
      'typeof PLUGIN_FBINSTANT': JSON.stringify(false),
    }),
  ],
};
