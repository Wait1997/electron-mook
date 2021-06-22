const { resolve } = require('path')
const { PROJECT_PATH } = require('../constant')

module.exports = {
  resolve: {
    extensions: ['.tsx', '.ts', '.js', '.json'],
    alias: {
      '@': resolve(PROJECT_PATH, './app'),
      '@m': resolve(PROJECT_PATH, './app/main'),
      '@r': resolve(PROJECT_PATH, './app/renderer'),
      '@a': resolve(PROJECT_PATH, './assets')
    }
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx|ts|tsx)$/,
        use: {
          loader: 'babel-loader',
          options: { cacheDirectory: true }
        },
        exclude: /node_modules/
      }
    ]
  }
}
