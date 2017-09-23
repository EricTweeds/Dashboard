var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');


var index = require('../routes/index');
var users = require('../routes/users');

var app = express();

var hueJS = require('./hue.js');
var hue = new hueJS();

var DeviceStatus = require('./deviceStatus.js');
var deviceStatus = new DeviceStatus();

var SerialPort = require('./arduino.js');
var serialport = new SerialPort();

(function updateDevices() {
  //only updates every 5 minutes
  var deviceStatus = new DeviceStatus();
  console.log("refresh");
  setTimeout(function() {
      updateDevices();
  }, 1000*60*5);
})();

var googleApis = require('./googleApis.js');
var GoogleApi = new googleApis();
var eventList = [];

(function updateEvents() {
  //get current hour
  var date = new Date();
  var hour = date.getHours();

  if (hour == 0 || eventList.length == 0) {
    //updates the event list at beginning of day
    //google calendar functions
      GoogleApi.initialize(function(events) {
        console.log("calendar update");
        eventList = events;
      });
  }
  setTimeout(function() {
      updateEvents();
  }, 1000*60*60); 
})();


//google calendar functions

app.get('/calendar', function(req, res) {
  res.send(eventList);
});

var Forecast = require('forecast');
var forecast = new Forecast({
  service:'darksky',
  key:"961d00284ae951c12d1d465857950732",
  units:'celcius',
  cache:true,
  ttl: {
    minutes: 59,
    seconds: 45
  }
});

// view engine setup
app.set('views', path.join(__dirname, '../views'));
app.set('view engine', 'pug');

// uncomment after placing your favicon in /public
//app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, '../public')));

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

app.get('/hue/disco', function(req, res) {
  hue.disco(function(data) {
    res.send(JSON.stringify(data));
  });
});

app.get('/hue/reading', function(req, res) {
  hue.reading(function(data) {
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

app.get('/weather', function(req, res) {
  forecast.get([43.477, -80.537], function(err, weather) {
    if (err) throw err;
    res.send(weather);
  });
});

app.get('/deviceList', function(req, res) {
  res.send(deviceStatus.deviceList());
});
app.get('/deviceStatus', function(req, res) {
  res.send(deviceStatus.keyDevicesStatus());
});

app.post('/tvCommand', function(req, res) {
  serialport.write(req.body.command);
  res.send("complete");
});

app.get('/roomTemp', function(req, res) {
  var temp = serialport.getTemp();
  res.send(temp);
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
