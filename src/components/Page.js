import React, { createContext, useContext } from 'react'
import styled from 'styled-components'
import Metadata from 'components/Metadata'
import Logo from 'components/Logo'
import Nav from 'components/Nav'
import media from 'utils/media-new'

const PageContext = createContext({})

const Wrapper = styled.div`
  max-width: 78ch;
  margin: 0 auto;
  padding: 40px 16px;
  overflow: hidden;
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
    min-width: calc(80% - var(--sidebar-gap));
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
    <div className='prose' {...props}>
      {/* <span
        css={`
          font-family: 'Vulf Mono Demo';
          font-size: 0.75em;
          color: ${p => p.theme.colors.gray[4]};
        `}
      >
        https://chasem.co/2020/04/gap-problem
      </span>

      <hr className='mt-2 mb-24' css='height: 2px; background: gainsboro;' /> */}

      {title && (
        <h1 dangerouslySetInnerHTML={{ __html: title }} className='hyphens' />
      )}

      {description && (
        <p
          className='smaller mt-8'
          dangerouslySetInnerHTML={{ __html: description }}
        />
      )}
    </div>
  )
}

export default Page
