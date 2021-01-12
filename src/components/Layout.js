import React from 'react'
import styled, { ThemeProvider } from 'styled-components'
import theme from 'utils/theme'
import Metadata from 'components/Metadata'
import MDX from 'components/MDX'
import HCard from 'components/hCard'
import Styles from 'components/styles'
import Logo from 'components/Logo'
import Nav from 'components/Nav'
import media from 'utils/media-new'
import Footer from 'components/Footer'

const Wrapper = styled.div`
  max-width: 76ch;
  margin: 0 auto;
  padding: 16px 16px 40px;
  ${'' /* overflow: hidden; */}
  --sidebar-gap: 48px;

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

  ${media.small`
    > div {
      flex-wrap: nowrap;
    }
  `}
`

const Layout = ({ children, title, description }) => {
  return (
    <ThemeProvider theme={theme}>
      <MDX.Provider>
        <Metadata title={title} description={description} />

        <Styles />

        <Wrapper>
          <div>
            <header>
              <Logo className='mb-16 mt-8' />
              <Nav />
            </header>

            <main>
              {children}
              <Footer />
            </main>
          </div>
        </Wrapper>

        <HCard />
      </MDX.Provider>
    </ThemeProvider>
  )
}

export default Layout
