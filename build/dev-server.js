import path from 'path';
import express from 'express';
import webpack from 'webpack';
import getWebpackConfig from './webpack.dev.conf';
import middlewareDev from 'webpack-dev-middleware';
import hotMiddlewareHot from 'webpack-hot-middleware';
import connectHistoryApiFallback from 'connect-history-api-fallback';
import opn from 'opn';

const webpackConfig = getWebpackConfig();
const app = express();
const compiler = webpack(webpackConfig);
const devMiddleware = middlewareDev(compiler, {
  publicPath: webpackConfig.output.publicPath,
  stats: {
    colors: true,
    chunks: false
  }
});
const hotMiddleware = hotMiddlewareHot(compiler);
const param = process.argv.slice(2);

// mock server
// force page reload when html-webpack-plugin template changes
compiler.plugin('compilation', function (compilation) {
  compilation.plugin('html-webpack-plugin-after-emit', function (data, cb) {
    hotMiddleware.publish({ action: 'reload' });
    cb();
  });
});
// handle fallback for HTML5 history API
app.use(connectHistoryApiFallback());
// serve webpack bundle output
app.use(devMiddleware);
// enable hot-reload and state-preserving
// compilation error display
app.use(hotMiddleware);
// serve pure static assets
app.use('/static', express.static('./static'));
// listen 80 port
module.exports = app.listen('80', function (err) {
  if (err) {
    console.log(err);
    return;
  }
  opn(`http://localhost/${param[0]}/index.html`)
});
