// TODO: create a Traveler model
const {Model, DataTypes, INTEGER, STRING} = require('sequelize')
const sequelize = require('../config/connection')

class Traveller extends Model {}

Traveller.init({
    name: {
        type: DataTypes.STRING,
    },
    email:{ 
    type: DataTypes.STRING
    }
},
{
    sequelize
})
module.exports = Traveller