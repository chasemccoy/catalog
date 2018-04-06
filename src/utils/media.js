import { css } from 'styled-components'
import { sizes } from 'utils/design'

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


// Use it like this, dummy:
//
// ${media.large`background-size: auto 75%;`}
// ${media.medium`background-size: auto 50%;`}
// ${media.small`background-size: auto 25%;`}
// ${media.tiny`background-size: auto 10%;`}
//
// If screen is `large` or smaller, do this
// If screen is `medium` or smaller, do this
// If screen is `small` or smaller, do this
// If screen is `tiny` or smaller, do this
