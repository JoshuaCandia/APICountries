const { Country, Activity } = require('../../db')

const getCountryByIdController = async idCountry => {
  try {
    const countryFound = await Country.findByPk(idCountry, {
      include: Activity // Incluir las actividades asociadas al país
    })

    if (!countryFound) {
      throw new Error('No se encontró el país solicitado')
    }

    return countryFound
  } catch (error) {
    throw new Error('Error al obtener el país : ', error.message)
  }
}

module.exports = {
  getCountryByIdController
}
