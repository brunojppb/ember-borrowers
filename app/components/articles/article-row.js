import Ember from 'ember';

export default Ember.Component.extend({
  /*
    We are specifying that the html tag for this component
    is going to be a tr meaning that whatever content we
    put in the template, it will be wrapped in table row
    using the HTML tag tr, by default it is a div.
  */
  tagName: 'tr',
  article: null, //passed-in
  articleStates: null, //passed-in
  actions: {
    saveArticle() {
      let article = this.get('article');
      if(article.get('hasDirtyAttributes')){
        this.sendAction('save', article);
      }
    }
  }
});
