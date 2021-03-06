var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var drinkSchema = new Schema({
    name: {
        type: String,
        unique: true,
        required: true
    },
    ingredients: {
        type: String,
        required: true,
    },
});

module.exports = mongoose.model('Drink', drinkSchema)