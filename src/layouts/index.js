import React from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'
import styled, {ThemeProvider} from 'styled-components'
import { sizes } from '../utils/design'

import {Link} from '../components/Components'
import {Wrapper, Content} from '../components/Layout'
import Sidebar from '../components/Sidebar'

export default class TemplateWrapper extends React.Component {
  getLocalTitle() {
    function capitalize(string) {
      return string.charAt(0).toUpperCase() + string.slice(1);
    }

    const pathPrefix = "/";
    const currentPath = this.props.location.pathname
      .replace(pathPrefix, "")
      .replace("/", "");

    if (currentPath.length) {
      return "Chase McCoy | " + capitalize(currentPath);
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
              { name: 'description', content: 'Sample' },
              { name: 'keywords', content: 'sample, something' },
            ]}
          />

          <Wrapper>
            <Sidebar />

            <Content>
              {this.props.children()}
            </Content>
          </Wrapper>
        </div>
      </ThemeProvider>
    )
  }
}
