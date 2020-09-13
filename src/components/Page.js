import React, { createContext, useContext, useLayoutEffect } from 'react'
import styled, { css, createGlobalStyle } from 'styled-components'
import { Box, Text } from '@chasemccoy/kit'
import Metadata from 'components/Metadata'
import Logo from 'components/Logo'
import media from 'utils/media'
import Nav from 'components/Nav'
import Layout from 'components/Layout'

const PageContext = createContext({})

const SiteHeader = () => (
  <Layout.Grid
    pt={[24, 24, 24, 40]}
    pb={[40]}
    mb={48}
    mt={[24, null, null, 0]}
    css='font-size: 0.9em;'
  >
    <Logo mb={[12, null, 8, 0]} />
    <Nav />
  </Layout.Grid>
)

const ContentGrid = styled(Box)`
  display: grid;
  grid-template-columns:
    [full-start main-start] 1fr 1fr 1fr [main-end]
    0.8fr [full-end];

  & > * {
    grid-column: main;
    min-width: 0;
  }

  ${media.large`
    grid-template-columns:
      [full-start main-start] 1fr 1fr 1fr 0.8fr [main-end full-end];
  `}
`

const getSidebarStyles = () => css`
  position: relative;

  &:before {
    content: '';
    position: absolute;
    height: 9999vh;
    width: 100vw;
    right: calc(-1 * var(--gap) / 2);
    top: -50vh;
    background: var(--section-sidebar-bg);
    z-index: -1;
    border-right: 1px solid ${(p) => p.theme.colors.gray[1]};

    ${media.medium`
      width: 200vw;
      height: auto;
      bottom: 0;
      right: auto;
      left: -100vw;
      border-right: none;
      border-bottom: 1px solid ${(p) => p.theme.colors.gray[1]};
    `}
  }
`

const getSectionStyles = (section) => {
  switch (section) {
    case 'notes':
      return createGlobalStyle`
        :root {
          ${
            '' /* --section-color: #2CDB7F;
          --section-color-link-hover: #3F8050;
          --section-gradient-color-1: #2CDB7F;
          --section-gradient-color-2: #3F8050;
          --section-sidebar-bg: #F7FDF4;
          --section-highlight: #2CDB7F; */
          }
        }
      `
    default:
      return createGlobalStyle``
  }
}

const Page = ({
  children,
  header,
  aside,
  title,
  description,
  article = false,
  untitled = false,
  section = 'default',
  ...rest
}) => {
  useLayoutEffect(() => {
    if (!aside) return
    const sidebar = document.getElementById('sidebar')
    const bufferZone = sidebar.offsetTop + sidebar.offsetHeight + 200

    const headers = [...document.querySelectorAll('#main-content h2')]

    let inTheClear = false
    let index = 0

    while (inTheClear === false && index < headers.length) {
      const header = headers[index]
      const headerOffset = header.offsetTop

      if (headerOffset < bufferZone) {
        header.classList.add('inline')
      } else {
        inTheClear = true
      }

      index++
    }
  }, [aside])

  const normalizedTitle = title ? title.replace(/&nbsp;/g, ' ') : null
  const SectionStyles = getSectionStyles(section)

  return (
    <PageContext.Provider value={{ title, description }}>
      <Metadata
        title={normalizedTitle}
        description={description}
        article={article}
        page
      />

      <SectionStyles />

      <header>
        <SiteHeader />
      </header>

      <main>
        <Box as={article ? 'article' : 'div'} mb={40} {...rest}>
          <Layout.Grid>
            {(aside || !untitled) && (
              <Box
                className='area-sidebar'
                mb={[24, null, null, 0]}
                css={getSidebarStyles()}
              >
                {!untitled && <header>{header || <Header />}</header>}
                <aside id='sidebar'>{aside}</aside>
              </Box>
            )}

            <div id='main-content' className='area-main'>
              <ContentGrid mt={8}>{children}</ContentGrid>
            </div>
          </Layout.Grid>
        </Box>
      </main>
    </PageContext.Provider>
  )
}

const Header = ({ category, ...rest }) => {
  const { title, description } = useContext(PageContext)

  return (
    <Box pb={24} {...rest}>
      <Text
        as='h1'
        fontSize='2rem'
        mt={0}
        mb={description ? 8 : 0}
        dangerouslySetInnerHTML={{ __html: title }}
      />

      <Text
        as='p'
        color='gray.4'
        fontSize='0.9em'
        mb={0}
        dangerouslySetInnerHTML={{ __html: description }}
      />
    </Box>
  )
}

const Breakout = styled(Box)`
  width: 100vw;
  --offset: calc(var(--sidebarWidth) + var(--gap) + var(--padding));
  --extraOffset: calc(
    (100vw - var(--maxWidth) - var(--padding) - var(--padding)) / 2
  );
  margin-left: calc((var(--offset) + max(var(--extraOffset), 0px)) * -1);

  ${media.large`
    margin-left: calc(var(--offset) * -1);
  `}

  ${media.medium`
    width: auto;
    margin-left: -24px;
    margin-right: -24px;
  `}
`

Page.Grid = ContentGrid
Page.Header = Header
Page.Breakout = Breakout

export default Page
