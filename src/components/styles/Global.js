import { css } from 'styled-components'
import media from 'utils/media'

const globalStyles = css`
  html {
    overflow-y: scroll;
  }

  body {
    font-family: var(--font-body);
    overflow: hidden;
    min-height: 100vh;
    background: var(--color-body-background);
    color: var(--color-text);
    -webkit-font-smoothing: antialiased;
  }

  h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
    color: var(--color-header);

    a {
      --link-color: var(--color-header);
    }
  }

  a {
    color: var(--link-color);
    text-decoration: underline;
    transition: all 0.25s;

    &:hover {
      color: var(--section-color, var(--link-hover));
    }
  }

  iframe {
    border-radius: 8px;

    ${media.small`
      border-radius: 0;
    `}
  }

  code a {
    border: none;
    box-shadow: none;
    text-decoration: underline;
  }

  blockquote {
    position: relative;
    margin-left: 0.5em;
    padding: 4px 0.5em 4px 1.2em;
    font-size: 0.95em;

    &:before {
      content: '';
      position: absolute;
      left: 0;
      top: 0;
      width: 6px;
      background: var(--section-color);
      border-radius: 3px;
      height: 100%;
    }
  }
`

export default globalStyles
