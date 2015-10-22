// SongQueueEntryView.js - Defines a backbone view class for the song queue entries.
var SongQueueEntryView = Backbone.View.extend({
  // your code here!

  tagName: 'tr',

  events: {
    'click': function() {
      console.log('SongQueueEntryView sensed the click!');
      this.model.dequeue();
    }
  },

  template: _.template('<td>(<%= artist %>)</td><td><%= title %></td>'),

  initialize: function() {
    this.model.on('remove', function(song) {
      //remove the selected song from the DOM
      console.log('SongQueueEntryView hears you!');
      this.remove();
    }, this);

  },

  render: function(song) {
    console.log('render for SongQueueEntryView triggered');
    return this.$el.html(this.template(song.attributes));
  }

});
