import React from 'react'
import { ThemeProvider } from 'styled-components'
import theme from 'utils/theme'
import Metadata from 'components/Metadata'
import MDX from 'components/MDX'
import HCard from 'components/hCard'
import Styles from 'components/styles'

const Layout = (props) => {
  return (
    <ThemeProvider theme={theme}>
      <MDX.Provider>
        <Metadata title={props.title} description={props.description} />

        <Styles />

        {props.children}

        <HCard />
      </MDX.Provider>
    </ThemeProvider>
  )
}

export default Layout
