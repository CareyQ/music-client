const { app, BrowserWindow } = require('electron')
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

app.whenReady().then(() => {
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
