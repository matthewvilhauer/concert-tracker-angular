//require express in our app
var express = require('express'),
    app = express(),
    db = require('./models'),
    bodyParser = require('body-parser'),
    mongoose = require('mongoose');

// serve static files from public folder
app.use(express.static(__dirname + '/public'));
app.use(bodyParser.urlencoded({ extended: true }));
// need to add this so that we can accept request payloads
app.use(bodyParser.json());

// We'll serve jQuery and bootstrap from a local bower cache avoiding CDNs
// We're placing these under /vendor to differentiate them from our own assets
app.use('/vendor', express.static(__dirname + '/bower_components'));

var ejs = require('ejs');
app.engine('html', ejs.renderFile);
app.set('view engine', 'html');

var controllers = require('./controllers');
/**********
 * ROUTES *
 **********/

/*
 * HTML Endpoints
 */

app.get('/', function homepage (req, res) {
  res.sendFile(__dirname + '/views/index.html');
});

/*
 * JSON API Endpoints
 */

app.get('/api', controllers.api.index);

app.get('/api/bands', controllers.bands.index);
app.get('/api/bands/:bandId', controllers.bands.show);
app.post('/api/bands', controllers.bands.create);
app.delete('/api/bands/:bandId', controllers.bands.destroy);
app.put('/api/bands/:bandId', controllers.bands.update);

app.get('/templates/:name', controllers.api.templates);

// ALL OTHER ROUTES (ANGULAR HANDLES)
// redirect all other paths to index
app.get('*', function homepage (req, res) {
  res.sendFile(__dirname + '/views/index.html');
});


/**********
* SERVER *
**********/

// listen on port 3000
app.listen(process.env.PORT || 3000, function () {
 console.log('Express server is running on http://localhost:3000/');
});
