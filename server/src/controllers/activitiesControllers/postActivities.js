const { Activity } = require('../../db')

const postActivity = ({ name, difficulty, duration, season }) => {
  const post = {
    name,
    difficulty,
    duration,
    season
  }
  const newActivity = Activity.create(post)

  return newActivity
}

module.exports = postActivity
