import Page from 'components/Page'
import styled from 'styled-components'
import { Post } from 'components/Blog'
import React from 'react'
import { graphql } from 'gatsby'

const Marker = styled.h2`
  display: grid;
  grid-template-columns: auto minmax(20px, 1fr);
  align-items: center;
  width: 100%;
  -webkit-font-smoothing: antialiased;

  span {
    font-size: 0.75rem;
    font-family: var(--font-body);
    color: var(--body-background);
    background: var(--color-accent, var(--color-red));
    border-radius: 999px;
    padding: 4px 12px;
  }
`

export default ({ data, pageContext }) => {
  const post = data.blog

  return (
    <Page
      title={post.title}
      article
      description={post.excerpt}
      header={
        <React.Fragment>
          <Marker className='mt-8 mb-16'><span>{post.date}</span></Marker>
          <h1 className='hyphens'>{post.title}</h1>
        </React.Fragment>
      }
      // aside={
      //   <Sidebar
      //     description={post.excerpt}
      //     relatedItems={data.relatedPosts.nodes}
      //     tags={post.tags}
      //     publishDate={post.date}
      //   />
      // }
    >
      <Post
        content={post.content}
        date={post.date}
        imagePost={post.format === 'image'}
        to={post.slug}
        tags={post.tags}
        isMdx={post.isMdx}
      />
    </Page>
  )
}

export const query = graphql`
  query PostQuery($id: String!, $tags: [String!]) {
    blog(id: { eq: $id }) {
      title
      content
      excerpt
      format
      date(formatString: "MMMM Do, YYYY")
      slug
      shortSlug
      tags {
        name
      }
      isMdx
    }

    relatedPosts: allBlog(
      filter: {
        tags: { elemMatch: { id: { in: $tags } } }
        title: { ne: null }
        id: { ne: $id }
      }
    ) {
      nodes {
        title
        slug
      }
    }
  }
`
