// SongQueueView.js - Defines a backbone view class for the song queue.
var SongQueueView = Backbone.View.extend({
  
  tagName: "table",

  initialize: function() {
    this.render();
    this.model.on('add', function(song) {
      console.log('push to song queue was detected!');
      this.renderSongQueueEntry(song); 
    }, this);
  },

  

  render: function() {
    //this.$el.children().detach();

    // this.$el.html('<th>Song Queue</th>').append(
    //   this.collection.map( function(song) {
    //     return new SongQueueEntryView( { model: song }).render();
    //   })
    // );
    //debugger;
    this.$el.html('<th>Song Queue</th>');
    return this.$el;
  },

  renderSongQueueEntry: function (song) {
    console.log('entered render song queue entry');
    var songQueueEntryView = new SongQueueEntryView({model: song});
    this.$el.append(songQueueEntryView.render(song));
    return this.$el;

  }

});
