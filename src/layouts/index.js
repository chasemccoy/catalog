import { Content, Wrapper } from 'components/Layout'
import { ThemeProvider } from 'styled-components'
import Helmet from 'react-helmet'
import React from 'react'
import Sidebar from 'components/Sidebar'
import theme from 'utils/theme'
import { StaticQuery, graphql } from "gatsby"

// eslint-disable-next-line
import svgxuse from 'svgxuse'
// eslint-disable-next-line
import fonts from '../fonts/fonts.css'

const Layout = props => (
  <StaticQuery
    query={graphql`
      query NavigationQuery {
        nav: allNavigationHJson {
          edges {
            node {
              title
              icon
              url
            }
          }
        }
      }
    `}
    render={data => (
      <ThemeProvider theme={theme}>
        <div>
          <Helmet
            titleTemplate="%s | Chase McCoy"
            defaultTitle="Chase McCoy"
          >
            <meta name="description" content="Chase McCoy is a design systems developer living in Chicago that spends a lot of time thinking about how the web works." />
            <meta name="og:title" content="Chase McCoy" />
            <meta name="og:description" content="Chase McCoy is a design systems developer living in Chicago that spends a lot of time thinking about how the web works." />
            <meta name="image" content="http://chasem.co/meta/chase.jpg" />
            <meta name="twitter:site" content="@chase_mccoy" />
            <meta name="twitter:card" content="summary" />
          </Helmet>

          <Wrapper>
            <Sidebar items={data.nav.edges} />

            <Content>{props.children}</Content>
          </Wrapper>
        </div>
      </ThemeProvider>
    )}
  />
)

export default Layout
