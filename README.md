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

#### v0.5.4 -- 6/7/17 by DW

One small change, the default value of config.flDownloadPodcasts changed from true to false. 

Previously a new installation would download podcasts automatically, and this could cause problems because they are such large files. 

Now you have to set this true yourself in config.json.

#### v0.5.1 -- 5/17/17 by DW

The version number changed to use the format favored by NPM. There is no way around it if we want to use NPM, and we do. 

Instead of baking the utils package into the project, we require the new daveutils package. 

There's a new optional element in config, config.newItemCallback. It's a function that takes three params, the URL of the feed, the internal struct returned by feedparser and a digested version of that data produced by davereader/river5.

