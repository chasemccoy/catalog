import { css } from 'styled-components'
import theme from 'utils/theme'

// iterate through the sizes and create a media template
export const media = Object.keys(theme.namedBreakpoints).reduce(
  (accumulator, label) => {
    accumulator[label] = (...args) => css`
      @media (max-width: ${theme.namedBreakpoints[label]}) {
        ${css(...args)};
      }
    `
    return accumulator
  },
  {}
)

const large = media.large`
  background: red;
`
const medium = media.medium`
  background: green;
`
const small = media.small`
  background: blue;
`
const tiny = media.tiny`
  background: yellow;
`

console.log({large});
console.log({medium});
console.log({small});
console.log({tiny});

export default media

// Use it like this:
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
