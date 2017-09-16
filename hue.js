'use strict'
var hue = require("node-hue-api");
var hueApi = hue.HueApi;
var host = "192.168.1.3";
var username = "CAygiQnLgbxCmqy4wnQrbuimjua2Ds4c1siB5DzN";
var api;
var response;
const LAMP = 2;
const OVERHEAD1 = 1;
const OVERHEAD2 = 3;

var lightState = hue.lightState;

api = new hueApi(host, username);

var HueClass = function() {
	//initializer
};

HueClass.prototype.setUser = function(callback) {
	//used during setup only
	var newHue = new hueApi();
	newHue.createUser(host, function(err, user) {
		if (err) throw err;
		callback(user);
	});
};

HueClass.prototype.getHub = function(callback) {
	//used during setup and for hub status
	api.getConfig(function(err, config) {
		if (err) throw err;
		callback(config);
	});
};

HueClass.prototype.studyMode = function(callback) {
	var state1 = lightState.create().on().white(154, 100);
	var state2 = lightState.create().on().white(300, 100);
	api.lights(function(err, lights) {
		if (err) throw err;
		setLights(state2, state1, state1, function(success) {
			callback(success);
		});
	});
};

HueClass.prototype.siren = function(callback) {
	var state1 = lightState.create().on().rgb(255, 0, 0).longAlert();
	var state2 = lightState.create().on().rgb(0, 0, 255).longAlert();
	var state3 = lightState.create().off();
	api.lights(function(err, lights) {
		if (err) throw err;
		setLights(state3, state1, state2, function(success) {
			callback(success);
		});
	});
};

HueClass.prototype.off = function(callback) {
	var state = lightState.create().off();
	api.lights(function(err, lights) {
		if (err) throw err;
		setLights(state, state, state, function(success) {
			callback(success);
		});
	});
};

HueClass.prototype.disco = function(callback) {
	var state1 = lightState.create().on().rgb(255, 0, 0).colourLoop();
	var state2 = lightState.create().on().rgb(0, 0, 255).colourLoop();
	var state3 = lightState.create().on().rgb(0, 255, 0).colourLoop();
	api.lights(function(err, lights) {
		if (err) throw err;
		setLights(state3, state1, state2, function(success) {
			callback(success);
		});
	});
};

HueClass.prototype.reading = function(callback) {
	var state1 = lightState.create().on().white(500, 100);
	var state2 = lightState.create().on().white(500, 10);
	api.lights(function(err, lights) {
		if (err) throw err;
		setLights(state1, state2, state2, function(success) {
			callback(success);
		});
	});
};

HueClass.prototype.test = function(callback) {
	var state1 = lightState.create().on().white(500, 100);
	var state2 = lightState.create().on().white(500, 10);
	//var state3 = lightState.create().on().
	api.lights(function(err, lights) {
		if (err) throw err;
		setLights(state1, state2, state2, function(success) {
			callback(success);
		});
	});
};

module.exports = HueClass;

function setLights(lamp, over1, over2, callback) {
	//sets each of the lamps to the submitted state, resets them first
	//to remove properties from previous state
	if (!isValidTime()) {
		callback("Hue control disabled from 12am-8am");
		return;
	}
	var reset = lightState.create().reset().off();
	api.setLightState(LAMP, reset, function(err, lights2) {
		if (err) throw err;
	});
	api.setLightState(OVERHEAD1, reset, function(err, lights2) {
		if (err) throw err;
	});
	api.setLightState(OVERHEAD2, reset, function(err, lights2) {
		if (err) throw err;
	});
	api.setLightState(LAMP, lamp, function(err, lights2) {
		if (err) throw err;
		callback(lights2);
	});
	api.setLightState(OVERHEAD1, over1, function(err, lights2) {
		if (err) throw err;
		callback(lights2);
	});

	api.setLightState(OVERHEAD2, over2, function(err, lights2) {
		if (err) throw err;
		callback(lights2);
	});
}

function isValidTime() {
	var date = new Date();
	var hour = date.getHours();
	if (hour < 8) {
		return false;
	}
	return true;
}