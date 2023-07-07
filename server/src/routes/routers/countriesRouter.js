const { Router } = require('express')
const routerCountries = Router()

const getCountryByName = require('../../handlers/countryHandlers/getCountriesByName')
const getCountryById = require('../../handlers/countryHandlers/getCountryById')
const allCountriesHandler = require('../../handlers/countryHandlers/getCountries')
// const getAllCountries = require('../../handlers/countryHandlers/getAllCountries')

// routerCountries.get('/getAllCountries', getAllCountries) LLena la base de datos con una peticion

routerCountries.get('/', allCountriesHandler)

routerCountries.get('/name', getCountryByName)

routerCountries.get('/:idCountry', getCountryById)

module.exports = routerCountries
