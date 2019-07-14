import React, { useState, useEffect } from 'react'
import styled from 'styled-components'
import Link from 'components/Link'
import { Box, Text } from '@chasemccoy/kit'
import media from 'utils/media'
import Heading from 'components/Heading'
import HCard from 'components/hCard'
import { UnorderedList } from 'components/Lists'
import { ThemeContext } from 'components/Layout'
import Button from 'components/Button'
import 'isomorphic-fetch'

const Container = styled(Box)`
  border-right: 1px solid ${p => p.theme.colors.gray[0]};
  height: 100%;
  min-height: 100vh;
  padding: 64px 0;

  ${media.medium`
    padding: 80px 0 40px;
  `}

  ${media.small`
    border-right: none;
    border-bottom: 1px solid ${p => p.theme.colors.gray[0]};
    min-height: 0;
    height: auto;
    padding: 0 16px 16px;
  `}
  
  li {
    margin: 0;
  }
`

const NavLink = styled(Link)`
  color: ${p => p.theme.colors.gray[2]};

  &.selected {
    color: #ffc700;
  }
`

const ToggleTheme = () => (
  <ThemeContext.Consumer>
    {({ _, toggleTheme }) => (
      <Button onClick={toggleTheme} fontSize='24px' unstyled>
        ☼
      </Button>
    )}
  </ThemeContext.Consumer>
)

const getWeatherData = async set => {
  const response = await fetch('https://chs-stats.now.sh/weather')
  const result = await response.json()
  set({
    summary: result.summary,
    temperature: result.temperature
  })
}

const getNowPlayingData = async set => {
  const response = await fetch('https://chs-stats.now.sh/nowPlaying')
  const result = await response.json()
  set({
    name: result.name,
    artist: result.artist
  })
}

const getTwitterData = async set => {
  const response = await fetch('https://chs-stats.now.sh/latestTweet')
  const result = await response.text()
  set(result)
}

const Sidebar = () => {
  const [open, setOpen] = useState(false)
  const [weather, setWeather] = useState(null)
  const [nowPlaying, setNowPlaying] = useState(null)
  const [tweet, setTweet] = useState(null)

  useEffect(() => {
    window.matchMedia('(min-width: 768px)').matches && setOpen(true)
  }, [])

  useEffect(() => {
    getWeatherData(setWeather)
  }, [])
  useEffect(() => {
    getNowPlayingData(setNowPlaying)
  }, [])
  useEffect(() => {
    getTwitterData(setTweet)
  }, [])

  return (
    <Container>
      <Box bg='#FFC700' height='64px' mr={[0, 0, '-4px']} mb={16} />

      <Box px={[0, 0, '8px', '4px']}>
        <Box mb={16}>
          <Heading.h1
            fontSize='14px'
            lineHeight='1.2'
            mt={0}
            mb='12px'
            css={`
              letter-spacing: 0.5px;
            `}
          >
            CHASE McCOY
          </Heading.h1>
        </Box>

        <Text
          as='nav'
          fontSize='12px'
          fontWeight='semibold'
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
              <NavLink to='/thoughts' unstyled>
                thoughts
              </NavLink>
            </li>
            <li>
              <NavLink to='/notes' unstyled>
                notes
              </NavLink>
            </li>
            <li>
              <NavLink to='/portfolio' unstyled>
                portfolio
              </NavLink>
            </li>
          </UnorderedList>
        </Text>
      </Box>

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
