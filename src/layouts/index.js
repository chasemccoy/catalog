import {Content, Wrapper} from 'components/Layout'
import styled, {ThemeProvider} from 'styled-components'

import Helmet from 'react-helmet'
import {Link} from 'components/Components'
import PropTypes from 'prop-types'
import React from 'react'
import Sidebar from 'components/Sidebar'
import { capitalize } from 'utils/js'
import { sizes } from 'utils/design'

export default class TemplateWrapper extends React.Component {
  getLocalTitle() {
    const pathPrefix = "/";
    const currentPath = this.props.location.pathname
      .replace(pathPrefix, "")
      .replace("/", "");

    if (currentPath.length) {
      return capitalize(currentPath) + " | Chase McCoy";
    }
  }

  render() {
    return (
      <ThemeProvider
        theme={{
          breakpoints: [
            sizes.breakpoints.tiny,
            sizes.breakpoints.small,
            sizes.breakpoints.medium,
            sizes.breakpoints.large
          ]
        }}
      >
        <div>
          <Helmet
            title={this.getLocalTitle() || "Chase McCoy"}
            meta={[
              {
                name: 'description',
                content: 'Chase McCoy is a design developer living in Chicago that spends a lot of time thinking about how the web works.'
              },
              {
                name: 'image',
                content: 'http://chasem.co/meta/chase.jpg'
              }
            ]}
          />

          <Wrapper>
            <Sidebar items={this.props.data.nav.edges} />

            <Content>
              {this.props.children()}
            </Content>
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
