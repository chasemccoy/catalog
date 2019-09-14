import React, { useEffect, useRef } from 'react'
import styled from 'styled-components'
import media from 'utils/media'
import baffle from 'baffle'

//eslint-disable-next-line
const asciiLarge =
  ' ______   __  __   ______   ______   ______       __    __   ______   ______   ______   __  __    \r\n/\\  ___\\ /\\ \\_\\ \\ /\\  __ \\ /\\  ___\\ /\\  ___\\     /\\ "-./  \\ /\\  ___\\ /\\  ___\\ /\\  __ \\ /\\ \\_\\ \\   \r\n\\ \\ \\____\\ \\  __ \\\\ \\  __ \\\\ \\___  \\\\ \\  __\\     \\ \\ \\-./\\ \\\\ \\ \\____\\ \\ \\____\\ \\ \\/\\ \\\\ \\____ \\  \r\n \\ \\_____\\\\ \\_\\ \\_\\\\ \\_\\ \\_\\\\/\\_____\\\\ \\_____\\    \\ \\_\\ \\ \\_\\\\ \\_____\\\\ \\_____\\\\ \\_____\\\\/\\_____\\ \r\n  \\/_____/ \\/_/\\/_/ \\/_/\\/_/ \\/_____/ \\/_____/     \\/_/  \\/_/ \\/_____/ \\/_____/ \\/_____/ \\/_____/ \r\n                                                                                                  '

//eslint-disable-next-line
const asciiSmall =
  ' ______   __  __   ______   ______   ______      \r\n/\\  ___\\ /\\ \\_\\ \\ /\\  __ \\ /\\  ___\\ /\\  ___\\     \r\n\\ \\ \\____\\ \\  __ \\\\ \\  __ \\\\ \\___  \\\\ \\  __\\     \r\n \\ \\_____\\\\ \\_\\ \\_\\\\ \\_\\ \\_\\\\/\\_____\\\\ \\_____\\   \r\n  \\/_____/ \\/_/\\/_/ \\/_/\\/_/ \\/_____/ \\/_____/   \r\n                                                 \r\n __    __   ______   ______   ______   __  __    \r\n/\\ "-./  \\ /\\  ___\\ /\\  ___\\ /\\  __ \\ /\\ \\_\\ \\   \r\n\\ \\ \\-./\\ \\\\ \\ \\____\\ \\ \\____\\ \\ \\/\\ \\\\ \\____ \\  \r\n \\ \\_\\ \\ \\_\\\\ \\_____\\\\ \\_____\\\\ \\_____\\\\/\\_____\\ \r\n  \\/_/  \\/_/ \\/_____/ \\/_____/ \\/_____/ \\/_____/ \r\n                                                 '

const AsciiArt = styled.pre`
  ${'' /* font-family: monospace; */}
  font-family: "Courier New", monospace;
  line-height: 1;
  background: none !important;
  border: none !important;
  overflow: visible;
  font-weight: bold;
  margin: 0;
  text-align: center;
  white-space: pre-wrap;
`

const SmallAsciiArt = styled(AsciiArt)`
  display: none;
  font-size: 3vw;
  text-align: left;

  ${media.small`
    display: block;
  `}
`

const LargeAsciiArt = styled(AsciiArt)`
  font-size: 0.75em;
  width: 110%;
  margin-left: -5%;

  ${media.medium`
    font-size: 1.3vw;
  `}

  ${media.small`
    display: none;
  `}
`

const baffleOptions = {
  characters: '▓▒░   ',
  exclude: '\n',
  speed: 50
}

const AsciiLogo = () => {
  const smallAscii = useRef(null)
  const largeAscii = useRef(null)

  useEffect(() => {
    const b1 = baffle(smallAscii.current, baffleOptions)
    const b2 = baffle(largeAscii.current, baffleOptions)
    b1.start()
    b2.start()
    b1.reveal(1500)
    b2.reveal(1500)
  }, [])

  const aria = {
    role: 'img',
    'aria-label': 'Chase McCoy'
  }

  return (
    <React.Fragment>
      <SmallAsciiArt
        ref={smallAscii}
        dangerouslySetInnerHTML={{ __html: asciiSmall }}
        {...aria}
      />

      <LargeAsciiArt
        ref={largeAscii}
        dangerouslySetInnerHTML={{ __html: asciiLarge }}
        {...aria}
      />
    </React.Fragment>
  )
}

export default AsciiLogo
