const path = require("path");
module.exports = {
  entry: ['babel-polyfill','./src/js/index.jsx'],
  output: {
    path: path.resolve("dev"),
    filename: "app.js"
  },
  devServer: {
    inline: true,
    contentBase: './',
    port: 3001
  },
  watch: true,
  module: {
    rules: [
      {
        test: /\.jsx$/,
        exclude: /node_modules/,
        loader: 'babel-loader',
        options:{
          presets:['env','stage-2','react']
        }
      },
      {
        test: /\.scss$/,
        loader: ["style-loader","css-loader?modules&localIdentName=[local]---[hash:base64:5]", "postcss-loader", "sass-loader?modules&localIdentName=[local]---[hash:base64:5]"]
        },
        {
        test: /\.html$/,
        loader: 'raw-loader'
      },
      {
      test: /\.(gif|png|jpe?g|svg)$/,
       loader: 'file-loader?name=./img/[name].[ext]'
}
    ]
  }
}
