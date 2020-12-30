import React, { createContext, useContext } from 'react'
import Metadata from 'components/Metadata'
import { getColorForSection } from 'utils'

const PageContext = createContext({})

const Page = ({
  children,
  header,
  aside,
  title,
  description,
  article = false,
  untitled = false,
  section,
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

      <SemanticContainer
        className={article ? 'prose' : ''}
        style={{
          '--section-color': getColorForSection(section),
          marginTop: '6px'
        }}
      >
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
