var mongoose = require("mongoose");
var Schema = mongoose.Schema;

var Concert = require("./concert.js");

var BandSchema = new Schema({
    name: String,
    description: String,
    image: String,
    concertperformances: [ {type : Schema.Types.ObjectId, ref : 'Concert'} ],
});

var Band = mongoose.model('Band', BandSchema);
module.exports = Band;
