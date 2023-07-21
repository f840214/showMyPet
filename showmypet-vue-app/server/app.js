const express = require('express');
const path = require('path');

const app = express();
const port = 3000; // 你可以選擇一個自己喜歡的伺服器埠號

// 設定靜態檔案路徑，這裡假設Vue應用程式生成檔案在dist目錄下
app.use(express.static(path.join(__dirname, '../dist')));

// 所有路徑的請求都回傳index.html，讓Vue-Router來處理路由
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, '../dist', 'index.html'));
});

// 啟動伺服器
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
