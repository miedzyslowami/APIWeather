const webpack = require('webpack');
const path = require('path');
const UglifyJSPlugin = require('uglifyjs-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: './src/js/index.jsx',
  devtool: 'source-map',
  output: {
    filename: '[name].bundle.js',
    path: path.resolve(__dirname, 'build')
  },

  plugins: [
    new CleanWebpackPlugin(['build']),
    new HtmlWebpackPlugin({title: 'Crypto listings', template: './src/index.html'}),
    new UglifyJSPlugin({sourceMap: true}),
    new webpack.DefinePlugin({'process.env.NODE_ENV': JSON.stringify('production')})
  ],
  module: {
    rules: [

      {
        test: /\.jsx$/,
        exclude: /node_modules/,
        loader: 'babel-loader',
        options: {
          presets: ['env', 'react', 'stage-2']
        }
      }, {
        test: /\.scss$/,
        loader: ["style-loader", "css-loader?modules&localIdentName=[local]---[hash:base64:5]", "postcss-loader", "sass-loader?modules&localIdentName=[local]---[hash:base64:5]"]
      }, {
        test: /\.html$/,
        loader: 'raw-loader'
      }, {
        test: /\.(gif|png|jpe?g|svg)$/,
        loader: 'file-loader?name=./img/[name].[ext]'
      }

    ]
  }
}
