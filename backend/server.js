const express = require('express');
const fs = require('fs');
const cors = require('cors'); // クロスオリジンを許可する

const app = express();
app.use(cors()); // フロントエンドと連携するためにCORSを許可
app.use(express.json()); // JSONボディのパース

// POSTリクエストでデータを受け取り、保存する
app.post('/save', (req, res) => {
  const data = req.body;
  fs.appendFile('experiment_data.json', JSON.stringify(data) + '\n', (err) => {
    if (err) {
      console.error('Error saving data:', err);
      res.status(500).send('Error saving data');
    } else {
      res.status(200).send('Data saved successfully');
    }
  });
});

// サーバーをポート3000で起動
app.listen(3000, () => {
  console.log('Server is running on port 3000');
});
