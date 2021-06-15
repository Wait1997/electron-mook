const { resolve } = require('path')
const Webpack = require('webpack')
const { merge } = require('webpack-merge')
const { PROJECT_PATH, SERVER_HOST, SERVER_PORT } = require('../constant')
const common = require('./webpack.base')
const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = merge(common, {
  entry: {
    app: resolve(PROJECT_PATH, './app/renderer/app.tsx')
  },
  output: {
    filename: '[name].[hash:8].js',
    path: resolve(PROJECT_PATH, './dist'),
    clean: true
  },
  target: 'electron-renderer',
  devtool: 'inline-source-map',
  devServer: {
    contentBase: resolve(PROJECT_PATH, './dist'),
    compress: true,
    host: SERVER_HOST,
    port: SERVER_PORT,
    hot: true,
    open: false
  },
  plugins: [
    new HtmlWebpackPlugin({
      // 👇 以此文件为模版，自动生成 HTML
      template: resolve(PROJECT_PATH, './app/renderer/index.html'),
      filename: resolve(PROJECT_PATH, './dist/index.html')
    }),
    new Webpack.HotModuleReplacementPlugin()
  ],
  mode: 'development'
})
