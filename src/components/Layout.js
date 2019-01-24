import React from 'react'
import { ThemeProvider, createGlobalStyle } from 'styled-components'
import Helmet from 'react-helmet'
import theme from 'utils/theme'
import darkTheme from 'utils/theme-dark'

const CSS = createGlobalStyle`
  a {
    text-decoration-skip: unset;
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
      padding: 8px 16px;
    }
  }

  code {
    font-family: ${p => p.theme.fonts.mono};
    background-color: ${p => p.theme.colors.gray[0]};
    padding: 4px 8px;
    display: inline-block;
    word-wrap: normal;
    overflow: auto;
    border-radius: 6px;
    font-size: 0.75em;
    line-height: 1.5;
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
          <Helmet
            titleTemplate="%s | Chase McCoy"
            defaultTitle="Chase McCoy"
            title={this.props.title}
          >
            <body className={`${this.props.dark ? 'dark' : 'light'}`} />
            <meta name="application-name" content="Chase McCoy" />
            <meta name="apple-mobile-web-app-title" content="Chase McCoy" />
            <meta name="description" content="Chase McCoy is a design systems developer living in Chicago that spends a lot of time thinking about how the web works." />
            <meta property="og:title" content="Chase McCoy" />
            <meta property="og:description" content="Chase McCoy is a design systems developer living in Chicago that spends a lot of time thinking about how the web works." />
            <meta name="twitter:site" content="@chase_mccoy" />
            <meta name="twitter:card" content="summary" />
            <link href="https://twitter.com/chase_mccoy" rel="me" />
            <link rel="webmention" href="https://webmention.io/chasem.co/webmention" />
            <link rel="pingback" href="https://webmention.io/chasem.co/xmlrpc" />
          </Helmet>

          <CSS />

          <ThemeContext.Provider value={this.state}>
            {this.props.children}
          </ThemeContext.Provider>
        </>
      </ThemeProvider>
    )
  }
}

export default Layout
