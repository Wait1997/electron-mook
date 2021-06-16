const path = require('path')

const PROJECT_PATH = path.resolve(__dirname, '../')

const imageInlineSizeLimit = 4 * 1024

// dev server 路径与端口
const SERVER_HOST = 'localhost'
const SERVER_PORT = 7009

module.exports = {
  PROJECT_PATH,
  SERVER_HOST,
  SERVER_PORT,
  imageInlineSizeLimit
}
