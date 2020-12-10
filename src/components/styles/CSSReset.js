import { createGlobalStyle } from 'styled-components'

const CSSReset = createGlobalStyle`
  body,
  h1,
  h2,
  h3,
  h4,
  h5,
  h6,
  p,
  blockquote,
  code,
  pre,
  ol,
  ul,
  li,
  dl,
  dt,
  dd,
  img,
  figure,
  figcaption,
  audio,
  video,
  canvas,
  iframe,
  details,
  summary,
  fieldset,
  form,
  label,
  legend,
  table,
  caption,
  tbody,
  tfoot,
  thead,
  tr,
  th,
  td {
    margin: 0;
  }

  html {
    font-size: var(--root-font-size);
    line-height: 1.5;
    scroll-behavior: smooth;
  }

  *,
  ::before,
  ::after {
    box-sizing: border-box;
  }

  /* Elements
    * *********************************** */
  h1, h2, h3, h4, h5, h6 { 
    font-size: 1em; 
  }

  ul, ol {
    padding: 0;
    list-style-type: none;
  }

  abbr[title] {
    text-decoration: underline;
    text-decoration: underline dotted;
    cursor: help;
    border-bottom: 0;
  }

  hr {
    border-style: solid;
    border-width: 1px 0 0;
    color: inherit;
    height: 0;
    overflow: visible;
  }

  img,
  svg,
  video,
  canvas,
  audio,
  iframe,
  embed,
  object {
    display: block;
    vertical-align: middle;
    max-width: 100%;
  }

  img,
  svg,
  video,
  canvas {
    height: auto;
  }

  summary {
    display: list-item;
    cursor: pointer;
  }

  table {
    border-collapse: collapse;
    border-spacing: 0;
  }

  pre {
    white-space: pre-wrap;
  }

  /* Forms
    * *********************************** */
  [type='search']::-webkit-search-decoration {
    appearance: none;
  }

  /* Attributes & states
    * *********************************** */
  [hidden] {
    display: none !important;
  }

  :focus:not(:focus-visible) {
    outline: none;
  }

  /* User interaction
    * *********************************** */

  /* Pointer cursor for buttons */
  input[type='button'],
  button {
    cursor: pointer;
  }

  [disabled] {
    cursor: not-allowed;
  }

  /* Remove the tapping delay on clickable elements in all browsers. */
  a,
  area,
  button,
  input,
  label,
  select,
  summary,
  textarea,
  details,
  [tabindex] {
    -ms-touch-action: manipulation;
    touch-action: manipulation;
  }
`

export default CSSReset
