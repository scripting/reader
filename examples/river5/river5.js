var reader = require ("davereader"); 
var fs = require ("fs");
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
	reader.init (myConfig, function () {
		});
	});
