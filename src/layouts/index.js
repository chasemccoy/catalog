import React from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'
import styled from 'styled-components'

import {Link} from '../components/Components'
import {Wrapper, Content} from '../components/Layout'
import Sidebar from '../components/Sidebar'

const TemplateWrapper = ({ children }) => (
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
)

TemplateWrapper.propTypes = {
  children: PropTypes.func,
}

export default TemplateWrapper
