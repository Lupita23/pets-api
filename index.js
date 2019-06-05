const { server, port } = require('./src/server')
const db = require('./src/lib/db')

db.connect()
  .then(() => {
    console.log('BD Connected')
    server.listen(port, function () {
      console.log('Puerto del servidor', `${port}`)
    })
  })
  .catch(error => {
    console.error('Error', error)
  })
