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
import Helmet from 'react-helmet'
import QuickLinks from 'components/QuickLinks'
import { BlogHeader } from 'components/Components'

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
  )

	const { nodes, page, prev, next } = pathContext;

	const posts = nodes.filter(({node}) =>
		!showcasePhotos.some(post => post.node.post == node.slug)
	)

  return (
    <Page narrow>
			<Helmet title={`Thoughts | Chase McCoy`} />

			<BlogHeader><Icon small name='thought' /> Thoughts</BlogHeader>

      {posts.map(({node}, i) => (
        <Row key={i}>
          <Column mb={24} width={1}>
						{i === 1 &&
							<div>
								<QuickLinks data={data.dropmark.edges} />
								<Column mt={24} mb={48} width={1}><Divider /></Column>
							</div>
						}

						{i === 3 &&
							<div>
								<BlogHeader><Icon small name='image' /> Recent Images</BlogHeader>
								<ImageShowcase>
					        {showcasePhotos.map(({node}, i) =>
					          <Image src={node.source_url} to={`/${data.imagePosts.edges[i].node.slug}`} key={i} />
					  			)}
					      </ImageShowcase>
								<Column mt={24} mb={48} width={1}><Divider /></Column>
							</div>
						}

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

		dropmark: allDropmark(limit: 20, sort: {fields: [date], order: DESC}) {
	    edges {
	      node {
	        title
	        description
	        link
	        date
					preview_url
					collection
	      }
	    }
	  }
  }
`
