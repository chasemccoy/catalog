import React from 'react'
import Page from 'components/Page'
import { Post } from 'components/Blog'
import { Box, Heading } from '@chasemccoy/kit'
import Link from 'components/Link'
import { graphql } from 'gatsby'
import Wide from 'components/Wide'
import Sidebar from 'components/Sidebar'

const ShortPost = ({ slug, title }) => (
  <Heading.h3 fontSize='24px' m={0}>
    <Link unstyled to={slug} dangerouslySetInnerHTML={{ __html: title }} />
  </Heading.h3>
)

const LongPost = ({ title, slug, date, content, excerpt, isMdx }) => (
  <Post
    title={title}
    to={slug}
    date={date}
    content={content}
    excerpt={excerpt}
    isMdx={isMdx}
  />
)

const ArchivePage = ({ data }) => {
  const groups = data.posts.group.sort(
    (a, b) => parseInt(b.year) - parseInt(a.year)
  )

  return (
    <Page title='Archive' untitled aside={<Sidebar />}>
      {groups.map((group) => (
        <React.Fragment>
          <Wide borderTop='1px solid' borderColor='gray.2' mb={24}>
            <Heading.h2 mb={0} mt={16} fontSize='1.8em'>
              {group.year}
            </Heading.h2>
          </Wide>

          <Box mt={-52}>
            {group.nodes.map((node) => {
              if (node.title) {
                return (
                  <Box mb={48} key={node.id}>
                    <ShortPost {...node} />
                  </Box>
                )
              } else {
                return (
                  <Box mb={48} key={node.id}>
                    <LongPost {...node} />
                  </Box>
                )
              }
            })}
          </Box>
        </React.Fragment>
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
