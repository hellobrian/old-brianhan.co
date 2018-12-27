---
title: "You should use Prettier with a pre-commit hook"
date: "2018-11-22"
subtitle: "Automatically format your frontend code and save your team from daily code style discussions."
publish: false
path: "/prettier-with-a-pre-commit-hook"
---

## The Problem

Using Prettier in your text editor is probably good enough if you're working alone.
But once you're working on a team with lots of people, well, there's always someone who has a different IDE and it's not maintainable to ask everyone to install a plugin for Prettier.
The nice thing about this setup is that you can set this up for your whole team by yourself.

## Getting Started

Assuming you're using `git`, `node` and `npm` or `yarn`, then you should be good to continue.
If you want to follow along in a barebones project, I have one setup for you that has barely anything in it.

Go ahead and clone this project and change into it.

```bash
git clone git@github.com:hellobrian/every-new-project.git prettier-example
cd prettier-example
```

Then we're going to install the following:

- **prettier**: An opinionated and automatic code formatter
- **lint-staged**: A tool to run linters against staged git files
- **husky**: Gives you easy access to git hooks via npm scripts

Use `npm` or `yarn` to install as `devDependencies`

```bash
npm i prettier lint-staged husky -D
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
