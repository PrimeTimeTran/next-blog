---
draft: false
date: 2023-06-26
title: How to Rebase in Git (With Examples)
summary: Learn how to rebase in Git with step-by-step examples. Understand the difference between merge and rebase, and how to resolve conflicts when rebasing.
tags: ['git', 'guide', 'question']
---

# Introduction

Rebasing is one of the most powerful — and sometimes misunderstood — features in Git. It allows you to rewrite commit history and maintain a cleaner, more linear project history.

In this post, we’ll walk through:

- What `git rebase` is
- How to use it in common scenarios
- The difference between rebase and merge
- How to resolve conflicts during a rebase

---

## What is Git Rebase?

Rebasing is the process of moving or combining a sequence of commits to a new base commit. Unlike `merge`, which creates a new commit that ties branches together, `rebase` re-applies your changes on top of another branch.

---

## Basic Rebase Example

Let’s say you're working on a feature branch:

```sh
git checkout -b feature
```

You make a few commits. Meanwhile, `main` has moved forward. You want to update your `feature` branch with the latest changes from `main`:

```sh
git checkout feature
git rebase main
```

This takes your `feature` branch commits and reapplies them on top of the latest commit from `main`.

---

## Rebase vs Merge

| Command      | Description                                      |
| ------------ | ------------------------------------------------ |
| `git merge`  | Combines branches and creates a merge commit     |
| `git rebase` | Rewrites commit history and avoids merge commits |

### Merge:

```sh
git checkout feature
git merge main
```

Creates a new commit that merges `main` into `feature`.

### Rebase:

```sh
git checkout feature
git rebase main
```

No merge commit — it rewrites the history of `feature` as if it were built directly on top of `main`.

---

## Interactive Rebase

To clean up your commit history before merging:

```sh
git rebase -i HEAD~3
```

This opens an editor showing your last 3 commits. You can choose to:

- `pick` (keep as is)
- `squash` (combine with previous commit)
- `reword` (edit commit message)

Example:

```
pick a1b2c3 Add user model
squash d4e5f6 Fix typo in user model
reword f6g7h8 Add validation to user model
```

After saving, Git will prompt you to edit the combined commit messages.

---

## Resolving Conflicts

If there’s a conflict during rebase:

```sh
# Fix the conflict in your editor
git add .
git rebase --continue
```

To abort the rebase:

```sh
git rebase --abort
```

To skip the problematic commit:

```sh
git rebase --skip
```

---

## Rebasing a Feature Branch

A common workflow is to rebase your feature branch before merging:

```sh
git checkout feature
git rebase main
# Fix any conflicts, then:
git checkout main
git merge feature
```

This gives you a clean, linear commit history without merge commits.

---

## Don't Rebase Shared History

Never rebase commits that have already been pushed to a shared branch (e.g., `main`, `develop`) unless everyone agrees. Rebasing rewrites history, which can cause issues for collaborators.

If you must rebase a pushed branch, use force-push **with caution**:

```sh
git push --force-with-lease
```

---

## Conclusion

Rebasing is a powerful tool that helps you create clean and readable Git histories. Use it to:

- Update branches
- Clean up commits
- Avoid messy merge commits

But remember: with great power comes great responsibility. Only rebase local or personal branches unless you coordinate with your team.

---

Happy rebasing! 🔧

```

```
