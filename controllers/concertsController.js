// bandsConcertsController
var db = require('../models');

// app.get('/api/bands/:bandId/concerts', controllers.bandsConcerts.index);
function index(req, res) {
  db.Band.findById(req.params.bandId, function(err, foundBand) {
    console.log('responding with concerts:', foundBand.concerts);
    res.json(foundBand.concerts);
  });
}

// POST '/api/bands/:bandId/concerts'
function create(req, res) {
  db.Band.findById(req.params.bandId, function(err, foundBand) {
    console.log(req.body);
    var newConcert = new db.Concert(req.body);  // dangerous, in a real app we'd validate the incoming data
    foundBand.concerts.push(newConcert);
    foundBand.save(function(err, savedBand) {
      console.log('newConcert created: ', newConcert);
      res.json(newConcert);  // responding with just the concert, some APIs may respond with the parent object (Band in this case)
    });
  });
}

// app.delete('/api/bands/:bandId/concerts/:concertId', controllers.bandsConcerts.destroy);
function destroy(req, res) {
  db.Band.findById(req.params.bandId, function(err, foundBand) {
    console.log(foundBand);
    // we've got the band, now find the concert within it
    var correctConcert = foundBand.concerts.id(req.params.concertId);
    if (correctConcert) {
      correctConcert.remove();
      // resave the band now that the concert is gone
      foundBand.save(function(err, saved) {
        console.log('REMOVED ', correctConcert.name, 'FROM ', saved.concerts);
        res.json(correctConcert);
      });
    } else {
      res.send(404);
    }
  });

}

//app.put('/api/bands/:bandId/concerts/:concertId', controllers.bandsConcerts.update);
function update(req, res) {
  db.Band.findById(req.params.bandId, function(err, foundBand) {
    console.log(foundBand);
    // we've got the band, now find the concert within it
    var correctConcert = foundBand.concerts.id(req.params.concertId);
    if (correctConcert) {
      console.log(req.body);
      correctConcert.name = req.body.name;
      correctConcert.trackNumber = req.body.trackNumber;
      foundBand.save(function(err, saved) {
        console.log('UPDATED', correctConcert, 'IN ', saved.concerts);
        res.json(correctConcert);
      });
    } else {
      res.send(404);
    }
  });

}


module.exports = {
  index: index,
  create: create,
  update: update,
  destroy: destroy
};
