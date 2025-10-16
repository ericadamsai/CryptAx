import { app, BrowserWindow } from 'electron';
import * as path from 'path';
import { exec, ChildProcess } from 'child_process';

let mainWindow: BrowserWindow | null = null;
let nextProcess: ChildProcess | null = null;

function createWindow() {
  mainWindow = new BrowserWindow({
    width: 1200,
    height: 800,
    backgroundColor: '#000000',
    webPreferences: {
      preload: path.join(__dirname, 'preload.js'),
      contextIsolation: true,
      nodeIntegration: false,
      sandbox: true,
    },
    autoHideMenuBar: true,
  });

  // Start Next.js dev server
  const rendererPath = path.join(__dirname, '..', 'renderer');
  nextProcess = exec('npm run dev', { cwd: rendererPath });

  let serverReady = false;

  if (nextProcess.stdout) {
    nextProcess.stdout.on('data', (data: string) => {
      console.log(`Next.js: ${data}`);
      if (!serverReady && data.includes('Local:')) {
        serverReady = true;
        mainWindow?.loadURL('http://localhost:3000');
      }
    });
  }

  if (nextProcess.stderr) {
    nextProcess.stderr.on('data', (data: string) => {
      console.error(`Next.js Error: ${data}`);
    });
  }

  mainWindow.on('closed', () => {
    mainWindow = null;
  });
}

app.whenReady().then(createWindow);

app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') {
    app.quit();
  }
});

app.on('activate', () => {
  if (BrowserWindow.getAllWindows().length === 0) {
    createWindow();
  }
});

app.on('quit', () => {
  if (nextProcess) {
    nextProcess.kill();
  }
});
