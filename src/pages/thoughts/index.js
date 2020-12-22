import React from 'react'
import Page from 'components/Page'
import Link from 'components/Link'
import { graphql } from 'gatsby'
import FeaturedPosts from 'components/FeaturedPosts'

const Post = ({
  slug,
  title,
  excerpt,
  tags,
  date,
  content,
  format,
  ...rest
}) => (
  <div className='prose' {...rest}>
    <h3>
      <Link unstyled to={slug} dangerouslySetInnerHTML={{ __html: title }} />
    </h3>

    {excerpt && <p>{excerpt}</p>}

    <div>{date}</div>
  </div>
)

const ThoughtsPage = ({ data }) => {
  const groups = data.posts.group.sort(
    (a, b) => parseInt(b.year) - parseInt(a.year)
  )

  return (
    <Page
      title='Thoughts'
      description="What's on my mind, and links to some interesting stuff on the web."
      untitled
    >
      <FeaturedPosts />

      {groups.map((group) => (
        <div className='mb-32'>
          <h2>{group.year}</h2>

          {group.nodes.map((node, i) => (
            <Post
              mb={48}
              mt={i === 0 ? '-2rem' : null}
              key={node.id}
              {...node}
            />
          ))}
        </div>
      ))}
    </Page>
  )
}

export default ThoughtsPage

export const query = graphql`
  query ArchiveQuery {
    posts: allBlog(
      filter: { format: { nin: ["image", "aside"] } }
      sort: { fields: date, order: DESC }
      limit: 22
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
