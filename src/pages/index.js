import React from 'react'
import Page from '../components/Page'
import { Link } from '../components/Components'
import Bookmark from '../components/Bookmark'
import Image from '../components/Image'
import { Row, Column } from '../components/Grid'

const IndexPage = ({data}) => {
  return (
    <Page
      title='Chase McCoy is a design developer living in Chicago that spends a lot of time thinking about how the web works.'
    >
      <Row mb={40}>
        <Column width={[2/5]}>
          <Image src={'/meta/chase.jpg'} />
        </Column>

        <Column width={[3/5]}>
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
        </Column>
      </Row>

      {data.allMarkdownRemark.edges.map(({node}) =>
        <div key={node.id}>
          <article>
            <h3>
              <Link to={node.fields.slug}>{node.frontmatter.title}</Link>
            </h3>

            <div dangerouslySetInnerHTML={{ __html: node.html }} />
          </article>
        </div>
      )}
    </Page>
  )
}

export default IndexPage

export const query = graphql`
  query IndexQuery {
    allMarkdownRemark {
      edges {
        node {
          id
          frontmatter {
            title
          }
          fields {
            slug
          }
          timeToRead
          html
        }
      }
    }
  }
`
