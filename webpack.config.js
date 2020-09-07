
const path = require("path");
const webpack = require('webpack');
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
  mode: "production",
  devtool: "source-map",
  entry: "./src/js/index.js",
  output: {
    filename: '[name].[chunkhash].js',
    path: path.resolve(__dirname, './build/static'),
    publicPath: path.resolve(__dirname, './build/static')
  },
  resolve: {
    extensions: [".js", ".jsx"],
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        loader: "babel-loader",
        exclude: /node_modules/,
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: __dirname + "/public/index.html",
      filename: "../index.html",
      inject: "body",
    }),
    new webpack.NamedModulesPlugin()
  ],
};