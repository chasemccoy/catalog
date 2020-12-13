import { createGlobalStyle } from 'styled-components'
import media from 'utils/media'

const GlobalStyles = createGlobalStyle`
  :root {
    --root-font-size: 17px;
    --system-fonts: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol";

    --body-background: white; /* #F5F4F0; */
    --body-color: #030303;
    --link-color: black;
    --link-hover: ${(p) => p.theme.colors.accent};

    --color-gray--0: #FAFAFA;
    --color-gray--100: #F5F5F5;
    --color-gray--200: #E5E5E5;
    --color-gray--300: #D4D4D4;
    --color-gray--400: #A3A3A3;
    --color-gray--500: #737373;
    --color-gray--600: #525252;
    --color-gray--700: #404040;
    --color-gray--800: #262626;
    --color-gray--900: #171717;

    --color-border: var(--color-gray--200);

    --font-code: "Source Code Pro", "IBM Plex Mono", Consolas, Menlo, Monaco, monospace;
    --font-body: "Inter", system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", "Roboto", "Oxygen", "Ubuntu", "Cantarell", "Fira Sans","Droid Sans", "Helvetica Neue", sans-serif;
    --font-header: Charter, Georgia, Times New Roman, serif;

    --section-color: ${(p) => p.theme.colors.accent.pop};
    --section-gradient-color-1: ${(p) => p.theme.colors.yellow[300]};
    --section-gradient-color-2: ${(p) => p.theme.colors.yellow[500]};
    --section-sidebar-bg: ${(p) => p.theme.colors.gray[0]};
    --section-highlight: ${(p) => p.theme.colors.yellow[200]};

    --heading-scale: 0.9;
  }

  html {
    overflow-y: scroll;
  }

  body {
    font-family: var(--font-body);
    overflow: hidden;
    min-height: 100vh;
    background: var(--body-background);
    color: var(--body-color);

    -webkit-font-smoothing: antialiased;
    font-feature-settings: "cv10" 1, "cv02" 1;
  }

  a {
    color: var(--link-color);
    text-decoration: underline;
    transition: all .15s;

    &:hover, &:focus {
      color: var(--link-hover);
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
`

export default GlobalStyles
