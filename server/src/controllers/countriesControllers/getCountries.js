const { Country } = require('../../db.js')

const getCountries = async () => {
  try {
    const countries = await Country.findAll()
    return countries
  } catch (error) {
    throw new Error('Error al obtener los países.')
  }
}

module.exports = getCountries
