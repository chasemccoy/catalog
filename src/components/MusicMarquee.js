import React from 'react'
import styled from 'styled-components'
import { Box, Text } from '@chasemccoy/kit'
import useSWR from 'swr'

const fetcher = (url) => fetch(url).then((res) => res.json())

const Container = styled(Box)`
  position: relative;
  overflow: hidden;
  font-family: ${(p) => p.theme.fonts.mono};
  --offset: 20vw;
  --move-initial: calc(-25% + var(--offset));
  --move-final: calc(-50% + var(--offset));
  position: relative;

  font-size: 0.8em;

  .label {
    position: absolute;
    height: 100%;
    top: 0;
    left: 0;
    padding: 0 16px;
    background: white;
    z-index: 1;
    display: flex;
    align-items: center;
    border-right: 2px solid;
  }

  .inner {
    width: fit-content;
    display: flex;
    position: relative;
    transform: translate3d(var(--move-initial), 0, 0);
    animation: marquee ${(p) => p.duration} linear infinite;
  }

  &:hover .inner {
    animation-play-state: paused;
  }

  span {
    white-space: nowrap;
  }

  span + span {
    margin-left: 24px;

    :before {
      content: '•';
      margin-right: 24px;
    }
  }

  @keyframes marquee {
    0% {
      transform: translate3d(var(--move-initial), 0, 0);
    }

    100% {
      transform: translate3d(var(--move-final), 0, 0);
    }
  }
`

const MusicMarqee = (props) => {
  const { data, error } = useSWR('/api/listening', fetcher)
  if (error || !data) return null

  return (
    <Container duration={`${data.length}s`} {...props}>
      <Text className='label' fontWeight='bold'>
        On rotation
      </Text>

      <div className='inner' aria-hidden='true'>
        {data.map((track) => (
          <Text as='span' key={track.name} fontWeight='light'>
            {track.name} by {track.artist}
          </Text>
        ))}
      </div>
    </Container>
  )
}

export default MusicMarqee
