const express = require('express')

// パラメーターを受け取れるようにするライブラリ
const bodyParser = require('body-parser')

// ここでappを宣言
const app = express()
// appを使っていろいろなことをするよ

app.use(bodyParser.json())

// model?
let users = [
  {
    id: 1,
    name: 'otoka',
    description: 'おとかの情報'
  },
  {
    id: 2,
    name: 'たく',
    description: 'たくの情報'
  }
]

// controller

// ユーザー一覧
// index
app.get('/users/', (req, res) => {
  res.send(users)
})

// create
app.post('/users/', (req, res) => {
  users.push(req.body)
  res.send(users)
})

// show
app.get('/users/:id', (req, res) => {
  res.send(users.find(val => val.id == req.params.id))
})

// update

app.put('/users/:id', (req, res) => {
  // 一旦変数に格納
  let user = users.find(val => val.id == req.params.id)
  // 内容を更新
  /*
  補足：
  親はusersである。
  userという変数にオブジェクトを単に追加しただけに見えるけど…
  親のusersのアドレスは保持していると考えて良い。
  つまり、userを更新したら、usersから引っ張ってきたので
  当然usersの内容も更新されることになる。
  内容を更新
  */
  user.name = req.body.name
  user.description = req.body.description
  // successメッセージ
  res.send(users)
})

// destroy
app.delete('/users/:id', (req, res) => {
  users = users.filter(val => val.id != req.params.id)
  res.send(users)
})


// 準備が整ったらサーバー起動
app.listen(3000, () => console.log('サーバー起動'))
