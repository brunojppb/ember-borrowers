import Ember from 'ember';

export default Ember.Route.extend({
  actions: {
    save() {
      console.log('+---- save action in Application Route');
      return false;
    },
    cancel() {
      console.log('+---- cancel action in Application Route');
      return false;
    }
  }
});
