---
title: Regex Recipes
---

**Regex to get URLs from the `src` attribute of an HTML `<img>` tag in a string**

```js
const srcRegex = /<img.*?src=['"](.*?)['"]/
const src = srcRegex.exec(string)[1]
  
// string = "<img src='http://link-to-image.com/image.png' />"
// src = "http://link-to-image.com/image.png"
```

**Test whether a URL is internal or not**

```js
const internal = /^\/(?!\/)/.test(url)
```