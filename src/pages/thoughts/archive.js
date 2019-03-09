import React from 'react'
import Page from 'components/Page'
import { Post } from 'components/Blog'
import { Box } from '@chasemccoy/kit'
import { graphql } from 'gatsby'
import MDXRenderer from 'gatsby-mdx/mdx-renderer'

const ArchivePage = ({ data }) => {
  return (
    <Page title='Archive'>
      {data.posts.nodes.map(node => (
        <React.Fragment key={node.id}>
          {node.format !== 'image' && (
            <Box mb={[80]}>
              <Post
                title={node.title}
                to={node.slug}
                date={node.date}
                content={node.content}
                code={node.source ? node.source.code.body : undefined}
                render={node.code ? <MDXRenderer>{node.code.body}</MDXRenderer> : undefined}
                excerpt={node.excerpt}
              />
            </Box>
          )}
        </React.Fragment>
      ))}
    </Page>
  )
}

export default ArchivePage

export const query = graphql`
  query ArchiveQuery {
    posts: allBlog(sort: {fields: date, order: DESC}) {
      nodes {
        id
        title
        date(formatString: "MMMM Do, YYYY")
        slug
        format
        content
        excerpt
        source {
          code {
            body
          }
        }
      }
    }
  }
`
