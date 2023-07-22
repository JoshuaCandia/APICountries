const { Activity, Country } = require('../../db')

const postActivities = async (post, countryIds) => {
  try {
    const newActivity = await Activity.create(post)
    const countries = await Country.findAll({ where: { id: countryIds } })

    await newActivity.setCountries(countries)
    return newActivity
  } catch (error) {
    console.error(error)
  }
}

module.exports = postActivities
