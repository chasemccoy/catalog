import React from 'react'
import styled from 'styled-components'
import Link from 'components/Link'
import { graphql } from 'gatsby'
import Page from 'components/Page'
import { capitalize } from 'utils/js'
import { Grid, Box } from 'components/Base'
import Text from 'components/Text'

const Tile = styled(Link)`
  display: block;
  border-radius: 8px;
  color: ${p => p.theme.colors.gray[4]};
  background: ${p => p.theme.colors.gray[0]};
  padding: 16px;
  font-family: ${p => p.theme.fonts.mono};
  font-weight: normal;
  border: 1px solid ${p => p.theme.colors.gray[1]};

  &:hover {
    transform: scale(1.05);
  }
`

const Title = styled.h4`
  margin: 0;
`

const ResourcesPage = ({ data }) => {
  return (
    <Page title="Resources" icon="heart" description='The best of the best.'>
      <Text.p mb={7}>
        Below are some things in various categories that I love. I think you can
        tell a lot about a person by paying attention to what they pay attention
        to, so here are the things that capture my attention.
      </Text.p>

      <Grid>
        {Object.keys(data).map((item, i) => (
          <Box width={[1, 1/2, 1/3]} key={i}>
            <Title>
              <Tile to={`/${item}`}>{capitalize(item)} &rarr;</Tile>
            </Title>
          </Box>
        ))}
      </Grid>
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
