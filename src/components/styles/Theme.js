import { css } from 'styled-components'

const theme = css`
  :root {
    --root-font-size: 17px;
    --system-fonts: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto,
      'Helvetica Neue', Arial, sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji',
      'Segoe UI Symbol';

    --color-gray--0: #fafafa;
    --color-gray--100: #f5f5f5;
    --color-gray--200: #e5e5e5;
    --color-gray--300: #d4d4d4;
    --color-gray--400: #a3a3a3;
    --color-gray--500: #737373;
    --color-gray--600: #525252;
    --color-gray--700: #404040;
    --color-gray--800: #262626;
    --color-gray--900: #171717;

    --color-green: #51cf66;
    --color-red: #ff6b6b;
    --color-yellow: #fcc419;
    --color-blue: #74c0fc;
    --color-purple: #8888fc;

    --body-background: white; /* #F5F4F0; */
    --body-color: #333333;
    --link-color: black;
    --link-hover: ${(p) => p.theme.colors.accent};
    --color-border: var(--color-gray--200);

    --font-code: 'Source Code Pro', 'IBM Plex Mono', Consolas, Menlo, Monaco,
      monospace;
    --font-body: 'Inter', system-ui, -apple-system, BlinkMacSystemFont,
      'Segoe UI', 'Roboto', 'Oxygen', 'Ubuntu', 'Cantarell', 'Fira Sans',
      'Droid Sans', 'Helvetica Neue', sans-serif;
    --font-header: 'Ivar Text', Charter, Georgia, Times New Roman, serif;

    --section-color: ${(p) => p.theme.colors.accent.pop};
    --section-gradient-color-1: ${(p) => p.theme.colors.yellow[300]};
    --section-gradient-color-2: ${(p) => p.theme.colors.yellow[500]};
    --section-sidebar-bg: ${(p) => p.theme.colors.gray[0]};
    --section-highlight: ${(p) => p.theme.colors.yellow[200]};

    --heading-scale: 1;
  }
`

export default theme
