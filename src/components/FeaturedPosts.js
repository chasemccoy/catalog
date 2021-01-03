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
    borderRadius='8px'
    css={`
      background: repeating-linear-gradient(
        -55deg,
        var(--color-accent),
        var(--color-accent) 0.5px,
        #000 0.5px,
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
      px={20}
      py={16}
      width={1}
      display='flex'
      flexDirection='column'
      justifyContent='space-between'
      className='prose'
      borderRadius='8px'
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

// const FeaturedPosts = (props) => {
//   const { posts } = useStaticQuery(query)

//   return (
//     <Box
//       css={`
//         color: var(--color-body-background);
//         --color-accent: var(--color-purple);
//       `}
//       {...props}
//     >
//       <Box display='flex' flexWrap='wrap' flex='1 1 0%' m={-6}>
//         {posts.nodes.map((node, i) => (
//           <Box
//             css='flex-grow: 1; flex-shrink: 1;'
//             flexBasis={['100%', null, '50%']}
//             p={6}
//           >
//             <Card {...node} />
//           </Box>
//         ))}
//       </Box>
//     </Box>
//   )
// }

const FeaturedPosts = (props) => {
  const { posts } = useStaticQuery(query)

  return (
    <React.Fragment>
      <h3
        className='mt-24 color-gray--500'
        css='font-size: .7rem !important; font-weight: normal;'
      >
        Featured writing
      </h3>

      <p className='mt-4 serif larger'>
        {posts.nodes.map((node, i) => (
          <React.Fragment>
            {!!i && <span className='color-gray--500 mx-8'>×</span>}
            <span>
              <Link to={node.slug} css={`text-decoration-color: var(--color-gray--600);`}>
                {node.title}
              </Link>
            </span>
          </React.Fragment>
        ))}
      </p>
    </React.Fragment>
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
