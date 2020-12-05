import { createGlobalStyle } from 'styled-components'
import media from 'utils/media'

const GlobalStyles = createGlobalStyle`
  :root {
    --root-font-size: 18px;

    --section-color: ${(p) => p.theme.colors.accent.pop};
    --section-color-link-hover: ${(p) => p.theme.colors.accent};
    --section-gradient-color-1: ${(p) => p.theme.colors.yellow[300]};
    --section-gradient-color-2: ${(p) => p.theme.colors.yellow[500]};
    --section-sidebar-bg: ${(p) => p.theme.colors.gray[0]};
    --section-highlight: ${(p) => p.theme.colors.yellow[200]};

    ${media.small`
      --root-font-size: 17px;
    `}
  }

  html {
    overflow-y: scroll;
  }

  body {
    font-family: var(--system-fonts);
    overflow: hidden;
    min-height: 100vh;
  }

  a {
    color: ${(p) => p.theme.colors.type.body};
    text-decoration: underline;
    transition: all .15s;

    &:hover, &:focus {
      color: var(--section-color-link-hover);
      outline: none;
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
    margin-left: .5em;
    padding: 4px .5em 4px 1.2em;
    font-size: 0.95em;
    color: ${(p) => p.theme.colors.gray[5]};

    &:before {
      content: "";
      position: absolute;
      left: 0;
      top: 0;
      width: 6px;
      background: ${(p) => p.theme.colors.accent.pop};
      border-radius: 3px;
      height: 100%;
    }
  }

  article {
    h2,
    h3,
    h4,
    h5,
    h6 {
      margin-top: 2em;

      &:first-child {
        margin-top: -4px;
      }

      a {
        text-decoration: none;
      }
    }
    
    .meta + h2,
    .meta + h3,
    .meta + h4 {
      margin-top: 0;
    }

    h2.inline {
      margin-bottom: 1.5rem;

      &:not(.no-border) {
        padding-top: 12px;
        border-top: 2px solid ${(p) => p.theme.colors.gray[2]};
      }
    }

    h2:not(.inline), 
    .float-header {
      --width: var(--sidebarWidth);

      padding-top: 20px;
      border-top: 2px solid ${(p) => p.theme.colors.gray[2]};
      margin-top: 2rem;

      width: var(--width);
      margin-left: calc(-1 * var(--width) - var(--gap));
      float: left;

      &.no-border {
        border-top: none;
      }

      & + *:before {
        content: "";
        display: inline-block; /* prevents margin collapsing */
        width: 100%;
        margin-top: 2rem;
        padding-top: 16px;
        border-top: 2px solid ${(p) => p.theme.colors.gray[2]};

        ${media.medium`
          content: none;
        `}
      }

      &.no-border + *:before {
        border-top: none;
      }

      ${media.medium`
        float: none;
        width: 100%;
        margin-top: 2em;
        margin-left: 0;
      `}

      ${media.small`
        padding-top: 12px;
      `}
    }

    h2:first-child {
      margin-top: 0;
    }

    img {
      width: 100%;
    }

    ${media.small`
      img {
        max-width: none;
        width: calc(100% + 32px);
        margin-left: -16px;
        border-radius: 0;
      }
    `}

    twitter-widget {
      margin-bottom: 1.5em !important;
    }
  }

  hr {
    background: ${(p) => p.theme.colors.gray[0]};
    height: 4px;
  }

  pre {
    overflow: auto;
    background-color: #FBFBFB !important;
    border-radius: 8px;
    border: .5px solid ${(p) => p.theme.colors.gray[1]};

    ${media.small`
      border-radius: 0;
      width: calc(100% + 32px);
      margin-left: -16px;
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
    background-color: #FBFBFB;
    border: .5px solid ${(p) => p.theme.colors.gray[1]};
    padding: .1em .3em .2em;
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

  ${
    '' /* *:not(.gatsby-resp-image-figure) > .gatsby-resp-image-wrapper,
  .gatsby-resp-image-figure,
  p:not(:first-child) > img {
    margin-top: 2em !important;
    margin-bottom: 2em !important;
  } */
  }

  .gatsby-resp-image-figcaption {
    ${'' /* margin: 8px 0; */}
    color: ${(p) => p.theme.colors.gray[4]};
    ${'' /* font-size: 14px;
    line-height: 1.4; */}
    max-width: 550px;
  }

  .clearfix:before,
  .clearfix:after {
    content: " ";
    display: table;
  }

  .clearfix:after {
    clear: both;
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

export default GlobalStyles
