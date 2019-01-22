import React from 'react'
import styled from 'styled-components'
import Page from 'components/Page'
import { Post } from 'components/Blog'
import { Grid } from 'components/Base'
import { Box, Text } from '@chasemccoy/kit'
import Link from 'components/Link'
import Heading from 'components/Heading'
import { graphql } from 'gatsby'
import media from 'utils/media'
import MDXRenderer from 'gatsby-mdx/mdx-renderer'

const Container = styled(Grid)`
  ${media.small`
    margin: 0;

    > * {
      padding: 0;
    }
  `}
`

const ThoughtsPage = ({ data }) => {
  return (
    <Page
      wide
      title={'Thoughts'}
      untitled
      description="What's on my mind, and links to some interesting stuff on the web."
    >
      <Container gutter={24}>
        <Box width={[1, 1, 1, 1, 4.5 / 12]}>
          <Heading.section mb={24}>Asides</Heading.section>

          {data.asides.nodes.map(node => (
            <React.Fragment key={node.id}>
              <Box mb={[40, 40, 48]}>
                <Post
                  aside
                  title={node.title}
                  to={node.slug}
                  content={node.content}
                  date={node.date}
                  imagePost={node.format === 'image'}
                />
              </Box>
            </React.Fragment>
          ))}
        </Box>

        <Box width={[1, 1, 1, 1, 7.5 / 12]}>
          <Heading.section>Writing</Heading.section>

          {data.posts.nodes.map(node => (
            <React.Fragment key={node.id}>
              <Box mb={[80, 80, 120]}>
                <Post
                  title={node.title}
                  to={node.slug}
                  date={node.date}
                  content={node.content}
                  render={node.code ? <MDXRenderer>{node.code.body}</MDXRenderer> : undefined}
                  excerpt={node.excerpt}
                />
              </Box>
            </React.Fragment>
          ))}

          <Heading.section>More</Heading.section>

          <Grid>
            {data.olderPosts.nodes.map(node => (
              <Box width={[1, 1 / 2]} key={node.id}>
                <Heading.h3
                  mb="4px"
                  mt={0}
                  fontFamily="mono"
                  fontSize="16px"
                  lineHeight="1.4"
                >
                  <Link
                    to={node.slug}
                    dangerouslySetInnerHTML={{ __html: node.title }}
                  />{' '}
                  →
                </Heading.h3>
                <Text
                  dangerouslySetInnerHTML={{ __html: node.frontmatter ? node.frontmatter.excerpt : node.excerpt }}
                  fontSize="16px"
                  mb={['-16px', '-24px', '-24px']}
                  lineHeight="1.4"
                />
              </Box>
            ))}
          </Grid>
        </Box>
      </Container>
    </Page>
  )
}

export default ThoughtsPage

export const query = graphql`
  query ThoughtsQuery {
    posts: allBlog(filter: { format: { eq: "standard" } }, limit: 1) {
      nodes {
        id
        title
        date(formatString: "MMM D")
        slug
        format
        content
        excerpt
      }
    }

    olderPosts: allBlog(
      filter: { format: { eq: "standard" } }
      skip: 1
      limit: 8
    ) {
      nodes {
        id
        title
        date(formatString: "MMM D")
        slug
        excerpt
      }
    }

    asides: allBlog(filter: { format: { eq: "aside" } }, limit: 25) {
      nodes {
        id
        title
        date(formatString: "MMM D")
        slug
        format
        content
        excerpt
      }
    }
  }
`
