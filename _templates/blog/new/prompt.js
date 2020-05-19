const slugify = require('./slugify');

module.exports = {
  prompt: ({ prompter }) => {
    return new Promise((resolve, reject) => {
      prompter
        .prompt([
          {
            type: 'input',
            name: 'title',
            message: 'Title?',
          },
          {
            type: 'input',
            name: 'description',
            message: 'Description?',
          },
        ])
        .then(({ title, description }) => {
          const date = new Date().toISOString().split('T')[0];
          const slug = slugify(title);
          const folderName = `${date}-${slug}`;

          resolve({
            title,
            description,
            date,
            folderName,
          });
        });
    });
  },
};
