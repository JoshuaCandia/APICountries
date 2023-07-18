const { Country, Activity } = require('../../db')

const getCountryByIdController = async idCountry => {
  try {
    const countryFound = await Country.findByPk(idCountry, {
      include: Activity // Incluir las actividades asociadas al país
    })

    if (!countryFound) {
      throw new Error('No se encontró el país solicitado')
    }

    const result = { country: countryFound, borderCountries: [] }

    if (countryFound.borders) {
      const borderKeys = countryFound.borders.slice(1, -1).split(',')

      const countries = await Country.findAll({
        where: {
          id: borderKeys
        }
      })

      result.borderCountries = countries.map(country => {
        return { name: country.commonName, idVecino: country.id }
      })
    }

    return result
  } catch (error) {
    throw new Error('Error al obtener el país : ', error.message)
  }
}

module.exports = {
  getCountryByIdController
}
