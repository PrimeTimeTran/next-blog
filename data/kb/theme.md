# Markdown/Obsidian/MDX Previewer

Preview changes to output fo Markdown, Obsidian, MDX quick and easy from this file.

> View the results of new themes on Obsidian across all .md/page elements.

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
> ![[latex.md]]

> [!info]- Info Callout
> ![[latex.md]]

> [!tip]- Tip Callout
> ![[latex.md]]

> [!success]- Success Callout
> ![[latex.md]]

> [!question]- Question Callout
> ![[latex.md]]

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

### Markdown Links

Markdown format links

- [Go to Heading 2](#heading-2)
- [Go to section](#pagemarkdown-elements)
- Link to URL: [OpenAI](https://openai.com)
- Link with titles: [Wikipedia](https://wikipedia.org 'Free encyclopedia')
- Reference link: [Google][2]

### Obsidian Links

Obsidian format links

- [[#Markdown Elements]]
  - Same page section link
- [[#Markdown Elements|Go to section]]
  - Same page section link aliased.
- [[theme2.md#Page/Markdown Elements|Go to another note with section & Display Text]]
  - Another page section link aliased.
- [[latex.md]]
  - Filename link.
- [[Latex.md]]
  - Capitalized filename link.
- [[tool/obsidian/preview/latex.md]]
  - Path link.
- [[tool/obsidian/preview/latex.md|Latex Preview]]
  - Path link aliased.
- ![[latex.md]]
  - Embed note link(preview of another note/page)
-

# Reference

[^1]: https://www.markdownguide.org/basic-syntax/#code

[2]: https://google.com
