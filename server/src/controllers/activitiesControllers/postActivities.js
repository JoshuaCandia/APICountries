const { Activity, Country } = require('../../db')

const postActivities = async (post, countryIds) => {
  const newActivity = await Activity.create(post)
  const countries = await Country.findAll({ where: { id: countryIds } })
  await newActivity.setCountries(countries)
  return newActivity
}

module.exports = postActivities
