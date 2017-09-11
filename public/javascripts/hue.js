//Philips Hue control from library here: https://github.com/peter-murray/node-hue-api
var hue = jsHue();
function findMyHue() {
	hue.discover(function(err, results) {
		if (err) {
			throw err;
		}
		results.forEach(function(bridge) {
			if (bridge.mac === "00:17:88:28:41:0B") {
				console.log(bridge);
				//return bridge;
			}
		});

	});
	//return null;
}
