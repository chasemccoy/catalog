import React, { createContext, useContext } from 'react'
import styled from 'styled-components'
import { Box, Text } from '@chasemccoy/kit'
import Metadata from 'components/Metadata'
import Logo from 'components/Logo'
import Nav from 'components/Nav'
import media from 'utils/media-new'

const PageContext = createContext({})

const Wrapper = styled.div`
  max-width: 75ch;
  margin: 0 auto;
  padding: 40px 16px;
  overflow: hidden;
  --sidebar-gap: 40px;

  > div {
    display: flex;
    flex-wrap: wrap;
    margin: calc(var(--sidebar-gap) / 2 * -1);
  }

  > div > header,
  > div > main {
    flex-grow: 1;
    margin: calc(var(--sidebar-gap) / 2);
  }

  > div > main {
    flex-basis: 0;
    flex-grow: 999;
    min-width: calc(83% - var(--sidebar-gap));
  }

  ${media.tiny`
    padding: 56px 40px;
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
  const normalizedTitle = title ? title.replace(/&nbsp;/g, ' ') : null
  const SemanticContainer = article ? 'article' : 'div'

  return (
    <PageContext.Provider value={{ title, description }}>
      <Wrapper>
        <Metadata
          title={normalizedTitle}
          description={description}
          article={article}
          page
        />

        <div>
          <header>
            <Logo className='mb-24 mt-8' />
            <Nav />
          </header>

          <main>
            <SemanticContainer className={article && 'prose'}>
              {(aside || !untitled) && (
                <React.Fragment>
                  {!untitled && <header>{header || <Header />}</header>}
                  {aside && <aside id='sidebar'>{aside}</aside>}
                </React.Fragment>
              )}

              {children}
            </SemanticContainer>
          </main>
        </div>
      </Wrapper>
    </PageContext.Provider>
  )
}

const Header = (props) => {
  const { title, description } = useContext(PageContext)
  if (!title && !description) return null

  return (
    <Box className='prose' {...props}>
      {title && (
        <h1
          dangerouslySetInnerHTML={{ __html: title }}
          css='hyphens: auto; overflow-wrap: normal;'
        />
      )}

      {description && (
        <Text
          as='p'
          color='gray.4'
          fontSize='0.9em'
          mb={0}
          dangerouslySetInnerHTML={{ __html: description }}
        />
      )}
    </Box>
  )
}

export default Page
