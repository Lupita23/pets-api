// dependencias //
const express = require('express')
// const routers = require('./src/routers')//

// app const/vars //
const app = express()
const port = 8080

app.get('/hola', function (req, res) {
  res.json({
    message: 'Hello world'
  })
})

module.exports = {
  server: app,
  port
}
