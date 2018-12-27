---
title: "You should use Prettier with a pre-commit hook"
date: "2018-11-22"
subtitle: "Automatically format your frontend code and save your team from daily code style discussions."
publish: false
path: "/prettier-with-a-pre-commit-hook"
---

## The Problem

When you're working on a project with lots of people, it's not easy convincing everyone to start using a new tool. You're going to run into problems where you want everyone to use Prettier, but the main painpoint is that it's not maintainable to ask every team member to install a Prettier plugin for their specific text editor.

## Making the case for Prettier

1. Setting it up is easy - one person can do it for everyone
2. Integrates with ESLint
3. Supports formatting for lots of file types: CSS, JSON, Markdown, and [more](https://prettier.io/docs/en/index.html)

## Getting Started

Assuming you're using `git`, `node` and `npm` (or `yarn`), then you should be good to continue.
If you want to follow along in a barebones project, I have one setup for you here on my [GitHub](https://github.com/hellobrian/every-new-project).

Clone the project and change into it.

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

And we'll need some test files to work with. Let's create a **src** directory with `.css` and `.js` file, both badly formatted.

```bash
mkdir src && touch src/index.{js,css}
```

**index.js**

<!-- prettier-ignore -->
```js
$("#speedPercent").on("input", event => {
$(".output").value =      event.target.value + "%"    ;
})

$("#grid").on("click", event => {
if (event.target && event.target.matches("button.banana")) {

const points =     parseInt(event.target.dataset.points, 10);
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

**index.css**

<!-- prettier-ignore -->
```css
html {
box-sizing: border-box;
font-size: 16px;
}

*,
 *:before, *:after {
box-sizing: inherit;
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

### Confirming Husky Setup Hooks

Quick aside: since we installed Husky, you can confirm that it created new `git` hooks for you by peeking into your project's **.git** files.

```bash
ls .git/hooks
less .git/hooks/pre-commit
```

Husky won't overwrite any existing hooks that may already exist on your project. You should see some kind of console output in your terminal if Husky was unable to set things up correctly.

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
