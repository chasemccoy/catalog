import { css } from 'styled-components'

const theme = css`
  :root {
    --root-font-size: 17px;
    --root-line-height: 1.45;
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
    --body-color: var(--color-gray--700);
    --link-color: var(--body-color);
    --link-hover: var(--color-purple);
    --color-body-background: var(--body-background);
    --color-text: var(--body-color);
    --color-header: var(--color-gray--700);
    --color-border: var(--color-gray--200);
    --color-caption: var(--color-gray--500);

    --font-code: 'Source Code Pro', 'IBM Plex Mono', Consolas, Menlo, Monaco,
      monospace;
    --font-body: 'GT America', 'Inter', system-ui, -apple-system,
      BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen', 'Ubuntu', 'Cantarell',
      'Fira Sans', 'Droid Sans', 'Helvetica Neue', sans-serif;
    --font-header: 'Ivar Text', Charter, Georgia, Times New Roman, serif;

    --section-color: var(--color-yellow);

    --shadow-small: 0 0 transparent, 0 0 transparent,
      0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06);
    --shadow-medium: 0 0 transparent, 0 0 transparent,
      0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06);
    --shadow-large: 0 0 transparent, 0 0 transparent,
      0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05);

    --heading-scale: 1;
  }
`

export default theme
