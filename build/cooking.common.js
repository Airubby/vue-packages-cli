var cooking = require('cooking');
var webpack = require('webpack');
var config = require('./config');
var packageInfo = require('../package.json');

cooking.set({
  entry: './src/index.js',
  dist: './lib',
  clean: false,
  format: 'cjs',
  extends: ['vue2'],
  minimize: false,
  alias: config.alias,
  externals: config.externals
});

cooking.add('output.filename', `${packageInfo.name}.common.js`);
cooking.add('loader.js.exclude', config.jsexclude);
cooking.add('loader.scss', {
  test: /\.scss$/,
  loaders: ['style-loader', 'css-loader', 'sass-loader']
});
cooking.add('vue.preserveWhitespace', false);
cooking.add('plugin.banner', new webpack.BannerPlugin({
  banner: 'Copyright(c) 2018 Airubby\nMIT Licensed',
  entryOnly: true
}));

module.exports = cooking.resolve();
