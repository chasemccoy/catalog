import React from 'react'
import styled from 'styled-components'
import { Box, Text } from '@chasemccoy/kit'
import Sidebar from 'components/Sidebar'
import Heading from 'components/Heading'
import media from 'utils/media'
import Metadata from 'components/Metadata'

const Container = styled(Box)`
  display: flex;
  width: 100%;
  max-width: ${p => p.theme.sizes.layout.maxWidth}px;
  color: ${p => p.theme.colors.page.text};
  margin: 0 auto;

  ${media.small`
    flex-direction: column;
  `}
`

const HeaderContainer = styled.header`
  display: flex;
  background: #f9f9f9;
`

const SidebarContainer = styled(Box).attrs({ as: 'aside' })`
  margin-right: 40px;
  flex: 0.5;

  ${media.small`
    flex: initial;
    margin-right: 0;
  `}
`

const Content = styled(Box).attrs({ as: 'main', px: 16 })`
  flex: 2;
  min-width: 0;
`

const Page = ({ header, ...props }) => (
  <React.Fragment>
    <Metadata
      title={props.title}
      description={props.description}
      article={props.article}
    />

    <HeaderContainer>
      {React.cloneElement(header || <DefaultHeader />, {
        title: props.title,
        description: props.description
      })}
    </HeaderContainer>

    <Container>
      <SidebarContainer>
        <Sidebar />
      </SidebarContainer>

      <Content py={24}>
        {props.title && !props.untitled && (
          <Heading.h1 mt={0}>{props.title}</Heading.h1>
        )}

        {props.children}
      </Content>
    </Container>
  </React.Fragment>
)

Page.Header = ({ title, description, children, ...rest }) => {
  const Title = props =>
    title ? <Heading.h1 {...props}>{title}</Heading.h1> : null

  const Description = props =>
    description ? (
      <Text color='gray.3' {...props}>
        {description}
      </Text>
    ) : null

  return (
    <Container {...rest}>
      <SidebarContainer
        as='div'
        display='flex'
        flexDirection='column'
        justifyContent='flex-end'
      >
        <Box
          bg='#FFC700'
          height='100%'
          width='100%'
          minWidth='40px'
          minHeight='16px'
        />
      </SidebarContainer>

      <Content
        as='div'
        pt={[8, 16, 24, 40]}
        pb={16}
        display='flex'
        justifyContent='flex-end'
        flexDirection='column'
      >
        {children &&
          (typeof children === 'function'
            ? children(Title, Description, title)
            : children)}
      </Content>
    </Container>
  )
}

const DefaultHeader = props => (
  <Page.Header {...props}>
    {(Title, Description) => (
      <React.Fragment>
        <Title mt={0} />
        <Description />
      </React.Fragment>
    )}
  </Page.Header>
)

export default Page
