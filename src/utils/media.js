import { css } from 'styled-components'
import { sizes } from './design'

// iterate through the sizes and create a media template
export const media = Object.keys(sizes.breakpoints).reduce((accumulator, label) => {
  // use em in breakpoints to work properly cross-browser and support users
  // changing their browsers font-size: https://zellwk.com/blog/media-query-units/
  accumulator[label] = (...args) => css`
    @media (max-width: ${sizes.breakpoints[label]}) {
      ${css(...args)}
    }
  `
  return accumulator
}, {})
