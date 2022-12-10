 // TODO: Create a Location model
const {Model, DataTypes} = require('sequelize')
const sequelize = require('../config/connection')


class Location extends Model {}

Location.init({
    location_name: {
        type: DataTypes.STRING,

    }
},
{
    sequelize
})

module.exports = Location