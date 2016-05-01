var mongoose = require("mongoose");
var Schema = mongoose.Schema;

var Band = require("./band.js");
// var Recording = require("./recording.js");

var ConcertSchema = new Schema({
    name: String,
    date: Date,
    description: String,
    location: String,
    coordinates: String,
    image: String,
    recording: String,
    setlist: String,
    bands: {type : Schema.Types.ObjectId, ref : 'Band'}
});

var Concert = mongoose.model('Concert', ConcertSchema);
module.exports = Concert;
