---
date: <% tp.date.now("YYYY-MM-DD") %>
tags: []
---

[[gratitude-journal|gratitude journal structure]]

# Journal

## Learnings

## Challenges

- Grateful:: <% tp.cursor() %>
  Grateful::
  Grateful::

- Affirmation::
  Affirmation::
  Affirmation::

- It'd be great if...:: ...
  It'd be great if...::
  It'd be great if...::

- Win:: ...
  Win::
  Win::

- Improvements::
  Improvements::
  Improvements::

#### Health

**Flexibility**
yoga:: 0
stretching:: 0

**Core**
situps:: 0
crunches:: 0
planks:: 0
planks:: 0
leg-raise:: 0

**Lower**
bridges:: 0
squats:: 0
crunches:: 0

**Upper**
pushups:: 0

---

<%\*
const year = tp.date.now("YY")
const month = tp.date.now("MM")
const day = tp.date.now("DD")

const path = `journal/${year}/${month}/${day}`

await tp.file.move(path)
%>
