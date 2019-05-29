var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var barSchema = new Schema({
    name: String,
    location: String,
    description: String,
    poster: [{type: Schema.Types.ObjectId, ref: 'User'}]
});

module.exports = mongoose.model('Bar', barSchema);