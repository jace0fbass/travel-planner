// TODO: create a Trip model
const {Model, DataTypes} = require('sequelize')
const sequelize = require('../config/connection')

class Trip extends Model {}

    Trip.init({
        trip_budget: {
            type: DataTypes.DECIMAL(10,2),
        },
      traveller_amount: {
        type: DataTypes.INTEGER,
      },
      traveller_id: {
        type: DataTypes.INTEGER,
      },
      location_id: {
        type: DataTypes.INTEGER,
      }
    },
    {
        sequelize
    })

    module.exports = Trip
