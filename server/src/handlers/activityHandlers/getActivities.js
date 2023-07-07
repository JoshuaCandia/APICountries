const getActivity = require('../../controllers/activitiesControllers/getActivity')

const getActivities = async (req, res) => {
  try {
    const getAct = await getActivity()

    res.status(200).json(getAct)
  } catch (error) {
    res.status(400).json({ error: error.message })
  }
}

module.exports = getActivities
