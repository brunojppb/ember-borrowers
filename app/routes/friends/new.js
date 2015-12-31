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
  },

  // Route life-cycle
  // when Route object is created(When we enter in the route)
  activate() {
    console.log('------- Activate hook called --------');
  },
  // when Route object is destroyed(When we leave the route)
  deactivate() {
    console.log('------- Deactivate hook called --------');
  },
  // Reset the controller values either when the model changes
  // or route is exiting
  resetController: function(controller, isExiting, transition){
    if(isExiting) {
      console.log(' --------- ResetController hook called ------');
      var model = controller.get('model');
      // check if the model is in "isNew" state, which means it wasn't save
      // to the backend
      if(model.get('isNew')) {
        // call DS#destroyRecord() which removes it from the store
        model.destroyRecord();
      }
    } else {
      console.log('--------- ResetController model changes');
    }
  }

});
