const { Activity } = require('../../db')

const postActivity = async ({ name, difficulty, duration, season }) => {
  const post = {
    name,
    difficulty,
    duration,
    season
  }
  const newActivity = await Activity.create(post)

  return newActivity
}

module.exports = postActivity
