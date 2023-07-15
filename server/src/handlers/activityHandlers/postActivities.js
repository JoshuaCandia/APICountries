const postActivities = require('../../controllers/activitiesControllers/postActivities')

const postActivity = async (req, res) => {
  try {
    const { name, difficulty, duration, season, countryIds } = req.body

    const post = {
      name,
      difficulty,
      duration,
      season
    }

    const createActivities = await postActivities(post, countryIds)
    console.log(countryIds)
    res.status(201).json(createActivities)
  } catch (error) {
    res.status(400).json({ error: error.message })
  }
}

module.exports = postActivity
