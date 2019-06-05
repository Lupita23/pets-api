const mongoose = require('mongoose')

// coneccion a la base de datos desde mongoose (atlas) //
const connectionString = 'mongodb+srv://pets-api:petsapi@clusterguadalupe-ve7u6.mongodb.net/test?retryWrites=true&w=majority'

const connect = () => new Promise((resolve, reject) => {
  mongoose.connect(connectionString, { useNewUrlParser: true }, (error) => {
    /* pregunta si hay un error */
    if (error) return reject(error)
    /* si no  encuentra ningun error, continua con la ejecucion */
    resolve()
  })
})

module.exports = {
  connect
}

/*
// metodo connect //
mongoose.connect(connectionString, { useNewUrlParser: true }, (error) => {
  if (error) return console.error('error')
  console.info('Mongoose conneted')
}) */
