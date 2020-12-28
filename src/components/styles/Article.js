import { css } from 'styled-components'
import media from 'utils/media-new'

const articleStyles = css`
  article {
    h2:first-child {
      margin-top: 0;
    }

    img {
      max-width: none;
      width: calc(100% + 32px);
      margin-left: -16px;
    }

    ${media.tiny`
      img {
        max-width: 100%;
        width: 100%;
        margin-left: 0;
      }
    `}

    twitter-widget {
      margin-bottom: 1.5em !important;
    }
  }

  hr {
    background: var(--color-border);
    height: 4px;
    border: none;
  }

  pre {
    border-radius: 0;
    width: calc(100% + 32px);
    margin-left: -16px;
    overflow: auto;
    border-top: 1px solid var(--color-border);
    border-bottom: 1px solid var(--color-border);

    ${media.tiny`
      width: auto;
      margin: 0;
    `}

    code {
      padding: 12px 8px;
      border: none;
      display: block;
      background-color: transparent;
    }
  }

  code {
    font-feature-settings: normal;
    font-family: var(--font-code);
    background-color: var(--color-gray--0);
    border: .5px solid var(--color-border);
    padding: .2em .3em;
    vertical-align: middle;
    word-wrap: normal;
    overflow: auto;
    border-radius: 4px;
    box-decoration-break: clone;
  }

  .gatsby-resp-image-wrapper {
    max-width: none;
    width: calc(100% + 32px);
    margin-left: -16px !important;
    border-radius: 0;

    ${media.small`
      max-width: 100%;
      width: 100%;
      margin: 0 !important;
    `}
  }

  .gatsby-resp-image-figcaption {
    color: var(--color-gray--500);
    max-width: 550px;
  }

  twitter-widget {
    width: 100% !important;
    max-width: 100% !important;
  }
  
  twitter-widget::shadow .EmbeddedTweet {
    width: 100% !important;
    max-width: 100% !important;
  }

  .twitter-tweet + * {
    margin-top: 1.5em;
  }
`

export default articleStyles
