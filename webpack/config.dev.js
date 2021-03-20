const path = require('path');
const webpack = require('webpack');
const { VueLoaderPlugin } = require('vue-loader');

module.exports = {
  mode: 'development',
  devtool: 'inline-source-map',
  entry: './src/main.js',
  output: {
    path: path.join(__dirname, '../dist'), // directory where bundle is dropped
    filename: 'bundle.min.js',
  },
  devServer: {
    contentBase: path.join(__dirname, '../dist'),
    port: 7000,
    hot: true
  },
  optimization: {
    minimize: false
  },
  module: {
    rules: [
      {
        test: /\.pug$/,
        loader: 'pug-plain-loader',
      },
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
        test: /\.(svg|png|jpg|gif|ttf|eot|woff)$/,
        loader: 'file-loader',
        options: {
          esModule: false,
          name: "[path][name].[ext]"
        },
      }
    ],
  },
  plugins: [
    new VueLoaderPlugin()
  ],
};
