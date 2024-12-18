var mongoose = require('mongoose')
var schema = mongoose.Schema
var Hotel = new schema({
    nom: String,
    nbrRooms: Number,
    fabricationDate: Date

})
module.exports = mongoose.model('Hotels', Hotel)