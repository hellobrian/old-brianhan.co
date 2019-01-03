const questions = [
  {
    type: 'input',
    name: 'title',
    message: `What's the title of your blog?`,
    validate: function(text) {
      if (text.length === 0) {
        return `Title shouldn't be blank.`;
      }

      return true;
    },
  },
  {
    type: 'input',
    name: 'subtitle',
    message: `What's the subtitle?`,
    default: function() {
      return '';
    },
  },
];

module.exports = questions;
