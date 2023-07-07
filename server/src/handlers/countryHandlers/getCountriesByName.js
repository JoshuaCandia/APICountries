const getCountryByName = require('../../controllers/countriesControllers/getCountryByName')

const countryHandler = async (req, res) => {
  const { name } = req.query
  try {
    const countries = await getCountryByName(name)
    res.status(200).json(countries)
  } catch (error) {
    console.error(error)
    res.status(500).json({ message: 'Ocurrió un error en el servidor.' })
  }
}

module.exports = countryHandler
