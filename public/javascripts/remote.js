$(document).ready(function() {
	$('.remote-round').click(function() {
		var command = $(this).attr("value");
		$.post('/tvCommand', {"command":command});
	});
	$('.remote-square').click(function() {
		console.log($(this).attr("value"));
	});
	$('.remote-round-sm').click(function() {
		console.log($(this).attr("value"));
	})
});