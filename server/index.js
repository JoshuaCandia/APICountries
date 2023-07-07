const server = require('./src/server')
const { conn } = require('./src/db.js')

const PORT = 3001
const getAllCountries = require('./src/controllers/countriesControllers/getAllCountries')

conn
  .sync({ force: true })
  .then(() => {
    server.listen(PORT, () => {
      console.log(`Server listening on port ${PORT}`)

      getAllCountries() // lleno la base de datos
    })
  })
  .catch(error => console.error(error))
