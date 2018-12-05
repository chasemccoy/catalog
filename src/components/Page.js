import React from 'react'
import styled from 'styled-components'
import Helmet from 'react-helmet'
import Sidebar from 'components/Sidebar'
import Heading from 'components/Heading'
import media from 'utils/media'

const Container = styled.div`
  display: flex;
  min-height: 100vh;
  padding: ${p => p.theme.sizes.layout.containerPadding}px;
  background: ${p => p.theme.colors.page.background};
  color: ${p => p.theme.colors.page.text};
  transition: all 0.2s;

  ${media.medium`
    flex-wrap: wrap;
    padding: 32px;
  `}

  ${media.small`
    flex-wrap: wrap;
    padding: 16px;
  `}
`

const Content = styled.main`
  max-width: ${p => p.theme.sizes.layout.contentMaxWidth}px;
  min-width: 0;
  margin: 0 auto;
  flex: 1;

  ${media.small`
    flex-basis: 100%;
    margin: 0;
    max-width: none;
  `}

  ${p => p.wide && `
    padding-left: 80px;
    max-width: 1300px;
  `}

  ${p => p.wide && media.small`
    padding: 0;
  `}
`

const Page = props => (
  <React.Fragment>
    <Helmet title={props.title}>
      <meta name="description" content={props.description || "Chase McCoy is a design systems developer living in Chicago that spends a lot of time thinking about how the web works."} />
      <meta property="og:title" content={props.title || "Chase McCoy"} />
      <meta property="og:description" content={props.description || "Chase McCoy is a design systems developer living in Chicago that spends a lot of time thinking about how the web works."} />
    </Helmet>

    <Container id='wrapper'>
      <Sidebar />

      <Content wide={props.wide} id='content'>
        {props.title && !props.untitled && (
          <Heading.h1>{props.title}</Heading.h1>
        )}

        {props.children}
      </Content>
    </Container>
  </React.Fragment>
)

export default Page
