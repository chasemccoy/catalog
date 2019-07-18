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
  margin-right: 24px;
  ${'' /* flex: 0.4; */}

  ${media.medium`
    flex: 0.6;
    margin-right: 16px;
  `}

  ${media.small`
    flex: initial;
    margin-right: 0;
  `}
`

const Content = styled(Box).attrs({ as: 'main', px: 16 })`
  display: flex;
  flex-wrap: nowrap;
  flex: 2;
  min-width: 0;

  ${media.medium`
    flex-wrap: wrap;
    flex-direction: column;
  `}
`

const Page = ({ header, sidebar, ...props }) => (
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
      <SidebarContainer flex='0.4'>
        <Sidebar />
      </SidebarContainer>

      <Content py={24}>
        <Box minWidth='0' maxWidth='100%' flex='1'>
          {props.children}
        </Box>

        <SidebarContainer
          flex='0.3'
          ml={[0, 0, 0, 24]}
          minWidth={['100%', '100%', '100%', '8rem']}
          maxWidth='100%'
        >
          <Text fontSize='13px' lineHeight='1.3'>
            {sidebar}
          </Text>
        </SidebarContainer>
      </Content>
    </Container>
  </React.Fragment>
)

Page.Header = ({ title, description, children, ...rest }) => {
  const Title = props =>
    title ? <Heading.h1 {...props}>{title}</Heading.h1> : null

  let Description = null
  const isCustomDescription = description && !description.endsWith('…')

  if (isCustomDescription) {
    Description = props => (
      <Text color='gray.3' width={[1, 1, 1, 3 / 4]} {...props}>
        {description}
      </Text>
    )
  }

  return (
    <Container {...rest}>
      <SidebarContainer
        as='div'
        flex='0.4'
        display='flex'
        flexDirection='column'
        justifyContent='flex-end'
      >
        <Box
          bg='#FFC700'
          height='100%'
          width='100%'
          minWidth='40px'
          minHeight={['24px', '24px', '64px']}
        >
          <Heading.h2
            fontSize='14px'
            color='type.body'
            lineHeight='1.2'
            m={0}
            px={16}
            py={8}
            css={`
              letter-spacing: 0.5px;
            `}
            display={['block', 'block', 'none']}
          >
            CHASE McCOY
          </Heading.h2>
        </Box>
      </SidebarContainer>

      <Content
        as='div'
        pt={children ? [24, 24, 32, 40] : 0}
        pb={children ? 16 : 0}
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
        <Title mt={0} mb={16} />
        {Description && <Description />}
      </React.Fragment>
    )}
  </Page.Header>
)

Page.SidebarHeader = props => (
  <Text
    fontWeight='semibold'
    mb={8}
    pb='4px'
    borderBottom='1px solid'
    borderColor='gray.1'
    {...props}
  />
)

export default Page
