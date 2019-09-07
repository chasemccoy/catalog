import React from 'react'
import styled from 'styled-components'
import { Box, Text } from '@chasemccoy/kit'
import Sidebar from 'components/Sidebar'
import Heading from 'components/Heading'
import media from 'utils/media'
import Link from 'components/Link'
import Metadata from 'components/Metadata'

const FLEX_SIDEBAR = '0.35'

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
  background: ${p => p.theme.colors.gray[0]};
  border-bottom: 1px dashed ${p => p.theme.colors.gray[1]};
`

const SidebarContainer = styled(Box).attrs({ as: 'aside' })`
  margin-right: ${p => (p.wide ? 0 : '24px')};
  margin-bottom: -1px;

  ${media.medium`
    flex: 0.5;
    margin-right: ${p => (p.wide ? 0 : '16px')};
  `}

  ${media.small`
    flex: initial;
    margin-right: 0;
  `}
`

const Content = styled(Box).attrs({ as: 'main' })`
  display: flex;
  flex-wrap: nowrap;
  flex: 2;
  min-width: 0;

  ${media.medium`
    flex-wrap: wrap;
    flex-direction: column;
  `}
`

const Page = ({ header, sidebar, children, bg, wide, ...props }) => (
  <React.Fragment>
    <Metadata
      title={props.title}
      description={props.description}
      article={props.article}
      page
    />

    <HeaderContainer>
      {React.cloneElement(header || <DefaultHeader />, {
        title: props.title,
        description: props.description,
        wide
      })}
    </HeaderContainer>

    <Container>
      <SidebarContainer wide={wide} flex={FLEX_SIDEBAR}>
        <Sidebar />
      </SidebarContainer>

      <Content
        bg={bg}
        ml={wide ? '-1px' : 0}
        pt={wide ? 0 : 24}
        px={wide ? 0 : 16}
      >
        <Box minWidth='0' maxWidth='100%' flex='1' zIndex={1}>
          {children}
        </Box>

        {!wide && (
          <SidebarContainer
            flex='0.3'
            ml={[0, 0, 0, 40]}
            minWidth={['100%', '100%', '100%', '8rem']}
            maxWidth='100%'
            mt={[40, 40, 40, 0]}
          >
            <Text fontSize='13px' lineHeight='1.3'>
              {sidebar}
            </Text>
          </SidebarContainer>
        )}
      </Content>
    </Container>
  </React.Fragment>
)

Page.Header = ({ title, description, children, wide, ...rest }) => {
  const Title = props =>
    title ? (
      <Heading.h1 mb={16} {...props}>
        {title}
      </Heading.h1>
    ) : null

  let Description = null
  const isCustomDescription = description && !description.endsWith('…')

  if (isCustomDescription) {
    Description = props => (
      <Text color='gray.4' {...props}>
        {description}
      </Text>
    )
  }

  return (
    <Container {...rest}>
      <SidebarContainer
        as='div'
        flex={FLEX_SIDEBAR}
        display='flex'
        flexDirection='column'
        justifyContent='flex-end'
        wide={wide}
      >
        <Box
          bg={wide ? 'transparent' : 'accent.pop'}
          border={wide ? 'none' : ['none', 'none', '1px dashed']}
          borderBottom={
            wide ? 'none' : ['1px dashed', '1px dashed', '1px dashed']
          }
          borderColor={['accent', 'accent', 'accent']}
          height='100%'
          width='100%'
          minWidth='40px'
          minHeight={wide ? 0 : ['24px', '24px', '40px']}
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
            <Link unstyled to='/'>
              CHASE McCOY
            </Link>
          </Heading.h2>
        </Box>
      </SidebarContainer>

      <Content
        as='div'
        pt={children ? [24, 24, 32, 40] : 0}
        pb={children ? 16 : 0}
        px={wide ? 0 : 16}
      >
        <Box minWidth='0' maxWidth='100%' flex='1'>
          {children &&
            (typeof children === 'function'
              ? children(Title, Description, title)
              : children)}
        </Box>

        {!wide && (
          <SidebarContainer
            flex='0.3'
            ml={[0, 0, 0, 40]}
            minWidth={['100%', '100%', '100%', '8rem']}
            maxWidth='100%'
          />
        )}
      </Content>
    </Container>
  )
}

const DefaultHeader = props => (
  <Page.Header {...props}>
    {(Title, Description) => (
      <React.Fragment>
        <Title mt={0} mb={Description ? 16 : 0} />
        {Description && <Description />}
      </React.Fragment>
    )}
  </Page.Header>
)

Page.SidebarHeader = props => (
  <Text
    fontWeight='bold'
    mb={8}
    pb='4px'
    borderBottom='1px solid'
    borderColor='gray.1'
    {...props}
  />
)

export default Page
