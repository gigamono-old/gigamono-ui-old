const path = require('path');
const webpack = require('webpack');
const VueLoaderPlugin = require('vue-loader/lib/plugin');

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
            options: {
              esModule: false
            },
          },
        ],
      },
      {
        test: /\.(ttf|eot|woff|woff2)(\?v=\d+\.\d+\.\d+)?$/,
        use: [
          {
            loader: 'url-loader',
            options: {
              esModule: false
            },
          },
        ],
      },
      {
        test: /\.svg$/,
        loader: 'svg-url-loader'
      }
    ],
  },
  plugins: [
    new VueLoaderPlugin()
  ],
};
