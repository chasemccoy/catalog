import React from 'react'
import styled, { ThemeProvider, css } from 'styled-components'
import theme from 'utils/theme'
import { CSSReset, Box } from '@chasemccoy/kit'
import TypographyStyles from 'utils/typography'
import Metadata from 'components/Metadata'
import MDX from 'components/MDX'
import GlobalStyles from 'components/GlobalStyles'
import media from 'utils/media'
import HCard from 'components/hCard'

const Layout = (props) => {
  return (
    <ThemeProvider theme={theme}>
      <MDX.Provider>
        <Metadata title={props.title} description={props.description} />

        <CSSReset />
        <TypographyStyles />
        <GlobalStyles />

        {props.children}

        <HCard />
      </MDX.Provider>
    </ThemeProvider>
  )
}

Layout.Grid = styled(Box)(
  ({ them, flush = false }) => css`
    --contentWidth: ${theme.sizes.contentWidth};
    --sidebarWidth: ${theme.sizes.sidebarWidth};
    --gap: 80px;
    --maxWidth: calc(var(--sidebarWidth) + var(--gap) + var(--contentWidth));
    --padding: 40px;

    display: grid;
    align-items: flex-start;
    padding-left: ${flush ? 0 : 'var(--padding)'};
    padding-right: ${flush ? 0 : 'var(--padding)'};

    grid-template-columns:
    /* First column: flexible gutter that centers the content */
      calc((100% - var(--maxWidth)) / 2)
      /* Sidebar area */
      [sidebar-start] var(--sidebarWidth) [sidebar-end]
      /* Gap */
      var(--gap)
      /* Content area */
      [content-start] minmax(0, 1fr) [content-end]
      /* Last column: flexible gutter that centers the content */
      calc((100% - var(--maxWidth)) / 2);

    .area-sidebar,
    & > *:first-child {
      grid-column: sidebar;
      min-width: 0;
    }

    .area-main,
    & > *:last-child {
      grid-column: content;
      min-width: 0;
    }

    ${
      '' /* ${media.large`
      --sidebarWidth: calc(${theme.sizes.sidebarWidth} * 0.8);
    `} */
    }

    ${media.medium`
      --padding: 24px;

      grid-template-columns:
        /* First column: flexible gutter that centers the content */
        calc((100% - var(--maxWidth)) / 2)
        /* Sidebar area */
        [sidebar-start content-start] var(--sidebarWidth) minmax(0, 1fr) [sidebar-end]
        /* Last column: flexible gutter that centers the content */
        calc((100% - var(--maxWidth)) / 2);
    `}

    ${media.small`
      --padding: 16px;
    `}
  `
)

export default Layout
