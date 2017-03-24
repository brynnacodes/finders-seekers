import Ember from 'ember';

export default Ember.Component.extend({
  actions: {
    saveQuestion1() {
      var params = {
        author: this.get('author'),
        title: this.get('title'),
        content: this.get('content'),
      };
      this.sendAction('saveQuestion2', params)
    }
  }
});
