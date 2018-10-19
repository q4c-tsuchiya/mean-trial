const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');

// スキーマを定義
var Schema   = mongoose.Schema;
var UserSchema = new Schema({
  first_name:  String,
  last_name: String
});
mongoose.model('User', UserSchema);

// MongoDBに接続
mongoose.connect('mongodb://localhost/test_db');

var User = mongoose.model('User');

router.get('/', (req, res) => {
  res.header('Content-Type', 'text/plain;charset=utf-8');
  res.send('これはサーバサイドスクリプトだよ');
});

router.get('/user',(req, res) => {

  // MongoDBからデータを取得
  User.find({}, function(err, docs) {
    res.json(docs);
  });
});

module.exports = router;