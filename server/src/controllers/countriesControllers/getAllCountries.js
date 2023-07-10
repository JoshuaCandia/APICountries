const axios = require('axios')

const { Country } = require('../../db')

const URL = 'http://localhost:5000/countries'

const getAllCountries = async () => {
  try {
    const { data } = await axios.get(URL)
    const mappedCountries = data.map(country => ({
      id: country.cca3,
      commonName: country.name.common,
      officialName: country.name.official,
      languages: country.languages,
      flag: country.flags.png,
      escudo: country.coatOfArms.png,
      continent: country.continents[0],
      capital: country.capital ? country.capital[0] : 'No tiene',
      region: country.region ? country.subregion : 'Sin Subregion',
      area: country.area,
      population: country.population,
      borders: country.borders
    }))

    await Country.bulkCreate(mappedCountries)
  } catch (error) {
    console.error(error)
  }
}

module.exports = getAllCountries
