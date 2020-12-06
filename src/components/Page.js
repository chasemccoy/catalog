import React, { createContext } from 'react'
import styled from 'styled-components'
import { Box } from '@chasemccoy/kit'
import Metadata from 'components/Metadata'
import Logo from 'components/Logo'
import Nav from 'components/Nav'

const PageContext = createContext({})

const ContentGrid = Box

const PageStyles = styled.div`
  max-width: 65ch;
  margin: 0 auto;
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

        <header>
          <Logo />
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

const Header = Box
const Breakout = Box

Page.Grid = ContentGrid
Page.Header = Header
Page.Breakout = Breakout

export default Page
