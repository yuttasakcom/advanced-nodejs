const express = require('express')
const morgan = require('morgan')
const app = express()

app.use(morgan('common'))

app.set('port', process.env.PORT || '3000')

app.get('/', (req, res) => {
  res.end('Hello World!')
})

module.exports = app
