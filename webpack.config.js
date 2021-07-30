const path = require('path');
const HtmlWepackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: './index.js',
  mode: 'development',
  plugins: [
      new HtmlWepackPlugin({title: "NestorDungeon"})
  ],
  output: {
    filename: 'main.js',
    path: path.resolve(__dirname, 'dist'),
    clean: true
  },
  devServer: {
      contentBase: './dist',
      hot: true,
  }
};