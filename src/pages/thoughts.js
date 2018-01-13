import { Column, Row } from 'components/Grid'
import { colors, fontWeights } from 'utils/design'

import Divider from 'components/Divider'
import Icon from 'components/Icon'
import Image from 'components/Image'
import { ImageShowcase } from 'components/Image'
import { Link } from 'components/Components'
import Page from 'components/Page'
import { Post } from 'components/Blog'
import React from 'react'
import styled from 'styled-components'

const Header = styled.h2`
  font-size: 14px;
  color: ${colors.primary.purple} !important;
  text-transform: uppercase;
  letter-spacing: 1px;
  font-weight: ${fontWeights.bold};
`

const BlogPage = ({data}) => {
  const imagePosts = data.imagePosts.edges.map(({node}) => node.slug)

  const showcasePhotos = data.images.edges.filter(({node}) =>
    imagePosts.some(post => post === node.post)
  );

  return (
    <Page narrow>
      <Icon small name='image' /><Header>Recent Images</Header>
      <ImageShowcase mb={40}>
        {showcasePhotos.map(({node}, i) =>
          <Image src={node.source_url} to={`/${data.imagePosts.edges[i].node.slug}`} key={i} />
  			)}
      </ImageShowcase>

      <Icon small name='thought' /><Header>Thoughts</Header>
      {data.posts.edges.map(({node}, i) => (
        node.format != 'image' && (
          <Row key={i}>
            <Column mb={24} width={1}>
              {node.format == 'aside' &&
                <Post
                  aside
                  to={node.slug}
                  content={node.content}
                  date={node.date}
                />
              }

              {node.format == 'standard' &&
                <Post
                  title={node.title}
                  to={node.slug}
                  date={node.date}
                  excerpt={node.excerpt}
                />
              }

              {node.format == 'image' && null}
            </Column>

            <Column mb={24} width={1}><Divider /></Column>
          </Row>
        )
      ))}
    </Page>
  )
}

export default BlogPage

export const query = graphql`
  query BlogQuery {
    posts: allWordpressPost {
      edges {
        node {
          title
          date(fromNow: true)
          slug
          format
          content
          excerpt
        }
      }
    }

    images: allWordpressWpMedia {
      edges {
        node {
          source_url
          post
        }
      }
    }

    imagePosts: allWordpressPost(limit: 3, filter: {format: {eq: "image"}}) {
      edges {
        node {
          slug
        }
      }
    }
  }
`
