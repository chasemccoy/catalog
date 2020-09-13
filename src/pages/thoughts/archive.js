import React from 'react'
import Page from 'components/Page'
// import { Post } from 'components/Blog'
import { Box, Heading, Text } from '@chasemccoy/kit'
import Link from 'components/Link'
import { graphql } from 'gatsby'
import Wide from 'components/Wide'
import Sidebar from 'components/Sidebar'

const ShortPost = ({ slug, title, excerpt }) => (
  <Box>
    <Heading.h3 m={0}>
      <Link unstyled to={slug} dangerouslySetInnerHTML={{ __html: title }} />
    </Heading.h3>

    {excerpt && (
      <Text as='p' mt={8} color='gray.4'>
        {excerpt}
      </Text>
    )}
  </Box>
)

const ArchivePage = ({ data }) => {
  const groups = data.posts.group.sort(
    (a, b) => parseInt(b.year) - parseInt(a.year)
  )

  return (
    <Page title='Archive' untitled aside={<Sidebar />} article>
      {groups.map((group) => (
        <Box mb={32}>
          <Heading.h2 fontSize='1.8em'>{group.year}</Heading.h2>

          {group.nodes.map((node, i) => (
            <Box mb={40} mt={i === 0 ? '-2rem' : null} key={node.id}>
              <ShortPost {...node} />
            </Box>
          ))}
        </Box>
      ))}
    </Page>
  )
}

export default ArchivePage

export const query = graphql`
  query ArchiveQuery {
    posts: allBlog(
      filter: { format: { nin: ["image", "aside"] } }
      sort: { fields: date, order: DESC }
    ) {
      group(field: year) {
        year: fieldValue
        nodes {
          id
          title
          date(formatString: "MMMM Do, YYYY")
          slug
          format
          content
          excerpt
          isMdx
        }
      }
    }
  }
`
