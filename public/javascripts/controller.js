//controller.js
var url = 'http://localhost:3000'

$(document).ready(function() {
	$('#studyMode').click(function() {
		$.get(url + '/study', function(success) {
			console.log(success);
		});
	});
	$('#sirenMode').click(function() {
		$.get(url + '/siren', function(success) {
			console.log(success);
		});
	});
	$('#test').click(function() {
		$.get(url + '/test', function(success) {
			console.log(success);
		});
	});
	$('#hueOff').click(function() {
		$.get(url + '/hueOff', function(success) {
			console.log(success);
		});
	});
});
