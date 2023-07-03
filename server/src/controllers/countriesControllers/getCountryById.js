const { Country, Activity } = require('../../db')

const getCountryById = async (req, res) => {
  try {
    const { idCountry } = req.params
    console.log(idCountry)
    const countryFound = await Country.findOne({ where: { id: idCountry } })
    res.status(200).json(countryFound)
  } catch (error) {
    res.status(404).send('No se encontro el Pais solicitado')
  }
}

module.exports = getCountryById
