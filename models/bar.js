var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var barSchema = new Schema({
    name: String,
    location: String,
    Description: String,
});

module.exports = mongoose.model('Bar', barSchema);