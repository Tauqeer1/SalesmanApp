/**
 * Created by Tauqeer Ahmed on 3/15/2016.
 */
//Requiring the modules
var express = require('express');
var morgan = require('morgan');
var path = require('path');
var bodyParser = require('body-parser');
var mongoose = require('mongoose');
var configDB = require('./server/config/database.js');
var port = process.env.PORT || 3000;

//Running the express app
var app = express();

//Connecting to the database
mongoose.connect(configDB.url);
app.use(bodyParser.urlencoded({'extended': 'true'})); // parse application/x-www-form-urlencoded
app.use(bodyParser.json()); // parse application/json
app.use(express.static(__dirname + '/client'));
require('./server/routes')(app);


app.listen(port , function(){
   console.log('App started on port ' + port);
});

