---
title: Javascript Objects
---

## Default values

If you wanna have values with variants in an object you usually do this, which is annoying:

```js
color: {
  default: '#FC625D',
  light: '#FFBAB8',
  dark: '#B34642'
}
```

Instead, do this:

```js
color: Object.assign('#FC625D', {
  light: '#FFBAB8',
  dark: '#B34642'
})
```

Now you can access the default value with `color` instead of `color.default`. [Thanks to Max Stoiber for this tip](https://twitter.com/mxstbr/status/998975061636866048).
