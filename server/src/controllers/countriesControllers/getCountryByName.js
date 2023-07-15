const { Country, Activity } = require('../../db.js')
const { Op } = require('sequelize')

const getCountryByName = async name => {
  try {
    const countries = await Country.findAll({
      where: {
        commonName: {
          [Op.iLike]: `%${name}%`
        }
      },
      include: Activity
    })

    if (countries.length === 0) {
      throw new Error('No se encontraron países con ese nombre.')
    }

    return countries
  } catch (error) {
    throw new Error(error.message)
  }
}

module.exports = getCountryByName
