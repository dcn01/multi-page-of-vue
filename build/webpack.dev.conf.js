import glob from 'glob';
import path from 'path';
import webpack from 'webpack';
import merge from 'webpack-merge';
import HtmlWebpackPlugin from 'html-webpack-plugin';
import FriendlyErrorsPlugin from 'friendly-errors-webpack-plugin';
import ExtractTextPlugin from 'extract-text-webpack-plugin';
import baseWebpackConfig from './webpack.base.conf';
/* variable */
const param = process.argv.slice(2);
/* function */
const getEntry = globPath => {
  const entries = {};
    if (typeof (globPath) != "object") {
      globPath = [globPath]
    }
    globPath.forEach((itemPath) => {
      glob.sync(itemPath).forEach(function (entry) {
        entries[entry.substring(13, entry.lastIndexOf('.'))] = ['./build/dev-client', entry];
      });
    });
    return entries;
};
const assetsPath = pathStr => {
  return path.posix.join('static', pathStr);
};
/* main function */
const getWebpackConfig = isMock => {
  baseWebpackConfig.module.rules.push({
    test: /\.(js|vue)$/,
    loader: 'eslint-loader',
    enforce: "pre",
    options: {
      formatter: require('eslint-friendly-formatter')
    }
  });
  baseWebpackConfig.devtool = '#eval-source-map';
  baseWebpackConfig.plugins = [
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoEmitOnErrorsPlugin(),
    new FriendlyErrorsPlugin(),
  ];
  baseWebpackConfig.entry = getEntry('./src/module/' + (param[0] || '**') + '/*.js');
  baseWebpackConfig.output.filename = assetsPath('js/[name].js');
  for (const pathname in baseWebpackConfig.entry) {
    const conf = {
      filename: pathname + '.html',
      template: './src/template/' + pathname.substring(0, pathname.indexOf('/')) + '.html',
      inject: true,
      chunksSortMode: 'dependency'
    };
    if (pathname in baseWebpackConfig.entry) {
      conf.chunks = ['vendor', 'config', pathname];
      conf.hash = true;
    }
    console.log(conf);
    baseWebpackConfig.plugins.push(new HtmlWebpackPlugin(conf));
  }
  baseWebpackConfig.entry.vendor = ['./config/' + (isMock ? 'mock' : 'dev') + '.js'];

  baseWebpackConfig.plugins = baseWebpackConfig.plugins.concat([
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
  ]);

  return baseWebpackConfig;
};
module.exports = getWebpackConfig;
