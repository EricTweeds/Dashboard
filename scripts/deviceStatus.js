'use strict'

var pythonShell = require('python-shell');
var oui = require('oui');
var routerDeviceList = {};
var arpDeviceList = {};

var DeviceStatus = function() {
	pythonShell.run('./Python_Scripts/netgearScript.py', function(err, results) {
		if (err) throw err;
		routerDeviceList = results;
	});

	pythonShell.run('./Python_Scripts/whosOnline.py', function(err, results) {
		if (err) throw err;
		arpDeviceList = results;
	});
};

DeviceStatus.prototype.deviceList = function() {
	return routerDeviceList;
};

DeviceStatus.prototype.keyDevicesStatus = function() {
	var macToName = {
		"C8:38:70:CC:11:30":"Eric's Phone",
		"00:56:CD:06:83:09":"Nick's Phone",
		"9C:4F:DA:23:CA:FE":"Jake's Phone",
		"8C:F5:A3:16:90:26":"Coltons Phone",
		"A0:D7:95:34:B8:76":"Cam's Phone",
		"50:1A:C5:55:A0:B4":"Xbox",
		"54:60:09:29:F6:F0":"ChromeCast",
		"A8:6B:AD:00:9E:06":"Printer",
		"DC:53:60:C8:DF:93":"Eric's Computer"
		
	}
	var deviceStatus = {"devices":[]};
	var arpList = arpDeviceList;
	var deviceMacs = Object.keys(macToName);
	deviceMacs.forEach(function(mac) {
		var name = macToName[mac];
		var ip;
		var online = false;
		arpList.forEach(function(device) {
			device = JSON.parse(device);
			if (device.mac === mac) {
				ip = device.ip;
				online = true;
			}
		});
		if (online) {
			deviceStatus["devices"].push({'name':name, 'ip':ip, 'status':"online"});
		} else {
			deviceStatus["devices"].push({'name':name, 'ip':'-', 'status':"offline"});
		}
	});
	return deviceStatus;
};

module.exports = DeviceStatus;