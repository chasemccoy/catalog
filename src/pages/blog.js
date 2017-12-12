import React from 'react'
import styled from 'styled-components'
import Page from '../components/Page'
import { Link } from '../components/Components'
import { Row, Column } from '../components/Grid'

const Aside = props => (
  <div dangerouslySetInnerHTML={{ __html: props.content }} />
)

const Post = props => (
  <h3><Link to={`/${props.to}`}>{props.title}</Link></h3>
)

const BlogPage = ({data}) => {
  return (
    <Page>
      {data.posts.edges.map(({node}, i) => (
        node.format != 'image' && (<Row mb={40} key={i}>
          <Column>
            {node.format == 'aside' && <Aside content={node.content} />}

            {node.format == 'standard' && <Post title={node.title} to={node.slug} />}

            {node.format == 'image' && null}
          </Column>
        </Row>)
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
          slug
          format
          content
        }
      }
    }
  }
`
