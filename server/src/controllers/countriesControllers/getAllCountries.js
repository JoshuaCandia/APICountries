const axios = require('axios')
const { Country } = require('../../db')

const URL = 'http://localhost:5000/countries'

const getAllCountries = async (req, res) => {
  try {
    const { data } = await axios.get(URL)
    const mappedCountries = data.map(country => ({
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
  } catch (error) {
    console.error(error)
  }
}

module.exports = getAllCountries
