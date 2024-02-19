const express = require('express')
const app = express()

const routes = require('./routes') // require路徑不用再加上index是因為預設就會找這個名稱的檔案

const db = require('./models')

app.use(routes)

app.listen(3000, () => {
  console.log('App is running on port 3000')
})
