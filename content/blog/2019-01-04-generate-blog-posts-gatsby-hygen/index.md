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

A formatted date string to indicate when a blog was updated. But I'm going to omit this field whenever I create new blog posts.

### Docz

Boolean used in **gatsby-node.js** to distinguish `*.md` files that are for the blog vs for docz. Basically, I'm only querying for markdown so that docz files don't get published to the blog.

I'm using [docz](https://www.docz.site/) as an alternative to [storybook](https://storybook.js.org/) for documenting and prototyping components.

### featuredImage

A string path for the featured image used on the blog and the posts.

### draft

Boolean used to prevent unfinished blogs from being published.

</details>

## Quickly Get Started with Hygen

Initialize Hygen and create a new generator called blog using `npx`.

```bash
npx hygen init self
npx hygen generator new --name blog
```

You should see a new **\_templates** folder created at the root of your project.

```rust{2-5}
_templates
├── blog
│   └── new
│       └── hello.ejs.t
└── generator
    ├── help
    │   └── index.ejs.t
    ├── new
    │   └── hello.ejs.t
    └── with-prompt
        ├── hello.ejs.t
        └── prompt.ejs.t
```

Edit **\_templates/blog/new/hello.ejs.t**.

```rust
---
to: content/blog/YYYY-MM-DD-new-blog/index.md
---
---
title: "title"
description: "description"
date: "YYYY-MM-DD"
docz: false
featuredImage: "./featuredImage.jpg"
draft: true
---
```

Run the hygen command to create a new blog post.

```bash
npx hygen blog new
```

A new blog folder and file called **YYYY-MM-DD-new-blog/index.md** will be created.

```rust{2-3}
content/blog
└── YYYY-MM-DD-new-blog
    └── index.md
```

From this point you could manually edit the folder names and frontmatter manually and start blogging!

Or we can make our hygen command a little smarter.

## Create a CLI for Generating Blog Posts

### Setup files

Create a **prompts.js** and **slugify.js** file in **\_templates/blog/new**. The **prompt.js** file will be used to show prompts in the terminal so we can generate a blog post with all the correct data upfront.

The **slugify.js** file is a helper function we'll be using to slugify our titles to use as a folder name. Here's a [gist](https://gist.github.com/hellobrian/6360f69850280a798452ee21e4267e26) with the slugify code.

```rust{3-4}
_templates/blog/new
├── hello.ejs.t
├── prompt.js
└── slugify.js
```

### Getting inputs

**prompt.js**

```js{6-15}
module.exports = {
  prompt: ({ prompter }) => {
    return new Promise((resolve, reject) => {
      prompter
        .prompt([
          {
            type: "input",
            name: "title",
            message: "Title?",
          },
          {
            type: "input",
            name: "description",
            message: "Description?",
          },
        ])
        .then(({ title, description }) => {
          console.log({ title, description });
        });
    });
  },
};
```

### Using inputs for frontmatter data

Inside the `.then` block of code, we can generate date, slug, and folderName.

**prompt.js**

```js{20-30}
const slugify = require("./slugify");

module.exports = {
  prompt: ({ prompter }) => {
    return new Promise((resolve, reject) => {
      prompter
        .prompt([
          {
            type: "input",
            name: "title",
            message: "Title?",
          },
          {
            type: "input",
            name: "description",
            message: "Description?",
          },
        ])
        .then(({ title, description }) => {
          const date = new Date().toISOString().split("T")[0];
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
```

When the `Promise` from this `prompt` method resolves, that new data can be interpolated into **hello.ejs.t**, which is used as the template for creating **index.md**.

**\_templates/blog/new/hello.ejs.t**

```rust{2,5-7}
---
to: content/blog/<%= folderName %>/index.md
---
---
title: "<%= h.inflection.titleize(title) %>"
description: "<%= h.inflection.capitalize(description) %>"
date: "<%= date %>"
draft: true
docz: false
---
```

Also take note of the `h.inflection` helper functions; these come from `hygen` (see [Helpers and Inflections](https://www.hygen.io/templates#helpers-and-inflections)). We're using these to format title and description. It's not perfect but works _most_ of the time.

### We're done! Try it out!

Run the `hygen` command again.

```bash
npx hygen blog new
```

Or create an npm script.

```bash
# yarn add hygen -D
npm i hygen -D
```

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
