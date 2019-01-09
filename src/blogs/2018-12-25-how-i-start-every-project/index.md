---
date: "2018-12-25"
title: "How I Start Every Project"
subtitle: "A quick guide to starting new frontend projects"
path: "/how-i-start-every-project"
draft: false
image: "./how-i-start-crop.jpg"
---

![Photo by Jefferson Santos on Unsplash](./how-i-start-crop.jpg)

<small style="font-family: Karla, sans-serif;">Photo by Jefferson Santos on [Unsplash](https://unsplash.com/photos/V9sv7QrDUgc) (Cropped)</small>

## New Computer Setup

Install `hombrew`

- [Install](https://brew.sh/) instructions

Install `git` using homebrew.

```bash
brew install git
```

Install `node` with `nvm`.

- [Installation](https://github.com/creationix/nvm#installation) instructions
- [Usage](https://github.com/creationix/nvm#usage) instructions.

## New Project Setup

Create a new folder for your project and change into that directory.

```bash
mkdir every-new-project && cd every-new-project
```

Create a new **package.json** file.

```bash
npm init -y
```

Your **package.json** should look like this:

```json
{
  "name": "every-new-project",
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

Create a **.gitignore** file so that you don't accidentally any files or folders you want to keep out of version control. I usually put **node_modules** in this file.

```bash
touch .gitignore
echo node_modules > .gitignore
```

Create an **.nvmrc** file with the node version you want to use for this project. For personal projects, I just write `stable` in this file.

In the [Deeper Shell Integration](https://github.com/creationix/nvm#deeper-shell-integration) section of NVM's readme, you can learn how to customize your **.bashrc** or **.zshrc** file so that NVM will automatically change your node version to the one listed in the project's **.nvmrc** file.

```bash
touch .nvmrc
echo stable > .nvmrc
```

Maybe you're working on a non-personal computer and you want to setup your project with your personal GitHub username and email. I personally like to just update my project's `.git` files with this info. This is a minor thing so don't worry too much if you want to skip this.

```bash
git init
git config user.name "Your Name"
git config user.email "your_email@gmail.com"
```

Your project's **.git/config** file should have a new user section added.

```conf
[user]
	name = Your Name
	email = your_email@gmail.com
```

Finally, create a new repository on your GitHub account and follow the instructions on GitHub for creating a new project.

You can find this work on my GitHub [here](https://github.com/hellobrian/every-new-project).
