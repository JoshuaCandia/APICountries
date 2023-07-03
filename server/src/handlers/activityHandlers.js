const postActivities = require('../controllers/activitiesControllers/postActivities')
const getActivity = require('../controllers/activitiesControllers/getActivity')

const postActivity = async (req, res) => {
  try {
    const { name, difficulty, duration, season } = req.body

    // eslint-disable-next-line no-unused-vars
    const createActivities = await postActivities({
      name,
      difficulty,
      duration,
      season
    })

    res.status(201).json(createActivities)
  } catch (error) {
    res.status(400).json({ error: error.message })
  }
}

const getActivities = async (req, res) => {
  try {
    const getAct = await getActivity()
    res.status(200).json(getAct)
  } catch (error) {
    res.status(400).json({ error: error.message })
  }
}

module.exports = { postActivity, getActivities }
