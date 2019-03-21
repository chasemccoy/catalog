import React from 'react'
import Highlight, { Prism } from 'prism-react-renderer'

const HighlightedCode = ({ codeString, language, ...props }) => {
  return (
    <Highlight Prism={Prism} code={codeString} language={language}>
      {({ className, style, tokens, getLineProps, getTokenProps }) => (
        <pre className={className} style={style}>
          <code className={`language-${language}`}>
            {tokens.map((line, i) => (
              <div {...getLineProps({ line, key: i })}>
                {line.map((token, key) => (
                  <span {...getTokenProps({ token, key })} />
                ))}
              </div>
            ))}
          </code>
        </pre>
      )}
    </Highlight>
  )
}

export default HighlightedCode