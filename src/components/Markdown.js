import React from 'react'
const ReactMarkdown = require('react-markdown')

class Markdown extends React.Component {
  render() {
    return <ReactMarkdown {...this.props} source={this.props.children} />
  }
}

export default Markdown
