---
draft: false
date: 2023-06-26
title: 'Guide: Git Pre-Commit Hooks Explained with Examples'
tags: ['git', 'guide']
summary: Learn how to use Git pre-commit hooks to automatically run checks or scripts before committing code, with practical examples using shell and Husky.
---

# Git Pre-Commit Hooks Explained with Examples

Git hooks are powerful tools that let you automate tasks during the Git workflow. One of the most commonly used hooks is the **pre-commit** hook. This script runs _before_ a commit is finalized, making it ideal for tasks like linting code, running tests, or formatting files automatically.

In this post, you’ll learn what Git pre-commit hooks are, how to use them, and see examples with plain shell scripts and modern tools like Husky.

---

## What is a Git Pre-Commit Hook?

A **pre-commit hook** is a script that runs right before a `git commit` is executed. If the script exits with a non-zero status, the commit will be aborted. This makes it a useful safeguard to prevent bad or broken code from being committed.

Git looks for hooks in the `.git/hooks` directory inside your repository.

---

## How to Use Pre-Commit Hooks

### 1. Using Native Git Hooks

Git initializes example hooks when you create a repository. To enable the pre-commit hook:

1. Navigate to `.git/hooks/`
2. Rename `pre-commit.sample` to `pre-commit`
3. Make the file executable:

```bash
 chmod +x .git/hooks/pre-commit
```

### Example: Lint Code Before Commit

Here's a simple `pre-commit` script that runs ESLint before allowing the commit:

```bash
#!/bin/sh

echo "Running ESLint..."
npx eslint . || {
  echo "ESLint failed. Commit aborted."
  exit 1
}
```

If ESLint fails, the commit will not proceed.

---

## 2. Using Husky (Recommended for Teams)

Native Git hooks aren't shared with the repo. To version-control your hooks and ensure everyone runs them, use [Husky](https://typicode.github.io/husky).

### Install Husky

```bash
npm install husky --save-dev
npx husky install
```

Add this to your `package.json` scripts:

```json
"scripts": {
  "prepare": "husky install"
}
```

### Add a Pre-Commit Hook

```bash
npx husky add .husky/pre-commit "npm run lint"
```

This creates a `.husky/pre-commit` file with:

```bash
#!/bin/sh
. "$(dirname "$0")/_/husky.sh"

npm run lint
```

Now every time you run `git commit`, Husky will trigger the hook and run your `lint` script.

---

## Common Uses for Pre-Commit Hooks

- Linting code (`eslint`, `stylelint`)
- Running unit tests
- Formatting code with `prettier`
- Checking commit message format
- Preventing large files from being committed
- Type checking (`tsc`)

---

## Tips

- Always make sure your pre-commit scripts are fast. If they take too long, developers will disable them.
- Keep hooks in version control using tools like Husky or [lefthook](https://github.com/evilmartians/lefthook).
- Avoid modifying committed files in pre-commit hooks (e.g., formatting) — instead, do that in a `pre-push` or `prettier --write` script and stage them manually.

---

## Conclusion

Git pre-commit hooks are a great way to improve code quality and enforce consistency before code is committed. Whether you’re working solo or on a team, adding pre-commit hooks can help catch mistakes early and reduce tech debt.

By using tools like Husky, you can easily manage these hooks in your repo and make sure everyone on your team benefits from them.

Start small — add a linter or formatter hook, and build from there!

---

Happy committing! 🚀

```

```
