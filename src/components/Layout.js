import React from 'react'
import { ThemeProvider, createGlobalStyle } from 'styled-components'
import theme from 'utils/theme'
import darkTheme from 'utils/theme-dark'
import { CSSReset } from '@chasemccoy/kit'
import TypographyStyles from 'utils/typography'
import Metadata from 'components/Metadata'
import SyntaxTheme from 'components/SyntaxTheme'

const GlobalStyles = createGlobalStyle`
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
    border-radius: 6px;

    code {
      padding: 8px 12px;
    }
  }

  code {
    font-feature-settings: normal;
    font-family: ${p => p.theme.fonts.code};
    background-color: ${p => p.theme.colors.gray[0]};
    padding: 4px 8px;
    display: inline-block;
    word-wrap: normal;
    overflow: auto;
    border-radius: 6px;
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
          <Metadata title={this.props.title} description={this.props.description} />

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
