import React from 'react'
import styled from 'styled-components'
import Highlight, { Prism } from 'prism-react-renderer'
import theme from 'prism-react-renderer/themes/github'

const PreWithLineNumbers = styled.pre`
  position: relative;
  padding-left: 42px;
  padding-right: 12px;

  span.lang:not(:empty) {
    position: absolute;
    top: 0;
    right: 0;
    color: var(--color-gray--500);
    background: var(--color-gray--100);
    border-radius: 0 0 4px 4px;
    padding: 2px 8px;
    font-size: 0.8em;
  }

  &:before {
    content: '1 2 3 4 5 6 7 8 9 10 11 12 13 14 15 16 17 18 19 20 21 22 23 24 25 26 27 28 29 30 31 32 33 34 35 36 37 38 39 40 41 42 43 44 45 46 47 48 49 50 51 52 53 54 55 56 57 58 59 60 61 62 63 64 65 66 67 68 69 70 71 72 73 74 75 76 77 78 79 80 81 82 83 84 85 86 87 88 89 90 91 92 93 94 95 96 97 98 99 100 101 102 103 104 105 106 107 108 109 110 111 112 113 114 115 116 117 118 119 120 121 122 123 124 125 126 127 128 129 130 131 132 133 134 135 136 137 138 139 140 141 142 143 144 145 146 147 148 149 150 151 152 153 154 155 156 157 158 159 160 161 162 163 164 165 166 167 168 169 170 171 172 173 174 175 176 177 178 179 180 181 182 183 184 185 186 187 188 189 190 191 192 193 194 195 196 197 198 199 199 200';
    width: 34px;
    position: absolute;
    top: 12px;
    left: 0px;
    bottom: 12px;
    color: var(--color-gray--500);
    opacity: 0.5;
    white-space: pre-line;
    overflow: hidden;
    text-align: right;
    font-family: var(--font-code);
    font-size: 0.75em;
    line-height: var(--root-line-height);
    padding-right: 12px;
  }
`

const HighlightedCode = ({ codeString, language, ...props }) => {
  return (
    <Highlight
      Prism={Prism}
      code={codeString}
      language={language}
      theme={theme}
    >
      {({ className, style, tokens, getLineProps, getTokenProps }) => (
        <PreWithLineNumbers className={className}>
          <span className='lang'>{language}</span>
          <code className={`language-${language}`}>
            {tokens.map((line, i) => (
              <div {...getLineProps({ line, key: i })}>
                {line.map((token, key) => (
                  <span {...getTokenProps({ token, key })} />
                ))}
              </div>
            ))}
          </code>
        </PreWithLineNumbers>
      )}
    </Highlight>
  )
}

export default HighlightedCode
