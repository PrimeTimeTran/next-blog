#!/usr/bin/env bash

set -e

SRC="/Users/future/Documents/KB"
DEST="/Users/future/Documents/work/blog/data/kb"

echo "🔄 Syncing KB from $SRC → $DEST"

# ensure destination exists
mkdir -p "$DEST"

# folders to sync
FOLDERS=(
  "atom"
  "hub"
  "pattern"
  "recipe"
  "reference"
  "tool"
)

# optional: clean destination first (prevents stale files)
echo "🧹 Cleaning destination..."
rm -rf "$DEST"/*

# copy each folder
for folder in "${FOLDERS[@]}"; do
  echo "📦 Copying $folder"

  cp -R "$SRC/$folder" "$DEST/"
done

echo "✅ KB sync complete"
