import Ember from 'ember';

export default Ember.Route.extend({
  actions: {
    save() {
      console.log('+- save action in friends Route');
      return true;
    },
    cancel() {
      console.log('+- cancel action in friends Route');
      return true;
    }
  }
});
