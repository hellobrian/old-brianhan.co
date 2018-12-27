---
title: "You Should Use Prettier with a Pre-commit Hook"
date: "2018-12-27"
subtitle: "Seamlessly integrate Prettier into your existing development workflow and learn how it all works together"
publish: true
path: "/prettier-with-a-pre-commit-hook"
---

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

And we'll need some test files to work with. Let's reuse the **example.js** and **example.css** files from the [Making the case for Prettier](#making-the-case-for-prettier).

Make a new **src** directory, then copy and paste example files to it.

```bash
mkdir src
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

**index.js**

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

**index.css**

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

```json{2-5}
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

This setup will run `npm run prettier` whenever you run `git commit`. But Prettier is going to target all the files according to the target pattern we gave it, which is all the JavaScript and CSS files in our **src** directory. Keep reading.

## Using Prettier with lint-staged and Husky

```json{7-10}
{
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

This is why we want lint-staged so that we only run Prettier on staged files.
Couple things to note here, we can remove the `prettier` script (optional) and move it into the `"linters"` object. The target pattern is the key and the value is an array of executables.
Note the `git add` is used after `prettier --write` so that the changes from Prettier get staged.

## Many ways to ignore files

There are a lot of ways for Prettier to ignore files

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
