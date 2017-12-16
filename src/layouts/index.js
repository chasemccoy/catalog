import React from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'
import styled, {ThemeProvider} from 'styled-components'
import { sizes } from '../utils/design'
import { capitalize } from '../utils/js'

import {Link} from '../components/Components'
import {Wrapper, Content} from '../components/Layout'
import Sidebar from '../components/Sidebar'

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
                name: 'keywords',
                content: 'sample, something'
              },
            ]}
          />

          <Wrapper>
            <Sidebar items={this.props.data.allNavigationJson.edges} />

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
    allNavigationJson {
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
