const { app, BrowserWindow, session } = require('electron')
const path = require('path')
const {
  default: installExtension,
  VUEJS3_DEVTOOLS
} = require('electron-devtools-installer')
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

app.on('ready', () => {
  installExtension(VUEJS3_DEVTOOLS)
    .then((name) => console.log(`Added Extension:  ${name}`))
    .catch((err) => console.log('An error occurred: ', err))
})

app.on('activate', () => {
  const allWindows = BrowserWindow.getAllWindows()
  if (allWindows.length) {
    allWindows[0].focus()
  } else {
    init()
  }
})

app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') {
    app.quit()
  }
})

app.whenReady().then(createWindow)

function init() {
  console.log('init')
  createWindow()
}
