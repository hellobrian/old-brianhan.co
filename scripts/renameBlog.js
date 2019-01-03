const fs = require('fs');
const shell = require('shelljs');
const inquirer = require('inquirer');
const slugify = require('./slugify');
const questions = require('./questions');
const markdownTemplate = require('./markdownTemplate');

inquirer.prompt(questions).then((answers) => {
  // TODO: get original date from blog folder
  // const date = new Date();
  // const formattedDate = date.toISOString().split('T')[0];
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

  const folderExists =
    fs.readdirSync(`${__dirname}/../src/blogs/`).filter((dir) => dir === folder)
      .length > 0;

  if (!folderExists) {
    fs.mkdirSync(`${__dirname}/../src/blogs/${folder}`);
    fs.writeFileSync(`${__dirname}/../src/blogs/${folder}/index.md`, markdown);
    console.log(`
    
    ✅ Renamed: NEW_NAME => ${folder};
    
    `);
    shell.exit(0);
  } else {
    console.error(`Folder name, ${folder}, already exists 😭!`);
  }
});
