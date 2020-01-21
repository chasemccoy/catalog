import React from 'react'
import Link from 'components/Link'
import { ArticleContainer } from 'components/blog/helpers'

const LinkPost = ({ title, url, className, ...rest }) => (
  <ArticleContainer
    bg='white'
    border='1px solid'
    borderColor='black'
    borderRadius='8px'
    className={'link ' + className}
    {...rest}
  >
    <Link
      fontSize='14px'
      display='block'
      size='100%'
      fontWeight='semibold'
      unstyled
      to={url}
    >
      {title} →
    </Link>
  </ArticleContainer>
)

export default LinkPost
