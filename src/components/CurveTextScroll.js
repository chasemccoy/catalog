import React, { useRef, useLayoutEffect } from 'react'
import styled from 'styled-components'
import Page from 'components/Page'
import { space } from 'styled-system'
import media from 'utils/media'

const SVG = styled.svg`
  font-size: 28px;
  margin-top: -64px;
  ${'' /* font-family: ${p => p.theme.fonts.serif}; */}
  letter-spacing: 0.2em;

  ${media.medium`
    font-size: 48px;
  `}

  ${media.small`
    font-size: 64px;
  `}

  ${space}
`

const CurveTextScroll = ({ children, ...rest }) => {
  const container = useRef(null)

  useLayoutEffect(() => {
    const textContainer = container.current
    const textPath = textContainer.querySelector('#text-path')
    const path = textContainer.querySelector(textPath.getAttribute('href'))
    const pathLength = path.getTotalLength()

    const updateTextPathOffset = () => {
      const rect = textContainer.getBoundingClientRect()
      const scrollPercent = (rect.y - 200) / window.innerHeight
      textPath.setAttribute('startOffset', scrollPercent * 2 * pathLength)
    }

    updateTextPathOffset()

    const onScroll = () => {
      requestAnimationFrame(updateTextPathOffset)
    }

    window.addEventListener('scroll', onScroll)
  }, [])

  return (
    <Page.Breakout>
      <SVG
        viewBox='0 0 1000 200'
        xmlns='http://www.w3.org/2000/svg'
        ref={container}
        {...rest}
      >
        <path
          id='text-curve'
          d='M0 100s269.931 86.612 520 0c250.069-86.612 480 0 480 0'
          fill='none'
        />

        <text y='40'>
          <textPath id='text-path' href='#text-curve' startOffset='200'>
            {children}
          </textPath>
        </text>
      </SVG>
    </Page.Breakout>
  )
}

export default CurveTextScroll
