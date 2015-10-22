// App.js - Defines a backbone model class for the whole app.
var AppModel = Backbone.Model.extend({

  initialize: function(params) {
    this.set('currentSong', new SongModel());
    this.set('songQueue', new SongQueue());

    params.library.on('play', function(song) {
      this.set('currentSong', song);
    }, this);

    params.library.on('enqueue', function(song) {
      console.log('enqueue event handler');
      // Add the song to the song queue
      this.get('songQueue').push(song);

      //this.trigger('pushed', this);

    params.library.on('end', function(song) {
      console.log('ended event handler');
      this.get('songQueue').remove(song);
    }, this);


    }, this);

    params.library.on('dequeue', function(song) {
      console.log('dequeue event handler');
      this.get('songQueue').remove(song);
    }, this);

  }

});
