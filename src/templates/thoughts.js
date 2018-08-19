import React from 'react'
import styled from 'styled-components'
import { Column, Row } from 'components/Grid'
import Link from 'components/Link'
import Page from 'components/Page'
import { Post } from 'components/Blog'

const PaginationLink = styled(Link)`
  font-size: 14px;
  padding: 8px 16px;
  text-decoration: none;
  background: ${props => props.theme.colors.accent};
  color: white;
  text-transform: uppercase;
  letter-spacing: 1px;
  font-weight: ${p => p.theme.fontWeights.bold};

  & + & {
    margin-left: 24px;
  }
`

const BlogPage = ({ data, pageContext }) => {
  const { nodes, prev, next } = pageContext

  const posts = nodes.filter(({node}) => node.format !== 'image')

  return (
    <Page title={'Thoughts'} untitled description="What's on my mind, and links to some interesting stuff on the web.">
      {posts.map(({ node }, i) => (
        <Row key={i}>
          <Column mb={[60, 60, 120]} width={1}>
            {(node.format === 'aside' || node.format === 'image') && (
              <Post
                aside
                to={node.slug}
                content={node.content}
                date={node.date}
                imagePost={node.format === 'image'}
              />
            )}

            {node.format === 'standard' && (
              <Post
                title={node.title}
                to={node.slug}
                date={node.date}
                content={node.content}
                excerpt={node.excerpt}
              />
            )}
          </Column>
        </Row>
      ))}

      <Row>
        <Column width={1}>
          {prev && <PaginationLink to={prev}>Newer</PaginationLink>}
          {next && <PaginationLink to={next}>Older</PaginationLink>}
        </Column>
      </Row>
    </Page>
  )
}

export default BlogPage
