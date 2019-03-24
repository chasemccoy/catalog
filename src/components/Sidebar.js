import React, { useState, useEffect } from 'react'
import styled from 'styled-components'
import Link from 'components/Link'
import { Box, Text } from '@chasemccoy/kit'
import media from 'utils/media'
import Heading from 'components/Heading'
import { UnorderedList } from 'components/Lists'
import { ThemeContext } from 'components/Layout'
import Button from 'components/Button'
import 'isomorphic-fetch'

const Container = styled(Box.withComponent('aside'))`
  min-width: ${p =>
    p.theme.sizes.layout.sidebarWidth + p.theme.sizes.layout.gutter}px;
  max-width: ${p =>
    p.theme.sizes.layout.sidebarWidth + p.theme.sizes.layout.gutter}px;
  padding-right: ${p => p.theme.sizes.layout.gutter}px;

  font-size: 14px;
  font-family: ${p => p.theme.fonts.mono};

  ${media.small`
    min-width: 100%;
    max-width: 100%;
    padding: 0;
    margin-bottom: 80px;
  `} 
  
  li {
    margin: 0;
  }
`

const Header = props => (
  <Heading.h1
    fontFamily="mono"
    fontSize="14px"
    mb="4px"
    mt={0}
    css={`
      display: flex;
      align-items: center;
      justify-content: space-between;
      position: relative;
    `}
    {...props}
  />
)

const Mark = styled.svg`
  position: absolute;
  z-index: 1;
  left: -40px;

  ${media.medium`
    left: 132px;
  `}

  transform-origin: 50% 50%;
  animation: rotate-counterClockwise 16s linear infinite;

  .circle {
    transform-origin: 7.25px 4.75px;
    animation: rotate-counterClockwise 8s linear infinite;
  }

  .square {
    transform-origin: 11.75px 9.5px;
    animation: rotate-counterClockwise 10s linear infinite;
  }

  .triangle {
    transform-origin: 4.5px 10.5px;
    animation: rotate-clockwise 10s linear infinite;
  }

  ${'' /* .inner {
    transform-origin: 50% 50%;
    animation: rotate-counterClockwise 14s linear infinite;
  }

  .outer {
    transform-origin: 50% 50%;
    animation: rotate-clockwise 8s linear infinite;
  } */}

  @keyframes rotate-counterClockwise {
    0%  { transform: rotate(360deg); }
    100% { transform: rotate(0deg); }	
  }

  @keyframes rotate-clockwise {
    0%  { transform: rotate(0deg); }
    100% { transform: rotate(360deg); }	
  }
`

const ToggleTheme = () => (
  <ThemeContext.Consumer>
    {({ _, toggleTheme }) => (
      <Button onClick={toggleTheme} fontSize="24px" unstyled>
        ☼
      </Button>
    )}
  </ThemeContext.Consumer>
)

const getWeatherData = async (set) => {
  const response = await fetch('https://chs-stats.now.sh/weather')
  const result = await response.json()
  set({
    summary: result.summary,
    temperature: result.temperature
  })
}

const getNowPlayingData = async (set) => {
  const response = await fetch('https://chs-stats.now.sh/nowPlaying')
  const result = await response.json()
  set({
    name: result.name,
    artist: result.artist
  })
}

const getTwitterData = async (set) => {
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

  useEffect(() => {getWeatherData(setWeather)}, [])
  useEffect(() => {getNowPlayingData(setNowPlaying)}, [])
  useEffect(() => {getTwitterData(setTweet)}, [])

  return (
    <Container>
      <Header fontSize="16px" mb="20px" mt="-8px">
        <Mark xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 16 16">
          <g fill="none" fill-rule="evenodd">
            <circle className="circle" cx="7.25" cy="4.75" r="1.75" fill="#FFF"/>
            
            <path fill="#FFF" className="triangle" d="M3,8.30059245 C3,8.22087037 3.03166947,8.14441351 3.08804149,8.08804149 C3.20543014,7.97065284 3.39575475,7.97065284 3.51314341,8.08804149 L6.91195851,11.4868566 C6.96833053,11.5432286 7,11.6196855 7,11.6994076 C7,11.8654202 6.86542018,12 6.69940755,12 L3.30059245,12 C3.13457982,12 3,11.8654202 3,11.6994076 L3,8.30059245 L3,8.30059245 Z"/>

            <path fill="#FFF" className="square" fill-rule="evenodd" d="M10.5,7.5 L13,7.5 C13.2761424,7.5 13.5,7.72385763 13.5,8 L13.5,10.5 C13.5,10.7761424 13.2761424,11 13,11 L10.5,11 C10.2238576,11 10,10.7761424 10,10.5 L10,8 C10,7.72385763 10.2238576,7.5 10.5,7.5 Z" />
          </g>
        </Mark>

        <Link to="/" pr={[48, 48, 48, 0]} unstyled color='white' css={`
          background: ${props => props.theme.name === 'light' ? props.theme.colors.accent : props.theme.colors.accent.dark};
          box-shadow: ${props => props.theme.name === 'light' ? props.theme.colors.accent : props.theme.colors.accent.dark} -994px -1000px 0 1008px;

          &:hover {
            color: white;
          }

          position: relative;

          &:after {
            content: "";
            position: absolute;
            background: transparent;
            top: -36px;
            left: -36px;
            right: -24px;
            bottom: -18px;
            z-index: -1;
            background-image: linear-gradient(135deg, ${props => props.theme.colors.accent} 12.50%, transparent 12.50%, transparent 50%, ${props => props.theme.colors.accent} 50%, ${props => props.theme.colors.accent} 62.50%, transparent 62.50%, transparent 100%);
            background-size: 5.66px 5.66px;

            ${media.medium`
              top: -22px;
              left: -24px;
              right: -22px;
              bottom: -14px;
            `}

            ${media.small`
              top: -6px;
              left: -8px;
              right: -22px;
              bottom: -14px;
            `}
          }
        `}>
          CHASE McCOY
        </Link>

        <ToggleTheme />
      </Header>

      <Text.p css={`
        position: relative;

        &:after {
          content: "";
          position: absolute;
          background: ${props => props.theme.colors.gray[0]};
          top: -56px;
          left: -100px;
          right: -16px;
          bottom: -12px;
          z-index: -2;
        }
      `}>
        Designer and developer specializing in systems thinking, design tooling, and front-end engineering.
      </Text.p>

      <Header>Get in touch</Header>

      <Text.p width='95%'>
        <Link to="https://twitter.com/chase_mccoy">Twitter</Link>,{' '}
        <Link to="https://instagram.com/chs_mc">Instagram</Link>,{' '}
        <Link to="https://github.com/chasemccoy">GitHub</Link>,{' '}
        <Link to="mailto:desk@chasem.co">Email</Link>, &{' '}
        <Link to="/feed.xml">RSS</Link>.
      </Text.p>

      <Header>Browse</Header>

      <UnorderedList unstyled mb={32}>
        <li>
          <Link to="/thoughts">/thoughts</Link>
        </li>
        {/* <li>
          <Link to="/notes">/notes</Link>
        </li> */}
        <li>/resources</li>
        <li>
          <UnorderedList unstyled ml={4}>
            <li>
              <Link to="/books">/books</Link>
            </li>
            <li>
              <Link to="/chicago">/chicago</Link>
            </li>
            <li>
              <Link to="/quotes">/quotes</Link>
            </li>
          </UnorderedList>
        </li>
        <li>
          <Link to="/portfolio">/portfolio</Link>
        </li>
      </UnorderedList>

      {open ? (
        <React.Fragment>
          <Header>Currently</Header>
          <UnorderedList mb={32}>
            <li>
              Working on <Link to='https://sproutsocial.com/seeds'>Seeds</Link> at <Link to='https://sproutsocial.com'>Sprout Social</Link>
            </li>
            <li>
              {nowPlaying ? (
                <React.Fragment>
                  Listening to {nowPlaying.name} by {nowPlaying.artist} on{' '}
                  <Link to="https://open.spotify.com/user/22n2eydjrvftle33bi3t4v2pi?si=GAaVgz0FTk-4J4eUPNWBqQ">
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
                  {weather.temperature} in <Link to="/chicago">Chicago</Link>
                </React.Fragment>
              ) : (
                'Loading...'
              )}
            </li>
          </UnorderedList>

          <Header>Writing</Header>
          <UnorderedList mb={3}>
          <li>
              <Link to="/2018/12/xoxo-2018">
                XOXO 2018
              </Link>
            </li>
            <li>
              <Link to="/2018/09/art-from-autonomy">
                Making Computers Make Art
              </Link>
            </li>
            <li>
              <Link to="/2018/06/some-prompted-thoughts-on-design">
                Some prompted thoughts on design
              </Link>
            </li>
            <li>
              <Link to="/2018/06/no-reservations">No Reservations</Link>
            </li>
            <li>
              <Link to="/2018/05/exploring-seattle">Exploring Seattle</Link>
            </li>
          </UnorderedList>

          <Link to="/thoughts" display="inline-block" mb={32}>
            More →
          </Link>

          <Header>Quoted</Header>
          <Text.p mb="8px">
            Be regular and orderly in your life, so that you may be violent
            and original in your work.
          </Text.p>
          <Text.p mb={32}>
            <em>— Gustave Flaubert</em>
          </Text.p>

          <Header>Latest Tweet</Header>

          <Text.p mb={2} css={`white-space: pre-line;`}>
            {tweet || 'Loading...'}
          </Text.p>

          <Link to="https://twitter.com/chase_mccoy" display="block" mb={32}>
            More →
          </Link>

          <Button onClick={() => setOpen(!open)}>- collapse</Button>
        </React.Fragment>
      ) : (
        <Button onClick={() => setOpen(!open)}>+ expand</Button>
      )}
    </Container>
  )
}

export default Sidebar
