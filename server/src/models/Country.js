const { DataTypes } = require('sequelize')

module.exports = sequelize => {
  sequelize.define('Country', {
    id: {
      type: DataTypes.STRING(3),
      primaryKey: true
    },
    commonName: {
      type: DataTypes.STRING,
      allowNull: false
    },
    officialName: {
      type: DataTypes.STRING
    },
    lenguages: {
      type: DataTypes.STRING
    },
    flag: {
      type: DataTypes.STRING,
      allowNull: false
    },
    escudo: {
      type: DataTypes.STRING
    },
    continent: {
      type: DataTypes.STRING,
      allowNull: false
    },
    capital: {
      type: DataTypes.STRING,
      allowNull: false
    },
    region: {
      type: DataTypes.STRING
    },
    area: {
      type: DataTypes.STRING
    },
    population: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    borders: {
      type: DataTypes.STRING
    }
  })
}
