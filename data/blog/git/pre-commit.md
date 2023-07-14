---
title: Run hooks
date: 2023-06-26
tags: ['Git']
draft: true
summary: ''
bibliography: references-data.bib
canonicalUrl:
---

## Precommit

Update
./.git/hooks/pre-commit

Install pre-commit
brew install pre-commit

Configure pre-commit per project
pre-commit install

git config --unset-all core.hooksPath

Define .pre-commit-config.yaml

Insert the following

https://github.com/pre-commit/pre-commit/blob/main/.pre-commit-config.yaml

```yml
repos:
  - repo: https://github.com/pre-commit/pre-commit-hooks
    rev: v4.4.0
    hooks:
      - id: trailing-whitespace
      - id: end-of-file-fixer
      - id: check-yaml
      - id: debug-statements
      - id: double-quote-string-fixer
      - id: name-tests-test
      - id: requirements-txt-fixer
```

Check if they've run

.git/hooks/pre-commit

If they do, you'll see ouput

Add your own script to

```
.git/hooks/pre-commit
```

```bash
echo "Running tests"

output=$(flutter test)
echo "$output"

if [[ $output == *"All tests passed!"* ]]; then
    echo "Tests passed successfully"
fi

echo "Running code analysis"

output=$(flutter analyze)
echo "$output"

if [[ $output == *"No issues found!"* ]]; then
    echo "Code analysis successful"
fi
```
