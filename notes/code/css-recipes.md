---
title: CSS Recipes
tags: 
  - css
  - webdev
  - howto
---

## Accordions

Use the `<details>` element: https://css-tricks.com/quick-reminder-that-details-summary-is-the-easiest-way-ever-to-make-an-accordion/


## Dropdown menus

Here's how to make them simply and accessibly, with no JavaScript, using the `:focus-within` pseudo selector: https://css-tricks.com/solved-with-css-dropdown-menus

You can also use the `<details>` element: https://css-tricks.com/using-details-for-menus-and-dialogs-is-an-interesting-idea/ Read more about this on [the `<details>` page](/notes/code/details-element)

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