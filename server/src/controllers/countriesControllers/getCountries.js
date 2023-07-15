const { Country, Activity } = require('../../db.js')

const getCountries = async () => {
  try {
    const countries = await Country.findAll({
      include: Activity // Incluye el modelo Activity en la consulta
    })
    return countries
  } catch (error) {
    throw new Error('Error al obtener los países.')
  }
}

module.exports = getCountries
