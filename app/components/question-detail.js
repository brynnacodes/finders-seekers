import Ember from 'ember';

export default Ember.Component.extend({
  updateQuetsionForm: false,
  actions: {
    delete(question) {
      if (confirm("Are you sure you want to delete this question?")) {
        this.sendAction('destroyQuestion', question)
      }
    },
    updateQuestionForm() {
      this.set('updateQuestionForm', true);
    },
    update(question) {
      var params = {
      author: this.get('author'),
      title: this.get('title'),
      content: this.get('content'),
      };
      this.set('updateQuestionForm', false);
      this.sendAction('update', question, params);
    }
  }
});
