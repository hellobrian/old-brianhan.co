---
title: "You Might Not Need Windows Subsystem for Linux to Get Setup with Node.js"
subtitle: "If you're coming from a Mac and you want to start developing on a Windows machine, here's how I setup my PC to create a development setup that I'm pretty happy with."
date: "2019-01-08"
path: "/you-might-not-need-wsl-for-nodejs"
draft: true
---

## Overview

When I want to write new blog posts on my Gatsby website, I'm not just editing markdown files:

- I'm automatically formatting my markdown files with Prettier.
- I'm also committing updates to GitHub using `git`.

Luckily, this means that all I really need is `git` and I'll need`nvm` to use `node` and `npm`. In the past I've tried using Windows Subsystem for Linux, but the main painpoint with this was that I didn't really know how to resolve the file systems between my Windows OS and the Linux subsystem.

This should apply to most Node.js projects on Windows.

## Install git-bash

https://git-scm.com/download/win

## Install nvm-windows

https://github.com/coreybutler/nvm-windows

## Install VS Code for Windows

## Learn Basic Command Prompt

Moving directories is `cd` but uses this other slash `\` in between folder names.

For example:

```
cd Users\brian\dev\my-project
cd ..
```

Viewing files in directories is `dir`, which is equivalent to `ls`.

## Install windows-build-tools globally

```
npm install windows-build-tools -g
```

A lot of the node dependencies that are used in projects are more likely written with Mac compatibility first or exclusively. A lot of binaries and runtimes that are usually installed on Macs by default like `python` are just assumed to be there.

To ensure that `npm install` runs correctly, you can globally install `windows-build-tools`, which I learned about courtesy of the [Gatsby on Windows](https://www.gatsbyjs.org/docs/gatsby-on-windows/) docs.

As pointed out in the docs, I did experience a stall during the installation, but I simply restarted my terminal and re-installing the package worked.

## Errors with pngquant

There are some binaries that are used in Gatsby dependencies that may throw errors. For me, it was a package called pngquant.

I was able to resolve this for myself by installing `pngquant-bin` to my project.
You can read [this issue](https://github.com/gruntjs/grunt-contrib-imagemin/issues/96#issuecomment-42759424) for more details.
