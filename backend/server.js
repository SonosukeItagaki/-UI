const express = require('express');
const app = express();
const path = require('path');

// Reactのビルドファイルを提供する
app.use(express.static(path.join(__dirname, '../frontend/build')));

// すべてのリクエストに対してindex.htmlを返す
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, '../frontend/build/index.html'));
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
