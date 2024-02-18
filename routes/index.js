const express = require('express')
const router = express.Router()

const expenses = require('./expenses')
router.use('/expenses', expenses)

router.get('/signin', (req, res) => {
  res.send('get signin')
})

router.post('/signin', (req, res) => {
  res.send('post signin')
})

router.get('/signup', (req, res) => {
  res.send('get signup')
})

router.post('/signup', (req, res) => {
  res.send('post signup')
})

router.post('/logout', (req, res) => {
  res.send('post logout')
})

router.get('/', (req, res) => {
  res.send('hello world')
})

module.exports = router
