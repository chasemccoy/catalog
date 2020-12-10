import React from 'react'
import Global from './Global'
import Typography from './Typography'
import Utilities from './Utilities'
import CSSReset from './CSSReset'
import Article from './Article'

const Styles = () => (
  <React.Fragment>
    <CSSReset />
    <Typography />
    <Utilities />
    <Global />
    <Article />
  </React.Fragment>
)

export default Styles
