import React, { useContext } from 'react'
import styled, { css } from 'styled-components'
import { Box, Text, Grid } from '@chasemccoy/kit'
import Page from 'components/NewPage'
import Image from 'components/Image'
import { useStaticQuery, graphql } from 'gatsby'
import Link from 'components/Link'
import { UnorderedList } from 'components/Lists'
import { DataContext } from 'components/Layout'
import portraitBW from 'assets/portrait-bw.png'
import Logo from 'components/Logo'

const border = {
  borderBottom: '.5px solid',
  borderColor: 'rgba(0, 0, 0, 0.3)'
}

const Container = styled.footer(
  p => css`
    background: ${p.theme.colors.accent.pop};
    font-size: 15px;
    padding: 40px 0;

    a {
      text-decoration: none;
    }

    a:hover,
    a:focus {
      text-decoration: underline;
      color: inherit;
      color: rgba(0, 0, 0, 0.7);
    }

    .footer,
    .footer a {
      color: rgba(0, 0, 0, 0.6);
    }
  `
)

const Header = () => (
  <Grid pb={8} {...border}>
    <Box width={1 / 2} my='auto'>
      <Logo />

      <Text>
        Hey there! I’m Chase, a designer and developer based in Chicago,&nbsp;IL
        specializing in systems thinking, design tooling, and front-end
        engineering. I spend a lot of time thinking about how the web works.
      </Text>
    </Box>

    <Box
      display='flex'
      alignItems='center'
      justifyContent='flex-end'
      width={1 / 2}
    >
      <Box size='100%' py={8}>
        <Image
          height='100px'
          src={portraitBW}
          css={css`
            height: 120px;
            width: 100%;
            object-fit: cover;
            mix-blend-mode: luminosity;
            object-position: 500% 100%;
          `}
        />
      </Box>
    </Box>
  </Grid>
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

const Nav = ({ ...rest }) => (
  <Box {...rest}>
    <Text
      fontSize='0.75em'
      fontWeight='bold'
      css={`
        text-transform: uppercase;
        letter-spacing: 1px;
      `}
    >
      <UnorderedList
        unstyled
        inline
        css={`
          display: flex;
          align-items: center;
          justify-content: space-between;
        `}
      >
        <li>
          <Link to='/thoughts' unstyled partiallyActive>
            thoughts
          </Link>
        </li>
        <li>
          <Link to='/notes' unstyled partiallyActive>
            notes
          </Link>
        </li>
        <li>
          <Link to='/portfolio' unstyled partiallyActive>
            portfolio
          </Link>
        </li>
        <li>
          <Link to='/books' unstyled>
            books
          </Link>
        </li>
        <li>
          <Link to='/quotes' unstyled>
            quotes
          </Link>
        </li>
        <li>
          <Link to='/music' unstyled>
            music
          </Link>
        </li>
      </UnorderedList>
    </Text>
  </Box>
)

const Footer = ({ ...rest }) => {
  const { posts, blogroll } = useStaticQuery(query)
  const data = useContext(DataContext)

  return (
    <Box id='menu' {...rest}>
      <Header />

      <Box py={12} mb={16} as='nav' {...border}>
        <Nav />
      </Box>

      {/* <Grid mb={8} pb={16} {...border}>
        <Box width={1 / 3}>
          {posts.nodes.map(post => (
            <Box mb={16} key={post.id}>
              <Text fontWeight='bold'>
                <Link
                  to={post.slug}
                  dangerouslySetInnerHTML={{ __html: post.title + '&nbsp;→' }}
                />
              </Text>
              <Text fontSize='13px'>{post.excerpt}</Text>
            </Box>
          ))}
        </Box>

        <Box width='auto'>
          <Blogroll items={blogroll} />
        </Box>

        <Box width={1 / 4}>
          <Currently nowPlaying={data.nowPlaying} weather={data.weather} />
        </Box>
      </Grid> */}

      <Text className='footer' fontSize='12px' textAlign='right'>
        <Text fontWeight='bold' as='span'>
          Follow along:
        </Text>{' '}
        <Link to='https://twitter.com/chase_mccoy'>Twitter</Link>,{' '}
        <Link to='https://instagram.com/chs_mc'>Instagram</Link>,{' '}
        <Link to='https://github.com/chasemccoy'>GitHub</Link>,{' '}
        <Link to='mailto:hi@chasem.co'>Email</Link>,{' '}
        <Link external to='/feed.xml'>
          RSS
        </Link>
      </Text>
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
