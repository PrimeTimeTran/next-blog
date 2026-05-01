---
draft: false
slug: preview/theme1
date: '2026-04-30'
title: 'Preview: Theme 1'
summary: ''
tags: ['KB/MD/Obsidian/Blog']
---

# Markdown/Obsidian/MDX Previewer

Preview changes to output fo Markdown, Obsidian, MDX quick and easy from this file.

> View the results of new themes on Obsidian across all .md/page elements.

## WIP

Quickly see results at the top of the file

### Markdown Links

Markdown format links

- Internal links
- Same Note
  - [[#Heading 3.1]]
    - [[#Heading 3.2]]
      - [[#Heading 3.2.1]]
        - [[#Heading 3.2.1.1]]
          - [[#Heading 3.2.1.1.1]]
          - [[#Heading 3.2.1.1.2]]
      - [[#Heading 3.2.2]]
- External(Note) Links
  - [[theme2.md]]
    - theme2.md
  - [[Theme2.md]]
    - Capitalized filename link.
  - [[theme2.md#Markdown Elements|Another Note]]
    - Another page section link aliased.
  - [[theme2#Heading 2|theme2 > Heading 2]]
  - [[theme2#Heading 3.1|theme2 > Heading 2 > Heading 2.3.1]]
    - "Nested Heading"
  - [[theme2#Heading 2#Heading 3.1|theme2 > Heading 2 > Heading 2.3.1]]
    - "Heading Hierarchy"
  - [[tool/obsidian/preview/theme2.md]]
    - Path link.
  - [[tool/obsidian/preview/theme2.md|Latex Preview]]
    - Path link aliased.
- External(Web) Links
  - Link to URL: [OpenAI](https://openai.com)
  - Link with titles: [Wikipedia](https://wikipedia.org 'Free encyclopedia')
  - Reference link: [Google][2]

### Obsidian Links

Obsidian format links

## Heading 2

> Heading # nests titles in outline(right sidebar)

### Heading 3.1

> Heading 3.1 and 3.2 are siblings/children of 2.
> In other words, heading 2 has two children

#### Heading 4

##### Heading 5

###### Heading 6

### Heading 3.2

#### Heading 3.2.1

##### Heading 3.2.1.1

###### Heading 3.2.1.1.1

###### Heading 3.2.1.1.2

##### Heading 3.2.2.2

#### Heading 3.2.2

## Markdown Elements

### Lists

#### Ordered/Numbered

1. text emphasis
   - italic
   - bold
   - strikethrough
2. block quotes
3. code
4. css
5. reference links to sources^[https://www.markdownguide.org/basic-syntax/#code]

#### Unordered

- ideas
- concepts
- thoughts

### Emphasis

This line has an _italic_.
This line has a **bold**.
This line has an ~~strikethrough~~.

### Block Quote

#### Single

> "If it was easy everyone would do it."

> "If it was easy everyone would do it."
>
> - unknown

#### Nested

> Then why aren't you doing it?
>
> > "If it was easy everyone would do it."

#### With Elements

> #### The quarterly results look great!
>
> - Revenue was off the chart.
> - Profits were higher than ever.
>
>   _Everything_ is going according to **plan**.

### Code

```html
<html>
  <head> </head>
</html>
```

### CSS

- PNG to clipboard
- Export from Excalidraw
- Saved to vault
- Background color transparent
- Save these settings for a preset
- Have to rename after every save

### Callouts

> [!note]- Note Callout
>
> ```js
> function helloWorld() {
>   console.log('hi')
> }
> ```

> [!info]- Info Callout
>
> - Bullet 1
> - Bullet 2
> - Bullet 3

> [!tip]- Tip Callout
>
> 1. Bullet 1
> 2. Bullet 2
> 3. Bullet 3

> [!success]- Success Callout
> ![[theme2.md]]

> [!question]- Question Callout
> ![[theme1.md]]

> [!warning]- Warning Callout
> ![[latex.md]]

> [!failure]- Failure Callout
> ![[latex.md]]

> [!danger]- Danger Callout
> ![[latex.md]]

> [!bug]- Bug Callout
> ![[latex.md]]

> [!example]- Example Callout
> ![[latex.md]]

> [!quote]- Quote Callout
> ![[latex.md]]

# Reference

[^1]: https://www.markdownguide.org/basic-syntax/#code

[2]: https://google.com
