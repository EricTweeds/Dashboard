var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');


var index = require('./routes/index');
var users = require('./routes/users');

var app = express();

var hueJS = require('./hue.js');
var hue = new hueJS();

var googleApis = require('./googleApis.js');
var GoogleApi = new googleApis();

var fs = require('fs');
var readline = require('readline');

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');

// uncomment after placing your favicon in /public
//app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', index);
app.use('/users', users);

//Philips Hue Function calls
app.get('/hue/study', function(req, res) {
  hue.studyMode(function(data) {
    res.send(JSON.stringify(data));
  });
});

app.get('/hue/siren', function(req, res) {
  hue.siren(function(data) {
    res.send(JSON.stringify(data));
  });
});

app.get('/hue/test', function(req, res) {
  hue.test(function(data) {
    res.send(JSON.stringify(data));
  });
});

app.get('/hue/hueOff', function(req, res) {
  hue.off(function(data) {
    res.send(JSON.stringify(data));
  });
});

//Netgear Router Device List Call
var pythonShell = require('python-shell');
app.get('/router/deviceList', function(req, res) {
  pythonShell.run('./Python_Scripts/netgearScript.py', function(err, results) {
    if (err) throw err;
    res.send(results);
  });
});

//google calendar functions

app.get('/calendar', function(req, res) {
  GoogleApi.initialize(function(events) {
    res.send(events);
  });
});

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
