import React from 'react'
import { preToCodeBlock } from 'mdx-utils'
import HighlightedCode from './HighlightedCode'
// import CodeSandbox from 'components/racine/CodeSandbox'

const Pre = preProps => {
  const props = preToCodeBlock(preProps)
  
  if (props) {
    if (props.live) {
      // return (
      //   <CodeSandbox 
      //     inline={props.stateful ? false : true} 
      //     static={props.static ? true : false}
      //   >
      //     {props.codeString}
      //   </CodeSandbox>
      // )
    }

    return <HighlightedCode {...props} />
  }

  return <pre {...preProps} />
}

export default Pre