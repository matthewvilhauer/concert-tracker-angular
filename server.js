//require express in our app
var express = require('express'),
    app = express(),
    db = require('./models'),
    User = db.User,
    bodyParser = require('body-parser'),
    mongoose = require('mongoose');

// serve static files from public folder
app.use(express.static(__dirname + '/public'));
app.use(bodyParser.urlencoded({ extended: true }));
// need to add this so that we can accept request payloads
app.use(bodyParser.json());

var controllers = require('./controllers');
/**********
 * ROUTES *
 **********/

/*
 * HTML Endpoints
 */

app.get('/', function homepage (req, res) {
  res.sendFile(__dirname + '/index.html');
});



/**********
* SERVER *
**********/

// listen on port 3000
app.listen(process.env.PORT || 3000, function () {
 console.log('Express server is running on http://localhost:3000/');
});
