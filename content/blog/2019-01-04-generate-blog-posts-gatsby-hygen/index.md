---
title: "How to Generate Blog Posts in Gatsby using Hygen"
description: "Scaffold arbitrary folders, files and boilerplate code with Hygen."
date: "2019-01-04"
docz: false
featuredImage: "./stamp.jpg"
draft: false
updated: "2020-05-18"
---

![Photo by Hannes Wolf on Unsplash](./stamp.jpg)

<small style="font-family: Karla, sans-serif;">Photo by Hannes Wolf on [Unsplash](https://unsplash.com/photos/n2ILm0aTCYo)</small>

## What is Hygen?

[Hygen](https://www.hygen.io/) is this awesome code generator that creates files for you from your command line interface (CLI).

## File Strutucture

For [this site](https://www.brianhan.co/), I'm using the same file strutcture as [gatsby-starter-blog](https://github.com/gatsbyjs/gatsby-starter-blog).
All my blogs live in the **content/blog** folder.

```bash
./content/blog
└── YYYY-MM-DD-my-blog-post-title
    ├── featuredImage.png
    └── index.md
```

## Frontmatter

My frontmatter is the same as [gatsby-starter-blog](https://github.com/gatsbyjs/gatsby-starter-blog) but I've also added my own keys.

**index.md**

```md
---
title: "How to Generate Blog Posts in Gatsby using Hygen"
description: "Scaffold arbitrary folders, files and boilerplate code with Hygen."
date: "2019-01-04"
updated: "2020-05-18"
docz: false
featuredImage: "./stamp.jpg"
draft: false
---
```

<details style="margin-bottom: 1.75rem;">
  <summary>
    <small style="color: rgb(45, 116, 218);">
      <span role="img" arial-labelledby="#read-more-about-frontmatter">👀</span>
      <span id="read-more-about-frontmatter">Read more about the extra frontmatter I added here.</span>
    </small>
  </summary>

### Updated

A formatted date string to indicate when a blog was updated.

### Docz

Boolean used in **gatsby-node.js** to distinguish `*.md` files that are for the blog vs for docz. Basically, I'm only querying for markdown so that docz files don't get published to the blog.

**gatsby-node.js**

```js
{
  allMarkdownRemark(
    filter: {
      frontmatter: { docz: { eq: false } }
      }
  ) {
    //...
  }
}
```

I'm using [docz](https://www.docz.site/) as an alternative to [storybook](https://storybook.js.org/) for documenting and prototyping components.

### featuredImage

A string path for the featured image used on the blog and the posts.

### draft

Boolean used to prevent unfinished blogs from being published.

</details>

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

The `titleize` and `capitalize` helpers work most of the time but be sure to double-check the strings in case you gave it a weirdly-cased word like "ESLint", where it could come out as either "Eslint" or "eslint" respectively.

## It would be nice if I could...

- Rename blogs using hygen
- Conditionally add boilerplate code for images

## Resources

- Eunjae Lee: ["Create Post on Gatsby with hygen"](https://eunjae.me/create-post-on-gatsby-with-hygen/)
- Matthias Hagemann: ["The Ultimate Way to Slugify a URL String in JavaScript"](https://medium.com/@mhagemann/the-ultimate-way-to-slugify-a-url-string-in-javascript-b8e4a0d849e1)
