import Ember from 'ember';

export default Ember.Route.extend({

  model() {
    return this.store.createRecord('friend');
  },

  actions: {
    save() {
      console.log('+- save action in friends New Route');
      return true;
    },
    cancel() {
      console.log('+- cancel action in friends NEW Route');
      return true;
    }
  }

});
