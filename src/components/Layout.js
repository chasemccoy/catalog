import React from 'react'
import { ThemeProvider, createGlobalStyle } from 'styled-components'
import theme from 'utils/theme'
import darkTheme from 'utils/theme-dark'
import { CSSReset } from '@chasemccoy/kit'
import TypographyStyles from 'utils/typography'
import Metadata from 'components/Metadata'
import SyntaxTheme from 'components/SyntaxTheme'
import media from 'utils/media'

const GlobalStyles = createGlobalStyle`
  body {
    background: ${props => props.theme.colors.page.background};
  }

  a {
    color: ${p => p.theme.colors.accent};
    text-decoration: underline;
  }

  a:hover {
    color: ${p => p.theme.colors.accent.dark};
  }

  blockquote {
    padding-left: 16px;
    color: ${p => p.theme.colors.neutral};
    border-left: 4px solid ${p => p.theme.colors.accent.light};
  }

  hr {
    background: ${p => p.theme.colors.accent.light};
    height: 2px;
  }

  pre {
    overflow: auto;
    background-color: ${p => p.theme.colors.gray[0]};
    border-radius: 8px;

    ${media.small`
      border-radius: 0;
      width: calc(100% + 32px);
      margin-left: -16px;
    `}

    code {
      font-size: 15px;
      padding: 12px 16px;
    }
  }

  pre[class*='language-'],
  code[class*='language-'] {
    background-color: ${p => p.theme.colors.page.code};
    color: ${p => p.theme.colors.type.code};
  }

  code {
    font-feature-settings: normal;
    font-family: ${p => p.theme.fonts.code};
    background-color: ${p => p.theme.colors.gray[0]};
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
`

export const ThemeContext = React.createContext({
  theme: theme,
  toggleTheme: () => {}
})

class Layout extends React.Component {
  constructor(props) {
    super(props)

    this.toggleTheme = () => {
      console.log('TOGGLE');
      this.setState({theme: this.state.theme === theme ? darkTheme : theme})
    }

    this.state = {
      theme: theme,
      toggleTheme: this.toggleTheme
    }
  }

  render() {
    return (
      <ThemeProvider theme={this.state.theme}>
        <>
          <Metadata 
            title={this.props.title} 
            description={this.props.description} 
          />

          <CSSReset /> 
          <TypographyStyles />
          <GlobalStyles />
          <SyntaxTheme />

          <ThemeContext.Provider value={this.state}>
            {this.props.children}
          </ThemeContext.Provider>
        </>
      </ThemeProvider>
    )
  }
}

export default Layout
