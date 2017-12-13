var path = require('path')
var config = require('../config')
var HtmlWebpackPlugin = require('html-webpack-plugin')
var utils = require('./utils')
var projectRoot = path.resolve(__dirname, '../')
// var vueLoaderConfig = require('./vue-loader.conf')
var ExtractTextPlugin = require('extract-text-webpack-plugin')
var entries = utils.getEntry(['./src/module/**/**/*.js']); // 获得入口js文件
function resolve (dir) {
  return path.join(__dirname, '..', dir)
}

var env = process.env.NODE_ENV

var webpackConfig = {
  entry: entries,
  output: {
    path: config.build.assetsRoot,
    publicPath: process.env.NODE_ENV === 'production' ? config.build.assetsPublicPath : config.dev.assetsPublicPath,
    filename: '[name].js'
  },
  resolve: {
    extensions: ['.js', '.vue', '.json'],
    alias: {
      'vue$': 'vue/dist/vue.esm.js',
      'src': resolve('src'),
    }
  },
  module: {
    rules: [
      {
        test: /\.vue$/,
        loader: 'vue-loader',
        exclude: /node_modules/,
        options: {
          loaders:{
            css: ExtractTextPlugin.extract({
              // use: 'css-loader?discardComments: {removeAll: true}',
              use: [
                {
                  loader: 'css-loader',
                  options: {
                    discardComments: {removeAll: true},
                    minimize: true,
                    sourceMap: true
                  }
                },
                {
                  loader: 'postcss-loader',
                  options: {
                    sourceMap: true
                  }
                }
              ],
              fallback: 'vue-style-loader',
            }),
          }
        }
      },
      {
        test: /\.js$/,
        loader: 'babel-loader',
        include: [resolve('src'), resolve('test')]
      },
      {
        test: /\.(png|jpe?g|gif|svg)(\?.*)?$/,
        loader: 'url-loader',
        query: {
          limit: 50000,
          name: utils.assetsPath('img/[name].[hash:7].[ext]'),
          publicPath:'/',
        }
      },
      {
        test: /\.(woff2?|eot|ttf|otf)(\?.*)?$/,
        loader: 'url-loader',
        query: {
          limit: 10000,
          name: utils.assetsPath('fonts/[name].[hash:7].[ext]')
        }
      },
      {
        test: /\.css$/,
        use: ExtractTextPlugin.extract({
          use: [
            {
              loader: 'css-loader',
              options: {
                discardComments: {removeAll: true},
                minimize: true,
              }
            },
            'postcss-loader'
          ],
          fallback: 'style-loader',
        })
      }
    ]
  },
  plugins: [
    new ExtractTextPlugin({filename: utils.assetsPath('css/[name].[contenthash].css'), allChunks: true})
  ]
}

for (var pathname in entries) {
  // 配置生成的html文件，定义路径等
  var conf = {
    filename: pathname.split('&')[0] + '/' + pathname.split('&')[1] + '.html',
    template: './src/template/' + entries[pathname].split('/').splice(3, 1)[0] + '.html',   // 模板路径
    inject: true,              // js插入位置
    // necessary to consistently work with multiple chunks via CommonsChunkPlugin
    chunksSortMode: 'dependency'
  };
  if (pathname in webpackConfig.entry) {
    conf.chunks = ['manifest', 'vendor', pathname];
    conf.hash = true;
  }
  webpackConfig.plugins.push(new HtmlWebpackPlugin(conf));
}

module.exports = webpackConfig
