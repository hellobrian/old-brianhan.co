---
title: "How to Generate Blog Posts in Gatsby using Hygen"
description: "Scaffold arbitrary folders, files and boilerplate code with Hygen."
date: "2019-01-04"
docz: false
---

![Photo by Hannes Wolf on Unsplash](./stamp.jpg)

<small style="font-family: Karla, sans-serif;">Photo by Hannes Wolf on [Unsplash](https://unsplash.com/photos/n2ILm0aTCYo)</small>

## What is Hygen?

[Hygen](https://www.hygen.io/) is this awesome code generator that creates files for you from your command line interface (CLI).

## Rediscovering Hygen

The first time I used Hygen was working on a project at my last job.

One of my teammates taught us how to use it so that we could generate React components without writing any boilerplate, like initial tests, storybook files, etc.

But, I never realized I could do the same with my blog posts until I came across Eunjae Lee's [original post](https://eunjae.me/create-post-on-gatsby-with-hygen/) about it.

## The Problem

I like my naming conventions but they're annoying to maintain.

```
src/blogs
└── YYYY-MM-DD-my-dasherized-blog-post-title
    ├── image1.png
    ├── image2.png
    ├── hilarious-meme.gif
    └── index.md
```

- I keep each blog in its own folder, like a React component.
- Each blog folder is given a "dasherized" name using a date and title.
- The **index.md** is where I write my blog
- All other related files are co-located with **index.md**, usually images.

The same problem applies to how I write my frontmatter, which is the data for my blog posts:

**index.md**

```md
---
title: "How to Generate Blog Posts in Gatsby using Hygen"
subtitle: "This is a nice subtitle for my blog post"
date: "2019-01-04"
path: "/generate-blog-posts-gatsby-hygen"
draft: false
---
```

I decided that I consistently want to format my data like this:

- Capitalize every word in `title` except for words like, "to, and, a, the, etc"
- Sentence-case the `subtitle`, where the first word is capitalized.
- Dasherize the `path` and pre-pend it with a slash (`/`)

## Quickly Getting Started with Hygen

Initialize Hygen and create a new generator called blog using `npx`.

```bash
hygen init self
hygen generator new --name blog
```

You should see a new **\_templates** folder created at the root of your project. Change the files so that it matches this structure:

```
_templates/blog
└── new
    ├── index.ejs.t (template for index.md file, originally hello.ejs.t)
    ├── prompt.js (defines how CLI for inputting title and subtitle)
    └── slugify.js (aka the function we use to dasherize strings)
```

## Creating a CLI for Generating Blog Posts

You can create a **prompts.js** file to define any questions you want to ask yourself whenever you run your hygen script.

We want to be able to write a title and subtitle when prompted so that we can generate boilerplate code for blog posts. If you're familiar with [inquirer.js](https://github.com/SBoudrias/Inquirer.js/) for creating CLIs in Node.js, then this should look familiar.

**prompt.js**

```js
// Using slugify function from a gist I found:
// https://gist.github.com/matthagemann/382adfc57adbd5af078dc93feef01fe1

const slugify = require("./slugify");

module.exports = {
  prompt: ({ prompter }) => {
    return new Promise((resolve, reject) => {
      prompter
        .prompt([
          {
            type: "input",
            name: "title",
            message: "What is the title?",
          },
          {
            type: "input",
            name: "subtitle",
            message: "What is the subtitle?",
          },
        ])
        .then(({ title, subtitle }) => {
          console.log({ title, subtitle });
        });
    });
  },
};
```

## Using Input in Template

We can do all the work inside the `.then` block of code

**prompt.js**

```js{9-19}
module.exports = {
  prompt: ({ prompter }) => {
    return new Promise((resolve, reject) => {
      prompter
        .prompt([
          ...
        ])
        .then(({ title, subtitle }) => {
          const date = new Date().toISOString().split("T")[0];
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
```

When the `Promise` from this `prompt` method resolves, that new data can be interpolated into `index.ejs.t`, which is the template for **index.md**.

**index.ejs.t**

```ejs
---
to: src/blogs/<%= folderName %>/index.md
---
---
title: "<%= h.inflection.titleize(title) %>"
subtitle: "<%= h.inflection.capitalize(subtitle) %>"
date: "<%= date %>"
path: "<%= path %>"
draft: true
---

```

Fun fact: this template doesn't get confused by two blocks of frontmatter!

- The first block tells Hygen where to create the new blog post using `to:`. The `folderName` variable is the only value that gets interpolated.
- The next block of frontmatter will be treated as the [body](http://www.hygen.io/templates) that gets written to `index.md`
  - There are built-in [helpers](http://www.hygen.io/templates#helpers-and-inflections) via the [inflections](https://github.com/dreamerslab/node.inflection) library, which gives us sentence-casing and titlizing for free and it works _most_ of the time.

Almost done.

Install Hygen locally with `--save-dev` (or `-D` for short)

```bash
npm i hygen -D
```

Create an npm script and run it.

**package.json**

```json
{
  "create:blog": "hygen blog new"
}
```

```bash
npm run create:blog
```

## Gotchas

Actually just one gotcha.

The `titleize` and `capitalize` helpers work most of the time but be sure to double-check the strings in case you gave it a weirdly-cased word like "ESLint", where it could come out as either "Eslint" or "eslint" respectively.

## It would be nice if I could...

- Rename blogs using hygen
- Conditionally add boilerplate code for images

## Resources

- Eunjae Lee: ["Create Post on Gatsby with hygen"](https://eunjae.me/create-post-on-gatsby-with-hygen/)
- Matthias Hagemann: ["The Ultimate Way to Slugify a URL String in JavaScript"](https://medium.com/@mhagemann/the-ultimate-way-to-slugify-a-url-string-in-javascript-b8e4a0d849e1)
