// SongQueueEntryView.js - Defines a backbone view class for the song queue entries.
var SongQueueEntryView = Backbone.View.extend({
  // your code here!

  tagName: 'tr',

  events: {
    'click': function() {
      console.log('SongQueueEntryView sensed the click!');
      this.model.dequeue();
      this.remove();
    },
    // 'remove': function() {
    //   console.log('SongQueueEntryView heard you!');
    // }
  },

  template: _.template('<td>(<%= artist %>)</td><td><%= title %></td>'),

  initialize: function() {

  },

  render: function(song) {
    console.log('render for SongQueueEntryView triggered');
    return this.$el.html(this.template(song.attributes));
  }

});
