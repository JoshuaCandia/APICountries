const {
  getCountryByIdController
} = require('../../controllers/countriesControllers/getCountryById')

const getCountryById = async (req, res) => {
  try {
    const { idCountry } = req.params

    const countryFound = await getCountryByIdController(idCountry) // controller

    res.status(200).json(countryFound)
  } catch (error) {
    res.status(404).send('No se encontró el país solicitado')
  }
}

module.exports = getCountryById
