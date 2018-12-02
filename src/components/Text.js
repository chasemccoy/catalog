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
  textAlign,
  width,
  display
} from 'styled-system'

const Text = styled.div`
  ${space}
  ${color}
  ${fontSize}
  ${fontWeight}
  ${fontFamily}
  ${lineHeight}
  ${borders}
  ${borderColor}
  ${textAlign}
  ${width}
  ${maxWidth}
  ${display}

  ${p =>p.uppercase && `
    text-transform: uppercase;
    letter-spacing: 1px;
  `}
`

Text.p = Text.withComponent('p')
Text.span = Text.withComponent('span')

export default Text
