var path = require('path');
var config = require('../config')
var webpack = require('webpack')
var merge = require('webpack-merge')
var utils = require('./utils')
var baseWebpackConfig = require('./webpack.base.conf')
var HtmlWebpackPlugin = require('html-webpack-plugin')
var FriendlyErrorsPlugin = require('friendly-errors-webpack-plugin')
// add hot-reload related code to entry chunks
Object.keys(baseWebpackConfig.entry).forEach(function (name) {
  baseWebpackConfig.entry[name] = ['./build/dev-client'].concat(baseWebpackConfig.entry[name])
})
// var StyleLintPlugin = require('stylelint-webpack-plugin');

baseWebpackConfig.module.rules.push({
  test: /\.(js|vue)$/,
  loader: 'eslint-loader',
  enforce: "pre",
  options: {
    formatter: require('eslint-friendly-formatter')
  }
});
var webpackConfig = merge(baseWebpackConfig, {
  // eval-source-map is faster for development
  devtool: '#eval-source-map'
})
webpackConfig.plugins = webpackConfig.plugins.concat([
  new webpack.DefinePlugin({
    'process.env': config.dev.env
  }),
  // https://github.com/glenjamin/webpack-hot-middleware#installation--usage
  new webpack.HotModuleReplacementPlugin(),
  new webpack.NoEmitOnErrorsPlugin(),
  new FriendlyErrorsPlugin(),
  // new StyleLintPlugin({
  //   config: {
  //     // 你的lint扩展自刚刚安装的stylelint-config-standard
  //     "extends": "stylelint-config-standard"
  //   },
  //   files: '../src/common/css/*.css'
  // }),
])
module.exports = webpackConfig
