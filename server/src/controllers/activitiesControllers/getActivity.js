const { Activity } = require('../../db')

const getActivity = async () => {
  const act = await Activity.findAll()

  if (act.length === 0) {
    throw new Error('No hay actividades')
  }
  return act
}

module.exports = getActivity
