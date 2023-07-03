const { Country } = require('../../db.js')

const { Op } = require('sequelize')

const getCountryByName = async (req, res) => {
  try {
    const { name } = req.query

    const countryByName = await Country.findAll({
      where: {
        name: {
          [Op.iLike]: `%${name}%`
        }
      }
    })

    if (countryByName.length === 0) {
      return res
        .status(404)
        .json({ message: 'No se encontraron países con ese nombre.' })
    }

    res.status(200).json(countryByName)
  } catch (error) {
    res.status(500).json({ message: 'Ocurrió un error en el servidor.' })
  }
}

module.exports = getCountryByName
