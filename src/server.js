// dependencias //
const express = require('express')
const app = express()
const port = 8080
const userRouter = require('./routers/user')

app.use(express.json())
app.use('/users', userRouter)

app.get('/', function (req, res) {
  res.json({
    success: true,
    message: 'Hello world'
  })
})

module.exports = {
  server: app,
  port
}
