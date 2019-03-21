import { createGlobalStyle } from 'styled-components'

const SyntaxTheme = createGlobalStyle`
  code[class*="language-"] {
    font-size: 0.9em;
  }

  code[class*="language-"],
  pre[class*="language-"] {
    color: #ABB2BF;
    background: none;
    text-align: left;
    white-space: pre;
    word-spacing: normal;
    word-break: normal;
    word-wrap: normal;
    tab-size: 4;
    hyphens: none;
  }
  
  pre[class*="language-"]::-moz-selection, pre[class*="language-"] ::-moz-selection,
  code[class*="language-"]::-moz-selection, code[class*="language-"] ::-moz-selection {
    text-shadow: none;
    background: #383e49;
  }
  
  pre[class*="language-"]::selection, pre[class*="language-"] ::selection,
  code[class*="language-"]::selection, code[class*="language-"] ::selection {
    text-shadow: none;
    background: #9aa2b1;
  }
  
  @media print {
    code[class*="language-"],
    pre[class*="language-"] {
      text-shadow: none;
    }
  }

  :not(pre) > code[class*="language-"],
  pre[class*="language-"] {
    background: #2A2A2A;
  }

  
  .token.comment,
  .token.prolog,
  .token.doctype,
  .token.cdata {
    color: #5C6370;
  }
  
  .token.punctuation {
    color: #abb2bf;
  }
  
  .token.selector,
  .token.tag {
    color: #e06c75;
  }
  
  .token.property,
  .token.boolean,
  .token.number,
  .token.constant,
  .token.symbol,
  .token.attr-name,
  .token.deleted {
    color: #d19a66;
  }
  
  .token.string,
  .token.char,
  .token.attr-value,
  .token.builtin,
  .token.inserted {
    color: #98c379;
  }
  
  .token.operator,
  .token.entity,
  .token.url,
  .language-css .token.string,
  .style .token.string {
    color: #56b6c2;
  }
  
  .token.atrule,
  .token.keyword {
    color: #c678dd;
  }
  
  .token.function {
    color: #61afef;
  }
  
  .token.regex,
  .token.important,
  .token.variable {
    color: #c678dd;
  }
  
  .token.important,
  .token.bold {
    font-weight: bold;
  }
  
  .token.italic {
    font-style: italic;
  }
  
  .token.entity {
    cursor: help;
  }
  
  pre.line-numbers {
    position: relative;
    padding-left: 3.8em;
    counter-reset: linenumber;
  }
  
  pre.line-numbers > code {
    position: relative;
  }
  
  .line-numbers .line-numbers-rows {
    position: absolute;
    pointer-events: none;
    top: 0;
    font-size: 100%;
    left: -3.8em;
    width: 3em;
    letter-spacing: -1px;
    border-right: 0;
    user-select: none;
  
  }
  
  .line-numbers-rows > span {
    pointer-events: none;
    display: block;
    counter-increment: linenumber;
  }
  
  .line-numbers-rows > span:before {
    content: counter(linenumber);
    color: #5C6370;
    display: block;
    padding-right: 0.8em;
    text-align: right;
  }
`

export default SyntaxTheme
