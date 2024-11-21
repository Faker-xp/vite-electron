const { app, BrowserWindow, BrowserView, webContents } = require('electron');
const path = require('path');

const createWindow = () => {
    const mainWindow = new BrowserWindow({
        // 窗口宽度
        width: 300,
        // 窗口高度
        height: 300,
        // 窗口标题置顶
        alwaysOnTop: true,
        // 位置x轴
        x: 1600,
        // 位置y轴
        y: 100,
        // 隐藏标题栏
        frame: false,
        // 窗口透明
        transparent: true,
    });
    // 设置窗口大小比例
    mainWindow.setAspectRatio(1)
    // 加载本地文件
    mainWindow.loadFile(path.join(__dirname, 'index.html'));
}

app.whenReady().then(() => {
    // 创建主窗口
    createWindow();

    // 窗口嵌套网页
    // mainWindow.loadURL('https://www.baidu.com')

    // 根目录
    // console.log(__dirname)

    // 打开窗口调试工具
    // mainWindow.webContents.openDevTools();
});

// 窗口关闭
app.on('window-all-closed', () => {
    console.log('窗口关闭')
    // macOS上，除非用户按下Cmd + Q，否则应用及其菜单栏将保持激活状态
    if (process.platform !== 'darwin') {
        // app.quit();
    }
})

// 窗口激活
app.on('activate', () => {
    createWindow();
})
