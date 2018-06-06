import { Content, Wrapper } from 'components/Layout'
import styled, { ThemeProvider } from 'styled-components'

import Helmet from 'react-helmet'
import { Link } from 'components/Components'
import PropTypes from 'prop-types'
import React from 'react'
import Sidebar from 'components/Sidebar'
import { capitalize } from 'utils/js'
import { sizes } from 'utils/design'
import theme from 'utils/theme'
import svgxuse from 'svgxuse'

import fonts from '../fonts/fonts.css'

export default class TemplateWrapper extends React.Component {
  getLocalTitle() {
    const pathPrefix = '/'
    const currentPath = this.props.location.pathname
      .replace(pathPrefix, '')
      .replace('/', '')

    if (currentPath.length) {
      return capitalize(currentPath)
    }
  }

  render() {
    return (
      <ThemeProvider theme={theme}>
        <div>
          <Helmet
            titleTemplate="%s | Chase McCoy"
            defaultTitle="Chase McCoy"
            title={this.getLocalTitle()}
            meta={[
              {
                name: 'description',
                content:
                  'Chase McCoy is a design systems developer living in Chicago that spends a lot of time thinking about how the web works.'
              },
              {
                name: 'og:title',
                content: this.getLocalTitle() || 'Chase McCoy'
              },
              {
                name: 'og:description',
                content: 'Chase McCoy is a design systems developer living in Chicago that spends a lot of time thinking about how the web works.'
              },
              {
                name: 'image',
                content: 'http://chasem.co/meta/chase.jpg'
              },
              {
                name: 'twitter:site',
                content: '@chase_mccoy'
              },
              {
                name: 'twitter:card',
                content: 'summary'
              }
            ]}
          />

          <Wrapper>
            <Sidebar items={this.props.data.nav.edges} />

            <Content>{this.props.children()}</Content>
          </Wrapper>
        </div>
      </ThemeProvider>
    )
  }
}

export const query = graphql`
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
`
