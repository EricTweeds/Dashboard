$(document).ready(function() {
	$('.remote-round-tv').click(function() {
		var command = $(this).attr("value");
		$.post('/tvCommand', {"command":command});
	});
	$('.remote-square-tv').click(function() {
		var command = $(this).attr("value");
		$.post('/tvCommand', {"command":command});
	});
	$('.remote-round-sm-tv').click(function() {
		var command = $(this).attr("value");
		$.post('/tvCommand', {"command":command});
	});
	$('.remote-round-box').click(function() {
		var command = $(this).attr("value");
		$.post('/tvCommand', {"command":command});
	});
	$('.remote-square-box').click(function() {
		var command = $(this).attr("value");
		$.post('/tvCommand', {"command":command});
	});
	$('.remote-round-sm-box').click(function() {
		var command = $(this).attr("value");
		$.post('/tvCommand', {"command":command});
	});
});