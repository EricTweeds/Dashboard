//controller.js
var url = 'http://localhost:3000'

$(document).ready(function() {
	$('#getHueData').click(function() {
		$.get(url + '/hue', function(bridge) {
			console.log(bridge);
		});
	});
});
