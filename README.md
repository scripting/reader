## davereader package

It's the core of River5, without the top level, released as an NPM package. Can be used to build all kinds of feed-based apps.

### How to install

`npm install davereader`

### Story

Here's the story.

I've always wanted to have a package that made it possible to write quick apps that do stuff with RSS.

I write them all the time, but I always have to start over from the beginning, create a parser, then catch the new items as they come in, and do whatever it is I have to do, usually move the bits to another service like Twitter, or Slack or whatever. There are so many possible applications. 

When I was doing this, I realized I was solving a problem that was already solved, in my River software, but it wasn't configured correctly to make this easy. It was faster just to crib the code and start from scratch.

Finally, I have it set up so that this works. So the beauty in this is in the apps, not the engine. It's a solved problem that can now be used to solve new problems. 

### Hello world

The Hello World app is <a href="https://github.com/scripting/reader/tree/master/examples/feedFiler">feedFiler</a>. It simply writes every new story, in JSON, to a calendar-structured folder. 

Not very useful on its own, but Hello World apps aren't supposed to be useful. ;-)

### River5 is a demo app

River5 is even smaller than feedFiler!

It's included as <a href="https://github.com/scripting/reader/tree/master/examples/river5">an example</a>. 

### Updates

#### v0.6.7 -- 4/8/18 by DW

Fixed a bug where if you unsubbed from a feed, River5 could crash when rebuilding a river that contains items from that feed. 

#### v0.6.6 -- 4/8/18 by DW

Feed reading is now charset-aware. If you were seeing garbled text in feeds in German, for example, this version should fix that.  

To update, quit the app, type <i>npm update</i> at the command line, then restart the app. 

#### v0.6.2 -- 1/17/18 by DW

It's been a while since there was an update so I bumped from 0.5.x to 0.6.x. 

A bug was <a href="https://github.com/scripting/river5/issues/14">reported</a>, that the first time new items appear in a river in a given River5 run, only one of the items actually appears in the river. This applies to both kinds of rivers, ones that correspond to lists, and ones that accumulate all the items in a given river (a feature that appeared first in v0.5.21). The other new items are lost. I was able to reproduce the problem, and spent a <a href="http://scripting.com/2018/01/16/180415.html">few</a> <a href="http://scripting.com/2018/01/15/234534.html">days</a> <a href="http://scripting.com/2018/01/14/155244.html">discussing</a> <a href="http://scripting.com/2018/01/13/183433.html">possible</a> solutions, and then arrived at a very simple approach, that appears to work.

We do two things differently:

1. At startup, before reading any feeds, we load all the river files for all the rivers that correspond to lists. 

2. When reading a feed, we no longer process items as they are returned by <a href="https://github.com/danmactough/node-feedparser">feedparser</a>, we accumulate all the items in an array, and process them all at the end. Before processing we make sure the feed's river is in the cache, and read it if it's not. That way all the new items make it into the river. 

#### v0.5.22 -- 8/18/17 by DW

There were a couple of places where we would read a feed even if no one was subscribed to it. This created problems in davecast when I wanted to unfollow Scripting News. I imagine it's an annoyance for some when they unsub from a feed only to have updates still show up in the river. It should stop when the rssCloud pings stop, though. The right thing to do (which we now do) is to check if there's at least one subscriber before reading the feed. 

#### v0.5.21 -- 7/10/17 by DW

The new single-feed viewer feature is now available for all River5 installations. To activate the feature, update your installation to v0.5.21. When you access the home page of your server through the web, when you click on the favicon of a feed, it will take you to the single-feed viewer with the items for that feed. 

Note that the only change in this release is that there's a new element in config, urlFeedViewerApp. It's picked up in the home page app in constructing the link for the favicon. 

In v0.5.19 we added a feature that keeps a river for each feed. That's where the major work was on the server for this feature. 

#### v0.5.16 -- 6/29/17 by DW

We now optionally maintain rivers for each feed. This could make a single-feed viewer possible in <a href="http://this.how/electricRiver">Electric River</a> and other environments. That is, all the stories from one feed in reverse-chronologic order.

#### v0.5.15 -- 6/25/17 by DW

HTTP requests made by davereader now accept zip compression. 

#### v0.5.12 -- 6/21/17 by DW

New callbacks for handling an HTTP request (the host application can override), callbacks that are called every second and every minute. 

Exposed the davereader function that sends a webSockets message to all registered listeners.

#### v0.5.5 -- 6/13/17 by DW

New support for <a href="https://github.com/scripting/Scripting-News/blob/master/rss-in-json/README.md">RSS-in-JSON</a> feeds. 

#### v0.5.4 -- 6/7/17 by DW

One small change, the default value of config.flDownloadPodcasts changed from true to false. 

Previously a new installation would download podcasts automatically, and this could cause problems because they are such large files. 

Now you have to set this true yourself in config.json.

#### v0.5.1 -- 5/17/17 by DW

The version number changed to use the format favored by NPM. There is no way around it if we want to use NPM, and we do. 

Instead of baking the utils package into the project, we require the new daveutils package. 

There's a new optional element in config, config.newItemCallback. It's a function that takes three params, the URL of the feed, the internal struct returned by feedparser and a digested version of that data produced by davereader/river5.

### Questions, support

If you have questions or need help, post an <a href="https://github.com/scripting/river5/issues">Issue</a> on the River5 site (historically that's where this work is done) or on the River5 <a href="https://groups.google.com/forum/#!forum/river5">mail list</a>. 

