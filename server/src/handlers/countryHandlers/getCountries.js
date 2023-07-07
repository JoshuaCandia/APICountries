const getCountries = require('../../controllers/countriesControllers/getCountries')

const allCountriesHandler = async (req, res) => {
  try {
    const countries = await getCountries()
    res.status(200).json(countries)
  } catch (error) {
    res.status(500).json({ message: 'Error al obtener los países.' })
  }
}

module.exports = allCountriesHandler
