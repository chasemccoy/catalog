import React from 'react'
import styled from 'styled-components'
import Page from 'components/Page'
import Link from 'components/Link'
import { graphql } from 'gatsby'

const Marker = styled.h2`
  display: grid;
  grid-template-columns: auto minmax(20px, 1fr);
  align-items: center;
  width: 100%;
  font-size: 0.9rem;

  span {
    color: var(--color-body-background);
    background: var(--section-color, var(--color-red));
    border-radius: 999px;
    padding: 2px 16px 1px;
  }

  &:after {
    content: '';
    border-top: 2px solid var(--section-color, var(--color-red));
  }
`

const Post = ({
  slug,
  title,
  excerpt,
  tags,
  date,
  content,
  format,
  featured,
  ...rest
}) => (
  <div className='prose' css={`& + & { margin-top: 32px; }`} {...rest}>
    <h3 className='mt-0' css='position: relative;'>
      {featured && <span className='color-section' css='position: absolute; left: -1em;'>✹</span>}
      <Link unstyled to={slug} dangerouslySetInnerHTML={{ __html: title }} />
    </h3>

    {excerpt && <p className='caption'>{excerpt}</p>}

    <p className='caption'>{date}</p>
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
      section='blog'
    >
      {groups.map((group) => (
        <div className='mb-48'>
          <Marker className='mb-20'><span>{group.year}</span></Marker>

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
          featured
          isMdx
          tags {
            name
          }
        }
      }
    }
  }
`
