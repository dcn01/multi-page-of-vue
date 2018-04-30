import path from 'path';
import ExtractTextPlugin from 'extract-text-webpack-plugin';


var path = require('path')
var config = require('../config')
var ExtractTextPlugin = require('extract-text-webpack-plugin')
var glob = require('glob');
exports.assetsPath = function (_path) {
  var assetsSubDirectory = process.env.NODE_ENV === 'production'
    ? config.build.assetsSubDirectory
    : config.dev.assetsSubDirectory
  return path.posix.join(assetsSubDirectory, _path)
}

// exports.cssLoaders = function (options) {
//   options = options || {}

//   var cssLoader = {
//     loader: 'css-loader?discardComments: {removeAll: true}',
//     options: {
//       minimize: options.minimize,
//       sourceMap: options.sourceMap
//     }
//   }
//   var postcssLoader = {
//     loader: 'postcss-loader',
//     options: {
//       sourceMap: false
//     }
//   }

//   // generate loader string to be used with extract text plugin
//   function generateLoaders (loader, loaderOptions) {
//     var loaders = [cssLoader]
//     if (loader) {
//       loaders.push(postcssLoader)
//       loaders.push({
//         loader: loader + '-loader',
//         options: Object.assign({}, loaderOptions, {
//           sourceMap: options.sourceMap
//         })
//       })
//     }

//     // Extract CSS when that option is specified
//     // (which is the case during production build)
//     if (options.extract) {
//       return ExtractTextPlugin.extract({
//         use: loaders,
//         fallback: 'vue-style-loader'
//       })
//     } else {
//       return ['vue-style-loader'].concat(loaders)
//     }
//   }

//   // http://vuejs.github.io/vue-loader/en/configurations/extract-css.html
//   return {
//     css: generateLoaders(),
//     postcss: generateLoaders(),
//     stylus: generateLoaders('stylus'),
//     styl: generateLoaders('stylus')
//   }
// }

// // Generate loaders for standalone style files (outside of .vue)
// exports.styleLoaders = function (options) {
//   var output = []
//   var loaders = exports.cssLoaders(options)
//   for (var extension in loaders) {
//     var loader = loaders[extension]
//     output.push({
//       test: new RegExp('\\.' + extension + '$'),
//       use: loader
//     })
//   }
//   return output
// }

exports.getEntry = function getEntry(globPath) {
  var entries = {},
    basename, tmp, pathname;
  if (typeof (globPath) != "object") {
    globPath = [globPath]
  }
  globPath.forEach((itemPath) => {
    glob.sync(itemPath).forEach(function (entry) {
      // basename = path.basename(entry, path.extname(entry));
      console.log(entry);
      basename = entry.split('/').splice(5, 1)[0].split('.')[0];
      if (basename === 'index') {
        basename = '';
      } else {
        basename = '-' + basename;
      }
      entries[entry.split('/').splice(3, 1) +  '&' + entry.split('/').splice(4, 1) + basename] = entry;
    });
  });

  return entries;
}
