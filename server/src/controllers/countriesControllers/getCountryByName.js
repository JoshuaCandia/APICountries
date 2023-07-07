const { Country } = require('../../db.js')
const { Op } = require('sequelize')

const getCountryByName = async name => {
  try {
    const countries = await Country.findAll({
      where: {
        name: {
          [Op.iLike]: `%${name}%`
        }
      }
    })

    if (countries.length === 0) {
      throw new Error('No se encontraron países con ese nombre.')
    }

    return countries
  } catch (error) {
    throw new Error('Ocurrió un error en el servidor.')
  }
}

module.exports = getCountryByName
