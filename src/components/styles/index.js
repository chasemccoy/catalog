import { memo } from 'react'
import { createGlobalStyle } from 'styled-components'
import theme from './Theme'
import global from './Global'
import typography from './Typography'
import utilities from './Utilities'
import cssReset from './CSSReset'
import article from './Article'
import fonts from './Fonts'

const Styles = memo(createGlobalStyle`
  ${fonts}
  ${cssReset}
  ${theme}
  ${typography}
  ${utilities}
  ${global}
  ${article}
`)

export default Styles
