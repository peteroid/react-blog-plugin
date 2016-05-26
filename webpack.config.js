var Webpack = require('webpack')

var HTMLWebpackPlugin = require('html-webpack-plugin')
var HTMLWebpackPluginConfig = new HTMLWebpackPlugin({
  template: __dirname + '/src/html/blog.html',
  filename: 'index.html',
  inject: 'body'
});

module.exports = {
  devtool: 'eval',
  entry: [
    './src/react/index.js'
  ],
  module: {
    loaders: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: "babel-loader"
      },
      {
        test: /\.css$/,
        loader: "style-loader!css-loader"
      }
    ]
  },
  output: {
    filename: "index_bundle.js",
    path: __dirname + '/blog'
  },
  plugins: [
    HTMLWebpackPluginConfig
  ]
}