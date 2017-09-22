'use strict'
var SerialPort = require("serialport");
var options = {
	"baudRate":115200,
	"encoding":'utf8'
}
var serialport = new SerialPort("/dev/ttyACM0", options);
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
	serialport.write("3\n");
	var temp = serialport.read(8);
	console.log(temp.toString('utf8'));
	temp = temp.toString('utf8');
	temp.replace("3\n", "");
	return temp;
};

module.exports = SerialCommunication;
