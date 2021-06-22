const { resolve } = require('path')
const Webpack = require('webpack')
const { merge } = require('webpack-merge')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const { PROJECT_PATH, SERVER_HOST, SERVER_PORT, imageInlineSizeLimit } = require('../constant')
const common = require('./webpack.base')

const getCssLoader = (importLoaders) =>
  [
    'style-loader',
    {
      loader: 'css-loader',
      options: {
        // 开启css模块化
        modules: {
          compileType: 'module',
          localIdentName: '[local]__[hash:base64:5]'
        },
        sourceMap: true, // 开启后与 devtool 设置一致, 开发环境开启，生产环境关闭
        importLoaders // 指定在 CSS loader 处理前使用的 laoder 数量
      }
    },
    {
      loader: 'postcss-loader',
      options: {
        postcssOptions: {
          plugins: [require('postcss-flexbugs-fixes')]
        }
      }
    }
  ].filter(Boolean)

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
  module: {
    rules: [
      {
        test: /\.css$/,
        use: getCssLoader(1)
      },
      {
        test: /\.less$/,
        use: [
          ...getCssLoader(2),
          {
            loader: 'less-loader',
            options: {
              sourceMap: true
            }
          }
        ]
      },
      {
        test: [/\.bmp$/, /\.gif$/, /\.jpe?g$/, /\.png$/],
        type: 'asset',
        // 设置资源的大小
        parser: {
          dataUrlCondition: {
            maxSize: imageInlineSizeLimit
          }
        }
      },
      {
        test: /\.(eot|svg|ttf|woff|woff2?)$/,
        type: 'asset/resource'
      }
    ]
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
