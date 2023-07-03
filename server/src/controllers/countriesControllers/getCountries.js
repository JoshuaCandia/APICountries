const { Country } = require('../../db.js')

const getCountries = async (req, res) => {
  try {
    const countries = await Country.findAll()
    res.status(200).json(countries)
  } catch (error) {
    res.status(500).json({ message: 'Error al obtener los países.' })
  }
}

module.exports = getCountries
