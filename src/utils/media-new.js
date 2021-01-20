import { css } from 'styled-components'
import theme from 'utils/theme'

// iterate through the sizes and create a media template
export const media = Object.keys(theme.namedBreakpoints).reduce(
  (accumulator, label) => {
    accumulator[label] = (...args) => css`
      @media (min-width: ${theme.namedBreakpoints[label]}) {
        ${css(...args)}
      }
    `
    return accumulator
  },
  {}
)

export default media

// Use it like this:
//
// ${media.large`background-size: auto 75%;`}
// ${media.medium`background-size: auto 50%;`}
// ${media.small`background-size: auto 25%;`}
// ${media.tiny`background-size: auto 10%;`}
//
// If screen is `large` or larger, do this
// If screen is `medium` or larger, do this
// If screen is `small` or larger, do this
// If screen is `tiny` or larger, do this
