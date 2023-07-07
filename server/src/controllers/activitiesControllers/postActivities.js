const { Activity } = require('../../db')

const postActivities = async post => {
  const newActivity = await Activity.create(post)

  return newActivity
}

module.exports = postActivities
