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

const Header = styled.h2.attrs({
	className:  'sans'
})`
  font-size: 14px;
  color: ${colors.primary.purple} !important;
  text-transform: uppercase;
  letter-spacing: 1px;
  font-weight: ${fontWeights.bold};
`

const PaginationLink = styled(Link)`
	padding: 8px 16px;
	background-color: ${colors.primary.lightBlue};
	color: ${colors.primary.blue} !important;
	border-radius: 8px;
	display: block;
	text-decoration: none;

	& + & {
		margin-left: 24px;
	}
`

const BlogPage = ({data, pathContext}) => {
  const imagePosts = data.imagePosts.edges.map(({node}) => node.slug)

  const showcasePhotos = data.images.edges.filter(({node}) =>
    imagePosts.some(post => post == node.post)
  );

	const { nodes, page, prev, next } = pathContext;

  return (
    <Page narrow>
      {!prev && (
				<div>
				<Header><Icon small name='image' /> Recent Images</Header>

	      <ImageShowcase mb={40}>
	        {showcasePhotos.map(({node}, i) =>
	          <Image src={node.source_url} to={`/${data.imagePosts.edges[i].node.slug}`} key={i} />
	  			)}
	      </ImageShowcase>

	      <Header><Icon small name='thought' /> Thoughts</Header>
				</div>
			)}

      {nodes.map(({node}, i) => (
        <Row key={i}>
          <Column mb={24} width={1}>
            {(node.format == 'aside' || node.format == 'image') &&
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
      ))}

			<Row>
				{prev && <PaginationLink to={prev}>Newer</PaginationLink>}
				{next && <PaginationLink to={next}>Older</PaginationLink>}
			</Row>
    </Page>
  )
}

export default BlogPage

export const query = graphql`
  query BlogQuery {
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
