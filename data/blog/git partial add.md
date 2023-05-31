---
title: 'How to stage part of a dirty file'
date: '2023-04-28'
tags: ['git']
draft: false
summary: 'When we want to commit part of a file to git we can!'
layout: PostSimple
bibliography: references-data.bib
canonicalUrl:
---

## Committing part of a file to Git

Using the following command we can commit finished work and leave the rest of
the file for later.

`git add -p /path/to/filename`

### Details

We've got a great title, `I know this Post Title is the best`
, on line `12`,

But below line `15` is WIP.

Run `git status` and notice `git partial add.md` is dirty.

![Dm](https://i.imgur.com/OVTL9WM.png)

Running `git add -p /path/to/filename` we open an interactive prompt which gives
us a few commands.

Like running `git diff` we see changes indicated by prefixed `+`
and `-` and colors green and red.

![Dm](https://i.imgur.com/Qz4cK00.png)

If we enter `s` we can select which parts of the file we want to commit.

Then `y` to accept the newly focused segment of the file, just the new title,
`I know this Post Title is the best`.

![Dm](https://i.imgur.com/rpAAfYR.png)

And `n` for the rest of the changes.

Now when we run `git status` we see that the file is both dirty and staged for
commit. Wild.
![Dm](https://i.imgur.com/NQ9WSF3.png)

If we use VSCode's git tool we see only the title has been committed and the
dirty changes are still present in the working file.
![Dm](https://i.imgur.com/YtDc8ge.png)
