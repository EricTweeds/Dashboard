//controller.js
var url = 'http://45.62.218.227:8080'

$(document).ready(function() {
	$.get(url + '/router/deviceList', function(response) {
		response.forEach(function(device) {
			device = JSON.parse(device);
			addDeviceRow(device);
		});
	});
	$('#studyMode').click(function() {
		$.get(url + '/hue/study', function(success) {
			console.log(success);
		});
	});
	$('#sirenMode').click(function() {
		$.get(url + '/hue/siren', function(success) {
			console.log(success);
		});
	});
	$('#test').click(function() {
		$.get(url + '/hue/test', function(success) {
			console.log(success);
		});
	});
	$('#hueOff').click(function() {
		$.get(url + '/hue/hueOff', function(success) {
			console.log(success);
		});
	});
	$('#deviceList').click(function() {
		$.get(url + '/router/deviceList', function(response) {
			$("#connectedDevices").empty();
			response.forEach(function(device) {
				device = JSON.parse(device);
				addDeviceRow(device);
			});
		});
	});
});

function addDeviceRow(device) {
	var html = $("<tr></tr>");
	html.append("<td>" + device.name + "</td>");
	html.append("<td>" + device.ip + "</td>");
	html.append("<td>" + device.mac + "</td>");
	html.append("<td>" + device.type + "</td>");
	$("#connectedDevices").append(html);
}