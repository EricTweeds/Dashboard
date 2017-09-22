'use strict'
var SerialPort = require("serialport");
var serialport = new SerialPort("/dev/ttyACM0");
var commandData = require("./IR_Commands.json");

var SerialCommunication = function() {
	serialport.on('open', function() {
		//opens connection with serial port
		console.log("serial port opened");
	});
};

SerialCommunication.prototype.write = function(buttonVal) {
	//finds int value of signal from IR_Commands.json
	var signal = commandData.commands[buttonVal].int;
	serialport.write(signal + "\n");
};

SerialCommunication.prototype.getTemp = function() {
	serialport.write("3");
	var temp = serialport.read(4);
	console.log(temp);
	return temp;
};

module.exports = SerialCommunication;