---
title: "React from Scratch: Webpack and Babel"
date: "2018-12-05"
publish: false
path: "/react-from-scratch"
---

## A quick word on Node.js

Node.js is JavaScript outside of the browser. Think of this as a programming language like Ruby or Python.

[NVM](https://github.com/creationix/nvm) is a version manager for Node.js; use this to install and switch between multiple versions of Node.js.

After you install Node.js, it comes with a package manager called npm. Just like Ruby gems or Python's pip tool; npm is a way to install things like React, Webpack and Babel. We can also utilize npm to execute scripts.

## Create a new project

Assuming you installed Node.js with nvm, you can get started with creating a new project.

Create a new directory called `react-from-scratch` and move into it.

```bash
mkdir react-from-scratch && cd react-from-scratch
```

Create a package.json file with all the defaults, you can do it with npm like this:

```bash
npm init -y
```

You should see a new package.json file that looks like this:

```json
{
  "name": "react-from-scratch",
  "version": "1.0.0",
  "description": "",
  "main": "index.js",
  "scripts": {
    "test": "echo \"Error: no test specified\" && exit 1"
  },
  "keywords": [],
  "author": "",
  "license": "ISC"
}
```

## Install Dependencies

We install dependencies using npm. There are two kinds of dependencies:

- dependencies: packages your app needs when it's live in production.
- devDependencies: packages used to develop your app, not needed in production.

Our dependencies are `react` and `react-dom`. Let's install them as dependencies:

```bash
npm i react react-dom -S
```

- `npm i` is short for `npm install`
- `-S` is short for `--save`

Your package.json file now lists the names and versions of the packages we installed:

```json{11-14}
{
  "name": "react-from-scratch",
  "version": "1.0.0",
  "description": "",
  "main": "index.js",
  "scripts": {
    "test": "echo \"Error: no test specified\" && exit 1"
  },
  "keywords": [],
  "author": "",
  "license": "ISC",
  "dependencies": {
    "react": "^16.6.3",
    "react-dom": "^16.6.3"
  }
}
```

Also note the newly created node_modules folder and package-lock.json file.
These are generated automatically whenever you run `npm install`.

- node_modules: folder where all node packages are kept
- package-lock.json: used for locking in your node package versions for future installs

It's generally good practice to commit the package-lock.json to git but not node_modules. You can tell git to ignore any files or folders by including them in a .gitignore file. Let's make one.

```bash
touch .gitignore && echo node_modules > .gitignore
```

## Setting up a basic react app

Create a basic react app that we can test with.

```bash
mkdir src && touch src/index.{html,js}
```

Webpack will use src/index.html as a template to create an index.html file we use in production. More on this later.
Note that the `div#root` will be where our react app will be mounted.
And the `script` points to our index.js file, which is where our react app will be written.

```html {8,9}
<!-- src/index.html -->
<!DOCTYPE html>
<html>
  <head>
    <title>React from Scratch</title>
  </head>
  <body>
    <div id="root"></div>
    <script src="./src/index.js"></script>
  </body>
</html>
```

Here's our basic react app, we have a Hello component and it gets rendered with react-dom on the element with the root id.

```js
// src/index.js
import React from "react";
import { render } from "react-dom";

const Hello = () => <h1>Hello</h1>;

render(<Hello />, document.getElementById("root"));
```

## Webpack setup

Let's install all of our webpack stuff:

- webpack
- webpack-cli
- webpack-dev-server
- html-webpack-plugin

```bash
npm i webpack webpack-cli webpack-dev-server html-webpack-plugin -D
```

Also, let's create a webpack.confg.js file where we will write all of our configurations.

```bash
touch webpack.config.js
```

```js
// webpack.config.js
const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
  entry: "./src/index.js",
  output: {
    filename: "bundle.js",
    path: path.resolve(__dirname, "dist"),
  },
  plugins: [new HtmlWebpackPlugin()],
};
```

To actually run webpack to build out this bundle, we should create a build script in our package.json file.

```json {7}
{
  "name": "react-from-scratch",
  "version": "1.0.0",
  "description": "",
  "main": "index.js",
  "scripts": {
    "build": "webpack --mode production",
    "test": "echo \"Error: no test specified\" && exit 1"
  },
  "keywords": [],
  "author": "",
  "license": "ISC",
  "dependencies": {
    "react": "^16.6.3",
    "react-dom": "^16.6.3"
  },
  "devDependencies": {
    "webpack": "^4.27.1",
    "webpack-cli": "^3.1.2"
  }
}
```

```
ERROR in ./src/index.js 4:20
Module parse failed: Unexpected token (4:20)
You may need an appropriate loader to handle this file type.
| import { render } from "react-dom";
|
> const Hello = () => <h1>Hello</h1>;
|
| render(Hello, document.getElementById("root"));
 @ multi (webpack)-dev-server/client?http://localhost:8080 ./src/index.js main[1]
```

## Babel

```bash
npm i @babel/core babel-loader @babel/preset-env @babel/preset-react -D
```

```bash
touch .babelrc
```

```json
{
  "presets": ["@babel/preset-env", "@babel/preset-react"]
}
```
