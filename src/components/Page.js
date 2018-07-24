import React from 'react'
import styled from 'styled-components'
import Helmet from 'react-helmet'
import Layout from 'components/Layout'
import Header from 'components/Header'
import media from 'utils/media'

const Container = styled.div`
`

const Wrapper = styled.div.attrs({
  id: 'wrapper'
})`
  max-width: ${p => p.theme.sizes.layout.maxWidth};
  margin-left: ${p => p.theme.sizes.layout.offset};
  display: grid;
  grid-template-columns:
    [full-start main-start] 1fr
    repeat(2, 1fr) [main-end]
    1fr [full-end];
  padding-bottom: 80px;

  ${media.medium`
    margin-left: 0;
    max-width: 100%;
    padding-left: 24px;
    padding-right: 24px;
  `}
`

const Content = styled.main.attrs({
  id: 'content'
})`
  width: 100%;
  display: contents;

  * {
    grid-column: main;

    ${media.medium`
      grid-column: full;
    `}
  }
`

const Title = styled.h2`
  background: url('/meta/brush.svg');
  background-repeat: no-repeat;
  background-size: 70%;
  background-position: -16%;
  padding: 4px 24px 6px;
  margin-left: -24px;
  margin-right: -24px;
  margin-bottom: 2em;
`

const Page = props => (
  <Layout>
    <Container {...props} title=''>
      <Helmet
        title={props.title}
      >
        <meta name="description" content={props.description || "Chase McCoy is a design systems developer living in Chicago that spends a lot of time thinking about how the web works."} />
        <meta name="og:title" content={props.title || "Chase McCoy"} />
        <meta name="og:description" content={props.description || "Chase McCoy is a design systems developer living in Chicago that spends a lot of time thinking about how the web works."} />
      </Helmet>

      <Header />

      <Wrapper>
        <Content>
          {props.title && !props.untitled && (
            <Title>{props.title}</Title>
          )}

          {props.children}
        </Content>
      </Wrapper>
    </Container>
  </Layout>
)

export default Page
