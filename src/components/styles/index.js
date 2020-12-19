import React from 'react'
import Theme from './Theme'
import Global from './Global'
import Typography from './Typography'
import Utilities from './Utilities'
import CSSReset from './CSSReset'
import Article from './Article'

const Styles = () => (
  <React.Fragment>
    <CSSReset />
    <Theme />
    <Typography />
    <Utilities />
    <Global />
    <Article />
  </React.Fragment>
)

export default Styles
