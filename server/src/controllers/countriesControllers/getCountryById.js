const { Country } = require('../../db')

const getCountryByIdController = async idCountry => {
  try {
    const countryFound = await Country.findOne({ where: { id: idCountry } })

    return countryFound
  } catch (error) {
    throw new Error('No se encontró el país solicitado')
  }
}

module.exports = {
  getCountryByIdController
}
