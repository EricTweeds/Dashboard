//controller for functions relating to the philips hue
var url = 'http://45.62.218.227:8080'

$(document).ready(function() {
	$('.hueButton').click(function() {
		var request = url + "/hue/" + $(this).attr("value");
		$.get(request, function(success) {
			if (success != "true") {
				$('#hueWarning').removeClass('hidden');
			}
		});
	});
});