import React, { useState } from 'react'
import Page from 'components/Page'
import Link from 'components/Link'
import { graphql } from 'gatsby'
import Marker from 'components/Marker'

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
      <Link unstyled to={slug} dangerouslySetInnerHTML={{ __html: title }} />
    </h3>

    {excerpt && <p className='color-gray--500 mt-4'>{excerpt}</p>}
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
          <Marker className='mb-20'>{group.year}</Marker>

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
