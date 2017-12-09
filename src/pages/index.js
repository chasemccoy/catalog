import React from 'react'
import styled from 'styled-components'
import Page from '../components/Page'
import { Link } from '../components/Components'
import List from '../components/Lists'
import Card from '../components/Card'
import Image from '../components/Image'
import { Row, Column } from '../components/Grid'
import { colors, fontWeights } from '../utils/design'

const Token = styled(Card).attrs({
	highlight: 'true',
})`
	padding: 8px;
  font-size: 14px;
  color: ${colors.sidebar.link.selected};
  font-weight: ${fontWeights.medium};
  letter-spacing: .03em;
  line-height: 1.3;
`

const IndexPage = ({data}) => {
  return (
    <Page
      title='Chase McCoy is a design developer living in Chicago that spends a lot of time thinking about how the web works.'
    >
      <Row mb={40}>
        <Column width={[1/2, 1/3]}>
          <Token>Chicago, IL</Token>
        </Column>

        <Column width={[1/2, 1/3]}>
          <Token>@chase_mccoy</Token>
        </Column>

        <Column width={[1, 1/3]}>
          <Token>desk@chasemccoy.net</Token>
        </Column>
      </Row>

      <Row mb={40}>
        <Column width={[1.8/5]}>
          <Image src={'/meta/chase.jpg'} />
        </Column>

        <Column width={[3.2/5]}>
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
        </Column>
      </Row>

      <List ordered highlight>
        <li>One</li>
        <li>Two</li>
        <li>Three</li>
      </List>

      <Row mb={40}>
        <Column width={[1, 1/2]}>
          <Card highlight>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</Card>
        </Column>

        <Column width={[1, 1/2]}>
          <Card highlight>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</Card>
        </Column>

        <Column width={[1, 1/2]}>
          <Card highlight>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</Card>
        </Column>

        <Column width={[1, 1/2]}>
          <Card highlight>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</Card>
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
