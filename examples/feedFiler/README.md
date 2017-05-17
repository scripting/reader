#### Hello World for davereader

A very simple app, that models a very common kind of feed-based app. 

For every new item posted to one of a set of feeds, it writes the JSON representation of that feed to a calendar-structured sub-folder.

This would be a good starting point for an app that sent a link to stories to a Twitter or Slack account, for example. 

All the data maintained by davereader is stored in the reader_data folder. 

In the startup function the first thing we do is add the addToRiverCallback function to config. The engine will call this function for every new item discovered in one of the subscribed-to feeds. 

And that's about it. ;-)

