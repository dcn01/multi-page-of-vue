var path = require('path')
var webpack = require('webpack')
var merge = require('webpack-merge')
var baseWebpackConfig = require('./webpack.base.conf')
var ExtractTextPlugin = require('extract-text-webpack-plugin')
var HtmlWebpackPlugin = require('html-webpack-plugin')
var CleanPlugin = require('clean-webpack-plugin')//webpack插件，用于清除目录文件
var glob = require('glob');
var env = process.argv.slice(2)[0];

var webpackConfig = merge(baseWebpackConfig, {
  entry: {
    vendor: ['babel-polyfill'],
  }
})
webpackConfig.plugins = webpackConfig.plugins.concat([
  new webpack.optimize.UglifyJsPlugin({
    compress: {
      warnings: false,
      drop_debugger: true,
      drop_console: true
    }
  }),
  // new CleanPlugin(['../../webapp/v2']),
])
webpackConfig.entry.vendor = ['babel-polyfill'];
module.exports = webpackConfig