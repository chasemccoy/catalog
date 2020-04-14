import React, { createContext, useContext } from 'react'
import styled from 'styled-components'
import { Box, Text } from '@chasemccoy/kit'
import Metadata from 'components/Metadata'
import Logo from 'components/Logo'
import media from 'utils/media'
import Nav from 'components/Nav'

const PageContext = createContext({})

const PageContainer = styled.div`
  background: white;
  border-radius: 12px;
  overflow: hidden;
`

const Wrapper = styled(Box)`
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

Wrapper.defaultProps = {
  px: 16
}

const ArticleHeader = styled.header`
  position: relative;
  z-index: 0;

  &:before {
    content: '';
    position: absolute;
    left: -999rem;
    right: -999rem;
    top: -8px;
    bottom: 0;
    z-index: -1;
  }
`

const Page = ({
  children,
  header,
  aside,
  title,
  description,
  article = false,
  showHeader = true,
  untitled = false,
  ...rest
}) => {
  return (
    <PageContext.Provider value={{ title, description }}>
      <Metadata
        title={title}
        description={description}
        article={article}
        page
      />

      <main>
        <PageContainer>
          <Wrapper flush mt={16}>
            <div className='logo'>
              <Logo mb={[4, null, 0]} />
            </div>
            <header>
              <Nav />
            </header>
          </Wrapper>

          <Box as={article ? 'article' : 'div'}>
            <Wrapper>
              {!untitled && (
                <ArticleHeader>{header || <Header />}</ArticleHeader>
              )}

              <Box mt={untitled ? [0, 0, 0, 32] : 0}>{children}</Box>

              {aside && (
                <Box as='aside' mt={untitled ? 48 : 0}>
                  <Text fontSize='13px' lineHeight='1.3'>
                    {aside}
                  </Text>
                </Box>
              )}
            </Wrapper>
          </Box>
        </PageContainer>

        {/* <Footer showBorder={showHeader} /> */}
      </main>
    </PageContext.Provider>
  )
}

const Header = ({ category, ...rest }) => {
  const { title, description } = useContext(PageContext)

  if (!title && !description) return <Box mt={64} />

  return (
    <Box maxWidth='34rem' pb={24} {...rest}>
      {/* <Breadcrumbs category={category} title={title} /> */}

      <Text as='h1' mt={64} mb={description ? 12 : 0}>
        {title}
      </Text>

      <Text
        as='p'
        color='gray.4'
        // fontFamily='serif'
        // fontSize='1.1rem'
        lineHeight='1.3'
        mb={0}
      >
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
  width: calc(100vw - 16px);
  margin-left: calc(
    (-${(p) => p.theme.sizes.sidebarWidth} - 24px) -
      (
        (
            100vw - ${(p) => p.theme.sizes.sidebarWidth} -
              ${(p) => p.theme.sizes.contentWidth} - 40px
          ) / 2
      )
  );

  @media screen and (min-width: 900px) and (max-width: 1020px) {
    margin-left: calc(-${(p) => p.theme.sizes.sidebarWidth} - 48px - 16px);
  }

  ${media.medium`
    width: auto;
    margin-left: -16px;
    margin-right: -16px;
  `}
`

Page.Wrapper = Wrapper
Page.Header = Header
Page.Breakout = Breakout

export default Page
