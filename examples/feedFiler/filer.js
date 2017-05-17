const reader = require ("davereader");
const utils = require ("daveutils");
const request = require ("request");
const fs = require ("fs");

var readerDataFolder = "reader_data/";

var config = {
	flHttpEnabled: false,
	flWebSocketEnabled: false,
	
	listsFolder: readerDataFolder + "lists/",
	riversFolder: readerDataFolder + "rivers/",
	podcastsFolder: readerDataFolder + "podcasts/", 
	dataFolder: readerDataFolder + "data/",
	
	addToRiverCallbacksFolder: readerDataFolder + "callbacks/addToRiver/",
	buildRiverCallbacksFolder: readerDataFolder + "callbacks/buildRiver/",
	
	flRequestCloudNotify: false, 
	flDownloadPodcasts: false
	};

var feeds = [
	"http://scripting.com/rss.xml",
	"http://status.aws.amazon.com/rss/ec2-us-east-1.rss",
	"http://www.aclu.org/blog/feed/",
	"http://www.bart.gov/news/rss/rss.xml",
	"http://code4lib.org/node/feed",
	"http://www.npr.org/rss/rss.php?id=1045"
	];

function fsSureFilePath (path, callback) { 
	var splits = path.split ("/");
	path = ""; //1/8/15 by DW
	if (splits.length > 0) {
		function doLevel (levelnum) {
			if (levelnum < (splits.length - 1)) {
				path += splits [levelnum] + "/";
				fs.exists (path, function (flExists) {
					if (flExists) {
						doLevel (levelnum + 1);
						}
					else {
						fs.mkdir (path, undefined, function () {
							doLevel (levelnum + 1);
							});
						}
					});
				}
			else {
				if (callback != undefined) {
					callback ();
					}
				}
			}
		doLevel (0);
		}
	else {
		if (callback != undefined) {
			callback ();
			}
		}
	}

function startup () {
	config.addToRiverCallback = function (urlfeed, itemFromParser, item) {
		var f = "outputFolder/" + utils.getDatePath () + utils.padWithZeros (item.id, 4) + ".json", jsontext = utils.jsonStringify (item);
		fsSureFilePath (f, function () {
			fs.writeFile (f, jsontext)
			});
		};
	function writeFeedsList (callback) {
		var f = readerDataFolder + "lists/feeds.json", jsontext = utils.jsonStringify (feeds);
		fsSureFilePath (f, function () {
			fs.writeFile (f, jsontext, function (err) {
				if (err) {
					console.log ("writeListsFile: err.message == " + err.message);
					}
				else {
					callback ();
					}
				});
			});
		}
	writeFeedsList (function () {
		reader.init (config, function () {
			});
		});
	}
startup ();
