import React, { useState, useEffect } from 'react'
import { ThemeProvider, createGlobalStyle } from 'styled-components'
import theme from 'utils/theme'
import { CSSReset } from '@chasemccoy/kit'
import TypographyStyles from 'utils/typography'
import Metadata from 'components/Metadata'
// import SyntaxTheme from 'components/SyntaxTheme'
import media from 'utils/media'
import MDX from 'components/MDX'
import 'isomorphic-fetch'

const GlobalStyles = createGlobalStyle`
  body {
    line-height: inherit;
    background: ${props => props.theme.colors.page.background};
  }

  a {
    color: ${p => p.theme.colors.type.body};
    text-decoration: underline;
    transition: all .15s;

    &:hover {
      color: ${p => p.theme.colors.accent};
    }
  }

  p a, article ul a {
    color: ${p => p.theme.colors.type.body};
    text-decoration: none;
    transition: all .2s;
    border-bottom: 1px solid ${p => p.theme.colors.accent.soft};
    box-shadow: 0px -0.5em 0px ${p => p.theme.colors.accent.soft} inset;

    &:hover, &:focus {
      color: ${p => p.theme.colors.type.body};
      background: ${p => p.theme.colors.accent.soft};
      border-bottom-color: ${p => p.theme.colors.accent.soft};
      box-shadow: 0px -8px 0px ${p => p.theme.colors.accent.soft} inset;
    }
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
    font-size: 16px;
    line-height: 1.4;
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
        margin-top: 0;
      }
    }

    h2 {
      padding-bottom: 6px;
      border-bottom: 3px solid ${p => p.theme.colors.gray[0]};
    }

    img {
      width: 100%;
    }

    ${media.small`
      img {
        max-width: none;
        width: calc(100% + 32px);
        margin-left: -16px;
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
    }
  }

  code {
    font-feature-settings: normal;
    font-family: ${p => p.theme.fonts.code};
    background-color: #FBFBFB;
    border: .5px solid ${p => p.theme.colors.gray[1]};
    padding: 2px 4px;
    display: inline-block;
    vertical-align: middle;
    word-wrap: normal;
    overflow: auto;
    border-radius: 4px;
  }

  .gatsby-resp-image-wrapper {
    margin: 0 !important;
  }

  .clearfix:before,
  .clearfix:after {
    content: " ";
    display: table;
  }

  .clearfix:after {
    clear: both;
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
