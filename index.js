const { server, port } = require('./src/server')

server.listen(port, function () {
  console.log('Puerto del servidor', `${port}`)
})
