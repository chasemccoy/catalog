import React from 'react'
import HighlightedCode from 'components/HighlightedCode'

const preToCodeBlock = preProps => {
  if (
    // children is code element
    preProps.children &&
    // code props
    preProps.children.props &&
    // if children is actually a <code>
    preProps.children.props.mdxType === "code"
  ) {
    // we have a <pre><code> situation
    const {
      children: codeString,
      className = "",
      ...props
    } = preProps.children.props

    const match = className.match(/language-([\0-\uFFFF]*)/)

    return {
      codeString: codeString.trim(),
      className,
      language: match != null ? match[1] : "",
      ...props
    }
  }

  return undefined
};


const Pre = preProps => {
  const props = preToCodeBlock(preProps)

  if (props) {
    return <HighlightedCode {...props} />
  }

  return <pre {...preProps} />
}

export default Pre
