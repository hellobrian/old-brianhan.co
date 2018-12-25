---
title: 'Setting Up Prettier For Your Team'
date: '2018-11-22'
subtitle: 'Automatically format your frontend code and save your team from daily code style discussions.'
publish: true
---

When I join a new team or start a new project, the first thing I try to do is setup Prettier, which is a tool that automatically formats the syntax of your code. It works with a bunch of languages and you can make it work in a few different ways. Getting caught up in an argument about semicolons or making comments on someone's pull request about indents isn't the best use of time.

In this article, I'm going to guide you through how you can integrate Prettier into your team's workflow. Before we get into details, here's a quick overview of what you can do:

Talk to your team about Prettier.

- Tell them what it is
- Explain why it's going to help
- Show them how it works
- Mention that it works with ESLint

Set up [Prettier using a pre-commit hook](https://prettier.io/docs/en/precommit.html)

- IDE agnostic, and one person can set this up for everyone in a single pull request

Turn off ESLint's formatting rules with [eslint-config-prettier](https://prettier.io/docs/en/eslint.html#turn-off-eslint-s-formatting-rules)

- A one-line fix and now you have Prettier handling all the formatting rules

Finally, submit a pull request including all the newly formatted files so that all the pull requests after yours will always get automatically formatted.

## What you need to get started

- **git**: version control for your code
- **.gitignore**: a list of files ignored by git
- **node**: JavaScript runtime outside of the browser (version 8 or newer will work best)
- **npm**: package manager that comes with node
- **package.json**: a manifest file for you to declare packages from npm and run npm scripts

## Using Prettier with a "pre-commit" hook

I think this is the best and simplest way to get Prettier adopted by your team. Your team should be standardized around git and you can leverage this by automatically using Prettier whenever someone uses `git commit`.

This solution uses three packages:

- **prettier**: An opinionated and automatic code formatter
- **lint-staged**: A tool to run linters against staged git files
- **husky**: Gives you easy access to git hooks via npm scripts

Here's a **package.json** lifted straight from the [Prettier docs](https://prettier.io/docs/en/precommit.html):

```json
{
  "husky": {
    "hooks": {
      "pre-commit": "lint-staged"
    }
  },
  "lint-staged": {
    "linters": {
      "*.{js,json,css,md}": ["prettier --write", "git add"]
    }
  }
}
```

## Prettier isn't just meant for JS

You can use Prettier on CSS files, Markdown files, and a bunch of others too! You can see a full list here on the [Prettier's landing page](https://prettier.io/).

For example, maybe you're real fancy and using TypeScript, JSX, Sass and MDX.
Well, here's how you can target all those files.

```json{4}
{
  "lint-staged": {
    "linters": {
      "*.{ts,jsx,scss,mdx}": ["prettier --write", "git add"]
    }
  }
}
```

## Targeting files for Prettier via lint-staged

Let's look at the target pattern we're using with lint-staged: `*.{js,json,css,md}`.

This is going to target all of those files with those extensions anywhere in your project.
You can refer to the [lint-staged docs on filtering files here.](https://github.com/okonet/lint-staged#filtering-files)

But since we're using git is our way to use Prettier, it's super important to rely on your .gitignore file to make sure that you're not accidentally committing things like, node_modules or dist or whichever folder holds all of your bundled production code.

Again, when git ignores something because it's in your .gitignore file, then Prettier should ignore it too.

So, it should be okay to let `lint-staged` target all the files in you project - I personally like this because I can target my src files and some commonly used root files like:

- webpack.config.js
- package.json
- README.md

## More ways to ignore files

Maybe you think using a .gitignore and lint-staged isn't quite enough. That's fine, you can configure lint-staged to be extra diligent in targeting and ignoring the files you want.

You can target src files only.

```json{4}
{
  "lint-staged": {
    "linters": {
      "src/**/*.{js,json,css,md}": ["prettier --write", "git add"]
    }
  }
}
```

Specific files works too, like some common files outside of `src`.

```json{4-6}
{
  "lint-staged": {
    "linters": {
      "src/**/*.{js,json,css,md}": ["prettier --write", "git add"],
      "webpack.config.js": ["prettier --write", "git add"],
      "package.json": ["prettier --write", "git add"]
    }
  }
}
```

Heck, you can even add an `ignore` key here too because...safety!

```json{8}
{
  "lint-staged": {
    "linters": {
      "src/**/*.{js,json,css,md}": ["prettier --write", "git add"],
      "webpack.config.js": ["prettier --write", "git add"],
      "package.json": ["prettier --write", "git add"]
    },
    "ignore": ["node_modules", "dist/**/*.{js,json,css,md}"]
  }
}
```

<!-- ## What is the code _actually_ doing?

Here's the `husky` part of the code.

```json
{
  "husky": {
    "hooks": {
      "pre-commit": "lint-staged"
    }
  }
}
```

Remember, `husky` gives us access to `git` hooks, specifically, the `pre-commit` hook.
In this case, `lint-staged` gets executed automatically before `git commit` thanks to this `pre-commit` hook.

Here's the `lint-staged` code in package.json.

```json
{
  "lint-staged": {
    "linters": {
      "*.{js,json,css,md}": ["prettier --write", "git add"]
    }
  }
}
```

When our code runs `lint-staged` it triggers `prettier` and `git add` but _only_ on staged files.
For example, let's say I have two files when I run `git add myFile.js`, then `myFile.js` is staged and `prettier` runs only on `myFile.js` only.

`"*.{js,json,css,md}"` is a target pattern; this means we're targetting all files in our project with the following extensions: `js`,`json`,`css`, and `md`.

`["prettier --write", "git add"]` is a list of scripts to run when `lint-staged` gets called

- `prettier --write`: edit the targetted files in-place
- `git add`: since we edited the files with `prettier --write`, stage the files again. -->

## ESLint integration

Like I mentioned at the beginning, I recommend using both `prettier` and `eslint` and turn off ESLint's formatting rules with `eslint-config-prettier`

It took me a while to actually...read the actual Prettier [website](https://prettier.io/docs/en/comparison.html) but when I did, I was totally in love with how they explained themselves in the context of linters.

> Linters have two categories of rules:
>
> Formatting rules: eg: max-len, no-mixed-spaces-and-tabs, keyword-spacing, comma-style...
>
> Prettier alleviates the need for this whole category of rules! Prettier is going to reprint the entire program from scratch in a consistent way, so it's not possible for the programmer to make a mistake there anymore :)
>
> Code-quality rules: eg no-unused-vars, no-extra-bind, no-implicit-globals, prefer-promise-reject-errors...

I've been passively using ESLint and Prettier for a couple years and I never made this distinction until reading this!
With that said, I say let Prettier and ESLint work in their respective categories:

Let Prettier handle all the formatting rules

ESLint can warn or yell at us about all the code-quality rules

And turn off ESLint's formatting rules because that's Prettier's job now.
