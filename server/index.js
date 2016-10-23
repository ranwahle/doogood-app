/**
 * Created by ranwahle on 23/10/2016.
 */
var express = require('express'),
  exphbs = require('express-handlebars'),
  logger = require('morgan'),
  cookieParser = require('cookie-parser'),
  bodyParser = require('body-parser'),
 // methodOverride = require('method-override'),
  session = require('express-session'),
fs = require('fs');
 // passport = require('passport'),
 // flash = require('connect-flash'),
 // LocalStrategy = require('passport-local'),
 // TwitterStrategy = require('passport-twitter'),
 // GoogleStrategy = require('passport-google'),
  //  mongoose = require('mongoose'),
 // pulsimClient = require('./mailer/pulsimClient');
//acebookStrategy = require('passport-facebook');


var app = express();
//app.use('/data', express.static('data'));

app.use(function (req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});

app.get('/data/organizations',  (req, res) =>{
  fs.readFile('data/organizationData.json', (err, data) =>{
    if (err){
      console.log('errror reading file', err);
    }
    res.setHeader('Content-Type', 'application/json');
    res.send(JSON.parse( data));
  });

});

var port = process.env.PORT ||  5000; //select your port or let it pull from your .env file
app.listen(port);
console.log("listening on " + port + "!");
