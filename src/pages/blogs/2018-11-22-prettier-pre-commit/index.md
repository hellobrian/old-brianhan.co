---
title: "Using Prettier with a Pre-commit Hook"
subtitle: "Seamlessly integrate Prettier into your existing development workflow and learn how it all works together"
date: "2018-12-27"
path: "/prettier-with-a-pre-commit-hook"
draft: false
image: "./prettier-logo.png"
---

![prettier](./prettier-logo.png)

## The Problem

It's difficult for everyone to commit to using a new tool. Specifically with Prettier, it's not maintainable to ask every team member to install a new plugin and stay in-sync with a common Prettier config.

It's best to make it easy for everyone and introduce Prettier seamlessly without anyone having to spend any effort to make it work.

## Making the case for Prettier

Maybe you have teammates who are still skeptical about Prettier.

The [Prettier](https://prettier.io/) website already makes a great case for why you should use it. But I've had more success highlighting these reasons:

1. Setting it up is easy &mdash; one person can do it for everyone
2. Integrates with ESLint
3. Integrates with Git Hooks via Husky
4. Supports formatting for lots of file types: CSS, JSON, Markdown, and [more](https://prettier.io/docs/en/index.html)

## Demo with Prettier Playground

Showing is usually better than telling.

You can quickly demo Prettier in action for your team with the [Prettier Playground](https://prettier.io/playground/). For good measure, here's some badly formatted JavaScript and CSS for you to play with too.

**example.js**

<!-- prettier-ignore -->
```js
      $("#speedPercent").on("input", event => {
  $(".output").value =      event.target.value + "%"    ;
})

$("#grid").on("click", event => {
if (event.target && event.target.matches("button.banana")) {

    const points =     parseInt(   event.target.dataset.points, 10     )  ;
state = {        ...state, score: state.score + points };
    setScoreInnerHTML(state);

const span    =       event.target.querySelector("span");
    span.classList.add("exit-animation");
span.on('animationend', ()   =>    {
event.target.parentNode.removeChild(event.target)})
    }
  })

        const mutationObserver    = observer(state)
mutationObserver.observe($("#grid"), {attributes: false,childList: true,subtree: true});
```

**example.css**

<!-- prettier-ignore -->
```css
    html {
            box-sizing: border-box;
font-size: 16px    ;
}

*,     *:before,     *:after {
      box-sizing:       inherit ;
      }

        .banana > span:after {
        content: attr(data-points) "pts"     ;
        font-size:    0.875rem;
    position:    absolute;
        top: 50%    ;
  left:     -40%;
        background-color:     var(--white-50)    ;
        padding:    2px 10px;
      color: rgba(1,    1,   1, 1);
        border-radius:     4px;
            }

```

## Getting Started

The rest of this article will be a guided tutorial where we will cover the following:

- How to setup Prettier with a pre-commit hook
- Understanding the different tools used to make this work

Assuming you're using `git`, `node` and `npm` (or `yarn`), then you should be good to continue.

You can start with a [barebones project](https://github.com/hellobrian/every-new-project) or work in an existing project.

In this article, we'll work off of the barebones project. Clone it and `cd` into it.

```bash
git clone git@github.com:hellobrian/every-new-project.git prettier-example
cd prettier-example

# remove commits from cloned
rm -rf .git && git init project
```

Here are the packages we're going to use:

- [**prettier**](https://github.com/prettier/prettier): An opinionated and automatic code formatter
- [**lint-staged**](https://github.com/okonet/lint-staged): A tool to run linters against staged git files
- [**husky**](https://github.com/typicode/husky): Gives you easy access to git hooks via npm scripts

Use `npm` or `yarn` to install as `devDependencies`

```bash
npm i prettier lint-staged husky -D
```

You'll have a **package.json** file that looks like this.

```json
{
  "name": "prettier-example",
  "version": "1.0.0",
  "description": "",
  "main": "index.js",
  "scripts": {
    "test": "echo \"Error: no test specified\" && exit 1"
  },
  "keywords": [],
  "author": "",
  "license": "ISC",
  "devDependencies": {
    "husky": "^1.2.1",
    "lint-staged": "^8.1.0",
    "prettier": "^1.15.3"
  }
}
```

## Copy Example Files

We'll need some example code to work with. Let's reuse the **example.js** and **example.css** files from the [Demo with Prettier Playground](#demo-with-prettier-playground).

Make a new **src** directory, then copy and paste example files to it.

```bash
mkdir src && touch src/example.{js,css}
```

### Confirming Husky Setup Hooks

Quick aside: since we installed Husky, you can confirm that it created new `git` hooks for you by peeking into your project's **.git** files.

```bash
ls .git/hooks
less .git/hooks/pre-commit
```

Husky won't overwrite any existing hooks that may already exist in your project. You should see some kind of console output in your terminal if Husky was unable to set things up correctly.

### Seeing Prettier in Action

In your terminal, we can use `npx` to try out `prettier`:

```bash
npx prettier --write src/**/*.{js,css}
```

- The `--write` flag tells `prettier` to format files in place
- The `src/**/*.{js,css}` pattern will target all JavaScript and CSS files in the **src** directory and subdirectories.

Notice the change to our files:

- spacing is normalized
- indents are fixed
- semicolons are added consistently
- no more mixing of single and double quotes

**example.js**

```js
$("#speedPercent").on("input", (event) => {
  $(".output").value = event.target.value + "%";
});

$("#grid").on("click", (event) => {
  if (event.target && event.target.matches("button.banana")) {
    const points = parseInt(event.target.dataset.points, 10);
    state = { ...state, score: state.score + points };
    setScoreInnerHTML(state);

    const span = event.target.querySelector("span");
    span.classList.add("exit-animation");
    span.on("animationend", () => {
      event.target.parentNode.removeChild(event.target);
    });
  }
});

const mutationObserver = observer(state);
mutationObserver.observe($("#grid"), {
  attributes: false,
  childList: true,
  subtree: true,
});
```

**example.css**

```css
html {
  box-sizing: border-box;
  font-size: 16px;
}

*,
*:before,
*:after {
  box-sizing: inherit;
}

.banana > span:after {
  content: attr(data-points) "pts";
  font-size: 0.875rem;
  position: absolute;
  top: 50%;
  left: -40%;
  background-color: var(--white-50);
  padding: 2px 10px;
  color: rgba(1, 1, 1, 1);
  border-radius: 4px;
}
```

## Using Prettier with Husky

Let's move that `prettier` script into an npm script and make it work with the "pre-commit" git hook.

```json{2-9}
{
  "scripts": {
    "prettier": "prettier --write src/**/*.{js,css}"
  },
  "husky": {
    "hooks": {
      "pre-commit": "npm run prettier"
    }
  }
}
```

This setup will run `npm run prettier` whenever you run `git commit`, which makes Husky the piece of this setup that makes it easy for everyone on your team to use Prettier.

But notice that all the files get reformatted when we really just want staged files to get the Prettier treatment.

Keep reading 🐶

## Using Prettier with Husky and lint-staged

```json{7,10-14}
{
  "scripts": {
    "prettier": "prettier --write src/**/*.{js,css}"
  },
  "husky": {
    "hooks": {
      "pre-commit": "lint-staged"
    }
  },
  "lint-staged": {
    "linters": {
      "src/**/*.{js,css}": ["prettier --write", "git add"]
    }
  }
}
```

Adding lint-staged here let's us run Prettier on staged files only so that the files you actually commit to git will be affected.

Let's breakdown how to read the lint-staged config.

- The target pattern becomes a key in the "linters"` object.
- The value is now an array of commands that will get executed where `prettier --write` and `git add` get called one after the other.
- The `git add` command gets added since the `prettier` command will reformat all the staged files according to the target pattern and will re-add them right before you write your commit message

## Ignoring and Targeting Specific Files

There are a lot of ways for Prettier to ignore files

So far, we've been targeting **src** files only, and this will inherently ignore other directories.

```json{4}
{
  "lint-staged": {
    "linters": {
      "src/**/*.{js,css}": ["prettier --write", "git add"]
    }
  }
}
```

You can also add specific files too, like some common files outside of **src**.

```json{4-7}
{
  "lint-staged": {
    "linters": {
      "src/**/*.{js,css}": ["prettier --write", "git add"]
      "webpack.config.js": ["prettier --write", "git add"],
      "package.json": ["prettier --write", "git add"],
      "*.md": ["prettier --write", "git add"]
    }
  }
}
```

Heck, you can even add an `ignore` key here too because...safety!

```json{9}
{
  "lint-staged": {
    "linters": {
      "src/**/*.{js,css}": ["prettier --write", "git add"],
      "webpack.config.js": ["prettier --write", "git add"],
      "package.json": ["prettier --write", "git add"],
      "*.md": ["prettier --write", "git add"]
    },
    "ignore": ["node_modules", "dist", "package-lock.json"]
  }
}
```

Or you can create a **.prettierignore** file at the root of your project, which works just like a **.gitignore** file:

```
node_modules
dist
package-lock.json
```

## Sharing a Prettier config

If you don't want to use the default config, you can create a **.prettierrc** file with your own config and overrides.

Here I specified in `overrides` that Markdown files should use double quotes, but all other files targeted should use single quotes.

```json
{
  "arrowParens": "always",
  "bracketSpacing": true,
  "jsxBracketSameLine": true,
  "jsxSingleQuote": false,
  "semi": true,
  "singleQuote": true,
  "tabWidth": 2,
  "trailingComma": "all",
  "overrides": [
    {
      "files": "*.md",
      "options": {
        "singleQuote": false
      }
    }
  ]
}
```

## Run Prettier Once on All Source Files

Once you have all of this setup, you can run Prettier on all the source files you want to target so that everything is consistently formatted in your pull request. Doing this will ensure that all of your teammates will get the formatting changes once so that future pull requests from teammates don't have unneeded diffs, which can create a lot of noise during code review.

## Conclusion

That's about as much as I can elaborate on Prettier.

You can find the finished example code here on my [GitHub](https://github.com/hellobrian/prettier-example/blob/master/README.md).

Thanks for reading!
