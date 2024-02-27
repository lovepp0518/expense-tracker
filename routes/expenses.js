const express = require('express')
const router = express.Router()

router.get('/', (req, res) => {
  res.render('index')
})

router.get('/new', (req, res) => {
  res.render('create-expense')
})

router.post('/', (req, res) => {
  res.send('post expenses')
})

router.get('/:id/edit', (req, res) => {
  res.render('edit-expense')
})

router.put('/:id', (req, res) => {
  res.send('put expenses')
})

router.delete('/:id', (req, res) => {
  res.send('delete expenses')
})

module.exports = router
