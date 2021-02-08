import Page from 'components/Page'
import { Post } from 'components/Blog'
import React from 'react'
import { graphql } from 'gatsby'

export default ({ data, pageContext }) => {
  const post = data.blog

  return (
    <Page
      title={post.title}
      article
      description={post.excerpt}
      section='blog'
      header={
        <div className='mb-24 prose'>
          <h2 className='badge mb-16'>Blog post</h2>

          <h1 className='hyphens'>{post.title}</h1>

          <p className='lead mt-8 color-caption'>{post.excerpt}</p>

          <p className='smaller mt-16'>
            <span className='color-caption bold'>{post.date}</span>
            {post.tags && (
              <React.Fragment>
                <span className='color-gray--400'> × </span>
                <span className='color-caption'>
                  {post.tags.map((tag) => tag.name).join(', ')}
                </span>
              </React.Fragment>
            )}
          </p>

          <hr
            css={`
              background: none;
              border-top: 1px dashed var(--color-border);
              height: 1px;
            `}
            className='mt-24'
          />
        </div>
      }
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
