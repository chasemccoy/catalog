import React from 'react'
import styled from 'styled-components'
import Page from 'components/Page'
import { Post } from 'components/Blog'
import { Grid, Box } from 'components/Base'
import Text from 'components/Text'
import Link from 'components/Link'
import Heading from 'components/Heading'
import { graphql } from 'gatsby'
import media from 'utils/media'

const Container = styled(Grid)`
  ${media.small`
    margin: 0;

    > * {
      padding: 0;
    }
  `};
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

          {data.asides.edges.map(({ node }) => (
            <React.Fragment key={node.id}>
              <Box mb={[40, 40, 48]}>
                <Post
                  aside
                  to={node.fields.fullSlug}
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

          {data.posts.edges.map(({ node }) => (
            <React.Fragment key={node.id}>
              <Box mb={[80, 80, 120]}>
                <Post
                  title={node.title}
                  to={node.fields.fullSlug}
                  date={node.date}
                  content={node.content}
                  excerpt={node.excerpt}
                />
              </Box>
            </React.Fragment>
          ))}

          <Heading.section>More</Heading.section>

          <Grid>
            {data.olderPosts.edges.map(({ node }) => (
              <Box width={[1, 1 / 2]} key={node.id}>
                <Heading.h3
                  mb="4px"
                  fontFamily="mono"
                  fontSize="16px"
                  lineHeight="1.4"
                >
                  <Link
                    to={node.fields.fullSlug}
                    dangerouslySetInnerHTML={{ __html: node.title }}
                  />{' '}
                  →
                </Heading.h3>
                <Text
                  dangerouslySetInnerHTML={{ __html: node.excerpt }}
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
    posts: allWordpressPost(filter: { format: { eq: "standard" } }, limit: 1) {
      edges {
        node {
          id
          title
          date(formatString: "MMM D")
          fields {
            fullSlug
          }
          format
          content
          excerpt
          categories {
            name
          }
        }
      }
    }

    olderPosts: allWordpressPost(
      filter: { format: { eq: "standard" } }
      skip: 1
      limit: 8
    ) {
      edges {
        node {
          id
          title
          date(formatString: "MMM D")
          fields {
            fullSlug
          }
          excerpt
        }
      }
    }

    asides: allWordpressPost(filter: { format: { eq: "aside" } }, limit: 25) {
      edges {
        node {
          id
          title
          date(formatString: "MMM D")
          fields {
            fullSlug
          }
          format
          content
          excerpt
          categories {
            name
          }
        }
      }
    }
  }
`
