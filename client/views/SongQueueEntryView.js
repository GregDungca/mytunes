// SongQueueEntryView.js - Defines a backbone view class for the song queue entries.
var SongQueueEntryView = Backbone.View.extend({
  // your code here!

  tagName: 'tr',

  template: _.template('<td>(<%= artist %>)</td><td><%= title %></td>'),

  // events: {
  //   'enqueue' : function () {
  //     this.render();
  //   }

  // },

  render: function() {
    console.log('event handler for enqueue triggered');
    return this.$el.html(this.template(this.model.attributes));
  }

});
