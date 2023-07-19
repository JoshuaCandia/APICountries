const { DataTypes } = require('sequelize')

module.exports = sequelize => {
  sequelize.define('Activity', {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      allowNull: false,
      autoIncrement: true
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        max: {
          args: [50],
          msg: 'El nombre no puede tener más de 50 letras.'
        }
      }
    },
    difficulty: {
      type: DataTypes.INTEGER,
      allowNull: false,
      validate: {
        min: 1,
        max: 5
      }
    },
    duration: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    season: {
      type: DataTypes.ARRAY(DataTypes.STRING),
      allowNull: false
    }
  })
}
