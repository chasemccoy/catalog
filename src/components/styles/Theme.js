import { css } from 'styled-components'

const theme = css`
  :root {
    --root-font-size: 17px;
    --system-fonts: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol";

    --body-background: white; /* #F5F4F0; */
    --body-color: #333333;
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
    --font-header: "Ivar Text", Charter, Georgia, Times New Roman, serif;

    --section-color: ${(p) => p.theme.colors.accent.pop};
    --section-gradient-color-1: ${(p) => p.theme.colors.yellow[300]};
    --section-gradient-color-2: ${(p) => p.theme.colors.yellow[500]};
    --section-sidebar-bg: ${(p) => p.theme.colors.gray[0]};
    --section-highlight: ${(p) => p.theme.colors.yellow[200]};

    --heading-scale: 1;
  }
`

export default theme
