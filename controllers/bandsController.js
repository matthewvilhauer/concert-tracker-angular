/************
 * DATABASE *
 ************/

var db = require('../models');



// GET /api/bands
function index(req, res) {
  db.Band.find({}, function(err, allBands) {
    res.json(allBands);
  });
}

function create(req, res) {
  console.log('body', req.body);

  db.Band.create(req.body, function(err, band) {
    if (err) { console.log('error', err); }
    console.log(band);
    res.json(band);
  });
}

function show(req, res) {
  db.Band.findById(req.params.bandId, function(err, foundBand) {
    if(err) { console.log('bandsController.show error', err); }
    console.log('bandsController.show responding with', foundBand);
    res.json(foundBand);
  });
}

function destroy(req, res) {
  db.Band.findOneAndRemove({ _id: req.params.bandId }, function(err, foundBand){
    // note you could send just send 204, but we're sending 200 and the deleted entity
    res.json(foundBand);
  });
}

function update(req, res) {
  console.log('updating with data', req.body);
  db.Band.findById(req.params.bandId, function(err, foundBand) {
    if(err) { console.log('bandsController.update error', err); }
    foundBand.name = req.body.name;
    foundBand.description = req.body.description;
    foundBand.image = req.body.image;
    foundBand.concerts = req.body.concerts;
    foundBand.save(function(err, savedBand) {
      if(err) { console.log('saving altered band failed'); }
      res.json(savedBand);
    });
  });

}


// export public methods here
module.exports = {
  index: index,
  create: create,
  show: show,
  destroy: destroy,
  update: update
};
