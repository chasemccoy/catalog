import styled, { ThemeProvider } from 'styled-components'
import { Wrapper, Content } from 'components/Layout'
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
  front = () => this.props.location.pathname === '/'

  render() {
    return (
      <ThemeProvider theme={theme}>
        {this.front() ? (
          this.props.children()
        ) : (
          <Wrapper>
            <Sidebar items={this.props.data.nav.edges} />

            <Content>{this.props.children()}</Content>
          </Wrapper>
        )}
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
