// SongModel.js - Defines a backbone model class for songs.
var SongModel = Backbone.Model.extend({



  play: function() {
    // Triggering an event here will also trigger the event on the collection
    this.trigger('play', this);
  },

  enqueue: function() {
    console.log('triggering enqueue event');
    this.set('queued', true);
    this.trigger('enqueue', this);
  },

  dequeue: function() {
    console.log('dequeued');
    this.set('queued', false);
    this.trigger('dequeue', this);
  },
  
  ended: function() {
    console.log('my end function got triggered!');
    this.trigger('end', this);
  }

});
