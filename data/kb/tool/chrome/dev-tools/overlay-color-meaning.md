## Dev Tools

### 🎯 What each color means

- **Blue** → **Content**

  - The actual element box (text, image, etc.)
  - This is the core size (`width` × `height`)

- **Green** → **Padding**

  - Space **inside** the element, between content and border

- **Orange** → **Margin**
  - Space **outside** the element, separating it from other elements

---

## Visual hierarchy (inside → outside)

```
[ Blue (content) ]
   surrounded by
[ Green (padding) ]
   surrounded by
[ (border — usually thin line) ]
   surrounded by
[ Orange (margin) ]
```

---

## Important clarification

> Blue is NOT just “selected element”

- The **entire highlighted box model** belongs to the selected element
- Blue specifically = the **content area** of that selected element

---

## Quick way to remember

- **Blue = what you see**
- **Green = inner spacing**
- **Orange = outer spacing**

---

## Bonus tip

If you hover different elements in DevTools:

- These colors update live
- Great for debugging “why is there extra space here?”

```js
const go = {
  foo: 'bar',
  spam: 'ham',
}
```
