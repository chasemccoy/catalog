import React from 'react'
import { ThemeProvider } from 'styled-components'
import theme from 'utils/theme'
import { CSSReset } from '@chasemccoy/kit'
import TypographyStyles from 'utils/typography'
import Metadata from 'components/Metadata'
import MDX from 'components/MDX'
import GlobalStyles from 'components/GlobalStyles'

const Layout = (props) => {
  return (
    <ThemeProvider theme={theme}>
      <MDX.Provider>
        <Metadata title={props.title} description={props.description} />

        <CSSReset />
        <TypographyStyles />
        <GlobalStyles />

        {props.children}
      </MDX.Provider>
    </ThemeProvider>
  )
}

export default Layout
