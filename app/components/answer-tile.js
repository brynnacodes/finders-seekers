import Ember from 'ember';

export default Ember.Component.extend({
  updateAnswerForm: false,
  actions: {
    delete(answer) {
      if (confirm('Are you sure you want to delete this answer?')) {
        this.sendAction('destroyAnswer', answer);
      }
    },
    updateAnswerForm() {
      this.set('updateAnswerForm', true);
    },

    updateAnswer(answer) {
      var params = {
        author: this.get('author'),
        content: this.get('content'),
      };
      this.set('updateAnswerForm', false);
      console.log(params);
      this.sendAction('updateAnswer', answer, params);
    }
  }
});
