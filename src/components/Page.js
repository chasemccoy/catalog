import React, { createContext, useContext, useLayoutEffect } from 'react'
import styled from 'styled-components'
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
    // bg='accent.pop'
    css='font-size: 0.9em;'
    borderTop='8px solid'
    borderColor='accent.pop'
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
    if (!aside) return
    const sidebar = document.getElementById('sidebar')
    const bufferZone = sidebar.offsetTop + sidebar.offsetHeight + 50

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
        <Box as={article ? 'article' : 'div'} mb={40} {...rest}>
          <Layout.Grid>
            {(aside || !untitled) && (
              <Box className='area-sidebar' mb={[24, null, null, 0]}>
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

  if (!title && !description) return <Box mt={64} />

  return (
    <Box pb={24} {...rest}>
      <Text as='h1' mt={0} mb={description ? 12 : 0}>
        {title}
      </Text>

      <Text
        as='p'
        color='gray.4'
        lineHeight='1.3'
        mb={0}
        dangerouslySetInnerHTML={{ __html: description }}
      />
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
