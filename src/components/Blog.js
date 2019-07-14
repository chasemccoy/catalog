import React from 'react'
import styled from 'styled-components'
import Link from 'components/Link'
import Heading from 'components/Heading'
import media from 'utils/media'
import { space } from 'styled-system'
import { Box, Text } from '@chasemccoy/kit'
import Tags from 'components/Tags'
import { checkPropTypes } from 'prop-types'
import MDX from 'components/MDX'

const Container = styled.article`
  &:after {
    content: '';
    display: block;
    margin-top: 48px;
    margin-left: calc(50% - 5em);
    height: 8px;
    background: ${props => props.theme.colors.gray[0]};
    max-width: 10em;
  }

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
`

const AsideContainer = styled(Container)`
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
  color: ${p => p.theme.colors.type.header};
  text-decoration: none;

  &:hover {
    color: ${p => p.theme.colors.type.header};
    box-shadow: 0px -0.5em 0px #ffe999 inset;
  }
`

const Content = styled.div`
  a[href*='chasemccoy.files.wordpress'],
  a[href*='instagram.com/p'] {
    box-shadow: none;
    border: none;
    display: block;
    padding: 0;

    &:hover {
      background: none;
    }
  }
`

const PostMeta = styled(Box)`
  font-size: 13px;
  line-height: 1;
  color: ${p => p.theme.colors.gray[3]};
  text-transform: uppercase;
  letter-spacing: 0.5px;

  a {
    color: ${p => p.theme.colors.gray[3]};
    text-decoration: none;
  }
`

const Date = ({ date, permalink, ...props }) => (
  <PostMeta as='span' {...props}>
    <Link to={permalink}>{date}</Link>
  </PostMeta>
)

const Metadata = ({ date, permalink, tags, ...props }) => (
  <Box display='flex' alignItems='center' {...props}>
    <Date
      date={date}
      permalink={permalink}
      borderRight={tags ? '1px solid' : 'none'}
      borderColor='gray.1'
      pr='8px'
      mr='8px'
      flex='0 0 auto'
    />

    {tags && <Tags display='inline' items={tags} />}
  </Box>
)

export const Post = props => {
  const title = props.title && (
    <Heading.h1 mt={0} mb='12px'>
      <Title to={props.to} dangerouslySetInnerHTML={{ __html: props.title }} />
    </Heading.h1>
  )

  const content = props.content && (
    <Content dangerouslySetInnerHTML={{ __html: props.content }} />
  )

  const date = props.date && <Date date={props.date} permalink={props.to} />

  const tags = props.tags && <Tags mb='32px' items={props.tags} />

  const metadata = props.date && (
    <Metadata
      date={props.date}
      permalink={props.to}
      tags={props.tags}
      mb={props.tags ? '32px' : '12px'}
    />
  )

  if (props.aside) {
    return (
      <AsideContainer photo={props.imagePost}>
        {metadata}
        {title}
        {content}
      </AsideContainer>
    )
  } else {
    return (
      <Container>
        {!props.untitled && (
          <React.Fragment>
            {metadata}
            {title}
          </React.Fragment>
        )}
        {props.isMdx ? (
          <Content>
            <MDX.Renderer>{props.content}</MDX.Renderer>
          </Content>
        ) : (
          content
        )}
      </Container>
    )
  }
}

Post.Header = ({ title, to, date, tags }) => (
  <React.Fragment>
    <Date date={date} permalink={to} mb={40} />

    {title && (
      <Heading.h1 mt={0}>
        <Title to={to} dangerouslySetInnerHTML={{ __html: title }} />
      </Heading.h1>
    )}

    {tags && <Tags items={tags} />}
  </React.Fragment>
)
