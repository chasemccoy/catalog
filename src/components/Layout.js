import React, { useState, useEffect } from 'react'
import { ThemeProvider, createGlobalStyle } from 'styled-components'
import theme from 'utils/theme'
import { CSSReset } from '@chasemccoy/kit'
import TypographyStyles from 'utils/typography'
import Metadata from 'components/Metadata'
import media from 'utils/media'
import MDX from 'components/MDX'
import 'isomorphic-fetch'

const GlobalStyles = createGlobalStyle`
  html {
    background: ${props => props.theme.colors.accent.pop};
    padding: 8px;

    ${media.small`
      padding: 8px 0;
      font-size: 17px;
    `}

    ${
      '' /* @media (prefers-color-scheme: dark) {
      filter: invert(90%) hue-rotate(25deg);

      img:not(.invert), .no-invert, .microlink_card__media_image, .twitter-tweet-rendered {
        filter: invert(100%) hue-rotate(-25deg);
      }

      pre {
        filter: invert(4%);
      }

      article img {
        box-shadow: none;
      }
    } */
    }
  }

  body {
    line-height: inherit;
    overflow: hidden;
  }

  a {
    color: ${p => p.theme.colors.type.body};
    text-decoration: underline;
    transition: all .15s;

    &:hover, &:focus {
      color: ${p => p.theme.colors.accent};
      outline: none;
    }
  }

  iframe {
    border-radius: 8px;

    ${media.small`
      border-radius: 0;
    `}
  }

  code a {
    border: none;
    box-shadow: none;
    text-decoration: underline;
  }

  blockquote {
    position: relative;
    margin-left: .5em;
    padding: 4px .5em 4px 1.2em;
    font-size: 0.95em;
    color: ${p => p.theme.colors.gray[5]};

    &:before {
      content: "";
      position: absolute;
      left: 0;
      top: 0;
      width: 6px;
      background: ${p => p.theme.colors.accent.pop};
      border-radius: 3px;
      height: 100%;
    }
  }

  article {
    h2,
    h3,
    h4,
    h5,
    h6 {
      margin-top: 2em;

      &:first-child {
        margin-top: -4px;
      }

      a {
        text-decoration: none;
      }
    }
    
    .meta + h2,
    .meta + h3,
    .meta + h4 {
      margin-top: 0;
    }

    h2 {
      padding-bottom: 6px;
      border-bottom: 4px solid ${p => p.theme.colors.gray[0]};
    }

    img {
      width: 100%;
      border-radius: 8px;
      box-shadow: ${p => p.theme.colors.gray[1]} 0 0 16px 0px;
    }

    ${media.small`
      img {
        max-width: none;
        width: calc(100% + 32px);
        margin-left: -16px;
        border-radius: 0;
      }
    `}
  }

  hr {
    background: ${p => p.theme.colors.gray[0]};
    height: 4px;
  }

  pre {
    overflow: auto;
    background-color: #FBFBFB !important;
    border-radius: 8px;
    border: .5px solid ${p => p.theme.colors.gray[1]};

    ${media.small`
      border-radius: 0;
      width: calc(100% + 32px);
      margin-left: -16px;
    `}

    code {
      padding: 12px 16px;
      border: none;
      display: block;
    }
  }

  code {
    font-feature-settings: normal;
    font-family: ${p => p.theme.fonts.code};
    background-color: #FBFBFB;
    border: .5px solid ${p => p.theme.colors.gray[1]};
    padding: .1em .3em .2em;
    vertical-align: middle;
    word-wrap: normal;
    overflow: auto;
    border-radius: 4px;
    box-decoration-break: clone;
  }

  .gatsby-resp-image-wrapper {
    margin: 0 !important;
    border-radius: 8px;
    box-shadow: ${p => p.theme.colors.gray[1]} 0 0 16px 0px;

    ${media.small`
      max-width: none;
      width: calc(100% + 32px);
      margin-left: -16px !important;
      border-radius: 0;
    `}
  }

  .gatsby-resp-image-background-image {
    border-radius: 8px;

    ${media.small`
      border-radius: 0;
    `}
  }

  .gatsby-resp-image-figcaption {
    margin: 8px 0;
    color: ${p => p.theme.colors.gray[4]};
    font-size: 14px;
    line-height: 1.4;
    max-width: 550px;
  }

  .clearfix:before,
  .clearfix:after {
    content: " ";
    display: table;
  }

  .clearfix:after {
    clear: both;
  }

  twitter-widget {
    width: 100% !important;
    max-width: 100% !important;
  }
  
  twitter-widget::shadow .EmbeddedTweet {
    width: 100% !important;
    max-width: 100% !important;
  }
`

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

export const DataContext = React.createContext({
  weather: null,
  nowPlaying: null
})

const Layout = props => {
  const [weather, setWeather] = useState(null)
  const [nowPlaying, setNowPlaying] = useState(null)

  useEffect(() => {
    getWeatherData(setWeather)
  }, [])

  useEffect(() => {
    getNowPlayingData(setNowPlaying)
  }, [])

  return (
    <ThemeProvider theme={theme}>
      <MDX.Provider>
        <Metadata title={props.title} description={props.description} />

        <CSSReset />
        <TypographyStyles />
        <GlobalStyles />

        <DataContext.Provider value={{ weather, nowPlaying }}>
          {props.children}
        </DataContext.Provider>
      </MDX.Provider>
    </ThemeProvider>
  )
}

export default Layout
