const { app, BrowserWindow, globalShortcut } = require('electron')
const dotenv = require('dotenv');

// Load environment variables from .env file
dotenv.config();

let mainWindow;

// Create a browser window
function createWindow() {
  // Check if a window already exists
  if (mainWindow) {
    // If it does, focus on the window and return
    if (mainWindow.isMinimized()) mainWindow.restore();
    mainWindow.focus();
    return;
  }

  // Create a new window with the specified dimensions and preferences
  mainWindow = new BrowserWindow({
    width: 1200,
    height: 600,
    webPreferences: {
      nodeIntegration: true
    },
    frame: false,
    skipTaskbar: true
  });

  // Load the specified URL in the browser window
  mainWindow.loadURL('https://chat.openai.com/chat');

  // Show the window when it is focused
  mainWindow.on('focus', () => mainWindow.show());

  // Hide the window when the user clicks outside of it
  mainWindow.on('blur', () => mainWindow.hide());
}

// Quit the app when all windows are closed
app.on('window-all-closed', () => {
  // On macOS, it is common for applications and their menu bar
  // to stay active until the user quits explicitly with Cmd + Q
  if (process.platform !== 'darwin') {
    app.quit();
  }
});

// Reactivate the app when it is opened again
app.on('activate', () => {
  // On macOS, it is common to recreate a window when the
  // dock icon is clicked and there are no other windows open.
  if (mainWindow === null) {
    createWindow();
  }
});

// Check if the app has obtained a single instance lock
const gotTheLock = app.requestSingleInstanceLock();

// If the app did not obtain the lock, quit the app
if (!gotTheLock) {
  app.quit();
  return;
}

// When a second instance of the app is launched,
// focus on the first instance of the app
app.on('second-instance', () => mainWindow && mainWindow.focus());

app.on('ready', () => {
    // Register a 'process.env.SHORTCUT' shortcut listener.
    globalShortcut.register(process.env.SHORTCUT, () => {
      // Do something when 'process.env.SHORTCUT' is pressed.
      if (mainWindow) {
        if (mainWindow.isVisible()) {
            mainWindow.hide();
        } else {
            mainWindow.show();
            mainWindow.focus();
        }
      }
    });
});

// Unregister all shortcuts when the app is about to quit
app.on('will-quit', () => globalShortcut.unregisterAll());

// Create a browser window when the app is ready
app.whenReady().then(createWindow);