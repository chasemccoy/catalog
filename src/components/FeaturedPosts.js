import React from 'react'
import { useStaticQuery, graphql } from 'gatsby'
import Link from 'components/Link'
import { Box } from '@chasemccoy/kit'
import media from 'utils/media'

const Card = ({ title, excerpt, slug, ...rest }) => (
  <Link
    to={slug}
    unstyled
    display='flex'
    height='100%'
    ml={-1}
    css={`
      background: repeating-linear-gradient(
        -55deg,
        var(--color-accent),
        var(--color-accent) 2px,
        #000 2px,
        #000 3px
      );

      color: inherit;

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
      bg='var(--color-accent)'
      border='1px solid black'
      px={24}
      py={24}
      width={1}
      display='flex'
      flexDirection='column'
      justifyContent='space-between'
      className='prose'
    >
      <h2
        className='lead hyphens mt-0'
        css='font-size: 1.3em; line-height: 1.3; color: inherit;'
        dangerouslySetInnerHTML={{ __html: title }}
      />

      <p
        className='smaller mt-12'
        dangerouslySetInnerHTML={{ __html: excerpt }}
      />
    </Box>
  </Link>
)

const FeaturedPosts = (props) => {
  const { posts } = useStaticQuery(query)

  return (
    <Box
      bg='var(--color-accent)'
      css={`
        color: var(--color-body-background);
        --color-accent: var(--color-purple);

        ${media.small`
          width: calc(100% + 32px);
          margin-left: -16px;
        `}
      `}
      {...props}
    >
      <Box display='flex' flexWrap='wrap' flex='1 1 0%'>
        {posts.nodes.map((node, i) => (
          <Box
            css='flex-grow: 1; flex-shrink: 1;'
            flexBasis={['100%', null, '50%']}
            mt={[-1]}
          >
            <Card {...node} />
          </Box>
        ))}
      </Box>
    </Box>
  )
}

export default FeaturedPosts

const query = graphql`
  query FeaturedPostsQuery {
    posts: allBlog(
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
  }
`
