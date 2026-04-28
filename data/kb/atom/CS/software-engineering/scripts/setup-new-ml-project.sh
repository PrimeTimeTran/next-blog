#!/bin/bash

echo "Setup new ML project"

mkdir src
mkdir docs
mkdir notes
mkdir notebooks
touch main.py
touch README.md
touch README-SETUP.md
touch .gitignore
echo "notes" > .gitignore
echo "__pycache__" >> .gitignore

git init 
git add .