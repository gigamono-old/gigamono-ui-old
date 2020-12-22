const path = require('path');
const webpack = require('webpack');
const VueLoaderPlugin = require('vue-loader/lib/plugin');

module.exports = {
  mode: 'production',
  devtool: 'source-map',
  entry: './src/main.js',
  output: {
    path: path.join(__dirname, '../dist'), // directory where bundle is dropped
    filename: 'bundle.min.js',
  },
  module: {
    rules: [
      {
        test: /\.vue$/,
        loader: 'vue-loader'
      },
      {
        test: /\.html$/,
        use: ['html-loader'],
      },
      {
        test: /\.scss$/, // For some reason saas-loader needs url path to be relative to src/. resolve-url-loader fixes that.
        use: ['vue-style-loader', 'style-loader', 'css-loader', 'resolve-url-loader', 'sass-loader'],
      },
      {
        test: /\.(svg|png|jpg|gif|ttf|eot|woff2?)$/,
        loader: 'file-loader',
        options: {
          esModule: false,
          name: "[path][name].[ext]"
        },
      }
    ],
  },
  plugins: [
    new VueLoaderPlugin(),
  ],
};
