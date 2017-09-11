'use strict'
var hue = require("node-hue-api");
var hueApi = require("node-hue-api").HueApi;
var host = "192.168.1.3";
var username = "CAygiQnLgbxCmqy4wnQrbuimjua2Ds4c1siB5DzN";
var api;
var response;

var HueClass = function() {
	//initializer
};

HueClass.prototype.setUser = function(callback) {
	var newHue = new hueApi();
	newHue.createUser(host, function(err, user) {
		if (err) throw err;
		callback(user);
	});
};

HueClass.prototype.getHub = function(callback) {
	var api = new hueApi(host, username);
	api.getConfig(function(err, config) {
		if (err) throw err;
		callback(config);
	});
};

module.exports = HueClass;
