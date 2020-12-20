import React from 'react'
import Theme from './Theme'
import Global from './Global'
import Typography from './Typography'
import Utilities from './Utilities'
import CSSReset from './CSSReset'
import Article from './Article'
import Fonts from './Fonts'

const Styles = () => (
  <React.Fragment>
    <Fonts />
    <CSSReset />
    <Theme />
    <Typography />
    <Utilities />
    <Global />
    <Article />
  </React.Fragment>
)

export default Styles
