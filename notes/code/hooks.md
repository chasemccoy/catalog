---
title: React Hooks
tags: 
  - react
  - js
---

## useReducer

You can use `useReducer` to simulate the old `this.setState({})` API of class components. 

```jsx
const reducer = (state, newState) => ({
  ...state,
  ...newState
})

const Example = () => {
  const [state, setState] = useReducer(reducer, initialState)

  setState({
    thisKey: 'will be merged into state'
  })

  return <div />
}
```

This ideas was stolen from this article:

<Bookmark url='https://blog.logrocket.com/react-hooks-cheat-sheet-unlock-solutions-to-common-problems-af4caf699e70/' />

## useStaticQuery & useSiteMetadata

I really like [this idea of wrapping up common queries in a Gatsby site into custom hooks](https://blog.scottspence.me/gatsby-custom-react-hook-for-site-metadata) that can be used to access things like your site's metadata. 

