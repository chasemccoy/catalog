import React from 'react'
import Page from 'components/Page'
import { Box, Heading, Text, Grid } from '@chasemccoy/kit'
import Link from 'components/Link'
import { graphql } from 'gatsby'
import Sidebar from 'components/Sidebar'
import Tags from 'components/Tags'
import Wide from 'components/Wide'

const Card = ({ children, ...rest }) => (
  <Box
    // border='2px solid black'
    borderRadius='8px'
    bg='black'
    height='300px'
    display='flex'
    css={`
      & > div {
        transition: all 0.1s ease-in;
      }

      &:hover > div {
        transform: translate(-6px, -6px);
      }
    `}
    {...rest}
  >
    <Box bg='accent.pop' borderRadius='6px' border='2px solid black' width={1}>
      {children}
    </Box>
  </Box>
)

const Post = ({ slug, title, excerpt, tags, ...rest }) => (
  <Box {...rest}>
    <Heading.h3 m={0}>
      <Link unstyled to={slug} dangerouslySetInnerHTML={{ __html: title }} />
    </Heading.h3>

    {excerpt && (
      <Text as='p' mt={8} mb={16} color='gray.4'>
        {excerpt}
      </Text>
    )}

    {tags && <Tags items={tags} />}
  </Box>
)

const ArchivePage = ({ data }) => {
  const groups = data.posts.group.sort(
    (a, b) => parseInt(b.year) - parseInt(a.year)
  )

  return (
    <Page title='Archive' untitled aside={<Sidebar />} article>
      <Wide right={false}>
        <Box bg='accent.pop' p={40} mb={64}>
          <Grid overflow='visible'>
            <Box width={1 / 4}>
              <Card />
            </Box>
            <Box width={1 / 4}>
              <Card />
            </Box>
            <Box width={1 / 4}>
              <Card />
            </Box>
            <Box width={1 / 4}>
              <Card />
            </Box>
          </Grid>
        </Box>
      </Wide>

      {groups.map((group) => (
        <Box mb={32}>
          <Heading.h2 fontSize='1.8em'>{group.year}</Heading.h2>

          {group.nodes.map((node, i) => (
            <Post
              mb={48}
              mt={i === 0 ? '-2rem' : null}
              key={node.id}
              {...node}
            />
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
      limit: 20
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
          tags {
            name
          }
        }
      }
    }
  }
`
