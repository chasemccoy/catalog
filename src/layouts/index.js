import React from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'
import styled, {ThemeProvider} from 'styled-components'
import { sizes } from '../utils/design'

import {Link} from '../components/Components'
import {Wrapper, Content} from '../components/Layout'
import Sidebar from '../components/Sidebar'

const TemplateWrapper = ({ children }) => (
  <ThemeProvider
    theme={{
      breakpoints: [
        sizes.breakpoints.small,
        sizes.breakpoints.medium,
        sizes.breakpoints.large
      ]
    }}
  >
    <div>
      <Helmet
        title="Chase McCoy"
        meta={[
          { name: 'description', content: 'Sample' },
          { name: 'keywords', content: 'sample, something' },
        ]}
      />

      <Wrapper>
        <Sidebar />

        <Content>
          {children()}
        </Content>
      </Wrapper>
    </div>
  </ThemeProvider>
)

TemplateWrapper.propTypes = {
  children: PropTypes.func,
}

export default TemplateWrapper
