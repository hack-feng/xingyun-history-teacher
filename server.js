const express = require('express');
const path = require('path');

const app = express();
const PORT = 3000;

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'home.html'));
});

app.get('/index.html', (req, res) => {
    res.sendFile(path.join(__dirname, 'index.html'));
});

app.use(express.static(__dirname));

app.listen(PORT, () => {
    console.log(`🚀 历史辅导助手服务器已启动`);
    console.log(`📍 本地访问地址: http://localhost:${PORT}`);
    console.log(`📂 服务根目录: ${__dirname}`);
    console.log(`\n💡 提示: 请在浏览器中打开 http://localhost:${PORT}`);
    console.log(`🛑 按 Ctrl+C 可停止服务器`);
});
