import React from 'react'
import MDX from 'components/MDX'
import LinkPost from 'components/blog/LinkPost'
import AsidePost from 'components/blog/AsidePost'
import StandardPost from 'components/blog/StandardPost'
import ImagePost from 'components/blog/ImagePost'

const Content = ({ children, mdx = false }) => {
  if (mdx) {
    return <MDX.Renderer>{children}</MDX.Renderer>
  }

  return <div dangerouslySetInnerHTML={{ __html: children }} />
}

const Article = ({ type = 'aside', node, index = 0 }) => {
  const even = index % 2
  const position = even ? 'first-half even' : 'second-half odd'
  const alternateCenter = index % 3 ? '' : 'centered'
  const i = `_${index++}`

  const RenderedContent = () => (
    <Content mdx={node.isMdx}>{node.content}</Content>
  )
  const RenderedExcerpt = () => <Content>{node.excerpt}</Content>

  const tags = node.tags && node.tags.map(tag => tag.name)

  switch (type) {
    case 'image':
      return (
        <ImagePost
          date={node.shortDate}
          slug={node.slug}
          content={<RenderedContent />}
          className={`${i} centered ${even ? 'even' : 'odd'}`}
        />
      )
    case 'link':
      return (
        <LinkPost
          title={node.title}
          url={node.url}
          className={`${i} ${position} ${alternateCenter}`}
        />
      )
    case 'post':
      return (
        <StandardPost
          title={node.title}
          excerpt={<RenderedExcerpt />}
          tags={tags}
          date={node.date}
          slug={node.slug}
          className={`${i} ${position}`}
        />
      )
    default:
    case 'aside':
      return (
        <AsidePost
          title={node.title}
          content={<RenderedContent />}
          date={node.date}
          tags={tags}
          slug={node.slug}
          className={`${i} ${position} bordered`}
        />
      )
  }
}

export default Article
