$(document).ready(function() {
	$('.remote-round').click(function() {
		var command = $(this).attr("value");
		$.post('/tvCommand', {"command":command});
	});
	$('.remote-square').click(function() {
		var command = $(this).attr("value");
		$.post('/tvCommand', {"command":command});
	});
	$('.remote-round-sm').click(function() {
		var command = $(this).attr("value");
		$.post('/tvCommand', {"command":command});
	});
});