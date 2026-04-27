## 🧩 Recipe Note: Building a Chrome Extension Command System (MV3)

A practical blueprint for building a Chrome extension that runs commands, controls tabs, and executes browser APIs reliably.

---

# 1. Core Architecture (keep this stable)

Think in **3 layers only**:

### 🧠 1. UI Layer (Content Script)

- Renders UI (palette, overlay, input)
- Captures user interaction
- Sends commands upward

### ⚙️ 2. Orchestration Layer (Background Service Worker)

- Single source of truth for commands
- Receives messages
- Routes commands to handlers
- Accesses Chrome APIs (`tabs`, `bookmarks`, `scripting`)

### 🧪 3. Execution Layer (Handlers)

- `snippets.js`, `bookmarks.js`, etc.
- Pure functions that do work on a tab

---

# 2. Manifest Setup (MV3 essentials)

```json
{
  "manifest_version": 3,
  "background": {
    "service_worker": "background.js",
    "type": "module"
  },
  "permissions": ["tabs", "scripting", "bookmarks", "storage"],
  "host_permissions": ["<all_urls>"],
  "content_scripts": [
    {
      "matches": ["<all_urls>"],
      "js": ["content.js"]
    }
  ],
  "commands": {
    "open-palette": {
      "suggested_key": {
        "default": "Ctrl+Shift+K"
      }
    }
  }
}
```

---

# 3. Command Flow Pattern (critical)

Every command must follow this flow:

```
UI / Shortcut
    ↓
chrome.runtime.sendMessage
    ↓
background router
    ↓
tab resolution
    ↓
handler execution
```

---

# 4. Background Router (single entry point)

```js
chrome.runtime.onMessage.addListener((msg) => {
  if (msg.type !== 'RUN') return

  chrome.tabs.query({ active: true, lastFocusedWindow: true }, ([tab]) => {
    if (!tab?.id) return

    handleCommand(msg.command, tab)
  })
})
```

### Command router:

```js
function handleCommand(command, tab) {
  switch (command) {
    case 'open-palette':
      return chrome.tabs.sendMessage(tab.id, { type: 'OPEN_PALETTE' })

    case 'toggle-bookmark':
      return handleBookmark(tab)

    default:
      return handleSnippet(command, tab)
  }
}
```

---

# 5. Content Script (UI + input capture)

Key rules:

### ✔ Must NOT:

- import Node-style modules
- access Chrome tab APIs directly
- duplicate UI mounts

### ✔ Must:

- render UI once
- send messages upward
- prevent duplicate injection

```js
let paletteOpen = false

chrome.runtime.onMessage.addListener((msg) => {
  if (msg.type === 'OPEN_PALETTE') togglePalette()
})
```

---

# 6. Command Registration Model

Define commands as data:

```js
export const commands = [
  {
    id: 'run-snippet-1',
    title: 'Run Snippet 1',
  },
  {
    id: 'toggle-bookmark',
    title: 'Toggle Bookmark',
  },
]
```

UI just renders this list — no logic inside UI.

---

# 7. Chrome API Execution Rule

### ⚠️ IMPORTANT

All of this must happen in background:

- `chrome.tabs.*`
- `chrome.scripting.*`
- `chrome.bookmarks.*`

Never from content script.

---

# 8. The 3 most common bugs (you hit all of them)

## ❌ 1. Duplicate UI injection

Fix:

```js
if (window.__palette_loaded__) return
window.__palette_loaded__ = true
```

---

## ❌ 2. “No receiver” message

Cause:

- missing `sendResponse`
- or message ignored

Fix:

```js
return true
```

---

## ❌ 3. “Unserializable args”

Cause:

- passing functions / DOM / tab objects into `scripting.executeScript`

Fix:

- only pass primitives

```js
args: [String(url)]
```

---

# 9. Command Execution Rule (VERY IMPORTANT)

When using:

```js
chrome.scripting.executeScript
```

ONLY allow:

```js
args: [string, number, boolean]
```

NOT:

- tab objects
- functions
- DOM nodes

---

# 10. Mental Model (this is the real win)

Think of your extension as:

> a **mini OS command bus inside the browser**

- keyboard shortcut → command
- palette → command
- UI click → command
- everything becomes:

```txt
command string + active tab
```

---

# 11. Final Stable Pattern

If you do nothing else, keep this invariant:

### 🧱 ONE router

### 🧱 ONE message entry point

### 🧱 ONE tab resolver

### 🧱 MANY stateless handlers

---

# 🚀 Result of this architecture

You now get:

- VSCode-style command palette
- tab-aware automation
- reusable browser macros
- safe Chrome API access
- no UI duplication chaos

* Keyboard navigation.
