import { resolve } from 'path'
import { app, BrowserWindow, ipcMain } from 'electron'

const rootPath = resolve(app.getAppPath(), '../')

function isDev() {
  return process.env.NODE_ENV === 'development'
}

function createWindow() {
  // 创建浏览器窗口
  const mainWindow = new BrowserWindow({
    width: 1200,
    height: 800,
    webPreferences: {
      devTools: true,
      nodeIntegration: true // 注入node模块
    }
  })
  if (isDev()) {
    mainWindow.loadURL('http://localhost:7009')
  } else {
    mainWindow.loadURL(`file://${resolve(__dirname, '../dist/index.html')}`)
  }
}

app.whenReady().then(() => {
  createWindow()
  app.on('activate', () => {
    if (BrowserWindow.getAllWindows().length === 0) {
      createWindow()
    }
  })
})

// 👇 监听渲染进程发的消息并回复
ipcMain.on('get-root-path', (event) => {
  event.reply('reply-root-path', rootPath)
})
