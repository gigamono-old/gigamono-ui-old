const path = require('path');
const webpack = require('webpack');
const VueLoaderPlugin = require('vue-loader/lib/plugin');

module.exports = {
  mode: 'production',
  context: path.join(__dirname, '../'),
  devtool: 'source-map',
  entry: [
    './src/index.js',
  ],
  output: {
    path: path.join(__dirname, '../dist'), // directory where bundle is dropped
    filename: 'bundle.min.js',
    publicPath: 'dist/', // directory where dev-server looks at for bundle
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
      test: /\.scss$/,
      use: ['vue-style-loader', 'style-loader', 'css-loader', 'sass-loader'],
    },
    {
      test: /\.(png|jpg|gif)$/,
      use: [
        {
          loader: 'file-loader',
          options: {},
        },
      ],
    },
    {
      test: /\.(ttf|eot|woff|woff2)(\?v=\d+\.\d+\.\d+)?$/,
      use: [
        {
          loader: 'url-loader',
          options: {},
        },
      ],
    },
    {
      test: /\.svg$/,
      loader: 'svg-inline-loader'
    }
    ],
  },
  plugins: [
    new VueLoaderPlugin(),
  ],
};
