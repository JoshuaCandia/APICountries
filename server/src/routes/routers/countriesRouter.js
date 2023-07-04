const { Router } = require('express')

const getCountryById = require('../../controllers/countriesControllers/getCountryById')
const getCountryByName = require('../../controllers/countriesControllers/getCountryByName')
const getCountries = require('../../controllers/countriesControllers/getCountries')
const getAllCountries = require('../../controllers/countriesControllers/getAllCountries')
const routerCountries = Router()

routerCountries.get('/getAllCountries', getAllCountries) // LLena la base de datos

routerCountries.get('/', getCountries)

routerCountries.get('/name', getCountryByName)

routerCountries.get('/:idCountry', getCountryById)

module.exports = routerCountries
