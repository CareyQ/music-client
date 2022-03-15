const { app, BrowserWindow, session } = require('electron')
const path = require('path')

require('electron-reload')(path.join(__dirname, 'build'))

function createWindow() {
  const win = new BrowserWindow({
    width: 1240,
    height: 640,
    frame: false,
    darkTheme: true,
    webPreferences: {
      contextIsolation: false,
      nodeIntegration: true
    }
  })

  win.loadURL('http://localhost:3000')
  win.webContents.openDevTools({ mode: 'detach' })
}

const vueDevToolsPath = path.resolve('C:/Users/CareyQ/AppData/Local/Microsoft/Edge/User Data/Default/Extensions/ljjemllljcmogpfapbkkighbhhppjdbg/6.0.0.21_0')

app.whenReady().then(async () => {
  await session.defaultSession.loadExtension(vueDevToolsPath)

  createWindow()

  app.on('activate', () => {
    if (BrowserWindow.getAllWindows().length === 0) {
      createWindow()
    }
  })
})

app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') {
    app.quit()
  }
})
