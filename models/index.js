// TODO: require in all models here
const Location = require('./location')
const Traveller = require('./traveller')
const Trip = require('./trips')

// TODO: set up model associations here
Location.belongsToMany(Traveller, {
    through: {
        model: Trip,
        unique: false
    },
    as: 'planned_trips'
})

Traveller.belongsToMany(Location, {
    through: {
        model: Trip,
        unique: false
    },
    as: 'location_travellers'
})

// TODO: export all models in an object
module.exports = { Traveller, Location, Trip }

