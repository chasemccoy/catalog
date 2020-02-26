import React, { useContext } from 'react'
import styled, { css } from 'styled-components'
import { Box, Text, Grid } from '@chasemccoy/kit'
import Page from 'components/NewPage'
import Image from 'components/Image'
import { useStaticQuery, graphql } from 'gatsby'
import Link from 'components/Link'
import { UnorderedList } from 'components/Lists'
import { DataContext } from 'components/Layout'
import Nav from 'components/Nav'

// const border = {
//   borderBottom: '.5px solid',
//   borderColor: 'rgba(0, 0, 0, 0.3)'
// }

const Container = styled.footer(
  p => css`
    font-size: 0.85em;
    padding: 32px 0 40px;

    a:hover,
    a:focus {
      text-decoration: underline;
      color: inherit;
      color: rgba(0, 0, 0, 0.7);
    }
  `
)

const Heading = props => (
  <Text
    as='h3'
    mt={0}
    fontSize='1.3em'
    // fontFamily='sans'
    // fontWeight='bold'
    // css={css`
    //   text-transform: uppercase;
    // `}
    {...props}
  />
)

// const Blogroll = ({ items, ...rest }) => (
//   <UnorderedList
//     css={`
//       font-size: 14px;
//     `}
//     {...rest}
//   >
//     {items.nodes.map(({ data }) => (
//       <Box as='li' mb={4} key={data.url}>
//         <Link to={data.url}>{data.title}</Link>
//       </Box>
//     ))}
//   </UnorderedList>
// )

const Currently = ({ nowPlaying, weather }) => (
  <UnorderedList>
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

const Sitemap = ({ ...rest }) => {
  return (
    <UnorderedList unstyled {...rest}>
      <li>
        <Link unstyled to='/thoughts'>
          Thoughts
        </Link>
      </li>
      <li>
        <Link unstyled to='/notes'>
          Notes
        </Link>
        <UnorderedList mt={0} ml={4}>
          <li>
            <Link unstyled to='/notes/code'>
              Code
            </Link>
          </li>
          <li>
            <Link unstyled to='/notes/design-systems'>
              Design systems
            </Link>
          </li>
          <li>
            <Link unstyled to='/notes/misc'>
              Misc
            </Link>
          </li>
        </UnorderedList>
      </li>
      <li>
        <Link unstyled to='/books'>
          Books
        </Link>
      </li>
      <li>
        <Link unstyled to='/quotes'>
          Quotes
        </Link>
      </li>
    </UnorderedList>
  )
}

const Footer = ({ ...rest }) => {
  const { posts, blogroll } = useStaticQuery(query)
  const { nowPlaying, weather } = useContext(DataContext)

  return (
    <Box {...rest}>
      <Grid overflow='visible'>
        <Box width={[1, 1, 1 / 3]}>
          <Text.p>I do hope you'll stay in touch.</Text.p>

          <Currently nowPlaying={nowPlaying} weather={weather} />
        </Box>

        <Box width={[1, 1, 1 / 3]}>
          <Box>
            {/* <Heading>Stay in touch</Heading> */}
            <Text fontWeight='semibold' mb={8}>
              Sitemap
            </Text>
            {/* <Nav direction='vertical' /> */}
          </Box>
        </Box>

        <Box width={[1, 1, 1 / 3]}>
          <Box>
            {/* <Heading>Sitemap</Heading> */}
            <Text fontFamily='serif' mb={8} fontSize='1.2em'>
              Sitemap
            </Text>
            <Sitemap />
          </Box>
        </Box>
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
