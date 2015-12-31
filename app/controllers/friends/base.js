import Ember from 'ember';

export default Ember.Controller.extend({

  hasEmail:     Ember.computed.notEmpty('model.email'),
  hasFirstName: Ember.computed.notEmpty('model.firstName'),
  hasLastName:  Ember.computed.notEmpty('model.lastName'),
  hasTwitter:   Ember.computed.notEmpty('model.twitter'),
  isValid:      Ember.computed.and(
    'hasEmail',
    'hasFirstName',
    'hasLastName',
    'hasTwitter'
  ),

  actions: {
    save() {
      console.log('Save');
      if(this.get('isValid')) {
        var _this = this;
        this.get('model').save().then(function(friend){
          _this.transitionToRoute('friends.show', friend);
        });
      } else {
        console.log(this.get('hasEmail') + " " + this.get('hasFirstName') +
          this.get('hasLastName') + this.get('hasTwitter'));
        this.set('errorMessage', 'You have to fill all the hello');
      }
      //Stop action to bubble (Resource Controller < Resource Route < Application Route)
      return false;
    },

    cancel() {
      return true;
    }
  }

});
