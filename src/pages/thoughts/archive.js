import React from 'react'
import Page from 'components/Page'
import { Post } from 'components/Blog'
import { Box, Heading } from '@chasemccoy/kit'
import Link from 'components/Link'
import { graphql } from 'gatsby'

const ShortPost = ({ slug, title }) => (
  <Heading.h2 mb={0} mt={0}>
    <Link to={slug} dangerouslySetInnerHTML={{ __html: title }} />
  </Heading.h2>
)

const LongPost = ({ title, slug, date, content, excerpt }) => (
  <Post
    aside
    title={title}
    to={slug}
    date={date}
    content={content}
    excerpt={excerpt}
  />
)

const ArchivePage = ({ data }) => {
  const groups = data.posts.group.sort(
    (a, b) => parseInt(b.year) - parseInt(a.year)
  )

  return (
    <Page title='Archive' untitled>
      {groups.map(group => (
        <Box key={group.year}>
          <Box bg='gray.1'>
            <Heading.h2>{group.year}</Heading.h2>
          </Box>

          {group.nodes.map(node => {
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
      ))}

      {/* {data.posts.nodes.map(node => {
        if (node.title) {
          return (
            <Box mb={48}>
              <ShortPost {...node} />
            </Box>
          )
        }
        else {
          return (
            <Box mb={48}>
              <LongPost {...node} />
            </Box>
          )
        }
      })} */}
    </Page>
  )
}

export default ArchivePage

export const query = graphql`
  query ArchiveQuery {
    posts: allBlog(
      filter: { format: { nin: ["image"] } }
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
        }
      }
    }
  }
`

// export const query = graphql`
//   query ArchiveQuery {
//     posts: allBlog(filter: {format: {nin: ["image"]}}) {
//       nodes {
//         id
//         title
//         date(formatString: "MMMM Do, YYYY")
//         slug
//         format
//         content
//         excerpt
//       }
//     }
//   }
// `
