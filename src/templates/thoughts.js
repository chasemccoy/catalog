import React from 'react'
import styled from 'styled-components'
import Link from 'components/Link'
import Page from 'components/Page'
import { Post } from 'components/Blog'
import { Grid, Box } from 'components/Base'
import Heading from 'components/Heading'

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

  const posts = nodes.filter(({node}) => node.format !== 'image' && node.format !== 'aside')
  // const imagePosts = nodes.filter(({node}) => node.format === 'image')
  const asides = nodes.filter(({node}) => node.format === 'aside')

  return (
    <Page wide title={'Thoughts'} untitled description="What's on my mind, and links to some interesting stuff on the web.">

      <Grid gutter={32}>
        <Box width={[1, 1, 1, 4.5/12]}>
          <Heading.section>Asides</Heading.section>
          {asides.map(({node}, i) => (
            <React.Fragment key={i}>
              <Box mb={40}>
                <Post
                  aside
                  to={node.slug}
                  content={node.content}
                  date={node.date}
                  imagePost={node.format === 'image'}
                />
              </Box>
            </React.Fragment>
          ))}
        </Box>

        <Box width={[1, 1, 1, 7.5/12]}>
          <Heading.section>Writing</Heading.section>
          {posts.map(({node}, i) => (
            <React.Fragment key={i}>
              <Box mb={[80, 80, 120]}>
                {/* {(node.format === 'aside') && (
                  <Post
                    aside
                    to={node.slug}
                    content={node.content}
                    date={node.date}
                    imagePost={node.format === 'image'}
                  />
                )} */}

                {node.format === 'standard' && i === 0 &&  (
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
        </Box>
      </Grid>

      {prev && <PaginationLink to={prev}>Newer</PaginationLink>}
      {next && <PaginationLink to={next}>Older</PaginationLink>}
    </Page>
  )
}

export default BlogPage
