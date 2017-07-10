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

#### v0.5.21 -- 7/10/17 by DW

The new single-feed viewer feature is now available for all River5 installations. To activate the feature, update your installation to v0.5.21. When you access the home page of your server through the web, when you click on the favicon of a feed, it will take you to the single-feed viewer with the items for that feed. 

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

