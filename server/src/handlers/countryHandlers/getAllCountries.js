const {
  getAllCountries
} = require('../../controllers/countriesControllers/getAllCountries')

const getAllCountriesHandler = async (req, res) => {
  try {
    await getAllCountries()
    res
      .status(200)
      .json({ message: 'Países obtenidos y guardados correctamente.' })
  } catch (error) {
    console.error(error)
    res.status(500).json({ message: 'Error al obtener y guardar los países.' })
  }
}

module.exports = getAllCountriesHandler
