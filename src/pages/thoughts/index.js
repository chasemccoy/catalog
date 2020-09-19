import React from 'react'
import Page from 'components/Page'
import { Box, Heading, Text, Grid } from '@chasemccoy/kit'
import Link from 'components/Link'
import { graphql } from 'gatsby'
import Sidebar from 'components/Sidebar'
import Tags from 'components/Tags'
import Wide from 'components/Wide'
import media from 'utils/media'

const Card = ({
  title = 'Testing a card for posts',
  excerpt,
  slug,
  ...rest
}) => (
  <Link
    to={slug}
    unstyled
    display='flex'
    height='100%'
    ml={-1}
    mt={-1}
    css={`
      background: repeating-linear-gradient(
        -55deg,
        ${(p) => p.theme.colors.accent.pop},
        ${(p) => p.theme.colors.accent.pop} 2px,
        #000 2px,
        #000 3px
      );

      &:hover {
        color: inherit;
      }

      & > div {
        transition: all 0.1s ease-in;
      }

      &:hover > div {
        transform: translate(-8px, -8px);
      }
    `}
    {...rest}
  >
    <Box
      bg='accent.pop'
      border='1px solid black'
      px={24}
      py={32}
      width={1}
      display='flex'
      flexDirection='column'
      justifyContent='space-between'
    >
      <Text
        as='h2'
        className='inline no-border'
        fontFamily='sans'
        fontWeight='heavy'
        dangerouslySetInnerHTML={{ __html: title }}
        css='hyphens: auto;'
      />

      <Text
        as='p'
        fontSize='0.8em'
        mt={-12}
        mb={0}
        dangerouslySetInnerHTML={{ __html: excerpt }}
      />
    </Box>
  </Link>
)

const Post = ({ slug, title, excerpt, tags, date, ...rest }) => (
  <Box {...rest}>
    <Heading.h3 m={0} fontSize='1.5rem'>
      <Link unstyled to={slug} dangerouslySetInnerHTML={{ __html: title }} />
    </Heading.h3>

    {excerpt && (
      <Text as='p' mt={8} mb={12} color='gray.4'>
        {excerpt}
      </Text>
    )}

    <Box display='flex' alignItems='center'>
      <Text fontSize='0.8em' color='gray.4' mr={24}>
        {date}
      </Text>
      {tags && <Tags items={tags} />}
    </Box>
  </Box>
)

const ArchivePage = ({ data }) => {
  const groups = data.posts.group.sort(
    (a, b) => parseInt(b.year) - parseInt(a.year)
  )

  return (
    <Page title='Archive' untitled aside={<Sidebar />} article>
      <Wide right={false}>
        <Box
          bg='accent.pop'
          mb={64}
          css={`
            ${media.small`
              width: calc(100% + 32px);
              margin-left: -16px;
            `}
          `}
        >
          <Box display='flex' flexWrap='wrap'>
            <Box
              display='flex'
              flexDirection='column'
              justifyContent={['flex-start', null, null, 'flex-end']}
              flexBasis={['100%', null, null, '0%']}
              pt={12}
              pb={[12, null, null, 0]}
              px={8}
              pl={[24, 24, 12, 32]}
              css={`
                writing-mode: vertical-rl;
                transform: rotate(-180deg);

                ${media.medium`
                  writing-mode: initial;
                  transform: none;
                `}
              `}
            >
              <Text fontFamily='code' fontSize='0.8em'>
                Featured posts
              </Text>
            </Box>

            <Box display='flex' flexWrap='wrap' flex='1 1 0%'>
              {data.featuredPosts.nodes.map((node, i) => (
                <Box
                  css='flex-grow: 1; flex-shrink: 1;'
                  flexBasis={['100%', null, '31%', '23%']}
                  mt={[-1, null, null, 0]}
                >
                  <Card {...node} />
                </Box>
              ))}
            </Box>
          </Box>
        </Box>
      </Wide>

      {groups.map((group) => (
        <Box mb={32}>
          <Heading.h2
            fontSize='1.6em'
            fontFamily='sans'
            fontWeight='heavy'
            color='gray.5'
            mb={72}
          >
            {group.year}
          </Heading.h2>

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
    featuredPosts: allBlog(
      filter: { featured: { eq: true } }
      sort: { fields: date, order: DESC }
      limit: 4
    ) {
      nodes {
        title
        excerpt
        date
        slug
      }
    }

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
          date(formatString: "MMMM Do")
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
