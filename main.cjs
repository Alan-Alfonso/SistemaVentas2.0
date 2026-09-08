// pedimos los modulos de electron y luego creamos el objeto de la ventana principal
const { app, BrowserWindow } = require('electron');

function createWindow() {
  const mainWindow = new BrowserWindow({
    width: 520,
    height: 650,
    minWidth: 320,      
    minHeight: 500,     
    frame: false,
    transparent: true,
    resizable: true,    
    webPreferences: {
      nodeIntegration: true,
      contextIsolation: false,
    },
  });
 // Cargamos la URL de desarrollo de Vite
  mainWindow.loadURL('http://localhost:5173');
}

// Cuando la aplicación esté lista, creamos la ventana principal
app.whenReady().then(createWindow);

//Luego, cuando todas las ventanas estén cerradas, salimos de la aplicación (excepto en macOS)
app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') {
    app.quit();
  }
});