import React from 'react'
import styled from 'styled-components'
import Link from 'components/Link'
import Page from 'components/Page'
import { Post } from 'components/Blog'
import { Grid, Box } from 'components/Base'
import ScrollRow from 'components/ScrollRow'

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
  const imagePosts = nodes.filter(({node}) => node.format === 'image')

  return (
    <Page title={'Thoughts'} untitled description="What's on my mind, and links to some interesting stuff on the web.">

      <>
        {posts.map(({node}, i) => (
          <React.Fragment key={i}>
            {i === 1 && (
              <ScrollRow mb={[60, 60, 120]}>
                {imagePosts.map(({node}, i) => (
                  <Box minWidth={324} mr={24} key={i}>
                    <Post
                      aside
                      imagePost
                      filmstrip
                      to={node.slug}
                      content={node.content}
                      date={node.date}
                    />
                  </Box>
                ))}

                <Box minWidth={100} />
              </ScrollRow>
            )}

            <Box mb={[60, 60, 120]}>
              {(node.format === 'aside') && (
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
            </Box>
          </React.Fragment>
        ))}
      </>

      <Grid>
        <Box>
          {prev && <PaginationLink to={prev}>Newer</PaginationLink>}
          {next && <PaginationLink to={next}>Older</PaginationLink>}
        </Box>
      </Grid>
    </Page>
  )
}

export default BlogPage
