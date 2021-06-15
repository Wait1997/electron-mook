const { merge } = require('webpack-merge')
const { resolve } = require('path')
const { PROJECT_PATH } = require('../constant')
const common = require('./webpack.base')

module.exports = merge(common, {
  entry: resolve(PROJECT_PATH, './app/main/electron.ts'),
  target: 'electron-main',
  output: {
    filename: 'electron.js',
    path: resolve(PROJECT_PATH, './dist'),
    clean: true
  },
  devtool: 'inline-source-map',
  mode: 'development'
})
