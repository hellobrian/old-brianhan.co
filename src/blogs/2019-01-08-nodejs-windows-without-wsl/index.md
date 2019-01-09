---
title: "Setting up a Node.js Environment on Windows without the Linux Subsystem is not bad at all"
subtitle: "I failed a lot trying to use WSL to replicate the dev environment I use on my Mac. Then something weird happened: I ditched the fancy subsystem and now I'm happily doing dev things on my PC."
date: "2019-01-08"
path: "/nodejs-windows-without-wsl"
draft: false
image: "./windows-image-crop.jpg"
---

![Photo by Samuel Zeller on Unsplash](./windows-image-crop.jpg)

<small style="font-family: Karla, sans-serif;">Photo by Samuel Zeller on [Unsplash](https://unsplash.com/photos/IfFndn_imbU) (Cropped)</small>

## TL;DR

Working without Bash and Windows Subsystem for Linux (WSL) is totally fine and I'm really happy with the minimal setup that I have going on. Here's what I did:

Install the following:

- git-bash for using `git` everywhere
- vs code for text editing
- nvm-windows for installing and managing node
- `npm i windows-build-tools -g` for `python` and other dependencies that usually come with your Mac

## What changed? Why Now?

Two things changed.

1. I wanted to write more blog posts
2. I started to really enjoy typing on my mechnical keyboard.

Gotta love that clickity-clack!

I was more motivated to make this whole "doing dev stuff on PC" a real thing and I knew I would be writing more markdown than actual frontend code.

Even with that said, my writing and publishing workflow still relies on Node.js and Git.

- When I merge code into `master`, Netlify publishes a new version of my site
- I got really used to having my website hot-reload on one side of my screen with `gatsby develop` while I write my blog on the other side.

In other words, I didn't need to do as much

When I want to write new blog posts on my Gatsby website, I'm not just editing markdown files:

- I'm automatically formatting my markdown files with Prettier.
- I'm also committing updates to GitHub using `git`.

## Deciding to try again without WSL

Not to say that the Windows Subsystem for Linux is bad because it's not. It's a real thing and it's amazing that it exists as an option.

My problem was that I got pretty confused about the different file systems shared between Windows and the Linux subsystem.

This time around, I wanted to keep things simple and see if I could be happier with less. I just wanted start with the essentials for writing and publishing blogs and take things one step at a time from there.

## Install git-bash and VS Code

Git is the main thing I need to publish to my Gatsby website.

The easiest way I know how to setup Git on Windows is installing [git-bash](https://git-scm.com/download/win). This is the main terminal where I can `git clone` my repo, open my project with `code` and `git push` my work.

Speaking of `code`, you can download **VS Code for Windows** [here](https://code.visualstudio.com/download).

And just like on any other OS, you can [setup your SSH keys](https://help.github.com/articles/generating-a-new-ssh-key-and-adding-it-to-the-ssh-agent/) so that you can clone your projects without passwords. All of the listed steps can be executed in the git-bash terminal.

## Install nvm-windows

I usually install node with nvm because node packages from npm have varying levels of compatibility depending on what node version you're running. This is the first time I tried using [nvm-windows](https://github.com/coreybutler/nvm-windows). It doesn't do everything that the original nvm does, mainly it doesn't know how to use a project's **.nvmrc** file.

Installation just uses an installer and you can access `nvm`, `node`, `npm` and `npx` in git-bash or any other terminal like command prompt or powershell.

If you notice that `npm install` will hang or stall during installation processes, close and re-open your terminal. Maybe restart your computer.

## Learning Basic commands in Command Prompt

I only needed to know a few commands for navigating in command prompt or powershell on Windows.

Moving up and down directories with `cd` is still `cd` but uses `\` instead of `/` between folders

For example:

```
cd Users\brian\dev\my-project
cd ..
```

Listing files in directories is `dir` on Windows, which is equivalent to `ls`.

When I want to create new blog files, I can just run my `hygen` script and generate blog files that way, which I wrote about [here](https://www.brianhan.co/generate-blog-posts-gatsby-hygen).

## Globally install windows-build-tools

```bash
npm install windows-build-tools -g
```

A lot of the node dependencies that are used in projects are more likely written with Mac compatibility first or exclusively. A lot of binaries and runtimes that are usually installed on Macs by default like `python` are just assumed to be there.

To ensure that `npm install` runs correctly, you can globally install `windows-build-tools`, which I learned about courtesy of the [Gatsby on Windows](https://www.gatsbyjs.org/docs/gatsby-on-windows/) docs.

As pointed out in the docs, I experienced a stall during the installation, but I simply restarted my terminal and re-installing the package worked.

## Resolving errors with pngquant

There are some binaries that are used in Gatsby dependencies that may throw errors. For me, it was a package called pngquant.

I was able to resolve this for myself by installing `pngquant-bin` to my project.
You can read [this issue](https://github.com/gruntjs/grunt-contrib-imagemin/issues/96#issuecomment-42759424) for more details.

## Next Steps

Everything I mentioned in this article is about all I really need for most of my projects.

The only nitpicky things I find with working on Windows is that the vs code keybindings are different than what I'm used to.
Also, the terminal options I have available to me aren't super attractive or helpful. I might give [hyper](https://hyper.is/) terminal a try now that I'm a little more comfortable in command prompt.

As always, hope this was helpful and thanks again for reading!
