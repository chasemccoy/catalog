import React from 'react'
import styled from 'styled-components'
const ReactMarkdown = require('react-markdown')
import { space } from 'styled-system'

class MarkdownComponent extends React.Component {
  render() {
    return <ReactMarkdown {...this.props} source={this.props.children} />
  }
}

const Markdown = styled(MarkdownComponent)`
  ${space}
`

export default Markdown
