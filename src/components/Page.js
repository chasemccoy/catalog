import React, { createContext, useContext, useLayoutEffect } from 'react'
import styled from 'styled-components'
import { Box, Text } from '@chasemccoy/kit'
import Metadata from 'components/Metadata'
import Logo from 'components/Logo'
import media from 'utils/media'
import Nav from 'components/Nav'
import Layout from 'components/Layout'

const PageContext = createContext({})

const DEPRECATED_Wrapper = styled(Box)`
  margin-left: auto;
  margin-right: auto;

  display: grid;
  grid-gap: ${(p) => (p.flush ? 0 : '24px')} 24px;
  grid-template-columns:
    1fr ${(p) => p.theme.sizes.sidebarWidth} minmax(
      0,
      ${(p) => p.theme.sizes.contentWidth}
    )
    1fr;
  grid-template-areas:
    '.    logo    header .'
    '.    sidebar main   .';

  > * {
    grid-area: main;
    min-width: 0;

    ${media.medium`
      max-width: none;
    `}
  }

  aside {
    grid-area: sidebar;
    padding-right: 16px;
  }

  header {
    grid-area: header;
    display: flex;
    align-items: center;
  }

  .logo {
    grid-area: logo;
  }

  ${media.medium`
    grid-template-columns: 1fr;
    grid-template-areas: 
      'logo'
      'header'
      'main'
      'sidebar';
  `}
`

const SiteHeader = () => (
  <Layout.Grid pt={16} pb={80} mb={48} bg='accent.pop'>
    <Logo mb={[4, null, 0]} />
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

const Page = ({
  children,
  header,
  aside,
  title,
  description,
  article = false,
  untitled = false,
  ...rest
}) => {
  useLayoutEffect(() => {
    const sidebar = document.getElementById('sidebar')
    const bufferZone = sidebar.offsetTop + sidebar.offsetHeight + 50

    const headers = [...document.querySelectorAll('#main-content h2')]

    let inTheClear = false
    let index = 0

    while (inTheClear === false && index < headers.length) {
      const header = headers[index]
      const headerOffset = header.offsetTop

      if (headerOffset < bufferZone) {
        header.classList.add('no-break')
      } else {
        inTheClear = true
      }

      index++
    }
  }, [])

  return (
    <PageContext.Provider value={{ title, description }}>
      <Metadata
        title={title}
        description={description}
        article={article}
        page
      />

      <header>
        <SiteHeader />
      </header>

      <main>
        <Box as={article ? 'article' : 'div'}>
          <Layout.Grid>
            <div className='area-sidebar'>
              {!untitled && <header>{header || <Header />}</header>}
              <aside id='sidebar'>{aside}</aside>
            </div>

            <div id='main-content' className='area-main'>
              <ContentGrid>{children}</ContentGrid>
            </div>
          </Layout.Grid>
        </Box>
      </main>
    </PageContext.Provider>
  )
}

const Header = ({ category, ...rest }) => {
  const { title, description } = useContext(PageContext)

  if (!title && !description) return <Box mt={64} />

  return (
    <Box maxWidth='34rem' pb={24} {...rest}>
      <Text as='h1' mt={0} mb={description ? 12 : 0}>
        {title}
      </Text>

      <Text as='p' color='gray.4' lineHeight='1.3' mb={0}>
        {description}
      </Text>
    </Box>
  )
}

Page.SidebarHeader = (props) => (
  <Text
    mb={8}
    borderBottom='1px solid'
    borderColor='gray.1'
    fontFamily='serif'
    fontSize='1.3em'
    {...props}
  />
)

const Breakout = styled(Box)`
  width: calc(100vw);
  margin-left: calc(var(--maxWidth) / -2 + 56px);

  ${media.medium`
    width: auto;
    margin-left: -16px;
    margin-right: -16px;
  `}
`

Page.Wrapper = DEPRECATED_Wrapper
Page.Grid = ContentGrid
Page.Header = Header
Page.Breakout = Breakout

export default Page
