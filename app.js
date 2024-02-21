const express = require('express')
const app = express()

// 用require引入express-handlebars(官方git上使用import)，兩者都是用來載入模組的方式， require是Node.js 中常見的模組載入方式，import是ECMAScript 6（ES6）中引入的模組載入方式
const { engine } = require('express-handlebars')
app.engine('.hbs', engine({ extname: '.hbs' })) // 設定Express應用程式以使用.hbs作為views的副檔名(簡化副檔名)
app.set('view engine', '.hbs')
app.set('views', './views')

const routes = require('./routes') // require路徑不用再加上index是因為預設就會找這個名稱的檔案

const db = require('./models')

app.use(routes)

app.listen(3000, () => {
  console.log('App is running on port 3000')
})
