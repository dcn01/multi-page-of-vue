// dependencies
var path = require('path');
var glob = require('glob');
var HtmlWebpackPlugin = require('html-webpack-plugin');
var Vconsole = require('vconsole-webpack-plugin');
var ExtractTextPlugin = require('extract-text-webpack-plugin')
var webpack = require('webpack')
// functions 
var resolvePath = function(_path) {
  return path.resolve(__dirname, _path);
};
var assetsPath = function (_path) {
  return path.posix.join('static', _path);
};
var getEntry = function getEntry(globPath) {
  var entries = {};
  if (typeof (globPath) != "object") {
    globPath = [globPath]
  }
  globPath.forEach((itemPath) => {
    glob.sync(itemPath).forEach(function (entry) {
      entries[entry.substring(13, entry.lastIndexOf('.'))] = entry;  // 13代表'./src/module/'
    });
  });

  return entries;
};

// define variables
var rootPath = resolvePath('../dist');
var entries = getEntry(['./src/module/**/*.js']); // 获得入口js文件
var env = process.argv.slice(2)[0];

// var env = process.env.NODE_ENV
// var argv = process.argv.splice(2)
// // console.log(`命令行参数${argv}`)

// // check env & config/index.js to decide weither to enable CSS Sourcemaps for the
// // various preprocessor loaders added to vue-loader at the end of this file
// var cssSourceMapDev = (env === 'development' && config.dev.cssSourceMap)
// var cssSourceMapProd = (env === 'production' && config.build.productionSourceMap)
// var useCssSourceMap = cssSourceMapDev || cssSourceMapProd

var webpackConfig = {
  entry: entries,
  output: {
    path: rootPath,
    publicPath: '/',
    filename: assetsPath('js/[name].[chunkhash].js'),
    chunkFilename: assetsPath('js/[id].[chunkhash].js')
  },
  resolve: {
    extensions: ['.js', '.vue', '.json'],
    alias: {
      'vue$': 'vue/dist/vue.esm.js',
      'src': path.join(__dirname, '..', 'src')
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
                  loader: 'css-loader?autoprefixer=false',
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
        include: [path.join(__dirname, '..', 'src')]
      },
      {
        test: /\.(png|jpe?g|gif|svg)(\?.*)?$/,
        loader: 'url-loader',
        query: {
          limit: 10000,
          name: assetsPath('img/[name].[hash:7].[ext]'),
        }
      },
      {
        test: /\.(woff2?|eot|ttf|otf)(\?.*)?$/,
        loader: 'url-loader',
        query: {
          limit: 10000,
          name: assetsPath('fonts/[name].[hash:7].[ext]')
        }
      },
      {
        test: /\.css$/,
        use: ExtractTextPlugin.extract({
          use: [
            {
              loader: 'css-loader?autoprefixer=false',
              options: {
                discardComments: {removeAll: true},
                minimize: true,
                sourceMap: true
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
    new Vconsole({ enable: env === 'test' }),
    new ExtractTextPlugin({filename: assetsPath('css/[name].[contenthash].css'), allChunks: true}),
    new webpack.optimize.CommonsChunkPlugin({
      name: 'vendor',
      minChunks: function (module, count) {
        // any required modules inside node_modules are extracted to vendor
        return (
          module.resource &&
          /\.js$/.test(module.resource) &&
          module.resource.indexOf(
            path.join(__dirname, '../node_modules')
          ) === 0
        )
      }
    }),
    // extract webpack runtime and module manifest to its own file in order to
    // prevent vendor hash from being updated whenever app bundle is updated
    // new webpack.optimize.CommonsChunkPlugin({
    //   name: 'manifest',
    //   chunks: ['vendor']
    // })
  ]
}
// add html plugins
for (var pathname in entries) {
  var conf = {
    filename: pathname + '.html',
    template: './src/template/' + pathname.substring(0, pathname.indexOf('/')) + '.html',
    inject: true,
    chunksSortMode: 'dependency'
  };
  if (pathname in webpackConfig.entry) {
    conf.chunks = ['vendor', 'config', pathname];
    conf.hash = true;
  }
  webpackConfig.plugins.push(new HtmlWebpackPlugin(conf));
}
module.exports = webpackConfig
