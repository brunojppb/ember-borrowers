import Ember from 'ember';

export default Ember.Route.extend({


  // Life-cycle Hooks
  resetController: function(controller, isExiting) {
    if(isExiting) {
      var model = controller.get('model');
      console.log('rollback the friend edited');
      // If we edit the model and do not hit save,
      // our model will show the edited fields,
      //but the data wasn't sent to the backend
      model.rollbackAttributes();
    }
  }

});
