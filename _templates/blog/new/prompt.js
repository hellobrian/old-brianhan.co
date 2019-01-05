const slugify = require('./slugify');

module.exports = {
  prompt: ({ prompter }) => {
    return new Promise((resolve, reject) => {
      prompter
        .prompt([
          {
            type: 'input',
            name: 'title',
            message: 'What is the title?',
          },
          {
            type: 'input',
            name: 'subtitle',
            message: 'What is the subtitle?',
          },
        ])
        .then(({ title, subtitle }) => {
          const date = new Date().toISOString().split('T')[0];
          const slug = slugify(title);
          const folderName = `${date}-${slug}`;

          resolve({
            title,
            subtitle,
            date,
            path: `/${slug}`,
            folderName,
          });
        });
    });
  },
};
