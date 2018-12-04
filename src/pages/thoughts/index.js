import React from 'react'
import Page from 'components/Page'
import { Post } from 'components/Blog'
import { Grid, Box } from 'components/Base'
import Text from 'components/Text'
import Link from 'components/Link'
import Heading from 'components/Heading'
import { graphql } from 'gatsby'

const ThoughtsPage = ({ data }) => {
  return (
    <Page wide title={'Thoughts'} untitled description="What's on my mind, and links to some interesting stuff on the web.">

      <Grid gutter={32}>
        <Box width={[1, 1, 1, 1, 4.5/12]}>
          <Heading.section>Asides</Heading.section>
          {data.asides.edges.map(({node}) => (
            <React.Fragment key={node.id}>
              <Box mb={48}>
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

        <Box width={[1, 1, 1, 1, 7.5/12]}>
          <Heading.section>Writing</Heading.section>
          {data.posts.edges.map(({node}) => (
            <React.Fragment key={node.id}>
              <Box mb={[80, 80, 120]}>
                <Post
                  title={node.title}
                  to={node.slug}
                  date={node.date}
                  content={node.content}
                  excerpt={node.excerpt}
                />
              </Box>
            </React.Fragment>
          ))}

          <Heading.section>More</Heading.section>
          {data.olderPosts.edges.map(({node}) => (
            <React.Fragment key={node.id}>
              <Heading.h3 mb={3} fontFamily='mono'>
                <Link to={node.slug} dangerouslySetInnerHTML={{ __html: node.title }} /> →
              </Heading.h3>
              <Text dangerouslySetInnerHTML={{ __html: node.excerpt }} mb={48} />
            </React.Fragment>
          ))}
        </Box>
      </Grid>
    </Page>
  )
}

export default ThoughtsPage

export const query = graphql`
  query ThoughtsQuery {
    posts: allWordpressPost(filter: {format: {eq: "standard"}}, limit: 1) {
      edges {
        node {
          id
          title
          date(formatString: "MMM D")
          slug
          format
          content
          excerpt
          categories {
            name
          }
        }
      }
    }

    olderPosts: allWordpressPost(filter: {format: {eq: "standard"}}, skip: 1, limit: 5) {
      edges {
        node {
          id
          title
          date(formatString: "MMM D")
          slug
          excerpt
        }
      }
    }

    asides: allWordpressPost(filter: {format: {eq: "aside"}}, limit: 25) {
      edges {
        node {
          id
          title
          date(formatString: "MMM D")
          slug
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
