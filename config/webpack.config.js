const UglifyJsPlugin = require('uglifyjs-webpack-plugin');
const NODE_ENV = process.env.NODE_ENV || 'development';
const webpack = require('webpack');
const path = require('path');

module.exports = {
  entry: ['babel-polyfill', path.resolve(__dirname, '../src/client/src/app')],
  mode: NODE_ENV,
  output: {
    filename: NODE_ENV === 'production' ? path.resolve(__dirname, '../public/bundle.js') : './bundle.js',
    library: 'todolist'
  },

  resolve: {
    extensions: [".js", ".json", ".jsx", ".css"],
  },

  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: ['babel-loader']
      },
      {
        test: /\.css$/,
        use: [ 'style-loader', 'css-loader']
      }
    ]
  },
  devtool: NODE_ENV === 'development' ? 'source-map' : false,
  devServer: {
    compress: true,
    port: 8080,
  }
};

console.log('test');