---
title: Javascript Objects
tags:
  - js
  - webdev
---

## Default values

If you wanna have values with variants in an object you usually do this, which is annoying:

```js
color: {
  default: 'gray',
  light: 'lightGray',
  dark: 'darkGray'
}
```

Instead, do this:

```js
color: Object.assign('gray', {
  light: 'lightGray',
  dark: 'darkGray'
})
```

Now you can access the default value with `color` instead of `color.default`. [Thanks to Max Stoiber for this tip](https://twitter.com/mxstbr/status/998975061636866048).