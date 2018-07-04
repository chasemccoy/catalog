import React from 'react'
import { ThemeProvider } from 'styled-components'
import Helmet from 'react-helmet'
import theme from 'utils/theme'

const Layout = props => (
  <ThemeProvider theme={theme}>
    <>
      <Helmet
        titleTemplate="%s | Chase McCoy"
        defaultTitle="Chase McCoy"
      >
        <body className={`${props.dark ? 'dark' : 'light'}`} />
        <meta name="description" content="Chase McCoy is a design systems developer living in Chicago that spends a lot of time thinking about how the web works." />
        <meta name="og:title" content="Chase McCoy" />
        <meta name="og:description" content="Chase McCoy is a design systems developer living in Chicago that spends a lot of time thinking about how the web works." />
        <meta name="image" content="http://chasem.co/meta/chase.jpg" />
        <meta name="twitter:site" content="@chase_mccoy" />
        <meta name="twitter:card" content="summary" />
      </Helmet>

      {props.children}
    </>
  </ThemeProvider>
)

export default Layout
