var mongoose = require("mongoose");
var Schema = mongoose.Schema;

var Concert = require("./concert.js");

var BandSchema = new Schema({
    name: String,
    formationDate: String,
    recordLabel: String,
    description: String,
    image_url: String,
    genres: String,
    concerts: [ {type : Schema.Types.ObjectId, ref : 'Concert'} ],
});

var Band = mongoose.model('Band', BandSchema);
module.exports = Band;
