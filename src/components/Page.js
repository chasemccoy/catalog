import React, { createContext, useContext } from 'react'
import styled from 'styled-components'
import { Box, Text } from '@chasemccoy/kit'
import Metadata from 'components/Metadata'
import Logo from 'components/Logo'
import Nav from 'components/Nav'

const PageContext = createContext({})

const ContentGrid = Box

const PageStyles = styled.div`
  max-width: 60ch;
  margin: 0 auto;
  padding: 40px 16px;
`

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
  const normalizedTitle = title ? title.replace(/&nbsp;/g, ' ') : null

  return (
    <PageContext.Provider value={{ title, description }}>
      <PageStyles>
        <Metadata
          title={normalizedTitle}
          description={description}
          article={article}
          page
        />

        <header css='margin-bottom: 40px;'>
          <Logo
            css={`
              margin-bottom: 16px;
            `}
          />
          <Nav />
        </header>

        <main>
          <Box as={article ? 'article' : 'div'} {...rest}>
            {(aside || !untitled) && (
              <div>
                {!untitled && <header>{header || <Header />}</header>}
                <aside id='sidebar'>{aside}</aside>
              </div>
            )}

            <div className={article && 'prose'}>{children}</div>
          </Box>
        </main>
      </PageStyles>
    </PageContext.Provider>
  )
}

const Header = ({ category, ...rest }) => {
  const { title, description } = useContext(PageContext)
  if (!title && !description) return null

  return (
    <Box pb={24} {...rest}>
      <Text
        as='h1'
        // mt={0}
        // fontSize='1.9rem'
        mb={description ? 8 : 0}
        dangerouslySetInnerHTML={{ __html: title }}
        css='hyphens: auto; overflow-wrap: normal;'
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

const Breakout = Box

Page.Grid = ContentGrid
Page.Header = Header
Page.Breakout = Breakout

export default Page
