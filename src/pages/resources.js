import React from 'react'
import Link from 'components/Link'
import { graphql } from 'gatsby'
import Page from 'components/Page'
import { Text } from '@chasemccoy/kit'
import Heading from 'components/Heading'
import Nav from 'components/Nav'

export const ResourceNav = () => (
  <Nav mt={4} mb={8}>
    <Nav.Item to='/books'>Books</Nav.Item>
    <Nav.Item to='/chicago'>Chicago</Nav.Item>
    <Nav.Item to='/music'>Music</Nav.Item>
    <Nav.Item to='/quotes'>Quotes</Nav.Item>
  </Nav>
)

const ResourcesPage = ({ data }) => {
  return (
    <Page title="Resources" icon="heart" description='The best of the best.'>
      <Text.p mb={9}>
        Below are some things in various categories that I love. I think you can
        tell a lot about a person by paying attention to what they pay attention
        to, so here are the things that capture my attention.
      </Text.p>

      <Link to='/books'><Heading.section>Books</Heading.section></Link>

      <Text.p mb={9}>
        Below are some things in various categories that I love. I think you can
        tell a lot about a person by paying attention to what they pay attention
        to, so here are the things that capture my attention.
      </Text.p>

      <Link to='/chicago'><Heading.section>Chicago</Heading.section></Link>

      <Text.p mb={9}>
        Below are some things in various categories that I love. I think you can
        tell a lot about a person by paying attention to what they pay attention
        to, so here are the things that capture my attention.
      </Text.p>

      <Link to='/music'><Heading.section>Music</Heading.section></Link>

      <Text.p mb={9}>
        Below are some things in various categories that I love. I think you can
        tell a lot about a person by paying attention to what they pay attention
        to, so here are the things that capture my attention.
      </Text.p>

      <Link to='/quotes'><Heading.section>Quotes</Heading.section></Link>

      <Text.p mb={9}>
        Below are some things in various categories that I love. I think you can
        tell a lot about a person by paying attention to what they pay attention
        to, so here are the things that capture my attention.
      </Text.p>
    </Page>
  )
}

export default ResourcesPage

export const query = graphql`
  query ResourcesQuery {
    chicago: allChicagoHJson(sort: { fields: [title], order: ASC }) {
      edges {
        node {
          title
          description
          url
          image
        }
      }
    }

    books: allBooksHJson(sort: { fields: [title], order: ASC }) {
      edges {
        node {
          title
          metadata
          description
          url
          image {
            childImageSharp {
              sizes(maxWidth: 900) {
                ...GatsbyImageSharpSizes
              }
            }
          }
        }
      }
    }

    quotes: allQuotesHJson(sort: { fields: [metadata], order: ASC }) {
      edges {
        node {
          content
          metadata
          tags
        }
      }
    }

    music: allMusicHJson(sort: { fields: [title], order: ASC }) {
      edges {
        node {
          title
          metadata
          description
          url
          image {
            childImageSharp {
              sizes(maxWidth: 900) {
                ...GatsbyImageSharpSizes
              }
            }
          }
        }
      }
    }

    apps: allAppsHJson(sort: { fields: [title], order: ASC }) {
      edges {
        node {
          title
          metadata
          description
          url
          image {
            childImageSharp {
              sizes(maxWidth: 900, toFormat: PNG) {
                ...GatsbyImageSharpSizes
              }
            }
          }
        }
      }
    }

    code: allGithubStarredrepositories {
      edges {
        node {
          name
          url
          description
          owner {
            login
          }
        }
      }
    }
  }
`
