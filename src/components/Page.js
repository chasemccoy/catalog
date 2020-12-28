import React, { createContext, useContext } from 'react'
import Metadata from 'components/Metadata'

const PageContext = createContext({})

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
      <Metadata
        title={normalizedTitle}
        description={description}
        article={article}
        page
      />

      <SemanticContainer className={article && 'prose'}>
        {(aside || !untitled) && (
          <React.Fragment>
            {!untitled && <header>{header || <Header />}</header>}
            {aside && <aside id='sidebar'>{aside}</aside>}
          </React.Fragment>
        )}

        {children}
      </SemanticContainer>
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
