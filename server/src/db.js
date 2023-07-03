/* eslint-disable no-undef */
require('dotenv').config()
const { Sequelize } = require('sequelize')

const fs = require('fs')
const path = require('path')
const { DB_USER, DB_PASSWORD, DB_HOST } = process.env

const sequelize = new Sequelize(
  `postgres://${DB_USER}:${DB_PASSWORD}@${DB_HOST}/countries`,
  {
    logging: false,
    native: false
  }
)

const basename = path.basename(__filename)

const modelDefiners = []

// Leemos todos los archivos de la carpeta Models, los requerimos y agregamos al arreglo modelDefiners
fs.readdirSync(path.join(__dirname, '/models'))
  .filter(
    file =>
      file.indexOf('.') !== 0 && file !== basename && file.slice(-3) === '.js'
  )

  .forEach(file => {
    modelDefiners.push(require(path.join(__dirname, '/models', file)))
  })

// Injectamos la conexion (sequelize) a todos los modelos
modelDefiners.forEach(model => model(sequelize))

// Capitalizamos los nombres de los modelos ie: product => Product
const entries = Object.entries(sequelize.models)

const capsEntries = entries.map(entry => [
  entry[0][0].toUpperCase() + entry[0].slice(1),
  entry[1]
])

sequelize.models = Object.fromEntries(capsEntries)

const { Country, Activity } = sequelize.models

Country.belongsToMany(Activity, { through: 'CountryActivity' })
Activity.belongsToMany(Country, { through: 'CountryActivity' })

module.exports = {
  ...sequelize.models, // para poder importar los modelos así: const { Country, Activity } = require('./db.js');
  conn: sequelize // para importart la conexión { conn } = require('./db.js');
}
