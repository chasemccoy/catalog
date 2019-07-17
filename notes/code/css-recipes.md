---
title: CSS Recipes
tags: 
  - css
  - webdev
  - howto
---

## Accordions

Use the `<details>` element

<Bookmark url='https://css-tricks.com/quick-reminder-that-details-summary-is-the-easiest-way-ever-to-make-an-accordion/' />


## Dropdown menus

Here's how to make them simply and accessibly, with no JavaScript, using the `:focus-within` pseudo selector:

<Bookmark url='https://css-tricks.com/solved-with-css-dropdown-menus' />

You can also use the `<details>` element:

<Bookmark url='https://css-tricks.com/using-details-for-menus-and-dialogs-is-an-interesting-idea/' />

Read more about this on [the `<details>` page](/notes/details-element).

## Horizontal scrolling sections

Thanks to [this tweet from Cassie Evans](https://twitter.com/cassiecodes/status/1094984738480316416).

```css
.container {
  width: 100vw;
  display: flex;
  flex-wrap: nowrap;
  overflow-x: auto;
}
  
.item {
  flex: 0 0 auto;
}
```

## Responsive tiled layout with CSS Grid and no media queries

This is great for making grid layouts of even-sized tiles where each tile never gets narrower than the specified min-width. Stolen from [this tweet by @thekitze](https://twitter.com/thekitze/status/1131821007629692929).

```js
const autoGrid = (minColumnWidth = 250, gap = 0) => css`
 display: grid;
 grid-template-columns: repeat(auto-fill, minmax(${minColumnWidth}px, 1fr));
 grid-gap: ${gap};
`
```