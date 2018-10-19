// 使用するライブラリの読み込み
const express = require('express');
const path = require('path');
const http = require('http');

// api.js(サーバサイドの処理スクリプト)の読み込み
const api = require('./server/routes/api');

// expressの初期化
const app = express();

// 静的ファイルパスの設定
// ビルド後のAngularのパスを設定する
app.use(express.static(path.join(__dirname, 'dist')));

// /apiでアクセスしたときはapi.jsを表示
app.use('/api', api);

// 任意のURLでアクセスしたときはdist/index.html(Angularのindex.html)を表示
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'dist/index.html'));
});

/**
 * ポート設定
 */
const port = process.env.PORT || '3000';
app.set('port', port);

/**
 * HTTPサーバの作成
 */
const server = http.createServer(app);

/**
 * ポート監視を開始する
 */
server.listen(port, () => console.log(`API running on localhost:${port}`));