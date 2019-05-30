var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var barSchema = new Schema({
    indexImg: String,
    detailsImg: String,
    name: String,
    location: String,
    description: String,
    drinks: [{type: Schema.Types.ObjectId, ref:'Drink'}]
});

module.exports = mongoose.model('Bar', barSchema);