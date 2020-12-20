import { createGlobalStyle } from 'styled-components'

const Fonts = createGlobalStyle`
  @font-face {
    font-family: 'Inter';
    font-style: normal;
    font-weight: 400;
    font-display: swap;
    src: url('/fonts/inter/Inter-Regular.woff2')
        format('woff2'),
      url('/fonts/inter/Inter-Regular.woff')
        format('woff');
  }

  @font-face {
    font-family: 'Inter';
    font-style: italic;
    font-weight: 400;
    font-display: swap;
    src: url('/fonts/inter/Inter-Italic.woff2')
        format('woff2'),
      url('/fonts/inter/Inter-Italic.woff')
        format('woff');
  }

  @font-face {
    font-family: 'Inter';
    font-style: normal;
    font-weight: 700;
    font-display: swap;
    src: url('/fonts/inter/Inter-Bold.woff2')
        format('woff2'),
      url('/fonts/inter/Inter-Bold.woff')
        format('woff');
  }

  @font-face {
    font-family: 'Inter';
    font-style: italic;
    font-weight: 700;
    font-display: swap;
    src: url('/fonts/inter/Inter-BoldItalic.woff2')
        format('woff2'),
      url('/fonts/inter/Inter-BoldItalic.woff')
        format('woff');
  }

  @font-face {
    font-family: 'Ivar Text';
    src: url('/fonts/ivar-text/IvarText-Regular.woff2') format('woff2'),
      url('/fonts/ivar-text/IvarText-Regular.woff') format('woff');
    font-weight: 400;
    font-style: normal;
    font-display: swap;
  }

  @font-face {
    font-family: 'Ivar Text';
    src: url('/fonts/ivar-text/IvarText-Italic.woff2') format('woff2'),
      url('/fonts/ivar-text/IvarText-Italic.woff') format('woff');
    font-weight: 400;
    font-style: italic;
    font-display: swap;
  }

  @font-face {
    font-family: 'Ivar Text';
    src: url('/fonts/ivar-text/IvarText-Medium.woff2') format('woff2'),
      url('/fonts/ivar-text/IvarText-Medium.woff') format('woff');
    font-weight: 700;
    font-style: normal;
    font-display: swap;
  }

  @font-face {
    font-family: 'Ivar Text';
    src: url('/fonts/ivar-text/IvarText-MediumItalic.woff2') format('woff2'),
      url('/fonts/ivar-text/IvarText-MediumItalic.woff') format('woff');
    font-weight: 700;
    font-style: italic;
    font-display: swap;
  }
`

export default Fonts