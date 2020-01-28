import React, { useContext } from 'react'
import styled, { css } from 'styled-components'
import { Box, Text, Grid } from '@chasemccoy/kit'
import Page from 'components/NewPage'
import Image from 'components/Image'
import { useStaticQuery, graphql } from 'gatsby'
import Link from 'components/Link'
import { UnorderedList } from 'components/Lists'
import { DataContext } from 'components/Layout'

const border = {
  borderBottom: '.5px solid',
  borderColor: 'rgba(0, 0, 0, 0.3)'
}

const Container = styled.footer(
  p => css`
    padding: 40px 0;

    a:hover,
    a:focus {
      text-decoration: underline;
      color: inherit;
      color: rgba(0, 0, 0, 0.7);
    }
  `
)

const Blogroll = ({ items, ...rest }) => (
  <UnorderedList
    css={`
      font-size: 14px;
    `}
    {...rest}
  >
    {items.nodes.map(({ data }) => (
      <Box as='li' mb={4} key={data.url}>
        <Link to={data.url}>{data.title}</Link>
      </Box>
    ))}
  </UnorderedList>
)

const Currently = ({ nowPlaying, weather }) => (
  <UnorderedList mb={0}>
    <Box as='li' mb={8}>
      Working on <Link to='https://sproutsocial.com/seeds'>Seeds</Link> at{' '}
      <Link to='https://sproutsocial.com'>Sprout Social</Link>
    </Box>
    <Box as='li' mb={8}>
      {nowPlaying ? (
        <React.Fragment>
          Listening to {nowPlaying.name} by {nowPlaying.artist} on{' '}
          <Link to='https://open.spotify.com/user/22n2eydjrvftle33bi3t4v2pi?si=GAaVgz0FTk-4J4eUPNWBqQ'>
            Spotify
          </Link>
        </React.Fragment>
      ) : (
        'Loading...'
      )}
    </Box>
    <Box as='li'>
      {weather ? (
        <React.Fragment>{weather.temperature} in Chicago</React.Fragment>
      ) : (
        'Loading...'
      )}
    </Box>
  </UnorderedList>
)

const Footer = ({ ...rest }) => {
  const { posts, blogroll } = useStaticQuery(query)
  const data = useContext(DataContext)

  return (
    <Box {...rest}>
      <Grid>
        <Box width={[1, 1, 1 / 2]}></Box>

        <Box width={[1, 1, 1 / 2]}></Box>
      </Grid>
    </Box>
  )
}

export default () => (
  <React.Fragment>
    <Container>
      <Page.Wrapper>
        <Footer />
      </Page.Wrapper>
    </Container>
  </React.Fragment>
)

const query = graphql`
  query FooterQuery {
    posts: allBlog(
      filter: { format: { eq: "standard" } }
      sort: { fields: date, order: DESC }
      limit: 5
    ) {
      nodes {
        id
        title
        slug
        excerpt
        date(formatString: "MMMM Do")
      }
    }

    blogroll: allAirtable(filter: { queryName: { eq: "blogroll" } }) {
      nodes {
        data {
          title: Title
          url: URL
        }
      }
    }
  }
`
