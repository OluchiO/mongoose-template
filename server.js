var express = require('express');
var cors = require('cors');
var bodyParser = require('body-parser');
var app = express();
var mongoose = require('mongoose');

// Controllers
var sight = require('./controllers/viewController.js');


// Middleware
app.use(bodyParser());
app.use(cors());
app.use(express.static(__dirname + '/')); //serve index.html


// REST api
// REPLACE NECESSARY
app.get('/api/REPLACE_ENDPOINT', sight.get);
// create put, post, delete endpoints


// Connections
var port = 3000;

// REPLACE NECESSARY
var mongooseUri = 'mongodb://localhost/REPLACE_BY_DB_NAME';
mongoose.connect(mongooseUri);

var db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function () {
	console.log('Mongoose connected to your soul on:', mongooseUri);
})

app.listen(port, function () {
	console.log('Using the restroom on port:', port);
})