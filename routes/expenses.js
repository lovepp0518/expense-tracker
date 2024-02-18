const express = require('express')
const router = express.Router()

router.get('/', (req, res) => {
  res.send('get expenses')
})

router.get('/new', (req, res) => {
  res.send('get /expenses/new')
})

router.post('/', (req, res) => {
  res.send('post expenses')
})

router.get('/:id/edit', (req, res) => {
  res.send('get /expenses/:id/edit')
})

router.put('/:id', (req, res) => {
  res.send('put expenses')
})

router.delete('/:id', (req, res) => {
  res.send('delete expenses')
})

module.exports = router
