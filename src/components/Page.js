import React from 'react'
import styled, { css } from 'styled-components'
import Sidebar from 'components/Sidebar'
import Heading from 'components/Heading'
import media from 'utils/media'
import Metadata from 'components/Metadata'

const GUTTER_LARGE = '80px'
const GUTTER_SMALL = '40px'

const Container = styled.div`
  display: flex;
  min-height: 100vh;
  padding: ${p => p.theme.sizes.layout.containerPadding}px;
  background: ${p => p.theme.colors.page.background};
  color: ${p => p.theme.colors.page.text};
  transition: all 0.2s;
  z-index: 0;
  position: relative;
  overflow: hidden;

  &:before {
    content: "";
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    width: 16px;
    background-image: linear-gradient(135deg, ${props => props.theme.colors.accent} 12.50%, transparent 12.50%, transparent 50%, ${props => props.theme.colors.accent} 50%, ${props => props.theme.colors.accent} 62.50%, transparent 62.50%, transparent 100%);
    background-size: 5.66px 5.66px;

    ${media.medium`
      right: 0;
      width: 100%;
      height: 8px;
    `}
  }

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
  max-width: calc(${p => p.theme.sizes.layout.contentMaxWidth}px + ${GUTTER_LARGE} + ${GUTTER_LARGE});
  min-width: 0;
  margin: 0 auto;
  flex: 1;
  padding-right: ${GUTTER_LARGE};
  padding-left: ${GUTTER_LARGE};
  margin-top: -10px;

  ${media.medium`
    max-width: calc(${p => p.theme.sizes.layout.contentMaxWidth}px + ${GUTTER_SMALL} + ${GUTTER_SMALL});
    padding-right: ${GUTTER_SMALL};
    padding-left: ${GUTTER_SMALL};
  `}

  ${media.small`
    padding: 0;
    flex-basis: 100%;
    margin: 0;
    max-width: none;
  `}

  ${p => p.wide && css`
    padding-left: ${GUTTER_LARGE};
    padding-right: 0;
    max-width: 1300px;
  `}

  ${p => p.wide && media.small`
    padding: 0;
  `}
`

const Page = props => (
  <React.Fragment>
    <Metadata 
      title={props.title} 
      description={props.description} 
      article={props.article}
    >
      {props.hidden && <meta name="robots" content="noindex,nofollow" />}
    </Metadata>

    <Container id='wrapper'>
      <Sidebar />

      <Content wide={props.wide} id='content'>
        {props.title && !props.untitled && (
          <Heading.h1 mt={-2}>{props.title}</Heading.h1>
        )}

        {props.children}
      </Content>
    </Container>
  </React.Fragment>
)

export default Page
