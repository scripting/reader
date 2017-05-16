var fs = require ("fs");
var feedtools = require ("davereader"); 
function readConfig (callback) {
	fs.readFile ("config.json", function (err, data) {
		var myConfig = new Object ();
		if (!err) {
			try {
				myConfig = JSON.parse (data.toString ());
				}
			catch (err) {
				console.log ("readConfig: err == " + err.message);
				}
			}
		callback (myConfig);
		});
	}
readConfig (function (myConfig) {
	feedtools.init (myConfig, function () {
		});
	});
