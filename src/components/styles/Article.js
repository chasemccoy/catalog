import { createGlobalStyle } from 'styled-components'
import media from 'utils/media-new'

const ArticleStyles = createGlobalStyle`
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
    background: ${(p) => p.theme.colors.gray[0]};
    height: 4px;
    border: none;
  }

  pre {
    border-radius: 0;
    width: calc(100% + 32px);
    margin-left: -16px;
    overflow: auto;
    background-color: #fafbfc; /* #F8FAFC */
    border: .5px solid ${(p) => p.theme.colors.gray[1]};

    ${media.tiny`
      border-radius: 8px;
      width: auto;
      margin: 0;
    `}

    code {
      padding: 12px 16px;
      border: none;
      display: block;
    }
  }

  code {
    font-feature-settings: normal;
    font-family: ${(p) => p.theme.fonts.code};
    background-color: #fafbfc; /* #F8FAFC */
    border: .5px solid ${(p) => p.theme.colors.gray[1]};
    padding: .3em .3em .2em;
    vertical-align: middle;
    word-wrap: normal;
    overflow: auto;
    border-radius: 4px;
    box-decoration-break: clone;
  }

  .gatsby-resp-image-wrapper {
    margin: 0 !important;

    ${media.small`
      max-width: none;
      width: calc(100% + 32px);
      margin-left: -16px !important;
      border-radius: 0;
    `}
  }

  .gatsby-resp-image-figcaption {
    color: ${(p) => p.theme.colors.gray[4]};
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

export default ArticleStyles
