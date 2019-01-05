---
title: "Re: Create Blog Posts in Gatsby with Hygen"
subtitle: "I rediscovered hygen and learned that it can be used for more than just generating JS files."
date: "2019-01-04"
path: "/re-create-blog-posts-gatsby-hygen"
draft: false
---

> This is a follow-up to [this post](https://eunjae.me/create-post-on-gatsby-with-hygen/) by Eunjae Lee where he quickly walks through how to use Hygen for creating blog post files on his Gatsby site.
>
> I recommend reading his post first if you're using [gatsby-starter-blog](https://github.com/gatsbyjs/gatsby-starter-blog).

## What is Hygen?

[Hygen](https://www.hygen.io/) is this awesome code generator that can create files for you from your command line interface (CLI).

## Rediscovering Hygen

The first time I used Hygen was working on a project at my last job.

One of my teammates taught us how to use the `hygen` CLI so that we could generate React component folders, files and some boilerplate code (tests, stories, containers, etc). I wrongly assumed at the time that Hygen was used just for doing this thing at that's it. Then, I stumbled on a post by Eunjae Lee where he's using it to create blog posts on his Gatsby site.

## The way I structure and format my blog posts is annoying to maintain manually

I'm a big fan of component folder structure and I decided to do the same thing with my blog posts. The reason is that I can keep all blog post related files co-located. This isn't anything new, I feel like people have been doing this on their Jekyll sites for a while.

My Gatsby site has a file structure like this:

```
src/blogs
└── YYYY-MM-DD-my-dasherized-blog-post-title
    ├── image1.png
    ├── image2.png
    ├── hilarious-meme.gif
    └── index.md
```

- I keep all my blogs in their own folders
- Each blog folder is named with a date and title delimited by dashes. In other words, they're "dasherized"
- The index.md is the actual file where I write my blog
- All other files are usually images

And here's how I write my frontmatter, which is the data for my blog posts:

**index.md**

```md
---
title: "Using Hygen to Create Blog Posts"
subtitle: "Hygen lets you create files and folders consistently using cli. I learned how to do this on my gatsby site."
date: "2019-01-04"
path: "/using-hygen-to-create-blog-posts"
draft: false
---
```

I decided that I consistently want to format my data like this:

- Capitalize every word in `title` except for words like, "to, and, a, the, etc"
- Sentence-case the `subtitle`, where the first word is capitalized.
- Dasherize the `path` and prepend it with a slash (`/`)

## Getting Started with Hygen

I'm just going to walkthrough what I did to make hygen work on my gatsby site. You may have to do additional setup if you plan to follow along.

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

Note to myself: Read the docs because the knowledge was here all along at http://www.hygen.io/generators/#prompting-arguments.

Here are the prompts that I wrote.

**prompt.js**

```js
// using slugify function from a gist I found:
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

Focusing on the `.then` block of code &mdash; this is where I get to format my input from the CLI so that I don't have to format this stuff manually every time I create a new blog post.

When the `Promise` from this `prompt` method resolves, I can interpolate the variables into `index.ejs.t`.

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

This template won't get confused by two blocks of frontmatter!

- The first block is utilized to tell Hygen where to create the new blog post
  - `folderName` gets interpolated
  - `index.md` will always be called `index.md`
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
