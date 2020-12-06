import { createGlobalStyle } from 'styled-components'
import resetti from '!!raw-loader!resetti/resetti.css'

console.log(resetti)

const CSSReset = createGlobalStyle`
  ${resetti}

  ul, ol {
    padding: 0;
    list-style-type: none;
  }
`

export default CSSReset
