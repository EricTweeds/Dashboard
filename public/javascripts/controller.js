//controller.js
var url = 'http://45.62.218.227:8080'

$(document).ready(function() {
	//start with the warning hidden
	$('#hueWarning').addClass('hidden');

	//load partials
	$('#tvRemote').load('./partials/remote.html');
	$('#tvRemote2').load('./partials/remote.html');
	$('#hueController').load('./partials/hue.html');

	//load devices from router
	$.get(url + '/router/deviceList', function(response) {
		response.forEach(function(device) {
			device = JSON.parse(device);
			addDeviceRow(device);
		});
	});
	//load google calendar events, WIP, doesnt work on server
	$.get(url + '/calendar', function(response) {
		response.forEach(function(event) {
			addEvent(event);
		});
	});
	//load weather data
	$.get(url + '/weather', function(weather) {
		console.log(weather);
		var cTemp = (weather.currently.temperature).toString();
		$("#temperature").html(cTemp + "&deg;C");
	});
	//refresh router list
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
function addEvent(event) {
	var html = $("<tr></tr>");
	html.append("<td>" + event.summary + "</td>");
	if (event.start.date) {
		var date = new Date(event.start.date);
		var dateString = date.getMonth() + date.getDate();
		html.append("<td>" + dateString + "</td>");
		html.append("<td>all-day</td>");
		html.append("<td>all-day</td>");
	} else {
		var date = new Date(event.start.dateTime);
		var dateString = getReadableMonth(date.getMonth()) + date.getDate();
		var startString = get12hTime(date) + ":" + date.getMinutes();
		var endDate = new Date(event.end.dateTime);
		var endString = get12hTime(endDate) + ":" + endDate.getMinutes();
		html.append("<td>" + dateString + "</td>");
		html.append("<td>" + startString + "</td>");
		html.append("<td>" + endString + "</td>");
	}
	html.append("<td>" + event.location + "</td>");
	$("#eventList").append(html);
}

function get12hTime(date) {
	var time24h = date.getHours();
	if (time24h <= 12) {
		return time24h;
	} else {
		return time24h - 12;
	}
}
function getReadableMonth(month) {
	var months = ["Jan ", "Feb ", "Mar ", "Apr ", "May ", "June ", "July ", "Aug ", "Sep ", "Oct ", "Nov ", "Dec "];
	return months[month];
}