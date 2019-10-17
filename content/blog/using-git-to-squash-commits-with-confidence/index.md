---
title: Using Git to Squash Commits with Confidence
date: 2019-01-11
description: Let's say you've been happily using git merge your whole career and you join a new team and all of a sudden everyone's saying you gotta rebase and squash your commits. Don't panic! Here are some tips that I've learned to get more comfortable squashing and rebasing in git.
---

![Photo by Danielle Peters on Unsplash](./squashes-cropped2.jpg)

<small style="font-family: Karla, sans-serif;">Photo by Danielle Peters on [Unsplash](https://unsplash.com/photos/Who26xi-q0c) (cropped)</small>

## TL;DR

For me, one big gotcha is that the chronilogical order of your commits matters. First thing is to note that `git log` and `git rebase -i master` will list your commits in an opposite order.

When reading from top-to-bottom:

- A list of commits in `git log` will sort newest to oldest
- But a list of commits in `git rebase -i master` is oldest to newest

To squash commits, use `git rebase -i master` in a feature branch.

- Always `pick` the oldest commit
- Mark all other commits with the word `squash`

## The What and Why of Squashing Commits

In Git, squashing is a way to combine commits &mdash; newer commits you choose to `squash` will meld into older commits. Doing this results in a cleaner commit history.

When I was at IBM working on [Carbon Design System](https://www.carbondesignsystem.com/), we made it a rule that contributors and maintainers should use `rebase` and should squash commits for every pull request.

The reason for this had to do with new releases of our npm packages.

Since each commit on `master` triggers a new release, all commits in a pull request are squashed into one commit so that a single new release is triggered per pull request. The alternative would be triggering multiple granular releases per commit when new code is merged to `master`.

Other teams I worked on in my career usually opted to standardize around a `rebase` workflow to have the option to rollback commits in case anything bad leaks into `master`. For what it's worth, I don't think any of the teams I've worked with ever rolled back commits on a project. And if they did, we were all using `merge` so 🤷‍♀️

Bottom line: whether you're mandated to use a `rebase` workflow or not, there are valid justifications for it and against it.

## How to Squash Commits

Let's say I have a `master` branch with some commits and I create a new branch called `feature`. I write some code, commit my changes, and now I have some new commits on my `feature` branch.

Doing `git log` will list all the commits.

```bash
git log
# or for prettier git logs:
# git log --pretty=format:'%C(red)%d%Creset %C(yellow)%h%Creset %s' --graph --abbrev-commit
```

```bash
*  (HEAD -> feature) 510a97b change 4
*  65677aa change 3
*  6929064 change 2
*  1914635 change 1
*  (origin/master, master) a6334e3 change dog func
*  6a31c00 rewrite index.js
*  3d6a19c remove index.js
*  f16edf4 first commit: add index.js
```

I can squash the commits on the `feature` branch into one commit using this command:

```bash
git rebase -i master
```

- The `-i` or `--interactive` flag let's us `squash` commits or perform other edits.
- The `master` argument tells git which branch to rebase against.

Anytime I want to squash commits I use `git rebase -i master` because it gives me all the commits for my `feature` branch no matter how many commits I make. It's more common that I would want to see all the commits I made in my `feature` branch all at once.

When you run `git rebase -i master`, the default editor that is configured with your git will open with a list of commits and some options for how you can edit your commits. On my computer, `vi` is the default editor and it looks like this:

```bash
pick 1914635 change 1
pick 6929064 change 2
pick 65677aa change 3
pick 510a97b change 4

...

# Commands:
# p, pick <commit> = use commit
# r, reword <commit> = use commit, but edit the commit message
# e, edit <commit> = use commit, but stop for amending
# s, squash <commit> = use commit, but meld into previous commit
# f, fixup <commit> = like "squash", but discard this commit's log message
# x, exec <command> = run command (the rest of the line) using shell
# d, drop <commit> = remove commit
# l, label <label> = label current HEAD with a name
# t, reset <label> = reset HEAD to a label
# m, merge [-C <commit> | -c <commit>] <label> [# <oneline>]
# .       create a merge commit using the original merge commit's
# .       message (or the oneline, if no original merge commit was
# .       specified). Use -c <commit> to reword the commit message.
```

Remember to always `pick` the oldest commit and `squash` all the other commits.

```bash
pick 1914635 change 1
squash 6929064 change 2
squash 65677aa change 3
squash 510a97b change 4

# or you can use p and s for pick and squash
# p 1914635 change 1
# s 6929064 change 2
# s 65677aa change 3
# s 510a97b change 4
```

This is the part that confused me when I started learning rebase.

Notice here that the list of commits are sorted opposite from oldest to newest?
This is different from `git log` which will sort from newest to oldest when reading top to bottom.

## Changing Your Default Editor for Git

Git may be configured to use `vi` as the default editor.

You can change this to use vscode like this:

```bash
git config --global core.editor "code --wait"
```

For other options, check out this [stackoverflow post](https://stackoverflow.com/questions/2596805/how-do-i-make-git-use-the-editor-of-my-choice-for-commits) and do a `cmd + f` to search for your editor of choice.

## Using Vi Editor

If for some reason you're stuck with `vi`, here's how you use it:

- press `i` to make edits
- when you're done editing, press `esc`
- when you're ready to save and go to the next step, press `:wq` and then `enter` or `return`

Last step is to edit the final commit message for the commit. Edit the commit message or don't. When you're done, `:wq`.
