import Ember from 'ember';

export default Ember.Component.extend({
  updateQuestionForm: false,
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
    },

    destroyAnswer(answer) {
      this.sendAction('destroyAnswer', answer);
    },

    updateAnswer(answer, params) {
      this.sendAction('updateAnswer', answer, params);
    }
  }
});
