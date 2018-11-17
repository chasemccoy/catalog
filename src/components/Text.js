import styled from 'styled-components'
import {
  space,
  color,
  fontSize,
  fontWeight,
  lineHeight,
  fontFamily,
  maxWidth,
  borders,
  borderColor,
} from 'styled-system'

const Text = styled.div`
  ${space}
  ${color}
  ${fontSize}
  ${fontWeight}
  ${lineHeight}
  ${fontFamily}
  ${maxWidth}
  ${borders}
  ${borderColor}

  ${p => p.uppercase && `
    text-transform: uppercase;
    letter-spacing: 0.1em;
  `}
`

Text.p = Text.withComponent('p')
Text.span = Text.withComponent('span')

export default Text
