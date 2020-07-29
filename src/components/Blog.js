import React from 'react'
import styled from 'styled-components'
import Link from 'components/Link'
import Heading from 'components/Heading'
import media from 'utils/media'
import { Box, Text } from '@chasemccoy/kit'
import Tags from 'components/Tags'
import MDX from 'components/MDX'

const Container = styled.div`
  iframe {
    margin-bottom: 0;
    width: 100%;
  }

  .wp-block-embed {
    position: relative;
    overflow: hidden;
    padding-top: 56.25%;

    ${media.small`
      width: calc(100% + 32px);
      margin-left: -16px;
    `}

    iframe {
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      border: 0;
    }
  }

  a[href*='chasemccoy.files.wordpress'],
  a[href*='instagram.com/p'],
  a[href*='/static/'] {
    box-shadow: none;
    border: none;
    display: block;
    padding: 0;

    &:hover {
      background: none;
    }
  }
`

const AsideContainer = styled(Container)`
  background: ${(p) => p.theme.colors.gray[0]};
  border-radius: 12px;
  padding: 16px;

  p,
  blockquote,
  img {
    margin-bottom: 1em;
  }

  p img:first-child:last-child {
    max-width: none;
  }

  img {
    max-width: calc(50% - 4px);
    margin-bottom: 0;
    display: inline;

    ${media.small`
      max-width: calc(50% + 12px);
    `}

    & + img {
      margin-left: 8px;
      margin-right: -16px;
    }
  }
`

const Title = styled(Link)`
  color: ${(p) => p.theme.colors.type.header};
  text-decoration: none;

  &:hover {
    color: ${(p) => p.theme.colors.type.header};
    box-shadow: 0px -0.5em 0px #ffe999 inset;
  }
`

const Metadata = ({ date, permalink, tags, ...props }) => (
  <Box className='meta' {...props}>
    <Box mb={8}>
      <Link color='gray.3' fontSize='0.8em' to={permalink}>
        Published on {date}
      </Link>
    </Box>

    {tags && <Tags display='inline' items={tags} />}
  </Box>
)

export const Post = (props) => {
  const tags = props.tags && props.tags.map((tag) => tag.name)

  const metadata = props.date && (
    <Metadata
      date={props.date}
      permalink={props.to}
      tags={tags}
      mb={[20, null, null, 0]}
      mt={-16}
    />
  )

  const title = props.title && (
    <Box className='float-header'>
      <Heading.h2 fontSize='1.8rem' className='inline'>
        <Title
          to={props.to}
          dangerouslySetInnerHTML={{ __html: props.title }}
        />
      </Heading.h2>

      {props.excerpt && (
        <Text
          as='p'
          color='gray.4'
          lineHeight='1.3'
          mt={-8}
          mb={32}
          dangerouslySetInnerHTML={{ __html: props.excerpt }}
        />
      )}

      {metadata}
    </Box>
  )

  const content = props.content && (
    <div dangerouslySetInnerHTML={{ __html: props.content }} />
  )

  if (props.aside) {
    return (
      <AsideContainer photo={props.imagePost}>
        {title}
        {props.isMdx ? <MDX.Renderer>{props.content}</MDX.Renderer> : content}
        {metadata}
      </AsideContainer>
    )
  } else {
    return (
      <Container>
        {!props.untitled && <React.Fragment>{title}</React.Fragment>}
        {props.isMdx ? <MDX.Renderer>{props.content}</MDX.Renderer> : content}
      </Container>
    )
  }
}

Post.Header = ({ title, to, date }) => {
  return (
    <React.Fragment>
      {title && (
        <Heading.h1 mt={0} mb={0}>
          <Title to={to} dangerouslySetInnerHTML={{ __html: title }} />
        </Heading.h1>
      )}
    </React.Fragment>
  )
}
