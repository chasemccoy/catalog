import React, { useState } from 'react'
import styled from 'styled-components'
import Page from 'components/Page'
import Link from 'components/Link'
import { graphql } from 'gatsby'

const Marker = styled.div`
  display: grid;
  grid-template-columns: auto minmax(20px, 1fr);
  align-items: center;
  width: 100%;
  font-size: 0.9rem;

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
  <div
    className='prose'
    css={`
      & + & {
        margin-top: 32px;
      }
    `}
    {...rest}
  >
    <h3 className='mt-0' css='position: relative;'>
      {/* {featured && <span className='color-section' css='position: absolute; left: -1em;'>✹</span>} */}
      <Link unstyled to={slug} dangerouslySetInnerHTML={{ __html: title }} />
    </h3>

    {excerpt && <p className='color-gray--500 mt-8'>{excerpt}</p>}

    {/* <p className='caption mono'>{date}</p> */}
  </div>
)

const ThoughtsPage = ({ data: { posts, tags } }) => {
  const initialData = posts.group.sort(
    (a, b) => parseInt(b.year) - parseInt(a.year)
  )
  const [groups] = useState(initialData)


  // const filterData = (filter) => {
  //   console.log(initialData)
  //   if (filter) {
  //     const filteredGroups = initialData.map((group) => {
  //       return {
  //         ...group,
  //         posts: group.posts.filter((post) => {
  //           if (post.tags) {
  //             const postTags = post.tags.map((tag) => tag.name)
  //             return postTags.includes(filter)
  //           }

  //           return false
  //         })
  //       }
  //     })

  //     setGroups(
  //       filteredGroups.filter((group) => group.posts && group.posts.length > 0)
  //     )
  //   } else {
  //     setGroups(initialData)
  //   }
  // }

  return (
    <Page
      title='Thoughts'
      description="What's on my mind, and links to some interesting stuff on the web."
      untitled
      section='blog'
    >
      {/* {tags.names.map((tag) => (
        <button onClick={() => filterData(tag)}>
          <span className='badge'>{tag}</span>
        </button>
      ))} */}

      {groups.map((group) => (
        <div className='mb-48'>
          <Marker className='mb-20'>
            <h2 className='badge larger'>{group.year}</h2>
          </Marker>

          {group.posts.map((node, i) => (
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
    tags: allBlog {
      names: distinct(field: tags___name)
    }

    posts: allBlog(sort: { fields: date, order: DESC }) {
      group(field: year) {
        year: fieldValue
        posts: nodes {
          id
          title
          date(formatString: "MMMM Do")
          slug
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
