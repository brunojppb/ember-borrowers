import Ember from 'ember';
import config from './config/environment';

const Router = Ember.Router.extend({
  location: config.locationType
});

Router.map(function() {
  this.route('friends', function(){
    this.route('new');

    this.route('show', {
      path: ':friend_id'
      // Nested articles route
      // So, in this way, we will have site.com/friends/1/articles
    }, function() {
      // The resetNamespace key will form the final route friends/1/article
      // insteand of /articles
      // Also, we have our article route in the /articles directory, intead
      //if the friends/show/articles directory tree. This way, we keep the
      // articles route in the top level directory
      this.route('articles', {resetNamespace: true}, function(){
        this.route('new');
      });
    });

    this.route('edit', {
      path: ':friend_id/edit'
    });
  });
});

export default Router;
