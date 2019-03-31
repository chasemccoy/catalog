import { createGlobalStyle } from 'styled-components'

const SyntaxTheme = createGlobalStyle`
  code[class*='language-'],
  pre[class*='language-'] {
    text-align: left;
    white-space: pre;
    word-spacing: normal;
    word-break: normal;
    word-wrap: normal;
    -moz-tab-size: 2;
    -o-tab-size: 2;
    tab-size: 2;
    -webkit-hyphens: none;
    -moz-hyphens: none;
    -ms-hyphens: none;
    hyphens: none;
  }

  .token.tag {
    color: #fa7692;
  }

  .token.important,
  .token.atrule,
  .token.keyword {
    color: #c3a2ff;
  }

  .token.comment,
  .token.prolog,
  .token.doctype,
  .token.cdata {
    color: #7f96cf;
  }

  .token.attr-name {
    color: #c3a2ff;
  }

  .token.selector {
    color: #ffc777;
  }

  .token.constant,
  .token.unit {
    color: #ff959c;
  }

  .token.punctuation {
    color: #9fc8ff;
  }
  
  .token.tag .token.punctuation,
  .token.operator,
  .token.op,
  .token.module {
    color: #89DDFF;
  }

  .token.nil {
    color: #9b9fb0;
  }

  .token.arrow {
    color: #c49dff;
  }

  .token.parameter {
    color: #fface4;
  }

  .token.flow {
    color: #89DDFF;
    font-style: italic;
  }

  .token.spread {
    font-weight: bold;
    color: #ff7e99;
    text-shadow: 0px 1px 6px;
  }

  .namespace {
    opacity: 0.7;
  }

  .token.number,
  .token.boolean,
  .token.symbol,
  .token.deleted {
    color: #ff9d74;
  }

  .token.string,
  .token.value,
  .language-css .token.string,
  .token.url,
  .token.attr-value,
  .token.char,
  .token.builtin,
  .token.inserted {
    color: #C3E88D;
  }

  .token.punctuation.quote {
    color: #89DDFF;
  }

  .token.entity,
  .style .token.string {
    color: #ecd6ba;
    text-shadow: 0 1px 3px transparentize(#ecd6ba, 0.5);
  }

  .token.function,
  .token.property {
    color: #82AAFF;
  }

  .token.method,
  .language-css .token.function {
    color: #25c8e5;
  }

  .token.variable {
    color: #ffad92;
  }

  .token.dom,
  .token.class-name {
    color: #ffc777;
  }

  .token.property.definition {
    color: #77e0c6;
  }

  .token.property.access {
    color: #89DDFF;
  }

  .token.regex {
    color: #88ecff;
  }

  .token.bold {
    font-weight: bold;
  }
  .token.italic {
    font-style: italic;
  }

  .token.entity {
    cursor: help;
  }

  .token.attr-value {
    color: rgb(195, 232, 141);
  }

  .token.punctuation {
    color: rgb(137, 221, 255);
  }
`

export default SyntaxTheme
