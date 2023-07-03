const generalCountries = require('../../api/db.json')

const { Country } = require('../../db')

const postCountries = async (req, res) => {
  try {
    const mappedCountries = generalCountries.countries.map(country => ({
      id: country.cca3,
      name: country.name.common,
      flag: country.flags.svg,
      continent: country.continents[0],
      capital: country.capital ? country.capital[0] : 'No tiene',
      subregion: country.subregion ? country.subregion : 'Sin Subregion',
      area: country.area,
      population: country.population
    }))

    await Country.bulkCreate(mappedCountries)

    res.status(200).send('Countries creados en base de datos')
  } catch (error) {
    res.status(500).json(error.message)
  }
}

module.exports = postCountries
