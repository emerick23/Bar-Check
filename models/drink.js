var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var drinkSchema = new Schema({
    name: {
        type: String,
        unique: true,
        required: true,
        default: 'Water'
    },
    ingredients: {
        type: String,
        required: true,
        default: 'H20'
    },
    description: {
        type: String,
    }
});

module.exports = mongoose.model('Drink', drinkSchema)