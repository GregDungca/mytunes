// SongQueueView.js - Defines a backbone view class for the song queue.
var SongQueueView = Backbone.View.extend({
  
  tagName: "table",

  initialize: function() {
    this.render();
    this.model.on('change', renderSongQueueEntry );//
  },

  events: {
    'enqueue' : function (event) {
      console.log('enqueue detected');
      this.renderSongQueueEntry();
    }

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

  renderSongQueueEntry: function () {
    console.log('entered render song queue entry');
    //this.$el.append(new SongQueueEntryView({}));// TO DO
  }

});
