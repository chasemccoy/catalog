import React, { useContext } from 'react'
import styled from 'styled-components'
import Link from 'components/Link'
import { Grid, Box, Text } from '@chasemccoy/kit'
import Page from 'components/Page'
import media from 'utils/media'
import Heading from 'components/Heading'
import HCard from 'components/hCard'
import { UnorderedList } from 'components/Lists'
import { DataContext } from 'components/Layout'
import 'isomorphic-fetch'

const Container = styled(Box)`
  border-right: 1px dashed ${p => p.theme.colors.gray[1]};
  height: 100%;
  min-height: 100vh;
  padding: 24px 0;
  font-size: 12px;
  line-height: 1.3;
  color: ${p => p.theme.colors.gray[4]};

  a {
    color: ${p => p.theme.colors.gray[4]};

    &.site-title {
      color: ${p => p.theme.colors.type.body};
    }
  }

  a:hover {
    color: ${p => p.theme.colors.accent};

    &.site-title {
      color: ${p => p.theme.colors.type.body};
    }
  }

  ${media.small`
    border-right: none;
    border-bottom: 1px solid ${p => p.theme.colors.gray[0]};
    min-height: 0;
    height: auto;
    padding: 16px;
  `}
`

const NavLink = styled(Link)`
  color: ${p => p.theme.colors.gray[3]} !important;

  &.selected {
    color: ${p => p.theme.colors.type.body} !important;
  }
`

const Nav = ({ ...rest }) => (
  <Box {...rest}>
    <Text
      as='nav'
      fontWeight='bold'
      css={`
        text-transform: uppercase;
        letter-spacing: 1px;
      `}
    >
      <UnorderedList
        unstyled
        css={`
          li + li {
            margin-top: 8px;
          }
        `}
      >
        <li>
          <NavLink to='/thoughts' unstyled partiallyActive>
            thoughts
          </NavLink>
        </li>
        <li>
          <NavLink to='/notes' unstyled partiallyActive>
            notes
          </NavLink>
        </li>
        <li>
          <NavLink to='/portfolio' unstyled partiallyActive>
            portfolio
          </NavLink>
        </li>
        <li>
          <NavLink to='/books' unstyled>
            books
          </NavLink>
        </li>
        <li>
          <NavLink to='/quotes' unstyled>
            quotes
          </NavLink>
        </li>
        <li>
          <NavLink to='/music' unstyled>
            music
          </NavLink>
        </li>
      </UnorderedList>
    </Text>
  </Box>
)

const Overflow = ({ data, ...rest }) => (
  <Box {...rest}>
    <Page.SidebarHeader mr={12} borderWidth={0} mb={2} color='gray.5'>
      Stay in touch
    </Page.SidebarHeader>

    <Text mb={16}>
      <Link to='https://twitter.com/chase_mccoy'>Twitter</Link>,{' '}
      <Link to='https://instagram.com/chs_mc'>Instagram</Link>,{' '}
      <Link to='https://github.com/chasemccoy'>GitHub</Link>,{' '}
      <Link to='mailto:hi@chasem.co'>Email</Link>, &{' '}
      <Link external to='/feed.xml'>
        RSS
      </Link>
      .
    </Text>

    <Page.SidebarHeader mr={12} borderWidth={0} mb={2} color='gray.5'>
      Currently
    </Page.SidebarHeader>

    <UnorderedList mb={0} pr={4}>
      <Box as='li' mb={8}>
        Working on <Link to='https://sproutsocial.com/seeds'>Seeds</Link> at{' '}
        <Link to='https://sproutsocial.com'>Sprout Social</Link>
      </Box>
      <Box as='li' mb={8}>
        {data.nowPlaying ? (
          <React.Fragment>
            Listening to {data.nowPlaying.name} by {data.nowPlaying.artist} on{' '}
            <Link to='https://open.spotify.com/user/22n2eydjrvftle33bi3t4v2pi?si=GAaVgz0FTk-4J4eUPNWBqQ'>
              Spotify
            </Link>
          </React.Fragment>
        ) : (
          'Loading...'
        )}
      </Box>
      <Box as='li'>
        {data.weather ? (
          <React.Fragment>
            {data.weather.temperature} in <Link to='/chicago'>Chicago</Link>
          </React.Fragment>
        ) : (
          'Loading...'
        )}
      </Box>
    </UnorderedList>
  </Box>
)

const Sidebar = props => {
  const data = useContext(DataContext)

  return (
    <Container pl={[0, 0, '8px', 0]} pr={[0, 0, '8px']}>
      <HCard />

      <Heading.h2
        fontSize='14px'
        lineHeight='1.2'
        mt={0}
        mb={16}
        display={['none', 'none', 'block']}
        css={`
          letter-spacing: 0.5px;
        `}
      >
        <Link className='site-title' unstyled to='/'>
          CHASE McCOY
        </Link>
      </Heading.h2>

      <Grid>
        <Nav width={[1 / 3, 1 / 4, 1 / 4, 1]} />
        <Overflow width={[2 / 3, 3 / 4, 3 / 4, 1]} data={data} />
      </Grid>

      {/* <Header fontSize='16px' mt='-8px'>
        <Link to='/' pr={[48, 48, 48, 0]} unstyled fontWeight='bold'>
          Chase McCoy
        </Link>

        <ToggleTheme />
      </Header>

      <Text.p>
        Designer and developer specializing in systems thinking, design tooling,
        and front-end engineering.
      </Text.p>

      <Header>Stay in touch</Header>

      <HCard />

      <Text.p width='95%'>
        <Link to='https://twitter.com/chase_mccoy'>Twitter</Link>,{' '}
        <Link to='https://instagram.com/chs_mc'>Instagram</Link>,{' '}
        <Link to='https://github.com/chasemccoy'>GitHub</Link>,{' '}
        <Link to='mailto:hi@chasem.co'>Email</Link>, &{' '}
        <Link external to='/feed.xml'>
          RSS
        </Link>
        .
      </Text.p>

      <Header>Browse</Header>

      <UnorderedList unstyled mb={32}>
        <li>
          <Link to='/thoughts'>/thoughts</Link>
        </li>
        <li>
          <Link to='/notes'>/notes</Link>
        </li>
        <li>/resources</li>
        <li>
          <UnorderedList unstyled ml={4}>
            <li>
              <Link to='/books'>/books</Link>
            </li>
            <li>
              <Link to='/chicago'>/chicago</Link>
            </li>
            <li>
              <Link to='/quotes'>/quotes</Link>
            </li>
          </UnorderedList>
        </li>
        <li>
          <Link to='/portfolio'>/portfolio</Link>
        </li>
      </UnorderedList>

      {open ? (
        <React.Fragment>
          <Header>Currently</Header>
          <UnorderedList mb={32}>
            <li>
              Working on <Link to='https://sproutsocial.com/seeds'>Seeds</Link>{' '}
              at <Link to='https://sproutsocial.com'>Sprout Social</Link>
            </li>
            <li>
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
            </li>
            <li>
              {weather ? (
                <React.Fragment>
                  {weather.temperature} in <Link to='/chicago'>Chicago</Link>
                </React.Fragment>
              ) : (
                'Loading...'
              )}
            </li>
          </UnorderedList>

          <Header>Writing</Header>
          <UnorderedList mb={3}>
            <li>
              <Link to='/2018/12/xoxo-2018'>XOXO 2018</Link>
            </li>
            <li>
              <Link to='/2018/09/art-from-autonomy'>
                Making Computers Make Art
              </Link>
            </li>
            <li>
              <Link to='/2018/06/some-prompted-thoughts-on-design'>
                Some prompted thoughts on design
              </Link>
            </li>
            <li>
              <Link to='/2018/06/no-reservations'>No Reservations</Link>
            </li>
            <li>
              <Link to='/2018/05/exploring-seattle'>Exploring Seattle</Link>
            </li>
          </UnorderedList>

          <Link to='/thoughts' display='inline-block' mb={32}>
            More →
          </Link>

          <Header>Quoted</Header>
          <Text.p mb='8px'>
            Be regular and orderly in your life, so that you may be violent and
            original in your work.
          </Text.p>
          <Text.p mb={32}>
            <em>— Gustave Flaubert</em>
          </Text.p>

          <Header>Latest Tweet</Header>

          <Text.p
            mb={2}
            css={`
              white-space: pre-line;
            `}
          >
            {tweet || 'Loading...'}
          </Text.p>

          <Link to='https://twitter.com/chase_mccoy' display='block' mb={32}>
            More →
          </Link>

          <Button onClick={() => setOpen(!open)}>- collapse</Button>
        </React.Fragment>
      ) : (
        <Button onClick={() => setOpen(!open)}>+ expand</Button>
      )} */}
    </Container>
  )
}

export default Sidebar
