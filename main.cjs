const { app, BrowserWindow, ipcMain } = require('electron');

function createWindow() {
  const mainWindow = new BrowserWindow({
    width: 520,
    height: 650,
    minWidth: 320,      
    minHeight: 500,     
    frame: false,
    transparent: true, // Arranca transparente para el Login
    resizable: true,    
    webPreferences: {
      nodeIntegration: true,
      contextIsolation: false,
    },
  });

  mainWindow.loadURL('http://localhost:5173');

  // Escuchar cuando se quiera cambiar el tamaño y redimensionar
 // Escuchar cuando se quiera cambiar el tamaño (al ir al menú)
  ipcMain.on('cambiar-tamanio', (event, { width, height }) => {
    mainWindow.unmaximize(); // Por si venía de un estado previo maximizado
    mainWindow.setSize(width, height, true); // El true hace que la transición sea suave
    mainWindow.center();
  });

  // NUEVO: Evento para maximizar y quitar la transparencia al entrar al menú
  ipcMain.on('expandir-menu-completo', () => {
    // Nota: En la mayoría de los sistemas, para que una ventana transparente 
    // pase a ser totalmente sólida al maximizar, se redimensiona a la pantalla completa 
    // o se ajusta el tamaño del monitor principal.
    mainWindow.maximize();
  });
}

app.whenReady().then(createWindow);

app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') {
    app.quit();
  }
});