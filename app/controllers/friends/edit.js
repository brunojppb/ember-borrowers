import FriendsBaseController from './base';

export default FriendsBaseController.extend({

  actions: {
    cancel() {
      // When inside a controller, we use this.transitionToRoute
      // When inside a route, we use this.transitionTo
      this.transitionToRoute('friends.show', this.get('model'));
      return false;
    }
  }

});
