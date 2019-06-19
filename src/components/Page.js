import React from 'react'
import styled from 'styled-components'
import Sidebar from 'components/Sidebar'
import Heading from 'components/Heading'
import media from 'utils/media'
import Metadata from 'components/Metadata'
import Header from 'components/Header'

const Container = styled.div`
  display: flex;
  flex-wrap: wrap;
  width: 100%;
  max-width: ${p => p.theme.sizes.layout.maxWidth}px;
  padding: 40px 0;
  background: ${p => p.theme.colors.page.background};
  color: ${p => p.theme.colors.page.text};
  margin: 0 auto;

  ${media.medium`
    padding: 32px;
  `}

  ${media.small`
    flex-direction: column;
    padding: 16px;
  `}
`

const HeaderContainer = styled.header`
  flex: 1 100%;
  margin-bottom: 32px;
`

const SidebarContainer = styled.aside`
  margin-right: 40px;
  flex: 1;

  ${media.small`
    flex: 1 100%;
    margin-right: 0;
  `}
`

const Content = styled.main`
  flex: 2;
  min-width: 0;
`

const Page = props => (
  <React.Fragment>
    <Metadata
      title={props.title}
      description={props.description}
      article={props.article}
    />

    <Container id='wrapper'>
      <HeaderContainer>
        <Header />
      </HeaderContainer>

      <SidebarContainer>
        <Sidebar />
      </SidebarContainer>

      <Content id='content'>
        {props.title && !props.untitled && (
          <Heading.h1 mt={0}>{props.title}</Heading.h1>
        )}

        {props.children}
      </Content>
    </Container>
  </React.Fragment>
)

export default Page
