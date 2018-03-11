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

const QuickLinks = styled.ul`
	background-color: ${colors.primary.gray.light};
	overflow-x: auto;
	padding: 16px;
	border-radius: 12px;
	display: flex;
	list-style: none;
	white-space: nowrap;
	margin: 0;
`

const QuickLink = styled.li`
	display: flex;
	flex: 0 0 auto;
	max-width: 24rem;
	white-space: normal;
	margin: 0;
	font-weight: ${fontWeights.medium};
	align-items: center;
	position: relative;
	padding-right: 16px;

	& + & {
		margin-left: 32px;
	}

	a {
		text-decoration: none;
	}

	&:after {
		content: "";
		position: absolute;
		right: 0;
		height: 80%;
		width: 2px;
		background-color: ${colors.primary.gray.medium};
	}

	&:last-child:after {
		content: none;
	}
`

const QuickLinkImage = styled.div`
	min-width: 96px;
	max-width: 96px;
	padding-right: 16px;
`

const QuickLinkContent = styled.div`
	display: flex;
	flex-direction: column;
	min-height: 60%;
	justify-content: space-between;

	span {
		color: ${colors.text.muted};
		text-transform: uppercase;
		font-size: 12px;
		letter-spacing: 2px;
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

      {!prev && (
				<div>
					<Header><Icon small name='image' /> Recent Images</Header>

		      <ImageShowcase mb={64}>
		        {showcasePhotos.map(({node}, i) =>
		          <Image src={node.source_url} to={`/${data.imagePosts.edges[i].node.slug}`} key={i} />
		  			)}
		      </ImageShowcase>

		      <Header><Icon small name='thought' /> Thoughts</Header>
				</div>
			)}

      {posts.map(({node}, i) => (
        <Row key={i}>
          <Column mb={24} width={1}>
						{i === 1 &&
							<div>
								<QuickLinks>
									{data.dropmark.edges.map(({node}, i) => (
										<QuickLink key={i}>
											<QuickLinkImage>
												{node.preview_url && <Image cover src={node.preview_url} alt={node.title} to={node.link} />}
											</QuickLinkImage>

											<QuickLinkContent>
												<Link to={node.link}>{node.title}</Link>
												<span>{node.collection}</span>
											</QuickLinkContent>
										</QuickLink>
									))}
								</QuickLinks>

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
