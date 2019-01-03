const fs = require('fs');
const shell = require('shelljs');
const inquirer = require('inquirer');
const slugify = require('./slugify');

const markdownTemplate = (args) => `
---
title: ${args.title}
subtitle: ${args.subtitle}
date: ${args.date}
path: ${args.path}
draft: true
---

## Getting Started

Start writing something awesome here!
`;

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

inquirer.prompt(questions).then((answers) => {
  const date = new Date();
  const formattedDate = date.toISOString().split('T')[0];
  const { title, subtitle } = answers;
  const slug = slugify(title);
  const path = `/${slug}`;

  const folder = `${formattedDate}-${slug}`;
  const markdown = markdownTemplate({
    title,
    subtitle,
    date: formattedDate,
    path,
  });
  console.log(JSON.stringify({ markdown, folder }, null, 2));
  fs.mkdirSync(`${__dirname}/../src/blogs/${folder}`);
  fs.writeFileSync(`${__dirname}/../src/blogs/${folder}/index.md`, markdown);
  shell.exit(0);
});
